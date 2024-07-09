"use client"; // Add this directive at the top

import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/home.module.css';

const Home = () => {
  const [stage, setStage] = useState('introduction');
  const [skills, setSkills] = useState<string[]>([]);
  const [education, setEducation] = useState<string[]>([]);
  const [experience, setExperience] = useState<string[]>([]);
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [jobAd, setJobAd] = useState('');

  const handleAddSkill = (skill: string) => {
    setSkills([...skills, skill]);
  };

  const handleAddEducation = (edu: string) => {
    setEducation([...education, edu]);
  };

  const handleAddExperience = (exp: string) => {
    setExperience([...experience, exp]);
  };

  const handleAddHobby = (hobby: string) => {
    setHobbies([...hobbies, hobby]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Resumeister</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <div className={styles.innerContainer}>
        <div className={`${styles.stage} ${stage === 'introduction' ? styles.activeStage : ''}`}>
          <h2>Resumeister</h2>
          <p>A website that makes custom resumes using your own words</p>
          <button onClick={() => setStage('skills')}>Alright... I'll bite - tell me more</button>
        </div>

        <div className={`${styles.stage} ${stage === 'skills' ? styles.activeStage : ''}`}>
          <h2>Skills</h2>
          <input type="text" id="skills-input" placeholder="Enter a skill" />
          <button onClick={() => handleAddSkill((document.getElementById('skills-input') as HTMLInputElement).value)}>Add Skill</button>
          <ul>
            {skills.map((skill, index) => <li key={index}>{skill}</li>)}
          </ul>
          <button onClick={() => setStage('education')} disabled={skills.length === 0}>Next - edu</button>
        </div>

        <div className={`${styles.stage} ${stage === 'education' ? styles.activeStage : ''}`}>
          <h2>Education</h2>
          <input type="text" id="education-input" placeholder="Enter an education detail" />
          <button onClick={() => handleAddEducation((document.getElementById('education-input') as HTMLInputElement).value)}>Add Education</button>
          <ul>
            {education.map((edu, index) => <li key={index}>{edu}</li>)}
          </ul>
          <button onClick={() => setStage('skills')}>Back</button>
          <button onClick={() => setStage('experience')} disabled={education.length === 0}>Next - experience</button>
        </div>

        <div className={`${styles.stage} ${stage === 'experience' ? styles.activeStage : ''}`}>
          <h2>Experience</h2>
          <input type="text" id="experience-input" placeholder="Enter an experience detail" />
          <button onClick={() => handleAddExperience((document.getElementById('experience-input') as HTMLInputElement).value)}>Add Experience</button>
          <ul>
            {experience.map((exp, index) => <li key={index}>{exp}</li>)}
          </ul>
          <button onClick={() => setStage('education')}>Back</button>
          <button onClick={() => setStage('hobbies')} disabled={experience.length === 0}>Next - hobbies</button>
        </div>

        <div className={`${styles.stage} ${stage === 'hobbies' ? styles.activeStage : ''}`}>
          <h2>Hobbies</h2>
          <input type="text" id="hobbies-input" placeholder="Enter a hobby" />
          <button onClick={() => handleAddHobby((document.getElementById('hobbies-input') as HTMLInputElement).value)}>Add Hobby</button>
          <ul>
            {hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
          </ul>
          <button onClick={() => setStage('experience')}>Back</button>
          <button onClick={() => setStage('jobAd')} disabled={hobbies.length === 0}>Next - paste ad</button>
        </div>

        <div className={`${styles.stage} ${stage === 'jobAd' ? styles.activeStage : ''}`}>
          <h2>Job Advert</h2>
          <textarea id="job-ad-input" placeholder="Paste a job advert here" onChange={(e) => setJobAd(e.target.value)}></textarea>
          <button onClick={() => setStage('hobbies')}>Back</button>
          <button onClick={() => setStage('processing')}>Next</button>
        </div>

        <div className={`${styles.stage} ${stage === 'processing' ? styles.activeStage : ''}`}>
          <h2>Processing</h2>
          <p>Processing your profile...</p>
          <button onClick={() => setStage('jobAd')}>Back</button>
          <button onClick={() => setStage('results')}>Next</button>
        </div>

        <div className={`${styles.stage} ${stage === 'results' ? styles.activeStage : ''}`}>
          <h2>Results</h2>
          <p>These are your collected details:</p>
          <ul>
            {skills.map((skill, index) => <li key={index}>{skill}</li>)}
            {education.map((edu, index) => <li key={index}>{edu}</li>)}
            {experience.map((exp, index) => <li key={index}>{exp}</li>)}
            {hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
          </ul>
          <button onClick={() => setStage('processing')}>Back</button>
          <button id="download-resume">Download Resume</button>
        </div>

        <p className={styles.credit}>background photo by{' '}
          <a href="https://unsplash.com/@paulearlephotography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            paul earle</a> on{' '}
          <a href="https://unsplash.com/photos/mountain-dew-during-sunrise-xJ2tjuUHD9M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            unsplash</a>
        </p>
      </div>
    </div>
  );
};

export default Home;
