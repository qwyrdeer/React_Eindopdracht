import './HorizontalCardMini.css';
import React, {useContext, useMemo} from "react";
import DeleteIcon from "../../../../assets/Icons/SVG/DeleteIcon.svg";
import EditIconWhite from "../../../../assets/Icons/SVG/EditIconWhite.svg";
import ShinyIcon from "../../../../assets/Icons/SVG/ShinyIcon.svg";
import NotShinyIcon from "../../../../assets/Icons/SVG/NotShinyYet.svg";
import {AuthContext} from "../../../../auth/AuthProvider.jsx";

function HorizontalCardMini({hunt, onToolClick}) {

    const { auth } = useContext(AuthContext);
    const isAdmin = auth.kc?.tokenParsed?.resource_access?.galacticEndgame?.roles?.includes("ROLE_ADMIN");
    const isOwner = auth.kc?.tokenParsed?.preferred_username === hunt.user.username;


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

    const cardClasses = [
        'horizontalBackground1',
        'horizontalBackground2',
    ];

    function getRandomClass(classes) {
        // eslint-disable-next-line react-hooks/purity
        const randomIndex = Math.floor(Math.random() * classes.length);
        return classes[randomIndex];
    }


    const randomHBackground = useMemo(() => getRandomClass(cardClasses), []);

    return (
        <>
            <div className={`horizontalMiniBackground ${randomHBackground}`}>
                <article className='horizontalMiniCard'>
                    <div className="cardMiniBorder">
                        <div className="cardHuntBox">
                        <div className="huntBoxPokemon">
                            <div className="statusBox">
                                <h3>{hunt.huntStatus}</h3>
                                <div className="statusIcon">
                                    <img src={status?.icon} alt={status?.label}/>
                                </div>
                            </div>
                            <div className="huntGIFSizer">
                                <img src={`http://localhost:8080${hunt.pokemon.shinyImg}`} alt={hunt.pokemon.name}/>
                            </div>
                            <h2>{hunt.pokemon.name}</h2>
                            <p>#{hunt.pokemon.dexId}</p>
                        </div>
                        <div className="huntBoxHuntInfo">
                            <div className="huntContainerBack">
                                {hunt.huntStatus === 'FUTURE' ? <p>No encounters yet</p> :
                                    <h2>{hunt.huntStatus === 'FINISHED' ? 'Hunt took' : 'Currently'} {hunt.encounters} encounters</h2>}
                                {hunt.huntStatus === 'FINISHED' ? <p>Hunted in {hunt?.usedGame}</p> : <p>Hunting in {hunt?.usedGame}</p>}
                            </div>

                            <div className="infoContainerBack">
                                {hunt.huntStatus === 'FUTURE' ? <p>Hunt not yet started</p> :
                                    <p> Started: {hunt.createDate}</p>}
                                {hunt.huntStatus === 'FINISHED' ?
                                    <p>Finished: {hunt.finishDate}</p> :
                                    <p>{hunt.createDate === '' ? '' : 'Not yet finished'}</p>}
                            </div>

                        </div>
                        </div>
                        {(isAdmin || isOwner) && (
                        <div className="edittingToolBox">
                            <div className="iconSizer" onClick={() => onToolClick(USER_TOOLS.DELETE, hunt)}><img src={DeleteIcon} alt="Delete icon"/></div>
                            <div className="iconSizer--edit" onClick={() => onToolClick(USER_TOOLS.EDIT, hunt)}><img src={EditIconWhite} alt="Edit icon"/></div>
                        </div>)}
                    </div>
                </article>
            </div>
        </>
    );
}
export default HorizontalCardMini
