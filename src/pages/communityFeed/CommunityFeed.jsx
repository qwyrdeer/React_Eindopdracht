import './CommunityFeed.css';

import Rayquaza from '../../assets/PokemonGIF/rayquaza.gif'
import Togepi from '../../assets/PokemonGIF/togepi.gif'
import Alcremie from '../../assets/PokemonGIF/alcremie-rainbow-swirl-berry.gif'
import Polteageist from '../../assets/PokemonGIF/polteageist.gif'
import Rapidash from '../../assets/PokemonGIF/rapidash-galar.gif'
import RagingBolt from '../../assets/PokemonGIF/ragingbolt.gif'
import Eternatus from '../../assets/PokemonGIF/eternatus.gif'
import EternatusMax from '../../assets/PokemonGIF/eternatus-eternamax.gif'
import NotShinyIcon from '../../assets/Icons/SVG/NotShinyYet.svg'
import ShinyIcon from '../../assets/Icons/SVG/ShinyIcon.svg'
import GalacticAvatar1 from '../../assets/AvatarImages/GruntAvatar1.jpg'
import GalacticAvatar2 from '../../assets/AvatarImages/GruntAvatar2.jpg'
import GalacticAvatar3 from '../../assets/AvatarImages/GruntAvatar3.jpg'
import GalacticAvatar4 from '../../assets/AvatarImages/GruntAvatar4.jpg'
import GalacticAvatar5 from '../../assets/AvatarImages/GruntAvatar5.jpg'

import {useMemo} from "react";
import SquareCard from "../../components/huntCards/squareCard/SquareCard.jsx";

function CommunityFeed() {

    const Status = Object.freeze({
    PAST: {label: 'Recently hunted', icon: ShinyIcon},
    CURRENT: {label: 'Hunted right now', icon: NotShinyIcon},
    FUTURE: {label: 'To hunt', icon: NotShinyIcon}
    });

    // STRAKS OVERZETTEN NAAR API \/
    const cardHunts = [
        {PokemonGIF: Rayquaza, PokemonName: 'Rayquaza', DexID: 384, HuntStatus:(Status.PAST), UserId: 1, Username: 'Wessel', UserAvatar: GalacticAvatar5, StartDate: '01/06/2025', FinishDate: 'Today', Encounters: 2106, HuntedGame: 'Sword'},
        {PokemonGIF: Togepi, PokemonName: 'Togepi', DexID: 175, HuntStatus:(Status.FUTURE), UserId: 3, Username: 'Dennis', UserAvatar: GalacticAvatar2, StartDate: '', FinishDate: '', Encounters: 0, HuntedGame: 'Scarlet'},
        {PokemonGIF: Alcremie, PokemonName: 'Alcremie', DexID: 869, HuntStatus:(Status.CURRENT),UserId: 2, Username: 'Erick', UserAvatar: GalacticAvatar1, StartDate: '01/01/2025', FinishDate: '', Encounters: 2106, HuntedGame: 'HGSS'},
        {PokemonGIF: Polteageist, PokemonName: 'Polteageist', DexID: 855, HuntStatus:(Status.PAST),UserId: 4, Username: 'Mat', UserAvatar: GalacticAvatar2, StartDate: '01/02/2025', FinishDate: 'Today', Encounters: 106, HuntedGame: 'Yellow'},
        {PokemonGIF: RagingBolt, PokemonName: 'Raging Bolt', DexID: 1021, HuntStatus:(Status.FUTURE),UserId: 5, Username: 'Renee', UserAvatar: GalacticAvatar3, StartDate: '', FinishDate: '', Encounters: 0, HuntedGame: 'Sword'},
        {PokemonGIF: Rapidash, PokemonName: 'Rapidash', DexID: 78, HuntStatus:(Status.PAST),UserId: 6, Username: 'Bella', UserAvatar: GalacticAvatar4, StartDate: '01/01/2025', FinishDate: 'Today', Encounters: 8906, HuntedGame: 'Blue'},
        {PokemonGIF: Eternatus, PokemonName: 'Eternatus', DexID: 890, HuntStatus:(Status.FUTURE),UserId: 7, Username: 'Kim', UserAvatar: GalacticAvatar4, StartDate: '', FinishDate: '', Encounters: 0, HuntedGame: 'Shield'},
        {PokemonGIF: EternatusMax, PokemonName: 'Eternatus', DexID: 890, HuntStatus:(Status.CURRENT),UserId: 8, Username: 'Sanne', UserAvatar: GalacticAvatar2, StartDate: '01/01/2025', FinishDate: '', Encounters: 406, HuntedGame: 'X/Y'},
    ];

    const randomHunts = useMemo(() => {
        // eslint-disable-next-line react-hooks/purity
        const shuffled = [...cardHunts].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 6);
    }, []);

    // STRAKS OVERZETTEN NAAR API /\

    return (
        <>
            <div><h1>community.</h1></div>
            <div className="fullCommunityPageBox">
                {randomHunts.map(hunter => (
                    <div key={hunter.UserId} className="userManageBox">
                        <SquareCard
                            PokemonGIF={hunter.PokemonGIF}
                            PokemonName={hunter.PokemonName}
                            DexID={hunter.DexID}
                            huntStatus={hunter.HuntStatus.label}
                            statusIcon={hunter.HuntStatus.icon}
                            UserId={hunter.UserId}
                            Username={hunter.Username}
                            UserAvatar={hunter.UserAvatar}
                            StartDate={hunter.StartDate}
                            FinishDate={hunter.FinishDate}
                            Encounters={hunter.Encounters}
                            HuntedGame={hunter.HuntedGame}/>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CommunityFeed