import './HorizontalCard.css';
import {useMemo} from "react";

function HorizontalCard() {

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
            <div className={`horizontalBackground ${randomHBackground}`}>
                <article className='horizontalCard'>
                    <p></p>
                </article>
            </div>
        </>
    );
}
export default HorizontalCard;
