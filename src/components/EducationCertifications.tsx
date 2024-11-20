import React from 'react';
import '../styles/components/EducationCertifications.scss';

interface EducationItem {
    school: string;
    degree: string;
    year: string;
}

const education: EducationItem[] = [
    {
        school: 'Universidad Tecnológica Nacional (UTN)',
        degree: 'Information Systems Engineer',
        year: '2015 - 2020',
    },
    {
        school: 'Technical Schools ORT',
        degree: 'Technical Bachelor in Computer Science',
        year: '2009 - 2014',
    },
];

const certifications: string[] = [
    'Scrum Foundations Professional Certificate (2020)',
    'React Native Course (2019)',
];

const EducationCertifications = (): JSX.Element => {
    return (
        <section className="education">
            <h2>Education & Certifications</h2>
            <div className="education-list">
                {education.map((edu, index) => (
                    <div key={index} className="education-item">
                        <h3>{edu.school}</h3>
                        <p>{edu.degree} | {edu.year}</p>
                    </div>
                ))}
            </div>
            <h3>Certifications</h3>
            <ul>
                {certifications.map((cert, idx) => <li key={idx}>{cert}</li>)}
            </ul>
        </section>
    );
};

export default EducationCertifications;
