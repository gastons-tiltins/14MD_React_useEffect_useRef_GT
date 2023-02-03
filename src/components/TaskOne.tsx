import {useState, useRef} from 'react';

export const TaskOne = () => {
    const inputRef: any = useRef(null);
    const [inputValue, setInputValue] = useState<string[]>([]);
    const handleClick = (event: any) => {
        event.preventDefault();
        if (!inputRef.current.value) {
            return;
        } else {
            setInputValue([...inputValue, inputRef.current.value]);
            inputRef.current.value = '';
        }
    };

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            if (!inputRef.current.value) {
                return;
            } else {
                setInputValue([...inputValue, inputRef.current.value]);
                inputRef.current.value = '';
            }
        }
    };

    return (
        <div>
            <h2>Task 1</h2>
            <input
                autoFocus
                ref={inputRef}
                onKeyDown={handleKeyDown}
                type='text'
                placeholder='Write something...'
            />

            <button onClick={handleClick}>Submit</button>
            <p>{inputValue}</p>
        </div>
    );
};
