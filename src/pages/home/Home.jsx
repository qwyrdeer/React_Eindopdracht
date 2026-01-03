import './Home.css';

import SquareCard from "../../components/huntCards/squareCard/SquareCard.jsx";
import VerticalCard from "../../components/huntCards/verticalCard/VerticalCard.jsx";
import HorizontalCard from "../../components/huntCards/horizontalCard/HorizontalCard.jsx";
import Rayquaza from "../../assets/PokemonGIF/rayquaza.gif";
import Togepi from "../../assets/PokemonGIF/togepi.gif";
import Alcremie from "../../assets/PokemonGIF/alcremie-rainbow-swirl-berry.gif";
import Polteageist from "../../assets/PokemonGIF/polteageist.gif";
import RagingBolt from "../../assets/PokemonGIF/ragingbolt.gif";
import Rapidash from "../../assets/PokemonGIF/rapidash-galar.gif";
import Eternatus from "../../assets/PokemonGIF/eternatus.gif";
import EternatusMax from "../../assets/PokemonGIF/eternatus-eternamax.gif";
import {useMemo} from "react";
import ShinyIcon from "../../assets/Icons/SVG/ShinyIcon.svg";
import NotShinyIcon from "../../assets/Icons/SVG/NotShinyYet.svg";
import GalacticAvatar5 from "../../assets/AvatarImages/GruntAvatar5.jpg";
import GalacticAvatar2 from "../../assets/AvatarImages/GruntAvatar2.jpg";
import GalacticAvatar1 from "../../assets/AvatarImages/GruntAvatar1.jpg";
import GalacticAvatar3 from "../../assets/AvatarImages/GruntAvatar3.jpg";
import GalacticAvatar4 from "../../assets/AvatarImages/GruntAvatar4.jpg";
import MessageOverlay from "../../components/messageOverlay/MessageOverlay.jsx";

function Home() {


    const Status = Object.freeze({
        PAST: {label: 'Recently hunted', icon: ShinyIcon},
        CURRENT: {label: 'Hunted right now', icon: NotShinyIcon},
        FUTURE: {label: 'To be hunted', icon: NotShinyIcon}
    });

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


    function getRandomHunt(hunts) {
        // eslint-disable-next-line react-hooks/purity
        const randomIndex = Math.floor(Math.random() * hunts.length);
        return hunts[randomIndex];
    }

    const randomHunt= useMemo(() => getRandomHunt(cardHunts), []);

return (
  <>
      <div className="fullTestPageBox">
      <div className="a01"><SquareCard
          PokemonGIF={randomHunt.PokemonGIF}
          PokemonName={randomHunt.PokemonName}
          DexID={randomHunt.DexID}
          huntStatus={randomHunt.HuntStatus.label}
          statusIcon={randomHunt.HuntStatus.icon}
          UserId={randomHunt.UserId}
          Username={randomHunt.Username}
          UserAvatar={randomHunt.UserAvatar}
          StartDate={randomHunt.StartDate}
          FinishDate={randomHunt.FinishDate}
          Encounters={randomHunt.Encounters}
          HuntedGame={randomHunt.HuntedGame}/></div>
      <div className="c03"><HorizontalCard /></div>

      <div className="b04"><VerticalCard /></div>
      <div className="a05"><SquareCard
          PokemonGIF={randomHunt.PokemonGIF}
          PokemonName={randomHunt.PokemonName}
          DexID={randomHunt.DexID}
          huntStatus={randomHunt.HuntStatus.label}
          statusIcon={randomHunt.HuntStatus.icon}
          UserId={randomHunt.UserId}
          Username={randomHunt.Username}
          UserAvatar={randomHunt.UserAvatar}
          StartDate={randomHunt.StartDate}
          FinishDate={randomHunt.FinishDate}
          Encounters={randomHunt.Encounters}
          HuntedGame={randomHunt.HuntedGame}/></div>
      <div className="a06"><SquareCard
          PokemonGIF={randomHunt.PokemonGIF}
          PokemonName={randomHunt.PokemonName}
          DexID={randomHunt.DexID}
          huntStatus={randomHunt.HuntStatus.label}
          statusIcon={randomHunt.HuntStatus.icon}
          UserId={randomHunt.UserId}
          Username={randomHunt.Username}
          UserAvatar={randomHunt.UserAvatar}
          StartDate={randomHunt.StartDate}
          FinishDate={randomHunt.FinishDate}
          Encounters={randomHunt.Encounters}
          HuntedGame={randomHunt.HuntedGame}/></div>

      <div className="c09"><HorizontalCard /></div>
      <p>end of feed.</p>
          <MessageOverlay
              Homepage= 'true'
              Message='Hey visitor! We need your help to locate all shiny Pokemon... Create your own hunter account in
                                        the right top corner - we kinda depend on you!'
          />
      </div>
  </>
);
}
export default Home;
