// src/components/WhyLearnChinese.jsx

const WhyLearnChinese = () => {
  const reasons = [
    {
      icon: '📈',
      title: 'Global Opportunity',
      description: 'Chinese is the most spoken language and opens doors worldwide.'
    },
    {
      icon: '',
      title: 'Career Growth',
      description: 'More career and business opportunities with Chinese skills.'
    },
    {
      icon: '🧠',
      title: 'Improve Brain',
      description: 'Learning Chinese improves memory and problem-solving skills.'
    },
    {
      icon: '💬',
      title: 'Connect Culture',
      description: 'Understand Chinese culture, history and think in a new way.'
    },
    {
      icon: '',
      title: 'Community Support',
      description: 'Learn together in our active & friendly community.'
    }
  ];

  return (
    <section className="why-learn">
      <h2 className="section-title">Why Learn Chinese?</h2>
      <div className="divider">❖</div>
      
      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-card">
            <div className="icon-circle">{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyLearnChinese;