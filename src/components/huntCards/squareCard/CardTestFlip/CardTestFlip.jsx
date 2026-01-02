import './CardTestFlip.css';

// import React, {useMemo, useState} from "react";
// import FlipIcon from "../../../../assets/Icons/SVG/FlipIcon.svg";
// import AvatarIcon from "../../../avatar/AvatarIcon.jsx";

function CardFlipTest() {
    return (<>
        </>);
// //
//     const cardClasses = [
//         'squareBackground1',
//         'squareBackground2',
//         'squareBackground3',
//         'squareBackground4',
//     ];
//
//     function getRandomClass(classes) {
//         // eslint-disable-next-line react-hooks/purity
//         const randomIndex = Math.floor(Math.random() * classes.length);
//         return classes[randomIndex];
//     }
//
//     const randomBackground = useMemo(() => getRandomClass(cardClasses), []);
//     const [isFlipped, setIsFlipped] = useState(false);
//
//     return (
//         <div className="flipCardScene">
//             <div className={`flipCard ${isFlipped ? "isFlipped" : ""}`}>
//
//                 <div className="flipCardFace flipCardFront" onClick={() => setIsFlipped(!isFlipped)}>
//                     <div className="squareBackground">
//                         <div className={`squareBackgroundLayer ${randomBackground}`}/>
//                         <article className="squareCard">
//                             <div className="cardBorder">
//                                 <div className="huntDetails">
//                                     <div className="statusBox">
//                                         <h3>{huntStatus}</h3>
//                                         <div className="statusIcon">
//                                             <img src={statusIcon} alt={huntStatus}/>
//                                         </div>
//                                     </div>
//                                     <div className="huntContainer">
//                                         <div className="huntGIFSizer">
//                                             <img src={PokemonGIF} alt={PokemonName}/>
//                                         </div>
//                                     </div>
//
//                                     <div className="infoContainer">
//                                         <h2>{PokemonName}</h2>
//                                         <p>#{DexID}</p>
//                                     </div>
//                                     <div className="flipBox"><img src={FlipIcon} alt="flip icon"/></div>
//                                 </div>
//                             </div>
//                         </article>
//                     </div>
//                 </div>
//
//                 <div className="flipCardFace flipCardBack" onClick={() => setIsFlipped(!isFlipped)}>
//                     <div className="squareBackground">
//                         <div className={`squareBackgroundLayer ${randomBackground}`}/>
//                         <article className="squareCard">
//                             <div className="cardBorder">
//                                 <div className="huntDetailsBack">
//                                     <div className="statusBoxBack">
//                                     <div className="profileRedirection"><AvatarIcon
//                                         avatarSize="normal"
//                                         username={Username}
//                                         userId={UserId}
//                                         userAvatar={UserAvatar}/>
//                                         <h3>{huntStatus} by {Username}</h3>
//                                         </div>
//                                     </div>
//                                     <div className="huntContainerBack">
//                                         {StartDate === '' ? <p>No encounters yet</p> : <h2>{FinishDate === '' ? 'Currently' : 'Hunt took'} {Encounters} encounters</h2>}
//                                         {FinishDate === '' ? <p>Hunting in {HuntedGame}</p> : <p>Hunted in {HuntedGame}</p>}
//                                     </div>
//
//                                     <div className="infoContainerBack">
//                                         {StartDate === '' ? <p>Hunt not yet started</p> : <p> Started: {StartDate}</p>}
//                                         {FinishDate === '' ? <p>{StartDate === '' ? '' : 'Not yet finished'}</p> : <p>Finished: {FinishDate}</p>}
//                                     </div>
//                                     <div className="flipBox"><img src={FlipIcon} alt="flip icon"/></div>
//                                 </div>
//                             </div>
//                         </article>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
}
export default CardFlipTest;