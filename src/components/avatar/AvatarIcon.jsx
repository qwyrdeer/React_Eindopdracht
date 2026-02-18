import './AvatarIcon.css';

import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../auth/AuthProvider.jsx";

function AvatarIcon({user, avatarSize}) {

    console.log('User object:', user);
    console.log('Avatar URL:', `http://localhost:8080${user?.userAvatarUrl}`);

    const { auth } = useContext(AuthContext);

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

    let boxStyling = 'avatarBox';

    switch (user?.userRole) {
        case "ROLE_ADMIN":
            boxStyling += ' avatarBox--admin';
            break;
        default:
            break;
    }

    // switch (user?.Block) {
    //     case 'Blocked':
    //         boxStyling = 'avatarBox avatarBox--blocked';
    //         break;
    //     default:
    //         break;
    // }

    return (
        <>
            {user?.username === auth.kc?.tokenParsed?.preferred_username ?
                <Link
                    to={`/my-profile`}
                    className={`${boxStyling} ${sizeClass}`}
                >
                    <div className="avatarComponentSizer"><img src={`http://localhost:8080${user?.userAvatarUrl}`} alt={user?.username}/></div>
                </Link>
                :
                <Link
                    to={`/users/profile/${user?.username}`}
                    className={`${boxStyling} ${sizeClass}`}
                >
                    <div className="avatarComponentSizer"><img src={`http://localhost:8080${user?.userAvatarUrl}`} alt={user?.username}/></div>
                </Link>}
        </>
    );
}

export default AvatarIcon;
