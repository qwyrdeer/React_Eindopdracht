import './CommunityFeed.css';

import axios from 'axios';
import {useContext, useEffect, useState} from "react";
import SquareCard from "../../components/huntCards/squareCard/SquareCard.jsx";
import PopupTools from "../../components/popupTools/PopupTools.jsx";
import {AuthContext} from "../../auth/AuthProvider.jsx";

function CommunityFeed() {
    const { auth } = useContext(AuthContext);

    const [popupOpen, setPopupOpen] = useState(false);
    const [activeTool, setActiveTool] = useState(null);
    const [activeTarget, setActiveTarget] = useState(null);

    const [allPokemon, setAllPokemon] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!auth.kc) return;
        const controller = new AbortController();

        async function fetchPokemon() {
            try {
                setError(false);
                const response = await axios.get("http://localhost:8080/hunts", { headers: {
                        "Authorization":  "Bearer " + auth.kc.token},
                        "signal": controller.signal
                    });
                setAllPokemon(response.data);
            } catch (e) {
                console.error(e);
                setError(true);
            }
        }

        fetchPokemon();
        return function cleanup() {
            controller.abort();
        }
    }, [auth.kc]);

    return (
        <>
            <div><h1>community.</h1><PopupTools
                open={popupOpen}
                toolManager={activeTool}
                target={activeTarget}
                onClose={() => setPopupOpen(false)}/></div>
            <div className="fullCommunityPageBox">
                {error ? <p>Er is een fout opgetreden</p> : ''}
                {allPokemon?.map(huntCard => (
                    <div key={huntCard.id}>
                        <SquareCard
                            hunt={huntCard}
                            onToolClick={(toolManager, target) => {
                                setActiveTool(toolManager);
                                setActiveTarget(target);
                                setPopupOpen(true);
                            }}/>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CommunityFeed