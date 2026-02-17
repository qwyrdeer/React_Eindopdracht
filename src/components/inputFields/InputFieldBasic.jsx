import './InputFieldBasic.css';
function InputFieldBasic({typeField, placeholder, inputStyle, id, setInputValue}) {
return (
  <>
      <input type={typeField}
             placeholder={placeholder}
             className={inputStyle}
             id={id}
             max="99999"
             onChange={(e) => setInputValue(e.target.value)}
      />
  </>
);
}
export default InputFieldBasic;
