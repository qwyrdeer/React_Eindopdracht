import './UserManagementBlock.css';

import BlockIcon from '../../assets/Icons/SVG/BlockIcon.svg'
import EditIcon from '../../assets/Icons/SVG/EditIcon.svg'
import DeleteIcon from '../../assets/Icons/SVG/DeleteIcon.svg'
import AvatarIcon from "../avatar/AvatarIcon.jsx";

function UserManagementBlock({ user, onToolClick }) {
    const {
        Username,
        Email,
        RegisterDate,
        LastLoginDate,
        UserRole,
        Block
    } = user;

    const USER_TOOLS = {
        DELETE: 'delete',
        BLOCK: 'block',
        EDIT: 'edit'
    };

    let boxStyling = 'userManagementBox';

    switch (user.UserRole) {
        case 'Admin':
            boxStyling += ' userManagementBox--admin';
            break;
        default:
            break;
    }

    switch (user.Block) {
        case 'Blocked':
            boxStyling = 'userManagementBox userManagementBox--blocked';
            break;
        default:
            break;
    }

    return (
        <>
            <div className="userManagementAvatarBox"><AvatarIcon
                avatarSize='normal'
                user={user}
            />
            </div>
            <div className={boxStyling}>
                <div className="userToolBox">
                <div className="userInfobox">
                    <p>Username: {Username}</p>
                    <p>Email: {Email}</p>
                </div>
                    <div className="userDatabox">
                        <p>Create date: {RegisterDate}</p>
                        <p>Last login: {LastLoginDate}</p>
                    </div>
                    <div className="userRolebox">
                        <p>User role: {UserRole}</p>
                    </div>
                    <div className="userAccessbox">
                        <p>Blocked? {Block}</p>
                    </div>
                </div>
                <div className="managingToolBox">
                    <div className="iconSizer"><img src={DeleteIcon} alt="Delete icon" onClick={() => onToolClick(USER_TOOLS.DELETE, user)}/></div>
                    <div className="iconSizer"><img src={BlockIcon} alt="Block icon" onClick={() => onToolClick(USER_TOOLS.BLOCK, user)}/></div>
                    <div className="iconSizer--edit"><img src={EditIcon} alt="Edit icon" onClick={() => onToolClick(USER_TOOLS.EDIT, user)}/></div>
                </div>
            </div>
        </>
    );
}

export default UserManagementBlock;
