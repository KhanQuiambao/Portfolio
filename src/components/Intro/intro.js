import React from 'react'
import './intro.css';
import bg from '../../assets/pain.png';
import btnImg from '../../assets/hireme.png';
import resume from './RESUME.pdf';
import { Link } from 'react-scroll';

const Intro = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = './RESUME.pdf';
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Quiambao</span><br/> Website Developer</span>
            <p className="introPara">I am a skilled and passionate web developer with experience in creating<br/> visually appealing and user friendly websites.</p>
            <Link><button className="btn" onClick={downloadResume}><img src={btnImg} alt="Hire Me" className="btnImg" />Resume</button></Link>
            
        </div> 
        <img src={bg} alt="Profile" className="bg" />    
    </section>

  )
}

export default Intro;
