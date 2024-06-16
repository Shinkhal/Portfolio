import React from "react";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-w-screen-lg pt-10 pb-20 px-4 sm:px-6 lg:px-8  bg-white dark:bg-dark-mode">
      <section className="mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-dark-heading dark:text-light-heading font-bold mb-8">
          About Me
        </h1>
        <p className="text-lg text-dark-content dark:text-light-content leading-relaxed">
          {personalDetails.about}
        </p>
      </section>
      <section className="mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-dark-heading dark:text-light-heading font-bold mb-8">
          Work Experience
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workDetails.map((work, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-dark-card p-6 rounded-xl mt-10 overflow-hidden shadow-lg shadow-slate-400 dark:shadow-slate-900"
            >
              <h2 className="text-xl md:text-2xl font-bold text-dark-heading dark:text-light-heading mb-2">
                {work.Position} - {work.Company}
              </h2>
              <p className="text-lg text-dark-content dark:text-light-content mb-1">
                {work.Location}
              </p>
              <p className="text-lg text-dark-content dark:text-light-content mb-1">
                {work.Type}
              </p>
              <p className="text-lg text-dark-content dark:text-light-content">
                {work.Duration}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-dark-heading dark:text-light-heading font-bold mb-8">
          Education
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eduDetails.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-dark-card p-6 rounded-xl mt-10 overflow-hidden shadow-lg shadow-slate-400 dark:shadow-slate-900"
            >
              <h2 className="text-xl md:text-2xl font-bold text-dark-heading dark:text-light-heading mb-2">
                {edu.Course}
              </h2>
              <p className="text-lg text-dark-content dark:text-light-content mb-1">
                {edu.Branch}
              </p>
              <p className="text-lg text-dark-content dark:text-light-content mb-1">
                {edu.Institute}, {edu.Location}
              </p>
              <p className="text-lg text-dark-content dark:text-light-content">
                {edu.Duration}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
