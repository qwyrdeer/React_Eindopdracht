import './RadioButton.css';

function RadioButton({radioName, radioOption, handleClick}) {

return (

    <>
        <label >
            <input
                type='radio'
                name={radioName}
                value={radioOption}
                onChange={(e) => handleClick(e.target.value)}
            /> {radioOption}
        </label>
    </>
);
}

export default RadioButton;
