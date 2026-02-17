import './SquareCard.css';

import React, {useMemo, useState} from "react";

import FlipIcon from '../../../assets/Icons/SVG/FlipIcon.svg';
import AvatarIcon from "../../avatar/AvatarIcon.jsx";
import DeleteIcon from "../../../assets/Icons/SVG/DeleteIcon.svg";
import EditIconWhite from "../../../assets/Icons/SVG/EditIconWhite.svg";
import NotShinyIcon from '../../../assets/Icons/SVG/NotShinyYet.svg'
import ShinyIcon from "../../../assets/Icons/SVG/ShinyIcon.svg";

function SquareCard({hunt, onToolClick}) {

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
        PAST: { label: 'Recently hunted', icon: ShinyIcon },
        CURRENT: { label: 'Hunted right now', icon: NotShinyIcon },
        FUTURE: { label: 'To hunt', icon: NotShinyIcon }
    };

    const status = HUNT_STATUS_MAP[hunt.status];

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
                                        <h3>{hunt.huntStatus.label}</h3>
                                        <div className="statusIcon">
                                            <img src={status.icon} alt={hunt.huntStatus.label}/>
                                        </div>
                                    </div>
                                    <div className="huntContainer">
                                        <div className="huntGIFSizer">
                                            <img src={hunt.pokemon.shinyImg} alt={hunt.pokemon.name}/>
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
                                        <div className="profileRedirection"><AvatarIcon
                                            avatarSize="normal"
                                            user={hunt.userId}
                                            />
                                            <h3>{status.label} by {hunt.username}</h3>
                                        </div>
                                    </div>
                                    <div className="huntContainerBack">
                                        {hunt.createDate === '' ? <p>No encounters yet</p> :
                                            <h2>{hunt.finishDate === '' ? 'Currently' : 'Hunt took'} {hunt.encounters} encounters</h2>}
                                        {hunt.finishDate === '' ? <p>Hunting in {hunt.usedGame}</p> :
                                            <p>Hunted in {hunt.usedGame}</p>}
                                    </div>

                                    <div className="infoContainerBack">
                                        {hunt.hunt.createDate === '' ? <p>Hunt not yet started</p> :
                                            <p> Started: {hunt.createDate}</p>}
                                        {hunt.finishDate === '' ?
                                            <p>{hunt.createDate === '' ? '' : 'Not yet finished'}</p> :
                                            <p>Finished: {hunt.finishDate}</p>}
                                    </div>
                                    <div className="toolIconBoxSC">
                                        <div className="iconSizerSC"
                                             onClick={() => onToolClick(USER_TOOLS.DELETE, hunt)}><img src={DeleteIcon}
                                                                                                       alt="Delete icon"/>
                                        </div>
                                        <div className="iconSizerSC" onClick={() => onToolClick(USER_TOOLS.EDIT, hunt)}>
                                            <img src={EditIconWhite} alt="Edit icon"/></div>
                                    </div>
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
