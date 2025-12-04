import './FilterButton.css';

function FilterButton({buttonName}) {
    return (
        <>
            <div>
                <button
                    type="button"
                    onClick=""
                    className="filterBaseButton filterGreenButton"
                >
                {buttonName}
                </button>

                <div className="arrow"></div>
            </div>
        </>
    );
}

export default FilterButton;
