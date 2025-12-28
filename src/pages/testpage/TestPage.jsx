import './TestPage.css';
import Grunt from "../../assets/Images/Team_Galactic_Grunts_Test.png"
import CloseIcon from "../../assets/Icons/SVG/CloseIcon.svg"


function TestPage() {

    return (
        <>
            <div className="fullTestPageBox">
            <div className="pageTestTitle"><h1>TESTPAGE.</h1></div>

            <div className="nameBox"><p>Galactic Grunt</p></div>
            <div className="messageBox">
                <span className="closeIconBox"><img src={CloseIcon} alt="close icon"/></span>
                <p>Hey visitor! We need your help to locate all shiny Pokemon... Create your own hunter account in the right top corner - we kinda depend on you!</p>
            </div>
            <div className="gruntImage"><img src={Grunt} alt=""/></div>
            </div>
        </>
    );
}
export default TestPage;
