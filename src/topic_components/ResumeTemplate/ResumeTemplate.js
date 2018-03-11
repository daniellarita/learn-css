import React from 'react';
import './resumeStyle.css';
import * as res from './resumeContent';

const ResumeTemplate = () => {
    return (
        <div className="res-container">
            <div className="header">
                <h1>{res.NAME}</h1>
                <hr />
                <h5>{res.CONTACT_INFO}</h5>
            </div>
            <div className="bio">
                <p>{res.BIO}</p>
            </div>
            <div className="main-section">
                <div className="experience">
                    <h2 className="section-header">Experience</h2>
                    {res.EXPERIENCE.map(job => {
                        return (
                            <div>
                                <h3>{job.name}, {job.location}</h3>
                                { job.role.map(role => {
                                    return (
                                        <div>
                                            <div className="exp-subheader">
                                                <h4>{role.name}</h4>
                                                <h5 className="dates">{role.date}</h5>
                                            </div>
                                            <ul>
                                                {role.bullets.map(bullet => {
                                                    return <li>{bullet}</li>
                                                })}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
                <div className="education">
                    <h2 className="section-header">Education</h2>
                    {res.EDUCATION.map(school => {
                        return (
                            <div>
                                <div className="education-subheader">
                                    <h4>{school.name}, {school.location}</h4>
                                    <h5 className="dates">{school.date}</h5>
                                </div>
                                <p>{school.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="skills">
                <h2 className="section-header">Skills</h2>
                {Object.keys(res.SKILLS).map(level => {
                  return ( 
                    <div>
                        <div className="skill-level">{level}:</div>
                        {res.SKILLS[level].map(skill => {
                            return <p className="skill">{skill}</p>
                        })}
                        <br></br>
                    </div>
                 
                  );  
                })
                }
            </div>
        </div>
    );
}

export default ResumeTemplate;