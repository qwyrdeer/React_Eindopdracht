import './MyProfile.css';
import TextOnlyButton from "../../components/button/TextOnlyButton/TextOnlyButton.jsx";
import HorizontalCardMini from "../../components/huntCards/horizontalCard/HorizontalCardMini/HorizontalCardMini.jsx";
import AvatarIcon from "../../components/avatar/AvatarIcon.jsx";
import {useState} from "react";
import GalacticAvatar5 from "../../assets/AvatarImages/GruntAvatar5.jpg";

function MyProfile() {

    const tempUserData = {
        UserId: 1,
        Username: 'Wessel',
        UserAvatar: GalacticAvatar5,
        RegisterDate: '01/06/2025',
        LastLoginDate: 'Today',
        Email: 'xx@xx.nl',
        UserRole: 'Admin',
        Block: '',
    };

    const [selectStatus, setSelectStatus] = useState('Current');

    const handleSelect = (status) => {
        setSelectStatus(status);
    };

    return (
        <>
            <h1>HEY username.</h1>
            <div className="fullProfilePageBox">
                <div className="profileBox">
                    <div className="userBox">
                        <AvatarIcon
                            user={tempUserData}
                            avatarSize='big'
                        />
                    </div>
                    <div className="textFieldsBox">
                        <div className="basicTextbox"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores excepturi inventore ipsa nesciunt odio optio reiciendis sequi veniam? Ab culpa, facere illum molestiae necessitatibus unde. Labore placeat repellendus voluptates!</p></div>
                        <div className="basicTextbox"><p>Textbox</p></div>
                        <div className="basicTextbox"><p>Textbox</p></div>
                        <div className="basicTextbox"><p>Textbox</p></div>
                    </div>
                </div>
                <div className="huntProfileContainer">
                    <div className="huntBox">
                        <div><h1>my hunts.</h1></div>
                        <div className='buttonHuntBox'>
                            <TextOnlyButton
                                buttonName='Past'
                                buttonStyle={`greenButton ${selectStatus === 'Past' ? 'active' : ''}`}
                                onClick={() => handleSelect('Past')}
                                type='button'/>
                            <TextOnlyButton
                                buttonName='Current'
                                buttonStyle={`greenButton ${selectStatus === 'Current' ? 'active' : ''}`}
                                onClick={() => handleSelect('Current')}
                                type='button'/>
                            <TextOnlyButton
                                buttonName='Future'
                                buttonStyle={`greenButton ${selectStatus === 'Future' ? 'active' : ''}`}
                                onClick={() => handleSelect('Future')}
                                type='button'/>
                        </div>

                        <div className="personalHunts">
                            <HorizontalCardMini/>
                            <HorizontalCardMini/>
                            <HorizontalCardMini/>
                            <HorizontalCardMini/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyProfile;
