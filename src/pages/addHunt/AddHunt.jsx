import './AddHunt.css';
import InputFieldBasic from "../../components/inputFields/InputFieldBasic.jsx";
import TextOnlyButton from "../../components/button/TextOnlyButton/TextOnlyButton.jsx";
import {useContext, useState} from "react";
import RadioButton from "../../components/button/RadioButton.jsx";
import DoubleInput from "../../components/inputFields/DoubleInput.jsx";
import axios from "axios";
import {AuthContext} from "../../auth/AuthProvider.jsx";

function AddHunt() {
    const { auth } = useContext(AuthContext);

    const [previewUrl, setPreviewUrl] = useState('');
    const [error, setError] = useState('');
    const MAX_FILE_SIZE = 2_000_000;

    const [namePokemon, setNamePokemon] = useState('');
    const [dexId, setDexId] = useState('');
    const [nameGame, setNameGame] = useState('');
    const [nameMethod, setNameMethod] = useState('');
    const [huntEncounters, setHuntEncounters] = useState('');
    const [finishedDate, setFinishedDate] = useState('');
    const [file, addFile] = useState('');
    const [radioStatus, setRadioStatus] = useState("CURRENT");
    const [dateField, toggleDateField] = useState("text");

    const handleSelect = (status) => {
        setRadioStatus(status);
    };

    async function addHunt(e) {
        e.preventDefault();
        if (!namePokemon.trim()) {
            setError('Pokemon name is required');
            return;
        }
        if (!dexId || dexId <= 0) {
            setError('Valid DexID is required');
            return;
        }
        if (!nameGame.trim()) {
            setError('Game name is required');
            return;
        }
        if (!nameMethod.trim()) {
            setError('Hunt method is required');
            return;
        }

        try {
            const formData = new FormData();
            const huntData = {
                name: namePokemon.trim(),
                dexId: parseInt(dexId),
                usedGame: nameGame.trim(),
                huntMethod: nameMethod.trim(),
                encounters: parseInt(huntEncounters) || 0,
                huntStatus: radioStatus,
                finishDate: finishedDate || null
            };

            formData.append('data', new Blob([JSON.stringify(huntData)], { type: 'application/json' }));

            if (file) {
                formData.append('shinyImg', file);
            }

            console.log('data:', huntData);
            console.log('file:', file ? file.name : 'none');

            await auth.kc.updateToken(60);
            const response = await axios.post('http://localhost:8080/hunts', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${auth.kc.token}`
                },
            });

            console.log('Success:', response.data);

        } catch (e) {
            console.error('Full error:', e);
            if (e.response?.data) {
                console.error('Server error details:', e.response.data);
                setError(`Server error: ${JSON.stringify(e.response.data)}`);
            } else {
                setError('Failed to add hunt');
            }
        } finally {
            setNamePokemon('');
            setDexId('');
            setNameGame('');
            setNameMethod('');
            setHuntEncounters('');
            setFinishedDate('');
            addFile('');
            setPreviewUrl('');
            setRadioStatus('CURRENT');
            setError('');
        }
    }

    const handleFileChange = (e) => {
        setError('');

        if (e.target.files.length > 1) {
            setError("Only upload one GIF");
            setPreviewUrl('');
            return;
        }

        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        if (selectedFile.type !== "image/gif") {
            setError("Only GIF files are allowed");
            setPreviewUrl('');
            return;
        }

        if (selectedFile.size > MAX_FILE_SIZE) {
            setError("Files may not be bigger than 2MB");
            setPreviewUrl('');
            return;
        }

        addFile(selectedFile);
        setPreviewUrl(URL.createObjectURL(selectedFile));
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setError('');

        const selectedFile = e.dataTransfer.files[0];
        if (!selectedFile) return;

        if (selectedFile.type !== "image/gif") {
            setError("Only GIF files are allowed");
            setPreviewUrl('');
            return;
        }

        if (selectedFile.size > MAX_FILE_SIZE) {
            setError("Files may not be bigger than 2MB");
            setPreviewUrl('');
            return;
        }

        if (e.dataTransfer.files.length > 1) {
            setError("Only upload one GIF");
            setPreviewUrl('');
            return;
        }

        addFile(selectedFile);
        setPreviewUrl(URL.createObjectURL(selectedFile));
    };

    return (
        <>
            <div className="fullAddHuntPageBox">
                <div className="contentAddHuntBox">
                    <div className="pageTitle"><h1>ADD HUNT.</h1></div>
                    <form onSubmit={addHunt}>
                        <DoubleInput
                            typeField1="text"
                            placeholder1="Name Pokémon you are hunting"
                            id1="pokemon"
                            value1={namePokemon}
                            setInputValue1={setNamePokemon}
                            inputStyle="doubleInputBox"
                            typeField2="number"
                            placeholder2="# DexID"
                            id2="dexId"
                            maxNumber="1025"
                            minNumber="1"
                            value2={dexId}
                            setInputValue2={setDexId}
                        />

                        <InputFieldBasic
                            typeField="text"
                            placeholder="What game are you hunting in?"
                            inputStyle="baseInput"
                            id="game"
                            value={nameGame}
                            setInputValue={setNameGame}
                        />
                        <InputFieldBasic
                            typeField="text"
                            placeholder="What method are you hunting with?"
                            inputStyle="baseInput"
                            id="method"
                            value={nameMethod}
                            setInputValue={setNameMethod}
                        />
                        <div className="radioBox">
                            <span className="radioBasis">
                                <RadioButton
                                    radioName="huntStatus"
                                    radioOption="Finished"
                                    onClick={() => handleSelect('FINISHED')}
                                />
                            </span>
                            <span className="radioBasis">
                                <RadioButton
                                    radioName="huntStatus"
                                    radioOption="Current"
                                    defaultChecked="true"
                                    onClick={() => handleSelect('CURRENT')}
                                />
                            </span>
                            <span className="radioBasis">
                                <RadioButton
                                    radioName="huntStatus"
                                    radioOption="Future"
                                    onClick={() => handleSelect('FUTURE')}
                                />
                            </span>
                        </div>
                        {radioStatus !== "FUTURE" ?
                            <InputFieldBasic
                                typeField="number"
                                placeholder="Amount of encounters"
                                inputStyle="baseInput"
                                id="encounters"
                                value={huntEncounters}
                                setInputValue={setHuntEncounters}
                            /> : <p></p>}
                        {radioStatus === "FINISHED" ?
                            <InputFieldBasic
                                placeholder="Finished date"
                                typeField={dateField}
                                inputStyle="baseInput"
                                id="FinishedDate"
                                value={finishedDate}
                                onClick={() => toggleDateField("date")}
                                setInputValue={setFinishedDate}
                            /> : <p></p>}
                        <label
                            className="uploadBox"
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleDrop}
                            id="shinyImg"
                        >
                            {previewUrl ? (
                                <img src={previewUrl} alt="Preview GIF" />
                            ) : (
                                <p>Click or drag & drop your GIF here.</p>
                            )}

                            <input
                                type="file"
                                accept="image/gif"
                                onChange={handleFileChange}
                                id="shinyImg"
                                hidden
                            />
                        </label>
                        <div className="errorPlace">{error && <p className="uploadError">{error}</p>}</div>

                        <div className="buttonBox addHuntButton">
                            <TextOnlyButton
                                type="submit"
                                buttonStyle="greenButton baseButton"
                                buttonName="Add hunt" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddHunt;