import './VerticalCard.css';
import React, {useMemo} from "react";

function VerticalCard() {

    const cardClasses = [
        'verticalBackground1',
        'verticalBackground2',
        'verticalBackground3',
        'verticalBackground4',
    ];

    function getRandomClass(classes) {
        // eslint-disable-next-line react-hooks/purity
        const randomIndex = Math.floor(Math.random() * classes.length);
        return classes[randomIndex];
    }

    const randomVBackground = useMemo(() => getRandomClass(cardClasses), []);

    return (
        <>
            <div className={`verticalBackground ${randomVBackground}`}>
                <article className='verticalCard'>
                    <p></p>
                </article>
            </div>
        </>
    );
}
export default VerticalCard
