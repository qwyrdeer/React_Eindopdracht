import './UserManagementBlock.css';

import BlockIcon from '../../assets/Icons/SVG/BlockIcon.svg'
import EditIcon from '../../assets/Icons/SVG/EditIcon.svg'
import DeleteIcon from '../../assets/Icons/SVG/DeleteIcon.svg'
import CardTestFlip from "../huntCards/squareCard/CardTestFlip/CardTestFlip.jsx";

function UserManagementBlock() {

    return (
        <>
            <div className="userManagementBox">
                <div className="userToolBox">
                <div className="userInfobox">
                    <p>Username</p>
                    <p>Email</p>
                </div>
                    <div className="userDatabox">
                        <p>Create date</p>
                        <p>Last login</p>
                    </div>
                    <div className="userRolebox">
                        <p>User role</p>
                    </div>
                    <div className="userAccessbox">
                        <p>Blocked</p>
                    </div>
                </div>
                <div className="managingToolBox">
                    <div className="iconSizer"><img src={DeleteIcon} alt="Delete icon"/></div>
                    <div className="iconSizer"><img src={BlockIcon} alt="Block icon"/></div>
                    <div className="iconSizer--edit"><img src={EditIcon} alt="Edit icon"/></div>
                </div>
            </div>
        </>
    );
}

export default UserManagementBlock;
