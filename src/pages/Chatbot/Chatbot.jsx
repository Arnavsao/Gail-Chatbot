import React from 'react';
import './Chatbot.css'; // Import the new Chatbot styles
import logo from '../../assets/chatbot_logo.png'; // Chatbot logo
import employee_logo from '../../assets/employee_logo.png'; // User logo

const Chatbot = () => {
  return (
    <div className="App">
      <aside className='sidemenu'>
        <div className="sidemenu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className='chatbot'>
        <div className="chat-log">
          <div className="chat-message">
            <div className="chat-message-center">
              <div className="avatar">
                <img src={employee_logo} alt="Employee Logo" />
              </div>
              <div className="message">
                How do I report an incident or security issue?
              </div>
            </div>
          </div>
          <div className="chat-message chatgpt">
            <div className="chat-message-center">
              <div className="avatar chatgpt">
                <img src={logo} alt="Chatbot Logo" />
              </div>
              <div className="message">
                Report any incidents or security issues through the IT Service Desk or directly to the IT Security Team. Provide detailed information about the incident to facilitate a thorough investigation and response.
              </div>
            </div>
          </div>
          <div className="chat-message">
            <div className="chat-message-center">
              <div className="avatar">
                <img src={employee_logo} alt="Employee Logo" />
              </div>
              <div className="message">
                What steps should I take to ensure I am following GAIL’s Information Security Policy when handling sensitive information?
              </div>
            </div>
          </div>
          <div className="chat-message chatgpt">
            <div className="chat-message-center">
              <div className="avatar chatgpt">
                <img src={logo} alt="Chatbot Logo" />
              </div>
              <div className="message">
                <p>To ensure you are following GAIL’s Information Security Policy when handling sensitive information, you should:</p>
                <ul>
                  <li>Adhere to access controls by ensuring that you only access sensitive information necessary for your role and use secure methods for logging in and authenticating your access.</li>
                  <li>Secure storage is crucial; store sensitive information in secure locations, such as encrypted drives or secure filing systems, and avoid leaving physical documents unattended.</li>
                  <li>Report any suspicious activity or security breaches immediately to the IT Security Team or through the designated reporting channels.</li>
                  <li>Adhere to established procedures for handling, transmitting, and disposing of sensitive information to prevent unauthorized access.</li>
                  <li>Stay informed by regularly reviewing and updating yourself with the latest version of the Information Security Policy and any additional guidelines or training provided by the company.</li>
                  <li>Actively participate in mandatory training or awareness sessions related to information security to stay knowledgeable about best practices and policy requirements.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-input-holder">
          <textarea
            rows="1"
            className='chat-input-textarea'
            placeholder='Type your message here'>
          </textarea>
        </div>
      </section>
    </div>
  );
};

export default Chatbot;