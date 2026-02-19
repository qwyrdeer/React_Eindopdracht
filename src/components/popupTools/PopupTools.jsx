import './PopupTools.css';
import React, {useContext, useEffect, useState} from "react";
import InputFieldBasic from "../inputFields/InputFieldBasic.jsx";
import AvatarIcon from "../avatar/AvatarIcon.jsx";
import TextOnlyButton from "../button/TextOnlyButton/TextOnlyButton.jsx";
import axios from "axios";
import {AuthContext} from "../../auth/AuthProvider.jsx";
import RadioButton from "../button/RadioButton.jsx";

function PopupTools({open, onClose, toolManager, target, targetType}) {

    const {auth} = useContext(AuthContext);

    const [profileText, setProfileText] = useState('');
    const [twitchUrl, setTwitchUrl] = useState('');
    const [youtubeUrl, setYoutubeUrl] = useState('');
    const [discordUrl, setDiscordUrl] = useState('');

    const [editGame, setEditGame] = useState('');
    const [editEncounters, setEditEncounters] = useState('');
    const [editMethod, setEditMethod] = useState('');
    const [editRadioStatus, setEditRadioStatus] = useState('');
    const [editFinishedDate, setEditFinishedDate] = useState('');
    const [dateField, toggleDateField] = useState("text");

    const [editUsername, setEditUsername] = useState('');

    const [permanentDelete, setPermanentDelete] = useState(false);

    const handleSelect = (status) => {
        setEditRadioStatus(status);
    };

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

        if (selectedFile.type !== "image/jpeg") {
            setError("Only jpg files are allowed");
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

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {

        if (!target) return;

        if (targetType === 'profile') {
            setProfileText(target.profile?.profileText || ' ');
            setTwitchUrl(target.profile?.twitchUrl || ' ');
            setYoutubeUrl(target.profile?.youtubeUrl || ' ');
            setDiscordUrl(target.profile?.discordUrl || ' ');
        }

        if (targetType === 'user') {
            setEditUsername(target.user?.username);
        }

        if (targetType === 'hunt') {
            setEditGame(target.usedGame || '');
            setEditEncounters(target.encounters || '');
            setEditMethod(target.huntMethod || '');
            setEditRadioStatus(target.huntStatus || '');
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

    async function editProfile(e) {
        e.preventDefault();

        try {
            const profileData = {
                profileText: profileText.trim(),
                twitchUrl: twitchUrl.trim(),
                youtubeUrl: youtubeUrl.trim(),
                discordUrl: discordUrl.trim(),
            };
            console.log('data:', profileData);

            await auth.kc.updateToken(60);
            const response = await axios.put(`http://localhost:8080/users/profile/update/${target.userId}`, profileData, {
                headers: {
                    "Content-Type": "application/json",
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
                setError('Failed to update profile');
            }

        }
    }

    async function editHunt(e) {
        e.preventDefault();

        try {
            const huntData = {
                usedGame: editGame.trim(),
                huntMethod: editMethod.trim(),
                encounters: parseInt(editEncounters) || 0,
                huntStatus: editRadioStatus,
                finishDate: editFinishedDate || null
            };
            console.log('data:', huntData);

            await auth.kc.updateToken(60);
            const response = await axios.put(`http://localhost:8080/hunts/${target.id}`, huntData, {
                headers: {
                    "Content-Type": "application/json",
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
                setError('Failed to update profile');
            }

        }
    }

    async function deleteHunt(e) {
        e.preventDefault();
        setPermanentDelete(false)

        try {
            await auth.kc.updateToken(60);
            const response = await axios.delete(`http://localhost:8080/hunts/${target.id}`, {
                headers: {
                    "Authorization": `Bearer ${auth.kc.token}`
                },
            });
            console.log('Hunt deleted successfully:', response.data);

        } catch (e) {
            console.error('Full error:', e);
            if (e.response?.data) {
                console.error('Server error details:', e.response.data);
                setError(`Server error: ${JSON.stringify(e.response.data)}`);
            } else {
                setError('Failed to delete hunt');
            }
        }
    }

    async function deleteUser(e) {
        e.preventDefault();
        setPermanentDelete(false)

        try {
            await auth.kc.updateToken(60);
            const response = await axios.delete(`http://localhost:8080/users/id/${target.userId}`, {
                headers: {
                    "Authorization": `Bearer ${auth.kc.token}`
                },
            });
            console.log('User deleted successfully:', response.data);

        } catch (e) {
            console.error('Full error:', e);
            if (e.response?.data) {
                console.error('Server error details:', e.response.data);
                setError(`Server error: ${JSON.stringify(e.response.data)}`);
            } else {
                setError('Failed to delete hunt');
            }
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
                        </div>
                    )}

                    {toolManager === 'edit' && targetType === 'profile' && (
                        <div>
                            <h2>Edit profile: {target?.username}</h2>

                            <form onSubmit={addAvatar}>
                                <label
                                    className='popAvatarBox'
                                    id="userAvatar"
                                >
                                    {previewUrl ? (
                                        <img src={previewUrl} alt="Preview avatar"/>
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
                                    buttonName="new avatar"
                                    onClick={() => window.location.reload()}/>

                            </form>

                            <form onSubmit={editProfile}>
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

                                <TextOnlyButton
                                    type="submit"
                                    buttonStyle="greenButton baseButton"
                                    buttonName="edit profile"
                                    onClick={() => window.location.reload()}/>
                            </form>
                        </div>
                    )}

                    {toolManager === 'edit' && targetType === 'hunt' && (
                        <div>
                            <h2>Edit hunt: {target?.pokemon?.name}</h2>
                            <form onSubmit={editHunt}>
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
                                    placeholder={target?.huntMethod}
                                    inputStyle="baseInput"
                                    id="profileText"
                                    value={editMethod}
                                    setInputValue={setEditMethod}
                                />
                                <div className="radioBox">
                            <span className="radioBasis">
                                <RadioButton
                                    radioName="huntStatus"
                                    radioOption="Finished"
                                    defaultChecked={target.huntStatus === 'FINISHED'}
                                    onClick={() => handleSelect('FINISHED')}
                                />
                            </span>
                                    <span className="radioBasis">
                                <RadioButton
                                    radioName="huntStatus"
                                    radioOption="Current"
                                    defaultChecked={target.huntStatus === 'CURRENT'}
                                    onClick={() => handleSelect('CURRENT')}
                                />
                            </span>
                                    <span className="radioBasis">
                                <RadioButton
                                    radioName="huntStatus"
                                    radioOption="Future"
                                    defaultChecked={target.huntStatus === 'FUTURE'}
                                    onClick={() => handleSelect('FUTURE')}
                                />
                            </span>
                                </div>
                                {editRadioStatus !== "FUTURE" ?
                                    <InputFieldBasic
                                        typeField="text"
                                        placeholder={target?.encounters}
                                        inputStyle="baseInput"
                                        id="profileText"
                                        value={editEncounters}
                                        setInputValue={setEditEncounters}
                                    /> : <p></p>}
                                {editRadioStatus === "FINISHED" ?
                                    <InputFieldBasic
                                        placeholder="Finished date"
                                        typeField={dateField}
                                        inputStyle="baseInput"
                                        id="FinishDate"
                                        value={editFinishedDate}
                                        onClick={() => toggleDateField("date")}
                                        setInputValue={setEditFinishedDate}
                                    /> : <p></p>}
                                <div className="errorPlace">{error && <p className="uploadError">{error}</p>}</div>

                                <TextOnlyButton
                                    type="submit"
                                    buttonStyle="greenButton baseButton"
                                    buttonName="edit hunt"
                                    onClick={() => window.location.reload()}/>
                            </form>
                        </div>
                    )}

                    {toolManager === 'delete' && targetType === 'hunt' && (
                        <div>
                            <p>You're about to delete the hunt on {target?.pokemon?.name}</p>
                            <p>Are you sure you want to continue?</p>
                            <form onSubmit={deleteHunt}>
                                <TextOnlyButton
                                    type="button"
                                    buttonStyle="greenButton baseButton"
                                    buttonName="yes"
                                    onClick={() => setPermanentDelete(true)}/>
                                {permanentDelete ? <div>
                                    <TextOnlyButton
                                        type="submit"
                                        buttonStyle="greenButton baseButton"
                                        buttonName="delete permanent"
                                        onClick={() => window.location.reload()}/>

                                </div> : <p></p>}
                            </form>
                        </div>
                    )}

                    {toolManager === 'delete' && targetType === 'user' && (
                        <div>
                            <p>You're about to delete user: {target?.username}?</p>
                            <p>Are you sure you want to continue?</p>
                            <form onSubmit={deleteUser}>
                                <TextOnlyButton
                                    type="button"
                                    buttonStyle="greenButton baseButton"
                                    buttonName="yes"
                                    onClick={() => setPermanentDelete(true)}/>
                                {permanentDelete ? <div>
                                    <TextOnlyButton
                                        type="submit"
                                        buttonStyle="greenButton baseButton"
                                        buttonName="delete permanent"
                                        onClick={() => window.location.reload()}/>
                                </div> : <p></p>}
                            </form>
                        </div>
                    )}


                </div>
            </div>
        </>
    );

}

export default PopupTools;
