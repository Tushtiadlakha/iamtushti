
import './App.css';
import Achievements from './Components/Achievements';
import Footer from './Components/Footer';

import Header from './Components/Header';
import Hero from './Components/Hero';
import Project from './Components/Project';
import Skills from './Components/Skillset';
import Timeline from './Components/Timeline';

function App() {
  return (
    <div className='sm:container'>
    <Hero/>
    <Header/>
    <Timeline/>
    <Project/>
    <Skills/>
    <Achievements/>
    <Footer/>
    
    </div>
  );
}

export default App;
