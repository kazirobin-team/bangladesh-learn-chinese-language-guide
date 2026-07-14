// src/components/Courses.jsx

const Courses = () => {
  const courses = [
    { level: 1, title: 'HSK 1', subtitle: 'Beginner', color: '#4CAF50', desc: 'Start your Chinese journey from zero.' },
    { level: 2, title: 'HSK 2', subtitle: 'Elementary', color: '#2196F3', desc: 'Build basic sentences and daily conversation.' },
    { level: 3, title: 'HSK 3', subtitle: 'Pre-Intermediate', color: '#FF9800', desc: 'Improve your skills and expand words.' },
    { level: 4, title: 'HSK 4', subtitle: 'Intermediate', color: '#9C27B0', desc: 'Use Chinese more naturally in real life.' },
    { level: 5, title: 'HSK 5', subtitle: 'Upper-Intermediate', color: '#F44336', desc: 'Understand complex texts and topics.' },
    { level: 6, title: 'HSK 6', subtitle: 'Advanced', color: '#607D8B', desc: 'Master Chinese and express yourself fluently.' }
  ];

  return (
    <section className="courses">
      <h2 className="section-title">Our Courses</h2>
      <div className="divider">❖</div>
      
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="level-badge" style={{ backgroundColor: course.color }}>
              HSK {course.level}
            </div>
            <h3>{course.title}</h3>
            <p className="level-subtitle">{course.subtitle}</p>
            <p className="course-desc">{course.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;