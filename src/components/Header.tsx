import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/components/Header.scss';

const Header = (): JSX.Element => {
    const [isScrolled, setScrolled] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    return (
        <header className={`header ${isScrolled && 'header-scrolled'}`}>
            <h1>Gonzalo Rochlin</h1>
            <p>Senior Full-Stack Engineer & Team Leader</p>
            <div className="header-links">
                <a
                    href="https://github.com/gonzarochlin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                >
                    <FaGithub size={24} /> GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/gonzalo-rochlin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                >
                    <FaLinkedin size={24} /> LinkedIn
                </a>
            </div>
        </header>
    );
};

export default Header;
