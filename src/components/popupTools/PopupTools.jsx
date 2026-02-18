import './PopupTools.css';
import React, {useContext, useEffect, useState} from "react";
import InputFieldBasic from "../inputFields/InputFieldBasic.jsx";
import AvatarIcon from "../avatar/AvatarIcon.jsx";
import TextOnlyButton from "../button/TextOnlyButton/TextOnlyButton.jsx";
import axios from "axios";
import {AuthContext} from "../../auth/AuthProvider.jsx";

function PopupTools({ open, onClose, toolManager, target, targetType }) {

    const { auth } = useContext(AuthContext);

    const [profileText, setProfileText] = useState('');
    const [twitchUrl, setTwitchUrl] = useState('');
    const [youtubeUrl, setYoutubeUrl] = useState('');
    const [discordUrl, setDiscordUrl] = useState('');

    const [editGame, setEditGame] = useState('');
    const [editEncounters, setEditEncounters] = useState('');
    const [editMethod, setEditMethod] = useState('');
    const [editStatus, setEditStatus] = useState('');

    const [previewUrl, setPreviewUrl] = useState('');
    const [file, addFile] = useState('');
    const [error, setError] = useState('');
    const MAX_FILE_SIZE = 2_000_000;

    const handleFileChange = (e) => {
        setError('');

        if (e.target.files.length > 1) {
            setError("Only upload one image");
            setPreviewUrl('');
            return;
        }

        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        // if (selectedFile.type !== "image/jpg") {
        //     setError("Only jpg files are allowed");
        //     setPreviewUrl('');
        //     return;
        // }

        if (selectedFile.size > MAX_FILE_SIZE) {
            setError("Files may not be bigger than 2MB");
            setPreviewUrl('');
            return;
        }

        addFile(selectedFile);
        setPreviewUrl(URL.createObjectURL(selectedFile));
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {

        if (!target) return;

        if (targetType === 'user') {
            setProfileText(target.profile?.profileText || '');
            setTwitchUrl(target.profile?.twitchUrl || '');
            setYoutubeUrl(target.profile?.youtubeUrl || '');
            setDiscordUrl(target.profile?.discordUrl || '');
        }

        if (targetType === 'hunt') {
            setEditGame(target.usedGame || '');
            setEditEncounters(target.encounters || '');
            setEditMethod(target.huntMethod || '');
            setEditStatus(target.huntStatus || '');
        }

    }, [target, targetType]);

    async function addAvatar(e) {
        e.preventDefault();

        try {
            const formData = new FormData();

            if (file) {
                formData.append('file', file);
            }

            console.log('file:', file ? file.name : 'none');

            await auth.kc.updateToken(60);
            const response = await axios.post('http://localhost:8080/users/me/avatar', formData, {
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
                setError('Failed to upload avatar');
            }
        } finally {
            addFile('');
            setPreviewUrl('');
            setError('');
        }
    }

    if (!open) return null;

    return (
        <>
            <div>
                <div className="popupScreenfiller" onClick={onClose}></div>

                <div className="popupBox">

                    {toolManager === 'edit' && targetType === 'user' && (
                        <div>
                            <h2>Edit profile: {target?.username}</h2>

                            <form onSubmit={addAvatar}>
                            <label
                                className='popAvatarBox'
                                id="userAvatar"
                            >
                                {previewUrl ? (
                                    <img src={previewUrl} alt="Preview avatar" />
                                ) : (
                                    <p>Click to select your avatar.</p>
                                )}

                                <input
                                    type="file"
                                    accept="image/jpg"
                                    onChange={handleFileChange}
                                    id="userAvatar"
                                    hidden
                                />
                            </label>

                            <TextOnlyButton
                                type="submit"
                                buttonStyle="greenButton baseButton"
                                buttonName="new avatar" />

                            </form>

                            <InputFieldBasic
                                typeField="text"
                                placeholder={target?.profile?.profileText}
                                inputStyle="baseInput"
                                id="profileText"
                                value={profileText}
                                setInputValue={setProfileText}
                            />
                            <InputFieldBasic
                                typeField="text"
                                placeholder={target?.profile?.twitchUrl}
                                inputStyle="baseInput"
                                id="profileText"
                                value={twitchUrl}
                                setInputValue={setTwitchUrl}
                            />
                            <InputFieldBasic
                                typeField="text"
                                placeholder={target?.profile?.youtubeUrl}
                                inputStyle="baseInput"
                                id="profileText"
                                value={youtubeUrl}
                                setInputValue={setYoutubeUrl}
                            />
                            <InputFieldBasic
                                typeField="text"
                                placeholder={target?.profile?.discordUrl}
                                inputStyle="baseInput"
                                id="profileText"
                                value={discordUrl}
                                setInputValue={setDiscordUrl}
                            />
                            <div className="errorPlace">{error && <p className="uploadError">{error}</p>}</div>

                            {/*Put naar: http://localhost:8080/users/profile/update/{userId}*/}

                            <TextOnlyButton
                                type="submit"
                                buttonStyle="greenButton baseButton"
                                buttonName="change profile" />
                        </div>
                    )}

                    {toolManager === 'edit' && targetType === 'hunt' && (
                        <div>
                            <h2>Edit hunt: {target?.pokemon?.name}</h2>
                            <InputFieldBasic
                                typeField="text"
                                placeholder={target?.usedGame}
                                inputStyle="baseInput"
                                id="profileText"
                                value={editGame}
                                setInputValue={setEditGame}
                            />
                            <InputFieldBasic
                                typeField="text"
                                placeholder={target?.encounters}
                                inputStyle="baseInput"
                                id="profileText"
                                value={editEncounters}
                                setInputValue={setEditEncounters}
                            />
                            <InputFieldBasic
                                typeField="text"
                                placeholder={target?.huntMethod}
                                inputStyle="baseInput"
                                id="profileText"
                                value={editMethod}
                                setInputValue={setEditMethod}
                            />
                            <div className="errorPlace">{error && <p className="uploadError">{error}</p>}</div>

                            <TextOnlyButton
                                type="submit"
                                buttonStyle="greenButton baseButton"
                                buttonName="edit hunt" />
                        </div>
                    )}

                    {toolManager === 'delete' && targetType === 'hunt' && (
                        <p>Delete hunt: {target?.pokemon?.name}?</p>
                    )}

                </div>
            </div>
        </>
    );

}

export default PopupTools;
