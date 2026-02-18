import './UserManagementBlock.css';

import BlockIcon from '../../assets/Icons/SVG/BlockIcon.svg'
import EditIcon from '../../assets/Icons/SVG/EditIcon.svg'
import DeleteIcon from '../../assets/Icons/SVG/DeleteIcon.svg'
import AvatarIcon from "../avatar/AvatarIcon.jsx";

function UserManagementBlock({ target, onToolClick }) {

    const USER_TOOLS = {
        DELETE: 'delete',
        BLOCK: 'block',
        EDIT: 'edit'
    };

    let boxStyling = 'userManagementBox';

    switch (target.user?.userRole) {
        case "ROLE_ADMIN":
            boxStyling += ' userManagementBox--admin';
            break;
        default:
            break;
    }

    // switch (target.block) {
    //     case 'Blocked':
    //         boxStyling = 'userManagementBox userManagementBox--blocked';
    //         break;
    //     default:
    //         break;
    // }

    return (
        <>
            <div className="userManagementAvatarBox"><AvatarIcon
                avatarSize='normal'
                user={target}
            />
            </div>
            <div className={boxStyling}>
                <div className="userToolBox">
                <div className="userInfobox">
                    <p>Username: {target.username}</p>
                </div>
                    <div className="userDatabox">
                        <p>Create date: {target?.createdAt}</p>
                        <p>Last login: {target.lastLoginDate}</p>
                    </div>
                    {/*<div className="userRolebox">*/}
                    {/*    <p>User role: {user.userRole}</p>*/}
                    {/*</div>*/}
                    {/*<div className="userAccessbox">*/}
                    {/*    <p>Blocked? {Block}</p>*/}
                    {/*</div>*/}
                </div>
                <div className="managingToolBox">
                    <div className="iconSizer"><img src={DeleteIcon} alt="Delete icon" onClick={() => onToolClick(USER_TOOLS.DELETE, target)}/></div>
                    <div className="iconSizer"><img src={BlockIcon} alt="Block icon" onClick={() => onToolClick(USER_TOOLS.BLOCK, target)}/></div>
                    <div className="iconSizer--edit"><img src={EditIcon} alt="Edit icon" onClick={() => onToolClick(USER_TOOLS.EDIT, target)}/></div>
                </div>
            </div>
        </>
    );
}

export default UserManagementBlock;
