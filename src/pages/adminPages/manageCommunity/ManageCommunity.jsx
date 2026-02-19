import './ManageCommunity.css';

import UserManagementBlock from "../../../components/UserManagementBlock/UserManagementBlock.jsx";

import {useContext, useEffect, useState} from "react";
import PopupTools from "../../../components/popupTools/PopupTools.jsx";
import {AuthContext} from "../../../auth/AuthProvider.jsx";
import axios from "axios";

function ManageCommunity() {
    const { auth } = useContext(AuthContext);

    const [popupOpen, setPopupOpen] = useState(false);
    const [activeTool, setActiveTool] = useState('');
    const [activeTarget, setActiveTarget] = useState('');
    const [activeTargetType, setActiveTargetType] = useState(null);
    const [userList, setUserList] = useState([])
    const [error, setError] = useState(false);

    const USER_TOOLS = {
        DELETE: 'delete',
        BLOCK: 'block',
        EDIT: 'edit'
    };

    const openPopup = (tool, targetType, target) => {
        setActiveTool(tool);
        setActiveTargetType(targetType);
        setActiveTarget(target);
        setPopupOpen(true);
    };

    useEffect(() => {
        if (!auth.kc) return;
        const controller = new AbortController();

        async function fetchUser() {
            try {
                setError(false);
                const response = await axios.get("http://localhost:8080/users", { headers: {
                        "Authorization":  "Bearer " + auth.kc.token}, signal: controller.signal
                });
                setUserList(response.data);
            } catch (e) {
                console.error(e);
                setError(true);
            }
        }

        fetchUser();
        return function cleanup() {
            controller.abort();
        }
    }, [auth.kc]);

    return (
        <>
            <div><h1>manage community.</h1>
                 <PopupTools
                     open={popupOpen}
                     toolManager={activeTool}
                     target={activeTarget}
                     targetType={activeTargetType}
                     onClose={() => setPopupOpen(false)}/>
                    </div>
            <div className="fullManageCommunityPageBox">
                {userList.map(user => (
                    <div key={user.userId} className="userManageBox">
                        <UserManagementBlock
                            target={user}
                            avatarSize='normal'
                            onToolClick={(tool, target) => {
                                openPopup(tool, 'user', target);
                            }}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default ManageCommunity;
