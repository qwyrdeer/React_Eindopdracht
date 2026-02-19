import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import PopupTools from "../../components/popupTools/PopupTools.jsx";
import AvatarIcon from "../../components/avatar/AvatarIcon.jsx";
import EditIcon from "../../assets/Icons/SVG/EditIcon.svg";
import TextOnlyButton from "../../components/button/TextOnlyButton/TextOnlyButton.jsx";
import ShinyIcon from "../../assets/Icons/SVG/ShinyIcon.svg";
import NotShinyIcon from "../../assets/Icons/SVG/NotShinyYet.svg";
import HorizontalCardMini from "../../components/huntCards/horizontalCard/HorizontalCardMini/HorizontalCardMini.jsx";

function UserProfile() {
    const { username } = useParams();

    const { auth } = useContext(AuthContext);
    const isAdmin = auth.kc?.tokenParsed?.resource_access?.galacticEndgame?.roles?.includes("ROLE_ADMIN");
    const isOwner = auth.kc?.tokenParsed?.preferred_username === username;

    const [user, setUser] = useState(null);

    const [selectStatus, setSelectStatus] = useState('Current');
    const Status = Object.freeze({
        PAST: {label: 'Recently hunted', icon: ShinyIcon},
        CURRENT: {label: 'Hunted right now', icon: NotShinyIcon},
        FUTURE: {label: 'To hunt', icon: NotShinyIcon}
    });

    const [popupOpen, setPopupOpen] = useState(false);
    const [activeTool, setActiveTool] = useState('');
    const [activeTarget, setActiveTarget] = useState('');
    const [activeTargetType, setActiveTargetType] = useState(null);

    const USER_TOOLS = {
        DELETE: 'delete',
        EDIT: 'edit'
    };

    const openPopup = (tool, targetType, target) => {
        setActiveTool(tool);
        setActiveTargetType(targetType);
        setActiveTarget(target);
        setPopupOpen(true);
    };

    const handleSelect = (status) => {
        setSelectStatus(status);
    };


    useEffect(() => {
        async function fetchUser() {
            await auth.kc.updateToken(60);
            const response = await axios.get(
                `http://localhost:8080/users/username/${username}`,
                {
                    headers: {
                        Authorization: `Bearer ${auth.kc.token}`
                    }
                }
            );
            console.log(response.data)
            setUser(response.data);
        }
        fetchUser();
    }, [username, auth.kc]);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <div><h1>profile of {user?.username}.</h1><PopupTools
                open={popupOpen}
                toolManager={activeTool}
                target={activeTarget}
                targetType={activeTargetType}
                onClose={() => setPopupOpen(false)}
            /></div>

            <div className="fullProfilePageBox">
                <div className="profileBox">
                    <div className="userBox">
                        <AvatarIcon
                            user={user}
                            avatarSize='big'
                        />
                    </div>

                    <div className="textFieldsBox">
                        <div className="basicTextbox"><p>{user?.profile?.profileText}</p></div>
                        <div className="basicTextbox"><p>{user?.profile?.twitchUrl}</p></div>
                        <div className="basicTextbox"><p>{user?.profile?.youtubeUrl}</p></div>
                        <div className="basicTextbox"><p>{user?.profile?.discordUrl}</p></div>

                        {(isAdmin || isOwner) && (
                        <div className="editProfileBox"><img src={EditIcon} alt="Edit icon" onClick={() => openPopup(USER_TOOLS.EDIT, 'profile', user)}/></div>)}
                    </div>
                </div>
                <div className="huntProfileContainer">
                    <div className="huntBox">
                        <div><h1>my hunts.</h1></div>
                        <div className='buttonHuntBox'>
                            <TextOnlyButton
                                buttonName='Finished'
                                buttonStyle={`greenButton ${selectStatus === 'Finished' ? 'active' : ''}`}
                                onClick={() => handleSelect('Finished')}
                                type='button'/>
                            <TextOnlyButton
                                buttonName='Current'
                                buttonStyle={`greenButton ${selectStatus === 'Current' ? 'active' : ''}`}
                                onClick={() => handleSelect('Current')}
                                type='button'/>
                            <TextOnlyButton
                                buttonName='Future'
                                buttonStyle={`greenButton ${selectStatus === 'Future' ? 'active' : ''}`}
                                onClick={() => handleSelect('Future')}
                                type='button'/>
                        </div>

                        <div className="personalHunts">
                            {user?.hunts?.map(hunts => (
                                <div key={hunts?.id} className="personalHuntsBox">
                                    <HorizontalCardMini
                                        hunt={hunts}
                                        onToolClick={(tool, huntTarget) => {
                                            openPopup(tool, 'hunt', huntTarget);
                                        }}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;