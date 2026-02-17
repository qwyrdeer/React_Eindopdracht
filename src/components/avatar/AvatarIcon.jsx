import './AvatarIcon.css';

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
                to={`/user/${user?.username}/${user?.userId}`}
                className={`avatarBox ${boxStyling} ${sizeClass}`}
            >
                    <div className="avatarComponentSizer"><img src={user?.userAvatarUrl} alt={user?.username}/></div>
            </Link>
        </>
    );
}

export default AvatarIcon;
