import {useState, useEffect} from 'react';
export const TaskFive = () => {
    const [inputText, setInputText] = useState<any>([]);
    const [count, setCount] = useState(100);

    useEffect(() => {
        document.title = inputText;
    });

    const handleClick = () => {
        setCount(count + 1);
    };

    const handleChange = (event: any) => {
        setInputText(event.target.value);
        // document.title = inputText;
    };

    const handleKeyDown2 = (event: any) => {
        if (event.key === 'Enter') {
            setInputText('');
            event.target.value = '';
        }
    };
    return (
        <>
            {' '}
            <h2>Task 5</h2>
            <button onClick={handleClick}>+</button>
            <p style={{fontSize: count / 6}}>Count: {count}</p>
            <input
                onKeyDown={handleKeyDown2}
                onChange={handleChange}
                type='text'
            />
            <p>{inputText}</p>
        </>
    );
};
