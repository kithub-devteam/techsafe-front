import React, { useState } from 'react';

function App() {
    const [expandedMessage, setExpandedMessage] = useState(false);

    const toggleMessage = () => {
        setExpandedMessage(!expandedMessage);
    };

    return (
        <div className={`message-text-container ${expandedMessage ? 'expanded' : ''}`}>
            <div className="message-text">               
                <span className="see-more" onClick={toggleMessage}>
                    {expandedMessage ? "Voir moins" : "voir plus"}
                </span>
            </div>
            <span className="message-time"></span>
        </div>
    );
}

export default App;
