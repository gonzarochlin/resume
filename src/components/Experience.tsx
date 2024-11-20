import React from 'react';
import '../styles/components/Experience.scss';
import SkillsTechnologies from './SkillsTechnologies';

interface ExperienceItem {
    company: string;
    role: string;
    date: string;
    description: string[];
    skills: string[];
}

const experiences: ExperienceItem[] = [
    {
        company: 'Dynamo Mobile',
        role: 'Sr Full-Stack Engineer and Team Leader',
        date: 'Feb 2023 - Present',
        description: [
            'Lead development and proposal of new features for the bot creation platform.',
            'Integrated new channels like Facebook Messenger, Instagram, and WhatsApp.',
            'Collaborated with cross-functional teams to enhance platform performance.',
        ],
        skills: ['React.js', 'Node.js', 'TypeScript', 'Vue.js', 'Redis'],
    },
    {
        company: 'Botmaker',
        role: 'Sr Full-Stack Engineer and Team Leader',
        date: 'July 2020 - Jan 2023',
        description: [
            'Developed and proposed new features for the chat and bot creation platform.',
            'Led chatbot development for major companies like MercadoLibre, Toyota, and Universal Assistance.',
            'Managed the mobile app development and integrated chatbots with various platforms.',
        ],
        skills: ['React.js', 'React Native', 'Node.js', 'Java'],
    },
    {
        company: 'PSh (Flocabulary / Nearpod)',
        role: 'Full-Stack Developer',
        date: 'July 2019 - July 2020',
        description: [
            'Developed educational software with a focus on music and language learning.',
            'Worked on the front-end using React.js and Redux, and back-end using Python + Django.',
            'Implemented automated tests using Jest for reliable and robust software.',
        ],
        skills: ['React.js', 'Redux', 'Python + Django', 'Jest'],
    },
    {
        company: 'Boreal IT (Boreal Technologies SA)',
        role: 'Team Leader and Full-Stack Developer',
        date: 'October 2018 - July 2019',
        description: [
            'Led the development of mobile applications and maintained internal systems.',
            'Utilized technologies like Ionic, React.js, React Native, and Node.js.',
        ],
        skills: ['Ionic', 'React.js', 'React Native', 'Node.js'],
    },
    {
        company: 'Menhir Sistemas SRL',
        role: 'Full-Stack Developer',
        date: 'July 2016 - September 2018',
        description: [
            'Developed applications for various industries, including gambling, agriculture, and e-commerce.',
            'Worked with technologies like JavaScript, TypeScript, Ionic, CouchDB, PouchDB, SQL Server, and PHP.',
        ],
        skills: ['JavaScript', 'TypeScript', 'Ionic', 'CouchDB', 'PouchDB', 'SQL Server', 'PHP'],
    },
];


const Experience = (): JSX.Element => {
    return (
        <section className="experience">
            <h2>Experience</h2>
            <div className='jobs-list'>
                {experiences.map((exp, index) => (
                    <div key={index} className="job">
                        <h3>{exp.company}</h3>
                        <p className="role">{exp.role}</p>
                        <p className="date">{exp.date}</p>
                        <ul>
                            {exp.description.map((desc, idx) => <li key={idx}>{desc}</li>)}
                        </ul>
                        
                        <SkillsTechnologies skills={exp.skills} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
