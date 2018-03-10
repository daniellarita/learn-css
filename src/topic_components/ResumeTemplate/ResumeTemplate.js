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
            <div className="skills">
                <label></label>
                {res.SKILLS.Proficient.map(skill => {
                    return <p>{skill}</p>
                })}
            </div>
        </div>
    );
}

export default ResumeTemplate;