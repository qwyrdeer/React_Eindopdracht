import './ResetPassword.css';
import InputFieldBasic from "../../../components/inputFields/InputFieldBasic.jsx";
import TextOnlyButton from "../../../components/button/TextOnlyButton/TextOnlyButton.jsx";
import {Link} from "react-router-dom";
function ResetPassword() {
    return (
        <>
            <div className="fullPageBox">
                <div className="loginBox">
                    <div className="pageTitle"><h1>RESET PASSWORD.</h1></div>
                    <form action="">

                        <InputFieldBasic
                            typeField="password"
                            placeholder="Password"
                            inputStyle="baseInput"
                        />
                        <InputFieldBasic
                            typeField="password"
                            placeholder="Retype password"
                            inputStyle="baseInput"
                        />

                        <div className="buttonBox">
                            <TextOnlyButton
                                buttonStyle="greenButton baseButton"
                                buttonName="Send"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default ResetPassword;
