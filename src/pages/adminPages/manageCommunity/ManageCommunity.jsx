import './ManageCommunity.css';

import UserManagementBlock from "../../../components/UserManagementBlock/UserManagementBlock.jsx";
import GalacticAvatar5 from "../../../assets/AvatarImages/GruntAvatar5.jpg";
import GalacticAvatar2 from "../../../assets/AvatarImages/GruntAvatar2.jpg";
import GalacticAvatar1 from "../../../assets/AvatarImages/GruntAvatar1.jpg";
import GalacticAvatar3 from "../../../assets/AvatarImages/GruntAvatar3.jpg";
import GalacticAvatar4 from "../../../assets/AvatarImages/GruntAvatar4.jpg";

import {useMemo, useState} from "react";
import PopupTools from "../../../components/popupTools/PopupTools.jsx";

function ManageCommunity() {

    // STRAKS API IPV DIT \/
    const userList = [
        {UserId: 1, username: 'Wessel', avatar: GalacticAvatar5, RegisterDate: '01/06/2025', LastLoginDate: 'Today', Email: 'xx@xx.nl', UserRole: 'Admin', Block: ''},
        {UserId: 3, username: 'Dennis', avatar: GalacticAvatar2, RegisterDate: '01/06/2025', LastLoginDate: '', Email: 'xx@xx.nl', UserRole: 'Member', Block: ''},
        {UserId: 2, username: 'Erick', avatar: GalacticAvatar1, RegisterDate: '01/01/2025', LastLoginDate: '', Email: 'xx@xx.nl', UserRole: 'Member', Block: ''},
        {UserId: 4, username: 'Mat', avatar: GalacticAvatar2, RegisterDate: '01/02/2025', LastLoginDate: 'Today', Email: 'xx@xx.nl', UserRole: 'Admin', Block: 'Blocked'},
        {UserId: 5, username: 'Renee', avatar: GalacticAvatar3, RegisterDate: '01/06/2025', LastLoginDate: '', Email: 'xx@xx.nl', UserRole: 'Member', Block: ''},
        {UserId: 6, username: 'Bella', avatar: GalacticAvatar4, RegisterDate: '01/01/2025', LastLoginDate: 'Today', Email: 'xx@xx.nl', UserRole: 'Member', Block: 'Blocked'},
        {UserId: 7, username: 'Kim', avatar: GalacticAvatar4, RegisterDate: '01/06/2025', LastLoginDate: '', Email: 'xx@xx.nl', UserRole: 'Member', Block: ''},
        {UserId: 8, username: 'Sanne', avatar: GalacticAvatar2, RegisterDate: '01/01/2025', LastLoginDate: '', Email: 'xx@xx.nl', UserRole: 'Member', Block: ''},
    ];

    const randomUsers = useMemo(() => {
        // eslint-disable-next-line react-hooks/purity
        const shuffled = [...userList].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 6);
    }, []);

    // STRAKS OVERZETTEN NAAR API /\

    const [popupOpen, setPopupOpen] = useState(false);
    const [activeTool, setActiveTool] = useState('');
    const [activeUser, setActiveUser] = useState('');

    return (
        <>
            <div><h1>manage community.</h1>
                 <PopupTools
                     open={popupOpen}
                     toolManager={activeTool}
                     user={activeUser}
                     onClose={() => setPopupOpen(false)}/>
                    </div>
            <div className="fullManageCommunityPageBox">
                {randomUsers.map(user => (
                    <div key={user.UserId} className="userManageBox">
                        <UserManagementBlock
                            user={user}
                            avatarSize='normal'
                            onToolClick={(toolManager, user) => {
                                setActiveTool(toolManager);
                                setActiveUser(user);
                                setPopupOpen(true);
                            }}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default ManageCommunity;
