import './TestPage.css';
import Grunt from "../../assets/Images/Team_Galactic_Grunts_Test.png"
import CloseIcon from "../../assets/Icons/SVG/CloseIcon.svg"
import DoubleInput from "../../components/inputFields/DoubleInput.jsx";
import {useState} from "react";


function TestPage() {

    const [namePokemon, setNamePokemon] = useState('');
    const [dexId, setDexId] = useState(0);

    return (
        <>
            <div className="fullTestPageBox">
            <div className="pageTestTitle"><h1>TESTPAGE.</h1></div>
                <DoubleInput
                    typeField1="text"
                    placeholder1="Name Pokémon you are hunting"
                    id1="pokemon"
                    setInputValue1={setNamePokemon}
                    inputStyle="doubleInputBox"
                    typeField2="number"
                    placeholder2="# DexID"
                    id2="dexId"
                    maxNumber="1025"
                    minNumber="1"
                    setInputValue2={setDexId}
                />

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
