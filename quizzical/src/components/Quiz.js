import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Loading from "./Loading/Loading";
// import axios from "axios";
import parse from "html-react-parser";
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from "react-confetti";

//html parser is used to parse the html code in the string and render it as html
// html parser example
// import parse from "react-html-parser";
// const html = ` parse("<p>hello&#039</p>") `;
// console.log(html);
// output: hello

//OR alternative to html parser is .replace() method
//like this
// const htmlString = "<p>hello world</p>";
// const htmlStringWithoutTags = htmlString.replace(/<[^>]*>?/gm, "");
// console.log(htmlStringWithoutTags);  //output: hello world

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

    // useEffect hook that fetches data from Trivia API
    // useEffect(() => {
    //     axios
    //         .get("https://opentdb.com/api.php?amount=5&type=multiple")
    //         .then(getResult)
    // }, []);

    // function getResult(response) {
    //     // Logic to get the result
    //     let resultArray = [];
    //     response.data.results.map((result) => {
    //         return resultArray.push({
    //             id: nanoid(),
    //             question: result.question,
    //             correct_answer: result.correct_answer,
    //             answers: result.incorrect_answers.concat(result.correct_answer),
    //             selectedAnswer: "",
    //         });
    //     });
    //     setQuestions(resultArray);
    // }

    // The difference between axios and fetch is that axios is a promise based library and fetch is not.
    // So, we can use async await with fetch but not with axios.

    // naoid is a library that generates unique id for each question. we use to uniquely identify each question.
    //alternative to nanoid is uuid
    //we can use index as id but it is not a good practice

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
                        answers: result.incorrect_answers.concat(
                            result.correct_answer
                        ).sort(() => Math.random() - 0.5), /* Randomize the answers */
                        selectedAnswer: "",
                    });
                });
                setQuestions(resultArray);
            });
    }, [reset]);
    /*********************** API call section ***********************************/

    // While the data is being fetched, we show a loading component
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
                        {/*if triviaData is equal to 5 then show the confetti*/}
                        {showResult && (
                            //if triviaData is equal to 5 then glow the button
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

/*
//TODO:
// ### 12. Add logics to Quiz Component 🧠
 -  [x] Add logic to check if answer is correct or not.
 -  [x] Save the score in a variable.
 -  [x] Display the score on the screen.
 -  [x] Add parse to parse the html code in the string and render it as html
 -  [x] Display the score in when the `Submit` button is clicked.
 -  [x] Replace the `Submit` button with `Play Again` button when the `Submit` button is clicked.
 -  [x] Add a Glow and confetti if the score is 5.
 -  [x] Render the score component.
 -  [x] Add logic to reset the score when the `Play Again` button is clicked.
 -  [x] When check Answer is clicked, disable the radio button.
 -  [x] When check Answer is clicked, show the correct answer.
 -  [x] When check Answer is clicked, if the answer is incorrect change the color of the label to red.
 -  [x] Randomize the answers.
 -  [x] Add loading when the data is being fetched.
*/
