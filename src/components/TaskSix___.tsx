import {useRef, useState} from 'react';
export const TaskSix = () => {
    const [render, setRender] = useState(false);

    let ref = useRef('white');

    const handleClick = () => {
        ref.current = 'gold';
        setRender(true);
    };
    return (
        <>
            <h2>Task 6</h2>
            <div className='task6'>
                {render ? (
                    <div
                        className='div-box'
                        style={{backgroundColor: ref.current}}
                    ></div>
                ) : (
                    <div className='div-box'></div>
                )}
                <button onClick={() => handleClick()}>Change color</button>
            </div>
        </>
    );
};
