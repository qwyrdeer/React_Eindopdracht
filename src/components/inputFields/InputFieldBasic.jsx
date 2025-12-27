import './InputFieldBasic.css';
function InputFieldBasic({typeField, placeholder, inputStyle, id, setInputValue}) {
return (
  <>
      <input type={typeField}
             placeholder={placeholder}
             className={inputStyle}
             id={id}
             onChange={(e) => setInputValue(e.target.value)}
      />
  </>
);
}
export default InputFieldBasic;
