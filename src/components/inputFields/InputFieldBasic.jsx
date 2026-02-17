import './InputFieldBasic.css';
function InputFieldBasic({typeField, placeholder, inputStyle, value, id, setInputValue, onClick}) {
return (
  <>
      <input type={typeField}
             placeholder={placeholder}
             className={inputStyle}
             id={id}
             max="99999"
             value={value}
             onChange={(e) => setInputValue(e.target.value)}
             onClick={onClick}
      />
  </>
);
}
export default InputFieldBasic;
