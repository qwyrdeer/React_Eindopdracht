import './Login.css';
import InputFieldBasic from "../../../components/inputFields/InputFieldBasic.jsx";
import TextOnlyButton from "../../../components/button/TextOnlyButton/TextOnlyButton.jsx";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <div className="fullPageBox">
                <div className="contentBox">
                    <div className="pageTitle"><h1>LOG IN.</h1></div>
            <form action="">
            <InputFieldBasic
            typeField="text"
            placeholder="Username"
            inputStyle="baseInput"
            id="username"
            />
                <InputFieldBasic
                    typeField="password"
                    placeholder="Password"
                    inputStyle="baseInput"
                    id="password"
                />

                <div className="rerouteLink">
                <div><Link to="/register">I want to register</Link></div>
                    <div><Link to="/forgot-password">I forgot my password</Link></div>
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
export default Login;
