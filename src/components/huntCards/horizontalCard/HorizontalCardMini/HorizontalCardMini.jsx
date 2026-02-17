import './HorizontalCardMini.css';
import {useMemo} from "react";
import DeleteIcon from "../../../../assets/Icons/SVG/DeleteIcon.svg";
import EditIconWhite from "../../../../assets/Icons/SVG/EditIconWhite.svg";

function HorizontalCardMini({hunt, onToolClick}) {

    const USER_TOOLS = {
        DELETE: 'delete',
        EDIT: 'edit'
    };

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
                        <div className="huntBoxProfile">PKMN INFO deleted? but is it editted?</div>
                        <div className="edittingToolBox">
                            <div className="iconSizer" onClick={() => onToolClick(USER_TOOLS.DELETE, hunt)}><img src={DeleteIcon} alt="Delete icon"/></div>
                            <div className="iconSizer--edit" onClick={() => onToolClick(USER_TOOLS.EDIT, hunt)}><img src={EditIconWhite} alt="Edit icon"/></div>
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
}
export default HorizontalCardMini
