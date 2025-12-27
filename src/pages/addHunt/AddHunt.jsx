import './AddHunt.css';
import InputFieldBasic from "../../components/inputFields/InputFieldBasic.jsx";
import TextOnlyButton from "../../components/button/TextOnlyButton/TextOnlyButton.jsx";
import {useState} from "react";

function AddHunt() {

    const [previewUrl, setPreviewUrl] = useState(null);
    const [error, setError] = useState(null);
    const MAX_FILE_SIZE = 1_100_000;

    const handleFileChange = (e) => {
        setError(null);

        if (e.target.files.length > 1) {
            setError("Only upload one GIF");
            setPreviewUrl(null);
            return;
        }

        const file = e.target.files[0];
        if (!file) return;

        if (file.type !== "image/gif") {
            setError("Only GIF files are allowed");
            setPreviewUrl(null);
            return;
        }

        if (file.size > MAX_FILE_SIZE) {
            setError("Files may not be bigger than 1.1MB");
            setPreviewUrl(null);
            return;
        }

        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setError(null);

        const file = e.dataTransfer.files[0];
        if (!file) return;

        if (file.type !== "image/gif") {
            setError("Only GIF files are allowed");
            setPreviewUrl(null);
            return;
        }

        if (file.size > MAX_FILE_SIZE) {
            setError("Files may not be bigger than 1.1MB");
            setPreviewUrl(null);
            return;
        }

        if (e.dataTransfer.files.length > 1) {
            setError("Only upload one GIF");
            setPreviewUrl(null);
            return;
        }

        setPreviewUrl(URL.createObjectURL(file));
    };

    return (
        <>
            <div className="fullPageBox">
                <div className="contentBox">
                    <div className="pageTitle"><h1>ADD HUNT.</h1></div>
                    <form action="">
                        <InputFieldBasic
                            typeField="text"
                            placeholder="Name Pokémon you are hunting"
                            inputStyle="baseInput"
                        />
                        <InputFieldBasic
                            typeField="text"
                            placeholder="What game are you hunting in?"
                            inputStyle="baseInput"
                        />
                        <InputFieldBasic
                            typeField="text"
                            placeholder="What method are you hunting with?"
                            inputStyle="baseInput"
                        />

                        <label
                            className="uploadBox"
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleDrop}
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
                                hidden
                            />
                        </label>
                        <div className="errorPlace">{error && <p className="uploadError">{error}</p>}</div>


                        <div className="buttonBox addHuntButton">
                            <TextOnlyButton
                                buttonStyle="greenButton baseButton"
                                buttonName="Add hunt"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddHunt;
