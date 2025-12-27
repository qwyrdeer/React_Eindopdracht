import './TextOnlyButton.css';

function TextOnlyButton({buttonName, buttonStyle, onClick, type}) {

    return (
        <>
            <button
                type={type}
                onClick={onClick}
                className={`baseTextonlyButton ${buttonStyle}`}
            >
                    <span className="menuTextonlyButtonName">
        {buttonName}
      </span>
            </button>
        </>
    );
}

export default TextOnlyButton;