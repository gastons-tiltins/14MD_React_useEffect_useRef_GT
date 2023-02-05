import {useState, useRef} from 'react';

export const TaskOne = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputValue, setInputValue] = useState<string[]>([]);
    const handleClick = () => {
        if (!inputRef?.current?.value) {
            return;
        } else {
            setInputValue([...inputValue, inputRef.current.value]);
            inputRef.current.value = '';
        }
    };

    // const handleKeyDown = (event: any) => {
    //     if (event.key === 'Enter') {
    //         if (!inputRef.current.value) {
    //             return;
    //         } else {
    //             setInputValue([...inputValue, inputRef.current.value]);
    //             inputRef.current.value = '';
    //         }
    //     }
    // };

    return (
        <div>
            <h2>Task 1</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleClick();
                }}
            >
                <input
                    autoFocus
                    ref={inputRef}
                    // onKeyDown={handleKeyDown}
                    type='text'
                    placeholder='Write something...'
                />

                <button>Submit</button>
            </form>
            <p>{inputValue}</p>
            <pre>{JSON.stringify(inputValue)}</pre>
        </div>
    );
};
