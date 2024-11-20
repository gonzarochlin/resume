import React from 'react';
import Header from './components/Header';
import ProfessionalSummary from './components/ProfessionalSummary';
import Experience from './components/Experience';
import EducationCertifications from './components/EducationCertifications';
import Contact from './components/Contact';

const App = (): JSX.Element => {
  return (
    <div>
      <Header />
      <ProfessionalSummary />
      <Experience />
      <EducationCertifications />
      {/* <Contact /> */}
    </div>
  );
};

export default App;
