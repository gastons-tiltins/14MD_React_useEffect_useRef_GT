import {useRef} from 'react';
export const TaskSix = () => {
    const box: any = useRef('');

    const onClick = () => {
        box.current.style.backgroundColor = 'gold';
    };

    return (
        <div>
            <h2>Task 6</h2>
            <div className='div-box' ref={box} />
            <button onClick={onClick}>Change color</button>
        </div>
    );
};

// PERSONAL NOTES:
// https://stackoverflow.com/questions/56920315/how-to-use-useref-to-change-the-style-of-a-element
