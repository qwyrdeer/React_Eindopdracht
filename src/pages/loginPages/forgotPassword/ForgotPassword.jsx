import './ForgotPassword.css';
import InputFieldBasic from "../../../components/inputFields/InputFieldBasic.jsx";
import TextOnlyButton from "../../../components/button/TextOnlyButton/TextOnlyButton.jsx";
import {Link} from "react-router-dom";

function ForgotPassword() {
    return (
        <>
            <div className="fullPageBox">
                <div className="contentBox">
                    <div className="pageTitle"><h1>FORGOT PASSWORD.</h1></div>
                    <form action="">
                        <InputFieldBasic
                            typeField="text"
                            placeholder="Username or email"
                            inputStyle="baseInput"
                        />

                        <div className="rerouteLink">
                            <div><Link to="/register">I want to register</Link></div>
                            <div><Link to="/login">I remember my password</Link></div>
                        </div>


                        <div className="buttonBox">
                            <TextOnlyButton
                                type="submit"
                                buttonStyle="greenButton baseButton"
                                buttonName="Send"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default ForgotPassword;
