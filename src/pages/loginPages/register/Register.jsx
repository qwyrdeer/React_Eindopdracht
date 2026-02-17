import './Register.css';
import InputFieldBasic from "../../../components/inputFields/InputFieldBasic.jsx";
import TextOnlyButton from "../../../components/button/TextOnlyButton/TextOnlyButton.jsx";
import {Link} from "react-router-dom";
function Register() {
    return (
        <>
            <div className="fullPageBox">
                <div className="contentBox">
                    <div className="pageTitle"><h1>REGISTER.</h1></div>
                    <form action="">
                        <InputFieldBasic
                            typeField="text"
                            placeholder="Username"
                            inputStyle="baseInput"
                            id="username"
                        />
                        <InputFieldBasic
                            typeField="email"
                            placeholder="Email"
                            inputStyle="baseInput"
                            id="email"
                        />
                        <InputFieldBasic
                            typeField="password"
                            placeholder="Password"
                            inputStyle="baseInput"
                            id="password"
                        />
                        <InputFieldBasic
                            typeField="password"
                            placeholder="Retype password"
                            inputStyle="baseInput"
                            id="password"
                        />

                        <div className="rerouteLink">
                            <div><Link to="/login">I already have an account</Link></div>
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
export default Register;
