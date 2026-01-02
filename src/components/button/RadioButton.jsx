import './RadioButton.css';

function RadioButton({radioName, radioOption, onClick, defaultChecked}) {

return (

    <>
        <label >
            <input
                type='radio'
                name={radioName}
                value={radioOption}
                onClick={onClick}
                defaultChecked={defaultChecked}
            /> {radioOption}
        </label>
    </>
);
}

export default RadioButton;
