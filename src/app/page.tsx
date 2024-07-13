/* page.tsx */
"use client"; 

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Introduction from './introduction';
import introductionLines from './introduction-lines'; // Import the lines

const HomePage = () => {
  const [stage, setStage] = useState<number>(0);
  const [skills, setSkills] = useState<string[]>([]);
  const [education, setEducation] = useState<string[]>([]);
  const [experience, setExperience] = useState<string[]>([]);
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [jobAd, setJobAd] = useState<string>('');

  const addItem = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, itemId: string) => {
    const inputElement = document.getElementById(itemId) as HTMLInputElement | null;
    if (inputElement && inputElement.value) {
       setList([...list, inputElement.value]);
    }
  };

  const stages = [
    {
      id: "introduction",
      content: (
        <Introduction 
          lines={introductionLines} 
          onFinish={() => setStage(1)} 
        />
      )
    },
    {
      id: "skills",
      content: (
        <>
          <h2>Skills</h2>
          <input type="text" id="skills-input" placeholder="Enter a skill" />
          <button onClick={() => addItem(skills, setSkills, 'skills-input')}>Add Skill</button>
          <ul id="skills-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <button onClick={() => setStage(0)}>Back</button>
          <button onClick={() => setStage(2)} disabled={skills.length === 0}>Next - edu</button>
        </>
      )
    },
    {
      id: "education",
      content: (
        <>
          <h2>Education</h2>
          <input type="text" id="education-input" placeholder="Enter an education detail" />
          <button onClick={() => addItem(education, setEducation, 'education-input')}>Add Education</button>
          <ul id="education-list">
            {education.map((edu, index) => (
              <li key={index}>{edu}</li>
            ))}
          </ul>
          <button onClick={() => setStage(1)}>Back</button>
          <button onClick={() => setStage(3)} disabled={education.length === 0}>Next - experience</button>
        </>
      )
    },
    {
      id: "experience",
      content: (
        <>
          <h2>Experience</h2>
          <input type="text" id="experience-input" placeholder="Enter an experience detail" />
          <button onClick={() => addItem(experience, setExperience, 'experience-input')}>Add Experience</button>
          <ul id="experience-list">
            {experience.map((exp, index) => (
              <li key={index}>{exp}</li>
            ))}
          </ul>
          <button onClick={() => setStage(2)}>Back</button>
          <button onClick={() => setStage(4)} disabled={experience.length === 0}>Next - hobbies</button>
        </>
      )
    },
    {
      id: "hobbies",
      content: (
        <>
          <h2>Hobbies</h2>
          <input type="text" id="hobbies-input" placeholder="Enter a hobby" />
          <button onClick={() => addItem(hobbies, setHobbies, 'hobbies-input')}>Add Hobby</button>
          <ul id="hobbies-list">
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
          <button onClick={() => setStage(3)}>Back</button>
          <button onClick={() => setStage(5)} disabled={hobbies.length === 0}>Next - paste ad</button>
        </>
      )
    },
    {
      id: "job-ad",
      content: (
        <>
          <h2>Job Advert</h2>
          <textarea id="job-ad-input" placeholder="Paste a job advert here" value={jobAd} onChange={(e) => setJobAd(e.target.value)}></textarea>
          <button onClick={() => setStage(4)}>Back</button>
          <button onClick={() => setStage(6)}>Next</button>
        </>
      )
    },
    {
      id: "processing",
      content: (
        <>
          <h2>Processing</h2>
          <p>Processing your profile...</p>
          <button onClick={() => setStage(5)}>Back</button>
          <button onClick={() => setStage(7)}>Next</button>
        </>
      )
    },
    {
      id: "results",
      content: (
        <>
          <h2>Results</h2>
          <p>These are your collected details:</p>
          <ul id="results-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
            {education.map((edu, index) => (
              <li key={index}>{edu}</li>
            ))}
            {experience.map((exp, index) => (
              <li key={index}>{exp}</li>
            ))}
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
            <li>{jobAd}</li>
          </ul>
          <button onClick={() => setStage(6)}>Back</button>
          <button id="download-resume">Download Resume</button>
        </>
      )
    }
  ];

  return (
    <>
      <Head>
        <title>Resumeister</title>
        <meta name="description" content="A website that makes custom resumes using your own words" />
      </Head>
      <div className="font-mono font-medium text-4xl text-slate-700 bg-black bg-custom-pattern bg-center bg-no-repeat bg-cover text-center m-0 p-0 flex flex-col justify-center min-h-screen">
        {stages[stage].content}
        <p className="credit">
          background photo by{' '}
          <a href="https://unsplash.com/@paulearlephotography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            paul earle
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/photos/mountain-dew-during-sunrise-xJ2tjuUHD9M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            unsplash
          </a>
        </p>
      </div>
    </>
  );
};

export default HomePage;
