import {useEffect, useState} from 'react';

export const TaskThree = () => {
    const [colorValue, setColorValue] = useState('silver');
    const [div, setDiv] = useState<any>([]);
    const [showButton, setShowButton] = useState(true);

    const handleClick = () => {
        console.log(colorValue);
        let curColor = colorValue;
        setDiv([...div, {id: div.length + 1, color: curColor}]);
    };

    const handleChange = (e: any) => {
        setColorValue(e.target.value);
    };

    useEffect(() => {
        const timer = setTimeout(() => setShowButton(false), 5000);
    }, []);

    return (
        <div>
            <h2>Task 3</h2>
            <div className='button-select'>
                <button onClick={handleClick} disabled={showButton}>
                    +
                </button>
                <form>
                    <select onChange={handleChange}>
                        {/* COLOR DROPDWON */}
                        <option value='silver'>Silver</option>
                        <option value='cadetblue'>Cadetblue</option>
                        <option value='darkkhaki'>Darkkhaki</option>
                        <option value='darkseagreen'>Darkseagreen</option>
                        <option value='gold'>Gold</option>
                    </select>
                </form>
            </div>
            <div className='div-boxes'>
                {div.map((item: any) => (
                    <div
                        className='div-box'
                        style={{backgroundColor: item.color}}
                        key={Math.random()}
                    ></div>
                ))}
            </div>
        </div>
    );
};

// PERNSONAL NOTES:
// https://stackoverflow.com/questions/29108779/how-to-get-selected-value-of-a-dropdown-menu-in-reactjs
