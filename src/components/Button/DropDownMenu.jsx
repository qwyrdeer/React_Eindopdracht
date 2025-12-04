import './DropDownMenu.css';
function DropDownMenu({fieldName, fieldOptions, fieldData}) {

    return (
  <>
    <div>
        <select name={fieldName} id={fieldData} className="baseMenu redButton">
            {fieldOptions.map((option) =>
                <option value={option} key={option.toString()}>
                    {option}
                </option>)}
        </select>
    </div>
  </>
);
}
export default DropDownMenu;
