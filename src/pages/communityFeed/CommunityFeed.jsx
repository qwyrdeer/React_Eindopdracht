import './CommunityFeed.css';

import axios from 'axios';
import {useEffect, useState} from "react";
import SquareCard from "../../components/huntCards/squareCard/SquareCard.jsx";
import PopupTools from "../../components/popupTools/PopupTools.jsx";
import keycloak from "../../auth/Keycloak.js";

function CommunityFeed() {

    const [popupOpen, setPopupOpen] = useState(false);
    const [activeTool, setActiveTool] = useState('');
    const [activeHunt, setActiveHunt] = useState('');

    const [allPokemon, setAllPokemon] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchPokemon() {
            try {
                setError(false);
                const response = await axios.get("http://localhost:8080/hunts", { headers: {
                        "Authorization":  "Bearer " + keycloak.token, signal: controller.signal
                    }});
                setAllPokemon(response.data.results);
            } catch (e) {
                console.error(e);
                setError(true);
            }
        }

        fetchPokemon();
        return function cleanup() {
            controller.abort();
        }
    }, );

    return (
        <>
            <div><h1>community.</h1><PopupTools
                open={popupOpen}
                toolManager={activeTool}
                hunt={activeHunt}
                onClose={() => setPopupOpen(false)}/></div>
            <div className="fullCommunityPageBox">
                {error ? <p>Er is een fout opgetreden</p> : ''}
                {allPokemon?.map(huntCard => (
                    <div key={huntCard.id}>
                        <SquareCard
                            hunt={huntCard}
                            onToolClick={(toolManager, huntCard) => {
                                setActiveTool(toolManager);
                                setActiveHunt(huntCard);
                                setPopupOpen(true);
                            }}/>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CommunityFeed