import './TopMenu.css';

import GalacticLogo from "../../assets/TopMenu/pokemon_team_galactic_logo_by_biochao_dezrrpg-fullview.png"
import Button from "../Button/Button.jsx";
import HamburgerIcon from "../../assets/Icons/SVG/MenuIcon.svg"

function TopMenu({props}) {

return (
  <>
    <div className="topBar">
        <div className="menuLeft">
            <Button
                buttonStyle="baseButton menuSmallButton"
                buttonIcon={HamburgerIcon}
            />
        </div>
        <a href="http://pokemon.com"><img src={GalacticLogo} alt="Logo Team Galactic" className="galacticLogo"/></a>
        <div className="menuRight"><Button
            buttonName="Inloggen"
            buttonStyle="baseButton greenButton"
        /></div>
    </div>
  </>
);
}
export default TopMenu;
