import React from 'react';
import '../styles/components/SkillsTechnologies.scss';

export interface ISkillsTechnologiesProps {
    skills: string[];
}

const SkillsTechnologies = (props: ISkillsTechnologiesProps): JSX.Element => {
    const {
        skills
    } = props;

    return (
        <div className="skills">
            {skills.map((skill, index) => (
                <span key={index} className="skill">{skill}</span>
            ))}
        </div>
    );
};

export default SkillsTechnologies;
