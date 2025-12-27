import './InputFieldBasic.css';
function InputFieldBasic({typeField, placeholder, inputStyle}) {
return (
  <>
      <input type={typeField}
             placeholder={placeholder}
             className={inputStyle}
      />
  </>
);
}
export default InputFieldBasic;
