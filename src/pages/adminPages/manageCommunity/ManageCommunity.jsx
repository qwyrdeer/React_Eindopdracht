import './ManageCommunity.css';
import UserManagementBlock from "../../../components/UserManagementBlock/UserManagementBlock.jsx";
import AvatarIcon from "../../../components/avatar/AvatarIcon.jsx";

function ManageCommunity() {
    return (
        <>
            <div><h1>manage community.</h1></div>
            <div className="fullManageCommunityPageBox">
                <div className="userManageBox">
                    <div className="avatarManageBox"><AvatarIcon
                    avatarSize='normal'/></div>
                    <UserManagementBlock/>
                </div>
                <div className="userManageBox">
                    <div className="avatarManageBox"><AvatarIcon
                        avatarSize='normal'/></div>
                    <UserManagementBlock/>
                </div>
                <div className="userManageBox">
                    <div className="avatarManageBox"><AvatarIcon
                        avatarSize='normal'/></div>
                    <UserManagementBlock/>
                </div>
                <div className="userManageBox">
                    <div className="avatarManageBox"><AvatarIcon
                        avatarSize='normal'/></div>
                    <UserManagementBlock/>
                </div>
            </div>
        </>
    );
}

export default ManageCommunity;
