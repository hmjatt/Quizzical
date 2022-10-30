# Quizzical 🧩

Create a Trivia Game using ReactJS

<!--
## [Live Preview]()

![This is an image]()
![This is an image]()

-->

## About ℹ️

**`Quizzical`** is a _Trivia_ game implemented in `ReactJS`. While creating this project I learned about `Event Listeners in React`, `React State`, `Conditional Rendering in React`, `React Hooks(useEffect)`, etc. A player is given _5 random questions_ with _4 choices_ each. Trivia questions are retrieved from [_Open Trivia Database API_](https://opentdb.com/api_config.php). A participant can _validate_ their answers and can play as many times as they want. Have Fun :smile:. After creating the project, it was deployed to `GitHub Pages` :bird: Feel free to reach me on[Twitter](https://twitter.com/hmjatt/) 👾

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

```bash
### Clone the repository using GitHub CLI
gh repo clone hmjatt/Quizzical
```

```bash
### Go to the quizzical folder
cd quizzical
```

```bash
### Install Dependencies
npm install
```

```bash
### Starts the Development Server(App will open in a new window)
npm start
```

<!-- ```bash
### Go to the tests folder
cd src/tests

### Run Tests using this command
npm run test
``` -->

<br>

## Steps I followed to complete this project 🪜

### 1. Initialize Project 🎍

-   [x] Initialize the project using `npx create-react-app quizzical` which will create a
        complete **React App** pre-configured and pre-installed with all the dependencies.
-   [x] Import **`Work Sans`** font from google fonts and apply it to the **`App`** component.

### 2. Organize Project 🗄️

-   [x] Create a `components` folder for **custom components** inside the `src` directory.
-   [x] Create a `styles` folder inside the `src` directory and move `.css` files inside it.

### 3. Clean Directory🧹

-   [x] Delete **unnecessary** files.
-   [x] Create a `tests` folder inside the `src` directory and move `.test.js` files inside it.
-   [x] Delete **unnecessary** code.

### 4. App Component 🧩

-   [x] Create an **`App`** component and basic JSX elements for it.
-   [x] Add appropriate `className`s to elements in the **`App`** component.
-   [x] Import **`App`** component inside `index.js`.

-   [x] Add **styles** to `body` inside `index.css`.

-   [x] Style **`App`** component by editing `App.css`. And also add `blob` elements to **`App`** component

    Output ->
    ![This is an image](https://github.com/hmjatt/Quizzical/blob/main/project-output/Page1_updated.png)

### 5. Quiz Component 🧩

-   [x] Create a **`Quiz`** component, basic JSX elements for it and import it in **`App`** component.

### 6. Footer Component 🧩

-   [x] Create **`Footer`** component and basic JSX elements for it.
-   [x] Import **`Footer`** component inside `App` component.
-   [x] Style **`Footer`** component.

### 7. Conditionally Render Quiz Component 🆗

-   [x] When `Start Quiz` button is clicked, conditionally render **`Quiz`** component.

### 8. Add Psuedo Elements to Quiz Component 💭

-   [x] Add elements to **`Quiz`** component.
-   [x] Style elements in **`Quiz`** component.
-   [x] Make it responsive.

### 9. Allow multiple selection of **options** ✔️

-   [x] Change code inside **`Quiz`** component, so that multiple options can be selected for a playthrough but only one option to be selected per question. Can be easily done by converting `buttons` to `radio inputs` and applying some styles.

    Output ->
    ![This is an image](https://github.com/hmjatt/Quizzical/blob/main/project-output/Page2.png)

### 10. Allow multiple selection of **options** ✔️

-   [x] Change code inside **`Quiz`** component, so that multiple options can be selected for a playthrough but only one option to be selected per question. Can be easily done by converting `buttons` to `radio inputs` and applying some styles.

    Output ->
    ![This is an image](https://github.com/hmjatt/Quizzical/blob/main/project-output/Page2.png)


### 11. Populate Quiz Component with Data from Trivia API 📇

-   [x] Fetch data from `Trivia API`.
-   [ ] Replace psuedo questions with the fetched questions.
-   [ ] Replace psuedo questions with the fetched questions.


### 12. Make App Responsive 📱

-   [ ] Change _Absolute_ units to _Relative_.

-   [ ] Make App responsive for mobile by adding `media query`. :smiley:

### 13. Prepare for Deployment 🪢

-   [ ] Delete **unnecessary** files from directory and format code with `Prettier`.

-   [ ] Test for _Responsiveness_ and make changes if need be.

-   [ ] Add links to `Live Preview` and _screenshots_.



### 14. Deploy 📤

-   [x] Use Official Documentation([link](https://create-react-app.dev/docs/deployment/#github-pages)) to push the project to **GitHub Pages** 🎆🎆🎆

<br>

## Future Changes ♾️

-   [ ] Allow players to select category of trivia questions.
-   [ ] Allow players to select difficulty of trivia questions.


<br>



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
