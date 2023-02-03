import {useRef, useEffect} from 'react';

export const TaskSeven = () => {
    let ref: any = useRef();

    const handleClick = () => {
        if (ref.current) {
            const boxElement = ref.current;
            const clone = boxElement.cloneNode(true);
            boxElement.parentNode?.appendChild(clone);
        }
    };

    return (
        <>
            <h2>Task 7</h2>
            <div className='task7'>
                <div className='div-box' ref={ref}></div>
            </div>
            <button onClick={handleClick}>Clone div</button>
        </>
    );
};
