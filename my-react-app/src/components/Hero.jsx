// src/components/Hero.jsx

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Learn Chinese <br/>with <span className="highlight">Kazi Robin</span></h1>
        <p>A complete free Chinese learning community from beginner to advanced.</p>
        <p className="tagline">Learn • Practice • Grow</p>
        
      <div style={{display:"flex"}}>
          <div className="hero-buttons">
          <button className="btn btn-primary">
            <span>📱</span> Join WhatsApp Community
          </button>
          {/* <button className="btn btn-secondary">
            <span>▶️</span> Visit YouTube Channel
          </button> */}
          </div>
      </div>
      </div>
      
      <div className="hero-image">
        {/* <div className="image-placeholder">
          <div className="chinese-elements">
            <div className="pagoda">🏯</div>
            <div className="sun">️</div>
            <div className="bamboo">🎋</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;