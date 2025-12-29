import './CommunityFeed.css';
import SquareCard from "../../components/huntCards/squareCard/SquareCard.jsx";
import Rayquaza from '../../assets/PokemonGIF/rayquaza.gif'
import Togepi from '../../assets/PokemonGIF/togepi.gif'
import Alcremie from '../../assets/PokemonGIF/alcremie-rainbow-swirl-berry.gif'
import Polteageist from '../../assets/PokemonGIF/polteageist.gif'
import Rapidash from '../../assets/PokemonGIF/rapidash-galar.gif'
import RagingBolt from '../../assets/PokemonGIF/ragingbolt.gif'
import Eternatus from '../../assets/PokemonGIF/eternatus.gif'
import EternatusMax from '../../assets/PokemonGIF/eternatus-eternamax.gif'

import {useMemo} from "react";

function CommunityFeed() {

    const cardHunts = [
        {PokemonGIF: Rayquaza, PokemonName: 'Rayquaza', DexID: 384},
        {PokemonGIF: Togepi, PokemonName: 'Togepi', DexID: 175},
        {PokemonGIF: Alcremie, PokemonName: 'Alcremie', DexID: 869},
        {PokemonGIF: Polteageist, PokemonName: 'Polteageist', DexID: 855},
        {PokemonGIF: RagingBolt, PokemonName: 'Raging Bolt', DexID: 1021},
        {PokemonGIF: Rapidash, PokemonName: 'Rapidash', DexID: 78},
        {PokemonGIF: Eternatus, PokemonName: 'Eternatus', DexID: 890},
        {PokemonGIF: EternatusMax, PokemonName: 'Eternatus', DexID: 890},
    ];

    function getRandomHunt(hunts) {
        // eslint-disable-next-line react-hooks/purity
        const randomIndex = Math.floor(Math.random() * hunts.length);
        return hunts[randomIndex];
    }

    const randomHunt= useMemo(() => getRandomHunt(cardHunts), []);

    return (
        <>
            <div><h1>community.</h1></div>
            <div className="fullCommunityPageBox">
                <div className="a01">
                    <SquareCard
                        PokemonGIF={randomHunt.PokemonGIF}
                        PokemonName={randomHunt.PokemonName}
                        DexID={randomHunt.DexID}/>
                </div>
            </div>
        </>
    );
}

export default CommunityFeed