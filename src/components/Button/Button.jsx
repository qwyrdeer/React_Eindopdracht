import './Button.css';

function Button({buttonName, buttonStyle, buttonIcon, alt}) {

return (
  <>
    <button
            type="button"
            onClick=""
            className={buttonStyle}
        >
        <img src={buttonIcon} alt={alt}/> {buttonName}
    </button>
  </>
);
}

export default Button;
