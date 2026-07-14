// src/components/WhatsAppCommunity.jsx

const WhatsAppCommunity = () => {
  return (
    <section className="whatsapp-section">
      <div className="whatsapp-content">
        <div className="phone-mockup">
          <div className="phone-screen">
            <div className="app-header">Learn Chinese with Kazi Robin</div>
            <div className="chat-list">
              <div className="chat-item">📢 Announcements</div>
              <div className="chat-item">💬 General Chat</div>
              <div className="chat-item">📚 HSK 1 Group</div>
              <div className="chat-item"> Practice Room</div>
              <div className="chat-item">❓ Community Help</div>
            </div>
          </div>
        </div>
        
        <div className="whatsapp-text">
          <h2>Join Our Free <span className="highlight-yellow">WhatsApp Community</span></h2>
          <p>Join thousands of learners and take your Chinese learning journey together.</p>
          <button className="btn btn-whatsapp">
            <span>💬</span> Join Now on WhatsApp
          </button>
        </div>
        
        <div className="qr-section">
          <div className="qr-code">
            <div className="qr-placeholder">QR CODE</div>
          </div>
          <p className="scan-text">Scan to Join</p>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCommunity;