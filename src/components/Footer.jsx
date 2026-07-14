// src/components/Footer.jsx

const Footer = () => {
  const quickLinks = ['Home', 'Courses', 'Pinyin', 'Vocabulary', 'Resources', 'About', 'Contact'];
  const socialIcons = ['📺', '📘', '📷', '💬', '✈️'];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-icon">📚</span>
            <div className="logo-text">
              <h3>Learn Chinese</h3>
              <span>with <em>Kazi Robin</em></span>
            </div>
          </div>
          <p>Learn • Practice • Grow</p>
          <p>Let's master Chinese together.</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <div className="links-grid">
            {quickLinks.map((link, index) => (
              <a key={index} href={`#${link.toLowerCase()}`}>{link}</a>
            ))}
          </div>
        </div>
        
        <div className="footer-connect">
          <h4>Stay Connected</h4>
          <div className="social-icons">
            {socialIcons.map((icon, index) => (
              <span key={index} className="social-icon">{icon}</span>
            ))}
          </div>
          <p>📧 learnchinesewithkazarobin@gmail.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 Learn Chinese with Kazi Robin. All rights reserved.</p>
        <p>Made with ❤️ for Chinese Learners</p>
      </div>
    </footer>
  );
};

export default Footer;