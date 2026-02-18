import './TopMenu.css';

import GalacticLogo from "../../assets/TopMenu/pokemon_team_galactic_logo_by_biochao_dezrrpg-fullview.png"
import {useContext} from "react";
import {useNavigate, NavLink} from "react-router-dom";
import TextOnlyButton from "../button/TextOnlyButton/TextOnlyButton.jsx";
import {AuthContext} from "../../auth/AuthProvider.jsx";

function TopMenu() {

    const navigate = useNavigate();
    const {auth, login, logout} = useContext(AuthContext)

    console.log(auth);

return (
  <>
    <div className="topBar">
        <div className="leftTopSide"></div>
        <NavLink to="/community-feed"><img src={GalacticLogo} alt="Logo Team Galactic" className="galacticLogo"/></NavLink>
        <div className="menuRight">
            {!auth.isAuth ?
                <span className="notLoggedIn">
                <TextOnlyButton
                    buttonName="Login"
                    buttonStyle="baseTextonlyButton"
                    onClick={login}
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
                onClick={logout}
                />
            }
        </div>
    </div>
  </>
);
}
export default TopMenu;
