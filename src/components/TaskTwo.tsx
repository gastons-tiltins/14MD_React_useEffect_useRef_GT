import {useState, useEffect} from 'react';

export const TaskTwo = () => {
    const [showButton, setShowButton] = useState(true);
    const [count, setCount] = useState(2);

    useEffect(() => {
        const timer = setTimeout(() => setShowButton(false), 5000);
    }, []);

    return (
        <div>
            <h2>Task 2</h2>
            {/* TODO: 5 sekundes disabled */}
            <button
                disabled={showButton}
                className='green-button btn'
                onClick={() => setCount((count) => count + 1)}
            >
                Count {count}
            </button>
            <p className='task-two-square'>{count * 2}</p>
        </div>
    );
};
