import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import axios from "axios";

function Quiz() {

    // State hook for perticular question
    const [questions, setQuestions] = useState([]);

    // State hook for  all the questions
    const [triviaData, setTriviaData] = useState([]);

    // useEffect hook that fetches data from Trivia API
    useEffect(() => {
        axios
            .get("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(getResult)
    }, []);

    function getResult(response) {
        // Logic to get the result
        let resultArray = [];
        response.data.results.map((result) => {
            return resultArray.push({
                id: nanoid(),
                question: result.question,
                correct_answer: result.correct_answer,
                answers: result.incorrect_answers.concat(result.correct_answer),
            });
        });
        setQuestions(resultArray);
    }


    const renderElement = questions.map((question) => {
        return (
            <div key={question.id}>
                <h2 className="questions">{question.question}</h2>
                <div className="options">
                    {question.answers.map((answer) => {
                        return (
                            <div>
                                <input
                                    type="radio"
                                    id={answer}
                                    name={question.id}
                                    value={answer}
                                />
                                <label htmlFor={answer}>{answer}</label>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    });






    return (
        <div className="quiz">
            <h1 className="heading">Quizzical</h1>
            {renderElement}


            {/*<h2 className="questions">How would you say goodbye in spanish?</h2>
            <div className="options">
                <div>
                    <input
                        type="radio"
                        name="question_1"
                        id="q1_o1"
                        value="Option 1"
                    />
                    <label htmlFor="q1_o1">Option 1</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="question_1"
                        id="q1_o2"
                        value="Option 2"
                    />
                    <label htmlFor="q1_o2">Option 2</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="question_1"
                        id="q1_o3"
                        value="Option 3"
                    />
                    <label htmlFor="q1_o3">Option 3</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="question_1"
                        id="q1_o4"
                        value="Option 4"
                    />
                    <label htmlFor="q1_o4">Option 4</label>
                </div>
            </div>
            <hr></hr>
            <h2 className="questions">How would you say goodbye in spanish?</h2>
            <div className="options">
                <div>
                    <input
                        type="radio"
                        name="question_2"
                        id="q2_o1"
                        value="Option 1"
                    />
                    <label htmlFor="q2_o1">Option 1</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="question_2"
                        id="q2_o2"
                        value="Option 2"
                    />
                    <label htmlFor="q2_o2">Option 2</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="question_2"
                        id="q2_o3"
                        value="Option 3"
                    />
                    <label htmlFor="q2_o3">Option 3</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="question_2"
                        id="q2_o4"
                        value="Option 4"
                    />
                    <label htmlFor="q2_o4">Option 4</label>
                </div>
            </div>
            <hr></hr>
            <h2 className="questions">How would you say goodbye in spanish?</h2>
            <div className="options">
                <div>
                    <input
                        type="radio"
                        name="question_3"
                        id="q3_o1"
                        value="Option 1"
                    />
                    <label htmlFor="q3_o1">Option 1</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="question_3"
                        id="q3_o2"
                        value="Option 2"
                    />
                    <label htmlFor="q3_o2">Option 2</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="question_3"
                        id="q3_o3"
                        value="Option 3"
                    />
                    <label htmlFor="q3_o3">Option 3</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="question_3"
                        id="q3_o4"
                        value="Option 4"
                    />
                    <label htmlFor="q3_o4">Option 4</label>
                </div>
            </div>
            <hr></hr>
            <h2 className="questions">How would you say goodbye in spanish?</h2>
            <div className="options">
                <div>
                    <input
                        type="radio"
                        name="question_4"
                        id="q4_o1"
                        value="Option 1"
                    />
                    <label htmlFor="q4_o1">Option 1</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="question_4"
                        id="q4_o2"
                        value="Option 2"
                    />
                    <label htmlFor="q4_o2">Option 2</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="question_4"
                        id="q4_o3"
                        value="Option 3"
                    />
                    <label htmlFor="q4_o3">Option 3</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="question_4"
                        id="q4_o4"
                        value="Option 4"
                    />
                    <label htmlFor="q4_o4">Option 4</label>
                </div>
            </div>
            <hr></hr>
            <h2 className="questions">How would you say goodbye in spanish?</h2>
            <div className="options">
                <div>
                    <input
                        type="radio"
                        name="question_5"
                        id="q5_o1"
                        value="Option 1"
                    />
                    <label htmlFor="q5_o1">Option 1</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="question_5"
                        id="q5_o2"
                        value="Option 2"
                    />
                    <label htmlFor="q5_o2">Option 2</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="question_5"
                        id="q5_o3"
                        value="Option 3"
                    />
                    <label htmlFor="q5_o3">Option 3</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="question_5"
                        id="q5_o4"
                        value="Option 4"
                    />
                    <label htmlFor="q5_o4">Option 4</label>
                </div>
            </div>*/}
            <hr></hr>
            <button className="check-answers">Check Answers</button>
        </div>
    );
}

export default Quiz;
