import './AvatarIcon.css';
import ShinyIcon from "../../assets/Icons/SVG/ShinyIcon.svg";
import NotShinyIcon from "../../assets/Icons/SVG/NotShinyYet.svg";
import {Link} from "react-router-dom";

function AvatarIcon({userAvatar, userId, username, avatarSize}) {

    const Size = {
        small: {className: 'avatarSizeSmall', avatar: ShinyIcon},
        normal: {className: 'avatarSizeNormal', avatar: NotShinyIcon},
        big: {className: 'avatarSizeBig', avatar: NotShinyIcon}
    };

    const currentSize = Size[avatarSize] || Size.normal;

    return (
        <>
            <Link
                to={`/user/${username}/${userId}`}
                className={`avatarBox ${currentSize.className}`}
            >
                    <div className="avatarComponentSizer"><img src={userAvatar} alt={username}/></div>
            </Link>
        </>
    );
}

export default AvatarIcon;
