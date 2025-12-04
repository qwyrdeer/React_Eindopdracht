import './Button.css';

import LogOutIcon from '../../assets/Icons/SVG/LogOutIcon.svg';

function Button({buttonName, buttonStyle}) {
return (
  <>
    <button
            type="button"
            onClick=""
            className={buttonStyle}
        >
        <img src={LogOutIcon} width="20" height="20" /> {buttonName}
    </button>
  </>
);
}

export default Button;
