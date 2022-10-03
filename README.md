# Quizzical 🧩
Create a Trivia Game using ReactJS

<!-- 
## [Live Preview]()

![This is an image]()
![This is an image]()

-->

## About ℹ️

**`Quizzical`** is a *Trivia* game implemented in `ReactJS`. While creating this project I learned about `Event Listeners in React`, `React State`, `Conditional Rendering in React`, `React Hooks(useEffect)`, etc. A player is given *5 random questions* with *4 choices* each. Trivia questions are retrieved from [*Open Trivia Database API*](https://opentdb.com/api_config.php). A participant can *validate* their answers and can play as many times as they want. Have Fun :smile:. After creating the project, it was deployed to `GitHub Pages` :bird: Feel free to reach me on[Twitter](https://twitter.com/hmjatt/) 👾


## Technologies Used 💻

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/> </a> &emsp; <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50"/> </a> &emsp; <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50"/> </a> &emsp; <a href="https://www.w3schools.com/js/js_es6.asp" target="_blank" rel="noreferrer"> <img src="https://camo.githubusercontent.com/792f7fce1ff8bfac6d0524a21b69161cdc6080a3c4e39979f21d5f8489d6fdd3/68747470733a2f2f692e626c6f67732e65732f3534356366382f6573362d6c6f676f2f6f726967696e616c2e706e67" alt="ES6" width="50" height="50"/> </a> &emsp; <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="reactJS" width="50" height="50"/> </a> &emsp; <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png" alt="figma" width="70" height="50"/> </a>

<br>

## Includes the following features/components ⚙️

	- Open Trivia Database API
    - ReactJS
    - create-react-app
    - Figma Design Template
    - Event Listeners in React
    - React State
    - Conditional Rendering in React
    - React Hooks(useEffect)
    - github-pages

<br>
 

## Usage 🤓

```
cd quizzical

```

```
npm install

```

```
npm start

```

<br>



## Steps I followed to complete this project 🪜

### 1. Initialize Project 🎍

-   [x] Initialize the project using `npx create-react-app quizzical` which will create a
        complete **React App** pre-configured and pre-installed with all the dependencies.
-   [x] Import **`Work Sans`** font from google fonts and apply it to the **`App`** component.

### 2. Organize Project 🗄️

-   [x] Create a `components` folder for **custom components** inside the `src` directory.
-   [ ] Create a `styles` folder inside the `src` directory and move `.css` files inside it.

<!--
### 3. Clean Directory🧹

-   [ ] Delete **unnecessary** files and code from the directory.

### 4. App Component 🧩

-   [ ] Create a **`App`** component and basic JSX elements for it.
-   [ ] Add appropriate `className`s to elements in the **`App`** component.
-   [ ] Import **`App`** component inside `index.js`. Code inside `index.js` looks like this ->

    ```javascript
    ```

-   [ ] Add these styles to `index.css` ->

    ```css

    ```

-   [ ] Style **`App`** component by editing `App.css` and add these styles ->

    ```css

    ```

    Output ->


### 5. Quiz Component 🧩

-   [ ] Create a **`Quiz`** component and basic JSX elements for it.
-   [ ] Add appropriate `className`s to elements in the **`Quiz`** component.

    -   Update code inside `App.js` and it should look like this ->

        ```javascript

        ```

    -   Code inside `Quiz.js` looks like this ->

    ```javascript

    ```

-   [ ] Style **`Quiz`** component by editing `App.css` and add these styles ->

    ```css


    /* Quiz Component */

    /* Quiz Component */
    ```

    Output ->
    ![This is an image](https://github.com/hmjatt/Tenzies-ReactJS/blob/main/project-output/step-5-before-dots.png)

### 6. Footer Component 🧩

-   [ ] Create **`Footer`** component and basic JSX elements for it.
-   [ ] Import **`Footer`** component inside `App` component.
-   [ ] Style **`Footer`** component.

<!--

### 7. Generate Array of 10 Random Numbers 🔃

-   [x] Write a `allNewDice` function that returns an array of 10 random numbers between 1-6 inclusive.
-   [x] Log the array of numbers to the console for now.
-   [x] Code for `allNewDice` function inside **`App`** component looks like this :-
    ```javascript
    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push(Math.ceil(Math.random() * 6));
        }
        return newDice;
    }
    console.log(allNewDice());
    ```

### 8. Replace _Numbers_ with _Dots_ (CSS Challenge) 🔢

-   [x] Put _Real Dots_ on the _Dice_. Here is a link to an article that helped me with some of the css in **`Dice`** component [Creating Dice in Flexbox in CSS](https://betterprogramming.pub/creating-dice-in-flexbox-in-css-a02a5d85e516)

-   [x] Update styles for **`Dice`** component in `App.css` and it should look like this :-

    ```css
    /* Dice Component */
    .dice-face {
        height: 55px;
        width: 55px;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        /* align-items: center; */
        cursor: pointer;
        background-color: white;
        padding: 12%;
    }

    /* .dice-num {
    font-size: 2rem;
    } */

    .dot {
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: rgb(50, 50, 50);
    }

    .dice {
        width: 2.5em;
    }

    .first-face {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .second-face,
    .third-face,
    .fourth-face,
    .fifth-face,
    .sixth-face {
        display: flex;
        justify-content: space-between;
    }

    .second-face .dot:nth-of-type(2),
    .third-face .dot:nth-of-type(3) {
        align-self: flex-end;
    }

    .third-face .dot:nth-of-type(1) {
        align-self: flex-start;
    }

    .third-face .dot:nth-of-type(2),
    .fifth-face .column:nth-of-type(2) {
        align-self: center;
    }

    .fourth-face .column,
    .fifth-face .column {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    /* Dice Component */
    ```

-   [x] Update code for **`Dice`** component in `Dice.js` and it should look like this :-

    ```javascript
    function Dice(props) {
        const diceValue = parseInt(props.value);
        let diceSpanEles;

        if (diceValue === 1) {
            diceSpanEles = (
                <div className="dice first-face">
                    <span
                        className="dot"
                        style={{ backgroundColor: "rgb(255 100 89)" }}
                    >
                        {" "}
                    </span>
                </div>
            );
        } else if (diceValue === 2) {
            diceSpanEles = (
                <div className="dice second-face">
                    <span className="dot"> </span>
                    <span className="dot"> </span>
                </div>
            );
        } else if (diceValue === 3) {
            diceSpanEles = (
                <div className="dice third-face">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            );
        } else if (diceValue === 4) {
            diceSpanEles = (
                <div className="fourth-face dice">
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            );
        } else if (diceValue === 5) {
            diceSpanEles = (
                <div className="fifth-face dice">
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>

                    <div className="column">
                        <span className="dot"></span>
                    </div>

                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            );
        } else if (diceValue === 6) {
            diceSpanEles = (
                <div className="fourth-face dice">
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            );
        } else {
            diceSpanEles = <h2 className="die-num">{props.value}</h2>;
        }

        return <div className="dice-face">{diceSpanEles}</div>;
    }
    export default Dice;
    ```

    Output :-
    ![This is an image](https://github.com/hmjatt/Tenzies-ReactJS/blob/main/project-output/step-5-dots.png)

### 9. Map Array to Dice Component 🗺️

-   [x] Import `useState` hook from react using :-

    ```javascript
    import { useState } from "react";
    ```

-   [x] Create a _state_ inside **`App`** component to hold our _array of numbers_(Initialize the state by calling our `allNewDice` function so it loads all new(random) dice as soon as the app loads). :-

    ```javascript
    const [dice, setDice] = useState(allNewDice());
    ```

-   [x] Map over the _state numbers array_ to generate our array of `diceElements` and render those in place of our manually-written _10 Dice elements_.

    ```javascript
    const diceElements = dice.map((dice) => <Dice value={dice} />);
    ```

-   [x] React will show the following warning, we will fix it in the future(Ignore this for now) `Warning ⚠️ : Each child in a list should have a unique "key" prop.`

### 10. Roll Dice Button 🎢

-   [x] Create a `Roll` dice button inside **`App`** component that will re-roll all 10 dice.

    ```html
    <button className="roll-dice" onClick="{rollDice}">Roll</button>
    ```

-   [x] Clicking the `Roll` dice button runs `rollDice()` function, which should generate a new array of numbers and set the `dice` state to that new array (thus re-rendering the array to the page).

    ```js
    function rollDice() {
        setDice(allNewDice());
    }
    ```

-   [x] Style `Roll` dice button using _styles_ from _figma design template_. Add these styles to `App.css` :-

    ```css
    .roll-dice {
        margin-top: 2em;
        height: 50px;
        width: 150px;
        border: none;
        border-radius: 6px;
        background-color: #5035ff;
        color: white;
        font-size: 1.2rem;
        font-family: "Karla", sans-serif;
        cursor: pointer;
    }

    .roll-dice:focus {
        outline: none;
    }

    .roll-dice:active {
        box-shadow: inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7);
    }
    ```

### 11. Change Dice to Objects 🪢

-   [x] Inside **`App`** component, update the array of numbers in state to be an array of objects instead. Each object should look like: `{ value: <random number>, isHeld: false }`. Updated `allNewDice()` function looks something like this :-

    ```js
    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
            });
        }
        return newDice;
    }
    ```

-   [x] Making this change will break parts of our code, so we need to update `diceElement` variable and access the `value` _key_ from our `array of objects`. Updated `diceElements` variable looks something like this :-

    ```js
    const diceElements = dice.map((dice) => <Dice value={dice.value} />);
    ```

-   [x] Let's fix this warning -> `Warning ⚠️ : Each child in a list should have a unique "key" prop.`, by using a _npm package_ `nanoid` which lets us _generate unique ID's_ on the fly. Here are the code changes we need to make to the **`App`** component to make this work :-

    -   Import `nanoid` package at the top of `App.js` :

    ```js
    import { nanoid } from "nanoid";
    ```

    -   Create an `id` property and assign `nanoid()` function as it's value :

    ```js
    value: Math.ceil(Math.random() * 6),
    isHeld: false,
    id: nanoid()
    ```

    -   Assign the `key` _prop_ the value of `id`:

    ```js
    const diceElements = dice.map((dice) => (
        <Dice key={dice.id} value={dice.value} />
    ));
    ```

### 12. Styling Held Dice 🎨

-   [x] Pass a `isHeld` prop inside **`App`** component, in `diceElement` when rendering our **`Dice`** component.

    ```js
    const diceElements = dice.map((dice) => (
        <Dice key={dice.id} value={dice.value} isHeld={dice.isHeld} />
    ));
    ```

-   [x] Add conditional styling to the **`Dice`** component so that if it's _isheld prop is true_ `(isHeld === true)`, its _background color_ changes to a light green `(#59E391)`.

    ```js
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white",
    };

    return (
        <div className="dice-face" style={styles}>
            {diceSpanEles}
        </div>
    );
    ```

### 13. Hold Dice ✋

-   [x] In **`App`** component, create a function `holdDice` that takes `id` as a parameter. For now, just have the function console.log(id). Pass that function down to each instance of the Die component as a prop, so when each one is clicked, it logs its own unique ID property.

    ```js
    function holdDice(id) {
        console.log(id);
    }

    const diceElements = dice.map((dice) => (
        <Dice
            key={dice.id}
            value={dice.value}
            isHeld={dice.isHeld}
            holdDice={() => holdDice(dice.id)}
        />
    ));
    ```

-   [x] In **`Dice`** component accept `holdDice` prop and bound it to `onClick` event.

    ```js
    <div className="dice-face" style={styles} onClick={props.holdDice}>
        {diceSpanEles}
    </div>
    ```

-   [x] Update the `holdDice` function to flip the `isHeld` property on the object in the array that was clicked, based on the `id` prop passed into the function. In **`App`** component, we will use `setDice` state function then `.map()` over the _array of objects_. Every _Dice object_ will be in exactly the same _state_ as it was, except the ones that has their _isHeld_ property flipped(to true).

    ```js
    function holdDice(id) {
        setDice((oldDice) =>
            oldDice.map((dice) => {
                return dice.id === id
                    ? { ...dice, isHeld: !dice.isHeld }
                    : dice;
            })
        );
    }
    ```

-   [x] Create a helper function `generateNewDice()` that allows us to generate new `Dice` _object_, when we call it. Let's use helper function to create `Dice` _object_ inside `allNewDice` function.

    ```js
    function generateNewDice() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid(),
        };
    }

    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDice());
        }
        return newDice;
    }
    ```

-   [x] Update the `rollDice` function to not just roll all new dice, but instead to look through the existing dice to NOT roll any dice that are being `held`. Same as `holdDice` function, we will use `setDice` state function then `.map()` over the _array of objects_. When calling helper function `generateNewDice()`, every _Dice object's_ _value_ will be changed, except the ones that has their property _isHeld === true_.

    ```js
    function holdDice(id) {
        setDice((oldDice) =>
            oldDice.map((dice) => {
                return dice.id === id
                    ? { ...dice, isHeld: !dice.isHeld }
                    : dice;
            })
        );
    }
    ```

-   [x] Add _Title & Description elements_ to give some additional information to the _users_. Style

    ```html
    <h1 className="title">Tenzies</h1>
    <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
    </p>
    ```

    ```css
    .title {
        font-size: 40px;
        margin: 0;
    }

    .instructions {
        font-family: "Inter", sans-serif;
        font-weight: 400;
        margin-top: 0;
        text-align: center;
        margin-top: 1em;
    }
    ```

    Output ->
    ![This is an image](https://github.com/hmjatt/Tenzies-ReactJS/blob/main/project-output/Held-Dice.png)

### 14. End Game 🔚

-   [x] In **`App`** component add new _state_ called `tenzies`, default to _false_. It represents whether the user has won the game yet or not.

    ```js
    const [tenzies, setTenzies] = useState(false);
    ```

-   [x] Add an _Effect Hook`(useEffect)`_ that runs every time the `dice` state array changes. For now, just console.log("Dice state changed"). We are using _effect hook`(useEffect)`_ in order to keep _two states`(Dice & tenzies)`_ in sync with each other. Ignore the `non-unused-vars` warnings for now.

    ```js
    import { useState, useEffect } from "react";

    useEffect(() => {
        console.log("Dice state changed");
    }, [dice]);
    ```

-   [x] We will use _`.every()` [array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)_, which returns `true` if every item in the _array_ is _same_ else it returns `false`. In our case if all dice are _held_ & all dice have the _same value_, `console.log("You won!")` Let's update our _Effect Hook`(useEffect)`_ ->

    ```js
    useEffect(() => {
        // All dice are held
        const allHeld = dice.every((die) => die.isHeld);

        // All dice have the same value
        const firstValue = dice[0].value;
        const allSameValue = dice.every((die) => die.value === firstValue);

        // if `allHeld` and `allSameValue)` === true, we won
        if (allHeld && allSameValue) {
            setTenzies(true);
            console.log("You won!");
        }
    }, [dice]);
    ```

-   [x] If tenzies is `true`, change the button text to "New Game" and use the `react-confetti` [package](https://www.npmjs.com/package/react-confetti) to render the <Confetti /> component.

    ```console
    npm install react-confetti
    ```

    ```js
    import Confetti from "react-confetti";

    <main>
        {tenzies && <Confetti />}
        <button className="roll-dice" onClick={rollDice}>
            {tenzies ? "New Game" : "Roll"}
        </button>
    </main>;
    ```

    Output ->
    ![This is an image](https://github.com/hmjatt/Tenzies-ReactJS/blob/main/project-output/Win-Confetti.png)

### 15. New Game 🆕

-   [x] Allow the user to play a new game when the `New Game` button is clicked and they've already won. In **`App`** component, let's update `rollDice()` function such that user can only _roll the dice_ if `tenzies === false`. Else `tenzies === true`(if they've won the game), set `tenzies === false` and generate _all new dice_.

    ```js
    function rollDice() {
        if (!tenzies) {
            setDice((oldDice) =>
                oldDice.map((dice) => {
                    return dice.isHeld ? dice : generateNewDice();
                })
            );
        } else {
            setTenzies(false);
            setDice(allNewDice());
        }
    }
    ```

### 16. Track Number Of Rolls (JS Challenge) #️⃣

-   [x] Track the number of _Rolls_ it took to win the game. Inside **`App`** component, let's define a _state_ called `numOfRolls` and set it's _default value_ to `0`.

    ```js
    const [numOfRolls, setNumOfRolls] = useState(0);
    ```

-   [x] Inside `rollDice()` function add a couple of statements that change `numOfRolls` state, such that when `Roll` button is clicked _(game is not won)_ it increases `numOfRolls` state by 1. And when game is won and `New Game` button is clicked _(game is won)_, `numOfRolls` state is reset back to 0.

    ```js
    function rollDice() {
        if (!tenzies) {
            setNumOfRolls((prevState) => prevState + 1);
        } else {
            setNumOfRolls(0);
        }
    }
    ```

-   [x] Create `<h2>` element and insert value of `numOfRolls` state inside it.

    ```html
    <h2 className="track-rolls">Number of Rolls: {numOfRolls}</h2>
    ```

    Output ->
    ![This is an image](https://github.com/hmjatt/Tenzies-ReactJS/blob/main/project-output/Num-Of-Rolls.png)

### 17. Track The Time (JS Challenge) ⌚

-   [x] Track the _time_ it took to win the game. In **`App`** component initiate two states `[time]`, `[running]` and set their default states to `0`, `false` respectively. `[time]` representing the recorded time and `[running]` as if the game is being played or is won.

    ```js
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    ```

-   [x] Calculate _time_ using `useEffect` Hook & `setInterval()` method. Follow [this](https://w3collective.com/react-stopwatch/) article for detailed information.

    ```js
    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);
    ```

-   [x] Update the `useEffect` Hook, that represents _game state_. Using this hook _Start_ or _Stop_ the `timer`.

    ```js
    // useEffect Hook that represents game state
    useEffect(() => {
        // Check if some Dice are held(even if it's just one)
        const someHeld = dice.some((die) => die.isHeld);

        // if `someHeld` === True, Start counting
        if (someHeld) {
            setRunning(true);
        }

        // if `allHeld` and `allSameValue)` === true, we won
        if (allHeld && allSameValue) {
            // Stop Counter
            setRunning(false);
            // Game Won
            setTenzies(true);
        }
    }, [dice]);
    ```

-   [x] Update `rollDice()` function such that if _game is won_, _reset_ the counter when `New Game` button is clicked.

    ```js
    function rollDice() {
        if (!tenzies) {
            //...
        } else {
            // Reset timer
            setTime(0);
        }
    }
    ```

-   [x] Create _JSX elements_ that will hold _values_ for `minutes`, `seconds`, `milliseconds`.

    ```jsx
    <h3>
        <div className="timer">
            <div className="current-time">
                <span>
                    {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                </span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
        </div>
    </h3>
    ```

    Output -> ![This is an image](https://github.com/hmjatt/Tenzies-ReactJS/blob/main/project-output/Timer.png)

### 18. Save Best Time (JS Challenge) 💾

-   [x] Save _Best Time_ to `localStorage` and try to beat the record. Inside **`App`** component initiate a state `[bestTime]`and set it's default value to `23450`(just a random value).

    ```js
    const [bestTime, setBestTime] = useState(23450);
    ```

-   [x] Using `useEffect` Hook that gets `bestTime` from _localStorage_ . Follow [this](https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/) article for detailed instructions.

    ```js
    useEffect(() => {
        const bestTime = JSON.parse(localStorage.getItem("bestTime"));
        if (bestTime) {
            setBestTime(bestTime);
        }
    }, []);
    ```

-   [x] Update the `useEffect` Hook, that represents _game state_. Using this hook _store_ the `currentTime` in _localStorage_ `if(currentTime < bestTime)` and also make changes to the _dependency array( add `time`, `bestTime` to it )_.

    ```js
    // useEffect Hook that represents game state
    useEffect(() => {
        // ...
        // if `allHeld` and `allSameValue)` === true, we won
        if (allHeld && allSameValue) {
            // ...
            // Store Time at the end of a win in a variable
            let currentTime = time;
            // if currentTime > bestTime, store it in localStorage
            if (currentTime < bestTime) {
                setBestTime(currentTime);
                localStorage.setItem("bestTime", JSON.stringify(currentTime));
            }
            // ...
        }
    }, [dice, time, bestTime]);
    ```

-   [x] Create _JSX elements_ that will hold `minutes`, `seconds`, `milliseconds` _values_ for `bestTime`. Also, add some styling to `timer` _div_.

    ```jsx
    <div className="timer">
    	<div className="current-time">
    		<!-- ... -->

<!--
    	</div>
    	<div className="best-time">
    		<h3 className="best">Best</h3>
    		<div>
    			<span>
    				{(
    					"0" + Math.floor((bestTime / 60000) % 60)
    				).slice(-2)}
    				:
    			</span>
    			<span>
    				{(
    					"0" + Math.floor((bestTime / 1000) % 60)
    				).slice(-2)}
    				:
    			</span>
    			<span>
    				{("0" + ((bestTime / 10) % 100)).slice(-2)}
    			</span>
    		</div>
    	</div>
    </div>
    ```

    Styles ->

    ```css
    .timer {
        display: flex;
        justify-content: space-around;
        width: 25vw;
    }
    .timer h3 {
        margin: 10px;
    }
    ```

    Output -> ![This is an image](https://github.com/hmjatt/Tenzies-ReactJS/blob/main/project-output/Best-Time.png)

### 19. Make App Responsive 📱

-   [x] Change _Absolute_ units to _Relative_.

-   [x] Make App responsive for mobile by adding `media query`. :smiley:

### 20. Prepare for Deployment 🪢

-   [x] Delete **unnecessary** files from directory and format code with `Prettier`.

-   [x] Test for _Responsiveness_ and make changes if need be.

-   [x] Add links to `Live Preview` and _screenshots_.

### 21. Deploy 📤

-   [x] Use Official Documentation([link](https://create-react-app.dev/docs/deployment/#github-pages)) to push the project to **GitHub Pages** 🎆🎆🎆

<br>

## Future Changes ♾️

-   [x] CSS - Put _Real Dots_ on the _Dice_. ✅
-   [x] JS - Track Number of _Rolls_ it took to win the game. ✅
-   [x] JS - Track the _time_ it took to win the game. ✅
-   [x] JS - Save _Best Time/Rolls_ to `localStorage` and try to beat the record. ✅

<br>
 
-->

## Links to content that helped me with this project 🔗

1. The Odin Project

    - [React Introduction](https://www.theodinproject.com/lessons/node-path-javascript-react-introduction)
    - [React State & Props](https://www.theodinproject.com/lessons/node-path-javascript-state-and-props)
    - [Handle Inputs And Render Lists](https://www.theodinproject.com/lessons/node-path-javascript-handle-inputs-and-render-lists)

2. Figma Design

    - [Tenzies](https://www.figma.com/file/E9S5iPcm10f0RIHK8mCqKL/Quizzical-App?node-id=0%3A1)

3. Scrimba

    - [Learn React](https://scrimba.com/learn/learnreact)

4. React Official Documentation

    - [Mouse Events in React](https://reactjs.org/docs/events.html#mouse-events)
    - [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
    - [Handling Events](https://reactjs.org/docs/handling-events.html)
    - [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
    - [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
    - [Forms](https://reactjs.org/docs/forms.html)
    - [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
    - [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)

5. Trivia API

	- [Official Website](https://opentdb.com/api_config.php)

<br>

#### Quote ✒️

    “All parts should go together without forcing.  You must remember that the parts you are reassembling were disassembled by you.  Therefore, if you can’t get them together again, there must be a reason.  By all means, do not use a hammer."
    — IBM Manual, 1925

> 💭✅🍂