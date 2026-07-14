// src/components/WhatYouGet.jsx

const WhatYouGet = () => {
  const features = [
    { icon: '📖', title: 'Free Lessons', desc: 'Step by step lessons from basics to advance.' },
    { icon: '🎧', title: 'Pinyin Practice', desc: 'Learn correct pronunciation with easy examples.' },
    { icon: '✍️', title: 'Vocabulary', desc: 'Daily new words with examples and meaning.' },
    { icon: '💬', title: 'Speaking Practice', desc: 'Improve speaking with sentences & dialogues.' },
    { icon: '📄', title: 'Free Resources', desc: 'Download free PDFs, notes and worksheets.' },
    { icon: '👥', title: 'Active Community', desc: 'Ask questions, share and learn together.' }
  ];

  return (
    <section className="what-you-get">
      <h2 className="section-title white">What You Will Get</h2>
      <div className="divider white">❖</div>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatYouGet;
