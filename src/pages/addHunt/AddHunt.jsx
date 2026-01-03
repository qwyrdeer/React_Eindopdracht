import './AddHunt.css';
import InputFieldBasic from "../../components/inputFields/InputFieldBasic.jsx";
import TextOnlyButton from "../../components/button/TextOnlyButton/TextOnlyButton.jsx";
import {useState} from "react";
import RadioButton from "../../components/button/RadioButton.jsx";
import DoubleInput from "../../components/inputFields/DoubleInput.jsx";
import { useForm } from 'react-hook-form';
import { DevTool } from "@hookform/devtools";

function AddHunt() {

    // Voor error messages, installeren van useForm en DevTools?
    const form = useForm();
    const { register, control } = form

    // Bestanden versturen, aanpassing toevoegen via EdHub: https://edhub.novi.nl/study/courses/610/content/18806

    const [previewUrl, setPreviewUrl] = useState('');
    const [error, setError] = useState('');
    const MAX_FILE_SIZE = 1_100_000;

    const [namePokemon, setNamePokemon] = useState('');
    const [dexId, setDexId] = useState(0);
    const [nameGame, setNameGame] = useState('');
    const [nameMethod, setNameMethod] = useState('');
    const [huntEncounters, setHuntEncounters] = useState(0);

    const [radioStatus, setRadioStatus] = useState("Current");

    const handleSelect = (status) => {
        setRadioStatus(status);
    };

    function sendForm(e) {
        e.preventDefault()
        console.log({namePokemon, dexId, nameGame, nameMethod, previewUrl, radioStatus, huntEncounters})
    }


    const handleFileChange = (e) => {
        setError('');

        if (e.target.files.length > 1) {
            setError("Only upload one GIF");
            setPreviewUrl('');
            return;
        }

        const file = e.target.files[0];
        if (!file) return;

        if (file.type !== "image/gif") {
            setError("Only GIF files are allowed");
            setPreviewUrl('');
            return;
        }

        if (file.size > MAX_FILE_SIZE) {
            setError("Files may not be bigger than 1.1MB");
            setPreviewUrl('');
            return;
        }

        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setError('');

        const file = e.dataTransfer.files[0];
        if (!file) return;

        if (file.type !== "image/gif") {
            setError("Only GIF files are allowed");
            setPreviewUrl('');
            return;
        }

        if (file.size > MAX_FILE_SIZE) {
            setError("Files may not be bigger than 1.1MB");
            setPreviewUrl('');
            return;
        }

        if (e.dataTransfer.files.length > 1) {
            setError("Only upload one GIF");
            setPreviewUrl('');
            return;
        }

        setPreviewUrl(URL.createObjectURL(file));
    };



    return (
        <>
            <div className="fullAddHuntPageBox">
                <div className="contentAddHuntBox">
                    <div className="pageTitle"><h1>ADD HUNT.</h1></div>
                    <form onSubmit={sendForm}>
                        <DoubleInput
                            typeField1="text"
                            placeholder1="Name Pokémon you are hunting"
                            id1="pokemon"
                            setInputValue1={setNamePokemon}
                            {...register("Name pokemon")}
                            inputStyle="doubleInputBox"
                            typeField2="number"
                            placeholder2="# DexID"
                            id2="dexId"
                            maxNumber="1025"
                            minNumber="1"
                            setInputValue2={setDexId}
                            {...register("DexID")}
                            />

                        {/*<div className="errorPlace">{inputError && <p className="uploadError">{inputError}</p>}</div>*/}

                        <InputFieldBasic
                            typeField="text"
                            placeholder="What game are you hunting in?"
                            inputStyle="baseInput"
                            id="game"
                            setInputValue={setNameGame}
                        />
                        <InputFieldBasic
                            typeField="text"
                            placeholder="What method are you hunting with?"
                            inputStyle="baseInput"
                            id="method"
                            setInputValue={setNameMethod}
                        />
                        <div className="radioBox">
                            <span className="radioBasis">
                            <RadioButton
                                radioName="huntStatus"
                                radioOption="Past"
                                onClick={() => handleSelect('Past')}
                            /></span>
                            <span className="radioBasis">
                            <RadioButton
                                radioName="huntStatus"
                                radioOption="Current"
                                defaultChecked="true"
                                onClick={() => handleSelect('Current')}
                            /></span>
                                <span className="radioBasis">
                            <RadioButton
                                radioName="huntStatus"
                                radioOption="Future"
                                onClick={() => handleSelect('Future')}
                            /></span>
                        </div>
                        {radioStatus === "Past" ?
                            <InputFieldBasic
                                typeField="number"
                                placeholder="Amount of encounters"
                                inputStyle="baseInput"
                                id="encounters"
                                setInputValue={setHuntEncounters}
                            /> : <p></p>}
                        <label
                            className="uploadBox"
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleDrop}
                            id="shiny-gif"
                        >
                            {previewUrl ? (
                                <img src={previewUrl} alt="Preview GIF"/>
                            ) : (
                                <p>Click or drag & drop your GIF here.</p>
                            )}

                            <input
                                type="file"
                                accept="image/gif"
                                onChange={handleFileChange}
                                id="shiny-gif"
                                hidden
                            />
                        </label>
                        <div className="errorPlace">{error && <p className="uploadError">{error}</p>}</div>

                        <div className="buttonBox addHuntButton">
                            <TextOnlyButton
                                type="submit"
                                buttonStyle="greenButton baseButton"
                                buttonName="Add hunt"/>
                        </div>
                    </form>
                    <DevTool control={control}/>
                </div>
            </div>
        </>
    );
}

export default AddHunt;
