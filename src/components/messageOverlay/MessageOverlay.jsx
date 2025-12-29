import './MessageOverlay.css';
import CloseIcon from "../../assets/Icons/SVG/CloseIcon.svg";
import Grunt from "../../assets/Images/Team_Galactic_Grunts_Test.png";

function MessageOverlay() {

return (
  <>
  <div className="nameBox"><p>Galactic Grunt</p></div>
  <div className="messageBox">
      <span className="closeIconBox"><img src={CloseIcon} alt="close icon"/></span>
      <p>Hey visitor! We need your help to locate all shiny Pokemon... Create your own hunter account in the right top corner - we kinda depend on you!</p>
  </div>
  <div className="gruntImage"><img src={Grunt} alt=""/></div>
</>
);
}
export default MessageOverlay;
