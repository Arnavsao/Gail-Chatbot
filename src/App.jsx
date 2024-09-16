import React, { useState } from 'react';
import Chatbot from './pages/Chatbot/Chatbot.jsx'; // Correct path for Chatbot component
import LoginPopup from './pages/LoginPopup/LoginPopup.jsx'; // Correct path for LoginPopup component

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="App">
      {showLogin ? (
        <LoginPopup setShowLogin={setShowLogin} /> // Show login popup
      ) : (
        <Chatbot /> // Show chatbot after login
      )}
    </div>
  );
}

export default App;