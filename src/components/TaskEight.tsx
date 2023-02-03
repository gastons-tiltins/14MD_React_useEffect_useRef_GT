import {useRef, useEffect} from 'react';
export const TaskEight = () => {
    let ref: any = useRef();

    const handleClick = () => {
        if (ref.current) {
            const boxElement = ref.current;
            boxElement.innerHTML = 'esmu stūrī';
            boxElement.style.position = 'absolute';
            boxElement.style.top = '0px';
            boxElement.style.right = '0px';
        }
        window.scrollTo(0, 0);
    };

    return (
        <>
            <h2>Task 8</h2>
            <div className='task7'>
                <div className='div-box8' ref={ref}></div>
            </div>
            <button onClick={handleClick}>Clone div</button>
        </>
    );
};
