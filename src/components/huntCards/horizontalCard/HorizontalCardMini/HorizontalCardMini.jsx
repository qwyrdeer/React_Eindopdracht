import './HorizontalCardMini.css';
import {useMemo, useState} from "react";
import DeleteIcon from "../../../../assets/Icons/SVG/DeleteIcon.svg";
import EditIconWhite from "../../../../assets/Icons/SVG/EditIconWhite.svg";

function HorizontalCardMini() {

    const cardClasses = [
        'horizontalBackground1',
        'horizontalBackground2',
    ];

    function getRandomClass(classes) {
        // eslint-disable-next-line react-hooks/purity
        const randomIndex = Math.floor(Math.random() * classes.length);
        return classes[randomIndex];
    }

    // for popup editting/deleting
    const [deleteHunt, activateDeleteHunt] = useState(false)
    const [editHunt, activateEditHunt] = useState(false)

    const randomHBackground = useMemo(() => getRandomClass(cardClasses), []);

    return (
        <>
            <div className={`horizontalMiniBackground ${randomHBackground}`}>
                <article className='horizontalMiniCard'>
                    <div className="cardMiniBorder">
                        <div className="huntBoxProfile">PKMN INFO deleted? {deleteHunt === true ? 'deleted' : 'not deleted'} but is it editted? {editHunt === true ? 'editted' : 'not editted'}</div>
                        <div className="edittingToolBox">
                            <div className="iconSizer" onClick={() => activateDeleteHunt(!deleteHunt)}><img src={DeleteIcon} alt="Delete icon"/></div>
                            <div className="iconSizer--edit" onClick={() => activateEditHunt(!editHunt)}><img src={EditIconWhite} alt="Edit icon"/></div>
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
}
export default HorizontalCardMini
