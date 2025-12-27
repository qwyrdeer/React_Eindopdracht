import './Button.css';

function Button({buttonName, buttonStyle, buttonIcon, alt, onClick}) {

return (
    <>
        <button
            type="button"
            onClick={onClick}
            className={buttonStyle}
        >
            <div className="menuBox">
                <div className="menuIcon">
                    <img src={buttonIcon} alt={alt}/>
                </div>
                <span className="menuButtonName">
        {buttonName}
      </span>
            </div>
        </button>
    </>
);
}

export default Button;
