import './SquareCard.css';

import React, {useContext, useMemo, useState} from "react";

import FlipIcon from '../../../assets/Icons/SVG/FlipIcon.svg';
import AvatarIcon from "../../avatar/AvatarIcon.jsx";
import DeleteIcon from "../../../assets/Icons/SVG/DeleteIcon.svg";
import EditIconWhite from "../../../assets/Icons/SVG/EditIconWhite.svg";
import NotShinyIcon from '../../../assets/Icons/SVG/NotShinyYet.svg'
import ShinyIcon from "../../../assets/Icons/SVG/ShinyIcon.svg";
import {AuthContext} from "../../../auth/AuthProvider.jsx";

function SquareCard({hunt, onToolClick}) {

    const { auth } = useContext(AuthContext);
    const isAdmin = auth.kc?.tokenParsed?.resource_access?.galacticEndgame?.roles?.includes("ROLE_ADMIN");
    const isOwner = auth.kc?.tokenParsed?.preferred_username === hunt.user.username;

    const cardClasses = [
        'squareBackground1',
        'squareBackground2',
        'squareBackground3',
        'squareBackground4',
    ];

    const USER_TOOLS = {
        DELETE: 'delete',
        EDIT: 'edit'
    };

    const HUNT_STATUS_MAP = {
        FINISHED: { label: 'Recently hunted', icon: ShinyIcon },
        CURRENT: { label: 'Hunted right now', icon: NotShinyIcon },
        FUTURE: { label: 'To hunt', icon: NotShinyIcon }
    };

    const status = HUNT_STATUS_MAP[hunt?.huntStatus];

    function getRandomClass(classes) {
        // eslint-disable-next-line react-hooks/purity
        const randomIndex = Math.floor(Math.random() * classes.length);
        return classes[randomIndex];
    }

    const randomBackground = useMemo(() => getRandomClass(cardClasses), []);
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="flipCardScene">
            <div className={`flipCard ${isFlipped ? "isFlipped" : ""}`}>

                <div className="flipCardFace flipCardFront">
                    <div className="squareBackground">
                        <div className={`squareBackgroundLayer ${randomBackground}`}/>
                        <article className="squareCard">
                            <div className="cardBorder">
                                <div className="huntDetails">
                                    <div className="statusBox">
                                        <h3>{hunt.huntStatus}</h3>
                                        <div className="statusIcon">
                                            <img src={status?.icon} alt={status?.label}/>
                                        </div>
                                    </div>
                                    <div className="huntContainer">
                                        <div className="huntGIFSizer">
                                            <img src={`http://localhost:8080${hunt.pokemon.shinyImg}`} alt={hunt.pokemon.name}/>
                                        </div>
                                    </div>

                                    <div className="infoContainer">
                                        <h2>{hunt.pokemon.name}</h2>
                                        <p>#{hunt.pokemon.dexId}</p>
                                    </div>
                                    <div className="flipBox" onClick={() => setIsFlipped(!isFlipped)}><img src={FlipIcon} alt="flip icon"/></div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="flipCardFace flipCardBack">
                    <div className="squareBackground">
                        <div className={`squareBackgroundLayerBack ${randomBackground}`}/>
                        <article className="squareCard">
                            <div className="cardBorder">
                                <div className="huntDetailsBack">
                                    <div className="statusBoxBack">
                                        <div className="profileRedirection">
                                            <AvatarIcon
                                            avatarSize="normal"
                                            user={hunt.user}
                                            />
                                            <h3>{status?.label} by {hunt.user.username}</h3>
                                        </div>
                                    </div>
                                    <div className="huntContainerBack">
                                        {hunt.huntStatus === 'FUTURE' ? <p>No {hunt.huntMethod} encounters yet</p> :
                                            <h2>{hunt.huntStatus === 'FINISHED' ? 'Hunt took' : 'Currently'} {hunt.encounters} {hunt.huntMethod} encounters</h2>}
                                        {hunt.huntStatus === 'FINISHED' ? <p>Hunted in {hunt?.usedGame}</p> : <p>Hunting in {hunt?.usedGame}</p>}
                                    </div>

                                    <div className="infoContainerBack">
                                        {hunt.huntStatus === 'FUTURE' ? <p>Hunt not yet started</p> :
                                            <p> Started: {hunt.createDate}</p>}
                                        {hunt.huntStatus === 'FINISHED' ?
                                            <p>Finished: {hunt.finishDate}</p> :
                                            <p>{hunt.createDate === '' ? '' : 'Not yet finished'}</p>}
                                    </div>
                                    {(isAdmin || isOwner) && (
                                    <div className="toolIconBoxSC">
                                        <div className="iconSizerSC"
                                             onClick={() => onToolClick(USER_TOOLS.DELETE, hunt)}><img src={DeleteIcon} alt="Delete icon"/>
                                        </div>
                                        <div className="iconSizerSC" onClick={() => onToolClick(USER_TOOLS.EDIT, hunt)}>
                                            <img src={EditIconWhite} alt="Edit icon"/></div>
                                    </div>)}
                                    <div className="flipBoxBack" onClick={() => setIsFlipped(!isFlipped)}>
                                        <div className="iconSizerSQ" ><img src={FlipIcon} alt="flip icon"/></div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SquareCard;
