import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
// import axios from "axios";

function Quiz() {

    // State hook for perticular question
    const [questions, setQuestions] = useState([]);

    // State hook for  all the questions
    const [triviaData, setTriviaData] = useState([]);


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
                        answers: result.incorrect_answers.concat(result.correct_answer),
                        selectedAnswer: "",
                    });
                });
                setQuestions(resultArray);
            });
    }, []);


    const renderElement = questions.map((question) => {
        return (
            <div key={question.id}>
                <h2 className="questions">{question.question}</h2>
                <div className="options">
                    {question.answers.map((answer) => {
                        return (
                            <div >
                                <input
                                    type="radio"
                                    id={answer}
                                    name={question.id}
                                    value={answer}
                                    onChange={handleSubmit}
                                />
                                <label htmlFor={answer}>{answer}</label>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    });

// Function to handle the submit event of the input
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

    // Check the answer and display the result
    function checkAnswer() {
        let correctAnswers = 0;
        questions.map((question) => {
            if (question.selectedAnswer === question.correct_answer) {
                correctAnswers++;
            }
            return correctAnswers;
        });
        setTriviaData(correctAnswers);
    }

    return (
        <div className="quiz">
            <h1 className="heading">Quizzical</h1>
            {renderElement}
            <hr></hr>
            <p>{`You got ${triviaData} out of ${questions.length} correct!`}</p>
            <button className="check-answers"
                onClick={checkAnswer}
            >Check Answers</button>
            <p>You got socres out of {questions.length} correct</p>
        </div>
    );
}

export default Quiz;

//TODO:
// ### 12. Add logics to Quiz Component 🧠
// -  [x] Add logic to check if answer is correct or not.
// -  [x] Save the score in a variable.
// -  [x] Display the score in when the `Submit` button is clicked.
// -  [ ] Replace the `Submit` button with `Play Again` button when the `Submit` button is clicked.
// -  [ ] Change background color if the answer is correct or wrong.
// -  [ ] Render the score component. 
// -  [ ] Add logic to reset the score when the `Play Again` button is clicked.