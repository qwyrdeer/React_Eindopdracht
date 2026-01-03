import './PopupTools.css';

function PopupTools({ open, onClose, toolManager, user }) {

    if (!open) return null;

    return (
        <>
                <div>
                    <div className="popupScreenfiller" onClick={onClose}></div>
                        <div className="popupBox">
                            {toolManager === 'delete' && <p>Delete {user?.Username}?</p>}
                            {toolManager === 'block' && <p>Block {user?.Username}?</p>}
                            {toolManager === 'edit' && <p>Edit {user?.Username}</p>}
                        </div>
                </div>
        </>
    );

}

export default PopupTools;
