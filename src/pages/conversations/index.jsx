import React, { useState } from "react"; // Importation de useState pour gérer l'état
import "./App.css"; // Importation du fichier CSS pour le style du composant App
import { useAuth } from "../../Authentications"; // Importation d'un hook personnalisé pour l'authentification
import facebook from "../../assets/facebook.png"; // Importation de l'image du logo Facebook
import logo from "../../assets/logo.png"; // Importation de l'image du logo principal
import google from "../../assets/google.png"; // Importation de l'image du logo Google
import twitter from "../../assets/twiter.png"; // Importation de l'image du logo Twitter
import chatbot1 from "../../assets/chatbot 1.png"; // Importation de la première image du chatbot
import chatbot2 from "../../assets/chatbot 2.png"; // Importation de la deuxième image du chatbot
import doctorImage from "../../images/doctor1 homme.jpg"; // Importation de l'image du docteur

function App() {
  const [inputValue, setInputValue] = useState(""); // État pour la valeur de l'input
  const [errorMessage, setErrorMessage] = useState(""); // État pour le message d'erreur
  const [selectedButton, setSelectedButton] = useState(null); // État pour le bouton sélectionné
  const [showButtons, setShowButtons] = useState(false); // État pour afficher/cacher les boutons
  const [expandedMessage, setExpandedMessage] = useState(false); // État pour afficher/cacher le message complet

  const handleSend = () => {
    if (inputValue.trim() === "") { // Vérifie si l'input est vide
      setErrorMessage("Please do write something first !"); // Met à jour le message d'erreur
      setTimeout(() => {
        setErrorMessage(""); // Réinitialise le message d'erreur après 3 secondes
      }, 3000); // 3000 millisecondes = 3 secondes
    } else {
      setErrorMessage(""); // Réinitialise le message d'erreur
      console.log("Message sent:", inputValue); // Remplacez ceci par votre logique d'envoi
      setInputValue(""); // Réinitialise l'input après l'envoi
    }
  };

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName); // Met à jour l'état avec le nom du bouton sélectionné
  };

  const toggleButtons = () => {
    setShowButtons(!showButtons); // Inverse l'état d'affichage des boutons
  };

  const toggleMessage = () => {
    setExpandedMessage(!expandedMessage); // Inverse l'état d'affichage du message complet
  };

  return (
    <div className="app-container"> {/* Conteneur principal de l'application */}
      {/* Sidebar */}
      <header className="sidebar"> {/* Section de la barre latérale */}
        <div className="logo-section"> {/* Section pour les logos */}
          <div className="logo-container" style={{ gap: '30px' }}> {/* Conteneur pour les logos */}
            <img src={logo} alt="Tech Safe Logo" className="logo" /> {/* Logo principal */}
            <img src={chatbot1} alt="Chatbot 1" className="chatbot1" /> {/* Image du premier chatbot */}
          </div>
          <div className="welcome-header"> {/* Section pour l'en-tête de bienvenue */}
            <h1 style={{ color: '#050342' }}>Bienvenue !</h1> {/* Message de bienvenue */}
            <hr className="title-underline" /> {/* Ligne de soulignement pour le titre */}
          </div>
        </div>
        
        <div className="options"> {/* Section des options*/}
          <p className="sidebar-text" style={{ fontSize: '10px' }}>
            Que voulez-vous apprendre aujourd'hui ?
          </p>

          <button className="menu-button" onClick={toggleButtons}>
            {showButtons ? "Cacher les options" : "Afficher les options"}
          </button>
          <div className={`button-container ${showButtons ? 'show-buttons' : ''}`}> {/* Conteneur pour les boutons */}
            {["Santé", "Droits", "Violence", "Soutien", "Sécurité"].map((buttonName) => (
              <button
                key={buttonName}
                onClick={() => handleButtonClick(buttonName)} // Gère le clic sur le bouton
                style={{
                  backgroundColor: selectedButton === buttonName ? '#5DC759' : '#f0f0f0', // Change le fond si le bouton est sélectionné
                  color: selectedButton === buttonName ? 'white' : 'black', // Change la couleur du texte si le bouton est sélectionné
                  margin: '5px', // Espacement entre les boutons
                  border: '1px solid black', // Bordure par défaut
                  padding: '10px', // Espacement interne
                  cursor: 'pointer', // Change le curseur au survol
                  borderRadius: '25px', // Coins arrondis
                  transition: 'background-color 0.3s', // Transition douce pour le changement de couleur
                }}
              >
                {buttonName} {/* Affiche le nom du bouton */}
              </button>
            ))}
          </div>
        </div>
        
        <footer className="sidebar-footer"> {/* Section de pied de page de la barre latérale */}
          <a href="#">
            <i className="fas fa-history" style={{ color: '#050342', marginRight: '8px' }}></i> {/* Icône pour l'historique */}
            Historique des dernières conversations {/* Texte pour l'historique des conversations */}
          </a>
        </footer>
      </header>

      {/* Chat Section */}
      <main className="chat-container"> {/* Section principale de chat */}
        <div className="chat-header"> {/* En-tête de la section de chat */}
          <div className="chat-icon-container"> {/* Conteneur pour les icônes de chat (actuellement vide) */}
          </div>
          <div className="header-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}> {/* Utilisation de Flexbox pour aligner le contenu */}
            <div className="text-date" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: 'auto' }}> {/* Conteneur pour le titre et la date */}
              <h2 className="header-title" style={{ color: '#050342', margin: '10px 0' }}> {/* Ajout d'une marge pour l'espacement */}
                Nouvelle Conversation
              </h2> {/* Titre pour la nouvelle conversation */}
              <p className="header-date" > {/* Ajout d'une marge pour l'espacement */}
                <i className="fas fa-history header-icon" style={{ color: '#050342', marginRight: '15px' }}></i> {/* Icône pour la date */}
                le 21/10/2024 {/* Date de la conversation */}
              </p>
            </div>
            <img src={doctorImage} alt="Doctor" className="doctor-image" style={{ width: '40px', height: '40px', marginLeft: '20px', borderRadius: '50%' }} /> {/* Image du docteur à droite du titre */}
          </div>
        </div>

        <div className="chat-body"> {/* Corps de la section de chat */}
          <div className="message bot-message"> {/* Message du bot */}
            <div className="avatar"> {/* Section de l'avatar pour le bot */}
              <img src={chatbot2} alt="Chatbot 2" className="chatbot2"/> {/* Image du deuxième chatbot */}
            </div>
            <div className={`message-text-container ${expandedMessage ? 'expanded' : ''}`}> {/* Conteneur pour le texte du message */}
              <div className="message-text"> {/* Section de texte pour le message */}
                <p>
                  Salut, _______________, je suis Samantha ; le chatbot qui répond à vos questions en rapport avec les droits, la santé, les violences et la sécurité. Je suis là pour vous accompagner et vous soutenir ! {/* Contenu du message */}
                </p>
              </div>
              <span className="message-time">le 21/10/2024 à 15:30</span> {/* Horodatage du message */}
              <span className="see-more" onClick={toggleMessage}>
                {expandedMessage ? "Voir moins" : "voir plus"}
              </span>
            </div>
          </div>
          <div className="chat-footer"> {/* Section de pied de page pour l'entrée de chat */}
            <div className="input-container"> {/* Conteneur pour le champ d'entrée */}
                <input
                  type="text"
                  placeholder="Écrivez votre message ici..."
                  className="message-input"
                  value={inputValue} // Lier la valeur de l'input à l'état
                  onChange={(e) => setInputValue(e.target.value)} // Met à jour l'état lors de la saisie
                />
                <i className="fas fa-paper-plane send-button" onClick={handleSend}></i> {/* Ajout de la fonction de gestion d'événements */}
            </div>
          </div>
            {errorMessage && ( // Affiche le message d'erreur si présent
              <span className="error-message" style={{ color: "red" }}>
                {errorMessage}
              </span>
            )}
        </div>

      </main>
    </div>
  );
}

export default App; // Exportation du composant App pour utilisation dans d'autres parties de l'application