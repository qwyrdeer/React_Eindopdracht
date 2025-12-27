import './FilterButton.css';

function FilterButton({buttonName, buttonIcon, alt}) {
    return (
        <>
            <div>
                <button
                    type="button"
                    onClick=""
                    className="filterBaseButton filterGreenButton"
                >
                    <span className="buttonBox"><span className="buttonText">{buttonName}</span> <img src={buttonIcon} alt={alt} className="iconStyle"/></span>
                </button>
            </div>
        </>
    );
}

export default FilterButton;
