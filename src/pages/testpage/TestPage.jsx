import './TestPage.css';

import MessageOverlay from "../../components/messageOverlay/MessageOverlay.jsx";

function TestPage() {

    return (
        <>
            <div className="fullTestPageBox">
                <MessageOverlay
                Message= 'This is a testmessage'/>
                <p>end of feed.</p>
            </div>
        </>
    );
}
export default TestPage;