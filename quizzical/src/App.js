import "./styles/App.css";

function App() {
    return (
        <div className="App">
            <h1 className="heading">Quizzical</h1>

            <h3 className="subHeading">
                Trivia Game that tests your knowledge of most unimportant topics
                🤓
            </h3>

            <button className="startBtn">Start Quiz</button>

            <div className="blobs">
                <svg
                    className="blob1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25em"
                    height="25em"
                    viewBox="0 0 600 600"
                >
                    <path
                        d="M480.8 168.7C524.5 210.6 543.4 285.2 528.9 353.7 514.5 422.2 466.7 484.5 409.7 502.2 352.6 519.8 286.4 492.8 237.5 458.3 188.6 423.8 157 381.8 142.2 331.7 127.4 281.7 129.2 223.5 158.3 184.9 187.4 146.2 243.7 127.1 306.1 122.2 368.5 117.3 437.1 126.7 480.8 168.7Z"
                    />
                </svg>
                <svg
                    className="blob2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25em"
                    height="25em"
                    viewBox="0 0 600 600"
                >
                    <path
                        d="M411.4 166.7C442.3 193.1 463.7 230.2 462.6 265.2 461.5 300.2 437.9 333.1 419.7 373.2 401.4 413.2 388.5 460.4 355.4 488.1 322.2 515.8 268.9 524 224.8 507.5 180.7 491.1 146 450 112.1 402.9 78.3 355.8 45.4 302.5 50.6 253.1 55.8 203.6 99.2 158 147.1 134.6 195 111.2 247.5 110.1 293.9 117.4 340.3 124.7 380.6 140.3 411.4 166.7Z"
                    />
                </svg>
            </div>
        </div>
    );
}

export default App;
