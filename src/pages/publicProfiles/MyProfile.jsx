import './MyProfile.css';
import TextOnlyButton from "../../components/button/TextOnlyButton/TextOnlyButton.jsx";
import HorizontalCardMini from "../../components/huntCards/horizontalCard/HorizontalCardMini/HorizontalCardMini.jsx";
import AvatarIcon from "../../components/avatar/AvatarIcon.jsx";
import {useEffect, useState} from "react";
import PopupTools from "../../components/popupTools/PopupTools.jsx";
import ShinyIcon from "../../assets/Icons/SVG/ShinyIcon.svg";
import NotShinyIcon from "../../assets/Icons/SVG/NotShinyYet.svg";
import axios from "axios";
import keycloak from "../../auth/Keycloak.js";

function MyProfile() {

    const Status = Object.freeze({
        PAST: {label: 'Recently hunted', icon: ShinyIcon},
        CURRENT: {label: 'Hunted right now', icon: NotShinyIcon},
        FUTURE: {label: 'To hunt', icon: NotShinyIcon}
    });

    const [currentUser, setCurrentUser] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchUser() {
            try {
                setError(false);
                const response = await axios.get("http://localhost:8080/users/me", { headers: {
                        "Authorization":  "Bearer " + keycloak.token, signal: controller.signal
                    }});
                setCurrentUser(response.data.results);
            } catch (e) {
                console.error(e);
                setError(true);
            }
        }

        fetchUser();
        return function cleanup() {
            controller.abort();
        }
    }, );


    const [selectStatus, setSelectStatus] = useState('Current');

    const [popupOpen, setPopupOpen] = useState(false);
    const [activeTool, setActiveTool] = useState('');
    const [activeHunt, setActiveHunt] = useState('');

    const handleSelect = (status) => {
        setSelectStatus(status);
    };

    return (
        <>
            <div><h1>HEY username.</h1><PopupTools
                open={popupOpen}
                toolManager={activeTool}
                hunt={activeHunt}
                onClose={() => setPopupOpen(false)}/></div>

            <div className="fullProfilePageBox">
                <div className="profileBox">
                    <div className="userBox">
                        <AvatarIcon
                            user={currentUser}
                            avatarSize='big'
                        />
                    </div>
                    <div className="textFieldsBox">
                        <div className="basicTextbox"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium asperiores excepturi inventore ipsa nesciunt odio optio reiciendis sequi veniam?
                            Ab culpa, facere illum molestiae necessitatibus unde. Labore placeat repellendus
                            voluptates!</p></div>
                        <div className="basicTextbox"><p>Textbox</p></div>
                        <div className="basicTextbox"><p>Textbox</p></div>
                        <div className="basicTextbox"><p>Textbox</p></div>
                    </div>
                </div>
                <div className="huntProfileContainer">
                    <div className="huntBox">
                        <div><h1>my hunts.</h1></div>
                        <div className='buttonHuntBox'>
                            <TextOnlyButton
                                buttonName='Past'
                                buttonStyle={`greenButton ${selectStatus === 'Past' ? 'active' : ''}`}
                                onClick={() => handleSelect('Past')}
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
                            {currentUser?.map(hunts => (
                                <div key={hunts?.id} className="personalHuntsBox">
                                    <HorizontalCardMini
                                        hunt={hunts}
                                        onToolClick={(toolManager, hunts) => {
                                            setActiveTool(toolManager);
                                            setActiveHunt(hunts);
                                            setPopupOpen(true);
                                        }}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            </>
            );
            }

            export default MyProfile;
