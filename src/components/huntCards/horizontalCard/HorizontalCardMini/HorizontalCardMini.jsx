import './HorizontalCardMini.css';
import {useMemo} from "react";

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

    const randomHBackground = useMemo(() => getRandomClass(cardClasses), []);

    return (
        <>
            <div className={`horizontalMiniBackground ${randomHBackground}`}>
                <article className='horizontalMiniCard'>
                    <div className="cardMiniBorder">
                    <p></p>
                    </div>
                </article>
            </div>
        </>
    );
}
export default HorizontalCardMini
