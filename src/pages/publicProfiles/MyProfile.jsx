import './MyProfile.css';
import TextOnlyButton from "../../components/button/TextOnlyButton/TextOnlyButton.jsx";
import HorizontalCard from "../../components/huntCards/horizontalCard/HorizontalCard.jsx";
import HorizontalCardMini from "../../components/huntCards/horizontalCard/HorizontalCardMini/HorizontalCardMini.jsx";

function MyProfile() {
    return (
        <>
            <div><h1>my profile.</h1></div>
            <div className="fullProfilePageBox">
                <div className="profileBox">
                    <p>profile box</p>
                </div>
                <div className="huntProfileContainer">
                    <div className="huntBox">
                        <div><h1>my hunts.</h1></div>
                        <div className='buttonHuntBox'>
                            <TextOnlyButton
                                buttonName='Past'
                                buttonStyle='greenButton'
                                onClick=''
                                type='button'/>
                            <TextOnlyButton
                                buttonName='Current'
                                buttonStyle='greenButton'
                                onClick=''
                                type='button'/>
                            <TextOnlyButton
                                buttonName='Future'
                                buttonStyle='greenButton'
                                onClick=''
                                type='button'/>
                        </div>

                        <p>all their hunts</p>

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
