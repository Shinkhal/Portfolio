import React from 'react';
import { skills, certifications } from '../Details';

class Technologies extends React.Component {
  render() {
    return (
      <main className="container mx-auto max-w-screen-xl pt-10 pb-20 px-4 sm:px-6 lg:px-8  bg-white dark:bg-dark-mode">
        <section>
          <h1 className="text-3xl text-dark-heading dark:text-light-heading font-bold">
            Tech Stack
          </h1>
          <p className="text-lg text-dark-heading dark:text-light-heading py-2 lg:max-w-3xl">
            Technologies I've been working with recently
          </p>
        </section>
        <section className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map(skill => (
            <div key={skill.id} className="mb-4">
              <p className="text-xl text-dark-heading dark:text-light-heading">{skill.content}</p>
              <Progress completed={skill.percentage} />
            </div>
          ))}
        </section>
        <section className="pt-10">
          <h2 className="text-3xl text-dark-heading dark:text-light-heading font-bold">
            Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ">
            {certifications.map(cert => (
              <CertificationCard key={cert.id} title={cert.title} link={cert.link} />
            ))}
          </div>
        </section>
      </main>
    );
  }
}

class Progress extends React.Component {
  render() {
    const { completed } = this.props;
    const style = {
      backgroundColor: 'green', // blue color
      height: '10px',
      width: `${completed}%`,
      transition: 'width 0.5s ease-in-out',
    };

    return (
      <div className="progressbar-container" style={{ backgroundColor: '#FFFFFF', border: '1px solid black', borderRadius: '5px', maxWidth: '300px' }}>
        <div className="progressbar-progress" style={style}></div>
      </div>
    );
  }
}

// Certification Card Component
const CertificationCard = ({ title, link }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="border p-4 cursor-pointer transition duration-300 rounded-xl mt-10 overflow-hidden shadow-lg shadow-slate-400 dark:shadow-slate-900  hover:scale-110  hover:shadow-2xl" onClick={handleClick}>
      <h3 className="text-lg font-semibold text-dark-heading dark:text-light-heading">{title}</h3>
      <p className="text-sm text-gray-600">Click to view certificate</p>
    </div>
  );
};

export default Technologies;
