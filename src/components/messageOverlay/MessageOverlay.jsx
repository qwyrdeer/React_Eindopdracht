import './MessageOverlay.css';
import CloseIcon from "../../assets/Icons/SVG/CloseIcon.svg";
import Grunt from "../../assets/Images/Team_Galactic_Grunts_Test.png";
import {useState} from "react";

function MessageOverlay({Homepage, Message}) {

    const [closeScreen, toggleCloseScreen] = useState(false)

    return (
        <>
            {closeScreen === false ?
                <div>
                    {Homepage ?
                            <div>
                                <div className="screenfiller"></div>
                                <div className="messageBox">
                                    <p>{Message}</p>
                                    <div><p className="nameBox">Galactic Grunt</p></div>
                                </div>
                                <div className="gruntImage"><img src={Grunt} alt=""/><span className="closeIconBox"></span></div>
                            </div>
                            :
                            <div>
                                <div className="screenfiller" onClick={() => toggleCloseScreen(true)}></div>
                                <div className="messageBox">
                                    <p>{Message}</p>
                                    <div><p className="nameBox">Galactic Grunt</p></div>
                                </div>
                                <div className="gruntImage" onClick={() => toggleCloseScreen(true)}><img src={Grunt} alt=""/><span
                                    className="closeIconBox" onClick={() => toggleCloseScreen(true)}><img src={CloseIcon}
                                                                                                          alt="close icon"/></span></div>
                            </div>
                    }
                </div>
                : ""}
        </>
    );
}

export default MessageOverlay;