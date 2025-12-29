import './SquareCard.css';
import React, { useMemo } from "react";

function SquareCard({PokemonGIF, PokemonName, DexID}) {

    const cardClasses = [
        'squareBackground1',
        'squareBackground2',
        'squareBackground3',
        'squareBackground4',
    ];

    function getRandomClass(classes) {
        // eslint-disable-next-line react-hooks/purity
        const randomIndex = Math.floor(Math.random() * classes.length);
        return classes[randomIndex];
    }

    const randomBackground = useMemo(() => getRandomClass(cardClasses), []);

    return (
  <>
      <div className="squareBackground">
          <div className={`squareBackgroundLayer ${randomBackground}`} />
          <article className="squareCard">
              <div className="cardBorder">
              <div className="huntDetails">
                  <div className="huntContainer">
                  <div className="huntGIFSizer"><img src={PokemonGIF} alt={PokemonName} /></div></div>
                  <div className="infoContainer"><h2>{PokemonName}</h2>
                  <p>#{DexID}</p></div>
              </div></div>
          </article>
      </div>
  </>
);
}

export default SquareCard;
