function Start() {
    return (
        <main>
            <h1 className="heading">Quizzical</h1>

            <h3 className="sub-heading">
                Trivia Game that tests your knowledge of most unimportant topics
                🤓
            </h3>

            <button className="start-button" onClick={startQuiz}>
                Start Quiz
            </button>
        </main>
    );
}

export default Start;
