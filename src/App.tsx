import React from 'react';
import {useState, useEffect, useRef} from 'react';
import {TaskOne} from './components/TaskOne';
import {TaskTwo} from './components/TaskTwo';
import {TaskThree} from './components/TaskThree';
import {TaskFour} from './components/TaskFour';
import {TaskFive} from './components/TaskFive';
import {TaskSix} from './components/TaskSix___';
import {TaskSeven} from './components/TaskSeven';
// import {TaskEight} from './components/TaskSix';

function App() {
    return (
        <>
            <h1>MD14 React GT</h1>
            {/* Submit form, add values to Array */}
            {/* <TaskOne /> */}
            {/* Disabled button, after that increase count  */}
            {/* <TaskTwo /> */}
            {/* Color drop down select */}
            {/* <TaskThree /> */}
            {/* Count and text as type */}
            {/* <TaskFour /> */}
            {/* Font change, title change */}
            {/* <TaskFive /> */}
            {/* <TaskSix /> */}
            <TaskSeven />
            {/* <TaskEight /> */}
        </>
    );
}

export default App;

// We will use this later
// onChange={(e) => setClickArray(e.target.value)}

// PERSONAL NOTES:
// https://codingbeautydev.com/blog/react-get-input-value-on-button-click/
// https://codingbeautydev.com/blog/react-get-input-value-on-enter/
