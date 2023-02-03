import {useState, useEffect} from 'react';

export const TaskFour = () => {
    const [inputText, setInputText] = useState<any>([]);
    useEffect(() => {
        console.log('First render.');
    }, []);

    useEffect(() => {
        console.log('Render.');
    });

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
        // console.log('Render.');
        console.log('Changing count.');
    };

    const handleChange = (event: any) => {
        setInputText(event.target.value);
        // console.log('Render.');
        console.log('Input change.');
    };

    const handleKeyDown2 = (event: any) => {
        if (event.key === 'Enter') {
            setInputText('');
            event.target.value = '';
            // console.log('Render.');
        }
    };

    return (
        <div>
            <h2>Task 4</h2>
            <button onClick={handleClick}>+</button>
            <p>Count: {count}</p>
            <input
                onKeyDown={handleKeyDown2}
                onChange={handleChange}
                type='text'
            />
            <p>{inputText}</p>
        </div>
    );
};
