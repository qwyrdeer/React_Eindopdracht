import './AvatarIcon.css';
import DefaultAvatar from '../../assets/AvatarImages/GruntAvatar1.jpg'

import {Link} from "react-router-dom";

function AvatarIcon({user, avatarSize}) {

    let sizeClass = '';

    switch (avatarSize) {
        case 'small':
            sizeClass = 'avatarSizeSmall';
            break;
        case 'big':
            sizeClass = 'avatarSizeBig';
            break;
        default:
            sizeClass = 'avatarSizeNormal';
    }

    let boxStyling = 'userManagementBox';

    switch (user?.UserRole) {
        case 'Admin':
            boxStyling += 'avatarBox avatarBox--admin';
            break;
        default:
            boxStyling += 'avatarBox';
            break;
    }

    switch (user?.Block) {
        case 'Blocked':
            boxStyling = 'avatarBox avatarBox--blocked';
            break;
        default:
            break;
    }

    return (
        <>
            <Link
                to={`/user/${user?.Username}/${user?.UserId}`}
                className={`avatarBox ${boxStyling} ${sizeClass}`}
            >
                    <div className="avatarComponentSizer"><img src={user?.UserAvatar} alt={user?.Username}/></div>
            </Link>
        </>
    );
}

export default AvatarIcon;
