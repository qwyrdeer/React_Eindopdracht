import './TopMenu.css';

import GalacticLogo from "../../assets/TopMenu/pokemon_team_galactic_logo_by_biochao_dezrrpg-fullview.png"
import Button from "../button/Button.jsx";
import {useState} from "react";
import {useNavigate, NavLink} from "react-router-dom";
import TextOnlyButton from "../button/TextOnlyButton/TextOnlyButton.jsx";


function TopMenu() {

    const [loggedIn, toggleLoggedIn] = useState (false);
    const navigate = useNavigate();

return (
  <>
    <div className="topBar">
        <NavLink to="/community-feed"><img src={GalacticLogo} alt="Logo Team Galactic" className="galacticLogo"/></NavLink>
        <div className="menuRight">
            {loggedIn === false ?
                <span className="notLoggedIn">

                <TextOnlyButton
                    buttonName="Login"
                    buttonStyle="baseTextonlyButton"
                    onClick={() => navigate("/login")}
                />
                <TextOnlyButton
                    buttonName="Register"
                    buttonStyle="baseTextonlyButton"
                    onClick={() => navigate("/register")}
                />
                </span> :
                <TextOnlyButton
                buttonName="Online!"
                buttonStyle="baseButton menuTopButton"
                />
            }
        </div>
    </div>
  </>
);
}
export default TopMenu;
