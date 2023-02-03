import {useRef, useEffect} from 'react';

export const TaskSeven = () => {
    let ref: any = useRef(<div>H2</div>);
    const handleClick = () => {
        // ref = ref.current + ref;
        console.log(ref.current);

        ref = ref.current;
    };
    return (
        <>
            <h2>Task 7</h2>
            {/* <div
                ref={ref}
                className='my-box'
                // style={{
                //     width: '80px',
                //     height: '80px',
                //     border: '1px solid black',
                // }}
            ></div> */}
            <div ref={ref} className='div-box'>
                <h2>SOM</h2>
            </div>
            <p>Kaut kads teksts:</p>
            <button onClick={handleClick}>Clone div</button>
        </>
    );
};
