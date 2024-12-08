import React from "react";
import "./App.css";
import { useAuth } from "../../Authentications";
import facebook from "../../assets/facebook.png";
import logo from "../../assets/logo.png";
import google from "../../assets/google.png";
import twitter from "../../assets/twiter.png";
import chatbot1 from "../../assets/chatbot 1.png";
import chatbot2 from "../../assets/chatbot 2.png";

function App() {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <header className="sidebar">
        <div className="logo-section">
          <div className="logo-container">
            <img src={logo} alt="Tech Safe Logo" className="logo" />
            <img src={chatbot1} alt="Chatbot 1" className="chatbot1" />
          </div>
          <div className="welcome-header">
            <h1 style={{ color: '#050342' }}>Bienvenue !</h1>
            <hr className="title-underline" />
          </div>
        </div>
        
        <div className="options">
          <p className="sidebar-text">Que voulez-vous apprendre aujourd'hui ?</p>
          <div className="button-container">
            <button>Santé</button>
            <button>Droits</button>
            <button>Violence</button>
            <button>Soutien</button>
            <button>Sécurité</button>
          </div>
        </div>
        
        <footer className="sidebar-footer">
          <p>
            <i className="fas fa-history" style={{ color: '#050342', marginRight: '8px' }}></i>
            Historique des dernières conversations
          </p>
        </footer>
      </header>

      {/* Chat Section */}
      <main className="chat-container">
        <div className="chat-header">
          <div className="chat-icon-container">
          </div>
          <div className="header-content">
            <h2 className="header-title" style={{ color: '#050342', marginRight: '25px' }}>Nouvelle Conversation</h2>
            <p className="header-date">
              <i className="fas fa-history header-icon" style={{ color: '#050342', marginRight: '25px' }}></i>
              le 21/10/2024
            </p>
          </div>
        </div>

        <div className="chat-body">
          <div className="message bot-message">
            <div className="avatar">
              <img src={chatbot2} alt="Chatbot 2" className="chatbot2"/>
            </div>
            <div className="message-text-container">
              <div className="message-text">
                <p>
                  Salut, _______________, je suis Samantha ; le chatbot qui répond à vos questions en rapport avec les droits, la santé, les violences et la sécurité. Je suis là pour vous accompagner et vous soutenir !
                </p>
              </div>
              <span className="message-time">le 21/10/2024 à 15:30</span>
            </div>
          </div>
          <div className="chat-footer">
            <div className="input-container">
                <input type="text" placeholder="Écrivez votre message ici..." className="message-input" />
                <i className="fas fa-paper-plane send-button"></i>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
