import './TextOnlyButton.css';

function TextOnlyButton({buttonName, buttonStyle, onClick}) {

    return (
        <>
            <button
                type="button"
                onClick={onClick}
                className={buttonStyle}
            >
                    <span className="menuTextonlyButtonName">
        {buttonName}
      </span>
            </button>
        </>
    );
}

export default TextOnlyButton;