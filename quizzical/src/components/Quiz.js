import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Loading from "./Loading/Loading";
import parse from "html-react-parser";
import Confetti from "react-confetti";

function Quiz() {
    /*****************  USE-STATE VARIABLES  *****************/
    // State hook for perticular question
    const [questions, setQuestions] = useState([]);

    // State hook for  all the questions
    const [triviaData, setTriviaData] = useState(0);

    // hide the result section by default
    const [showResult, setShowResult] = useState(false);

    // Reset the useEffect hook
    const [reset, setReset] = useState(0);
    /*****************  USE-STATE  VARIABLES  *****************/

    /*********************** useWindowSize hook ***********************************/
    // useWindowSize Hook from https://usehooks.com/useWindowSize/
    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });
        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            // Add event listener
            window.addEventListener("resize", handleResize);
            // Call handler right away so state gets updated with initial window size
            handleResize();
            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
        return windowSize;
    }
    /*********************** useWindowSize hook ***********************************/

    /*********************** Confetti section ***********************************/
    const { width, height } = useWindowSize();
    const confetti = triviaData === 5 && (
        <Confetti width={width} height={height} />
    );
    /*********************** Confetti section ***********************************/

    /*********************** API call section ***********************************/
    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then((response) => response.json())
            .then((data) => {
                let resultArray = [];
                data.results.map((result) => {
                    return resultArray.push({
                        id: nanoid(),
                        question: result.question,
                        correct_answer: result.correct_answer,
                        answers: result.incorrect_answers
                            .concat(result.correct_answer)
                            .sort(
                                () => Math.random() - 0.5
                            ) /* Randomize the answers */,
                        selectedAnswer: "",
                    });
                });
                setQuestions(resultArray);
            });
    }, [reset]);
    /*********************** API call section ***********************************/

    /*********************** Loading section ***********************************/
    if (questions.length === 0) {
        return <Loading />;
    }
    /*********************** Loading section ***********************************/

    /*********************** Render Question and Answer section ***********************************/
    const renderElement = questions.map((question) => {
        return (
            <div key={question.id}>
                <h2 className="questions">{parse(question.question)}</h2>
                <div className="options">
                    {question.answers.map((answer) => {
                        return (
                            <div key={answer}>
                                <input
                                    type="radio"
                                    id={answer}
                                    name={question.id}
                                    value={answer}
                                    onChange={handleSubmit}
                                    disabled={showResult}
                                />
                                <label
                                    className={`label ${selectedAnswerClass(
                                        answer,
                                        question
                                    )}`}
                                    htmlFor={answer}
                                >
                                    {parse(answer)}
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    });
    /*********************** Render Question and Answer section ***********************************/

    /*********************** Submit Answer section ***********************************/
    function handleSubmit(event) {
        const { name, value } = event.target;
        const updatedQuestions = questions.map((question) => {
            if (question.id === name) {
                question.selectedAnswer = value;
            }
            return question;
        });
        setQuestions(updatedQuestions);
    }
    /*********************** Submit Answer section ***********************************/

    /*********************** Check Answer section ***********************************/
    function checkAnswer() {
        let correctAnswers = 0;
        questions.map((question) => {
            if (question.selectedAnswer === question.correct_answer) {
                correctAnswers++;
            }
            return correctAnswers;
        });
        setTriviaData(correctAnswers);
        setShowResult(true);
    }
    /*********************** Check Answer section ***********************************/

    /*********************** Selected Answer ***********************************/
    function selectedAnswerClass(answer, question) {
        if (showResult) {
            if (answer === question.correct_answer) {
                return "correct";
            } else if (answer === question.selectedAnswer) {
                return "incorrect";
            }
        }
    }
    /*********************** Selected Answer ***********************************/

    /*********************** Reset section ***********************************/
    function handleReset() {
        setShowResult(false);
        setTriviaData(0);
        setQuestions([]);
        setReset((prevState) => prevState + 1);
    }
    /*********************** Reset section ***********************************/

    /*********************** Render Main Quiz section ***********************************/
    return (
        <main>
            {confetti}
            <section className="quiz-main">
                <div className="quiz">
                    <h1 className="heading">Quizzical</h1>
                    {renderElement}
                    <hr></hr>
                    <div className={"result-section"}>
                        {showResult && (
                            <p
                                className={`
                            ${triviaData !== 5 ? "result" : "result-winner"}
                            `}
                            >
                                {triviaData !== 5
                                    ? `You got ${triviaData} out of 5`
                                    : "You are a Genius!"}
                            </p>
                        )}
                        {!showResult ? (
                            <button
                                className="check-answers"
                                onClick={checkAnswer}
                            >
                                Check Answers
                            </button>
                        ) : (
                            <button
                                className="check-answers"
                                onClick={handleReset}
                            >
                                Play Again
                            </button>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
    /*********************** Render Main Quiz section ***********************************/
}

export default Quiz;
