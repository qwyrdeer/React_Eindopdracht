import './DoubleInput.css';
function DoubleInput({typeField1, placeholder1, inputStyle, id1, setInputValue1, id2, setInputValue2, typeField2, placeholder2, maxNumber, minNumber}) {
    return (
        <>
            <span>
            <input type={typeField1}
                   placeholder={placeholder1}
                   className={`doubleInput1 ${inputStyle}`}
                   id={id1}
                   onChange={(e) => setInputValue1(e.target.value)}
            />
            <input type={typeField2}
                   placeholder={placeholder2}
                   className={`doubleInput2 ${inputStyle}`}
                   max={maxNumber}
                   min={minNumber}
                   id={id2}
                   onChange={(e) => setInputValue2(e.target.value)}
            />
            </span>
        </>
    );
}
export default DoubleInput;
