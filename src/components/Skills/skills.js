import React from 'react';
import './skills.css';
import Html from '../../assets/html.png';
import Css from '../../assets/css.png';
import Bootstrap from '../../assets/boot.png';
import Responsive from '../../assets/responsive.png';
import Javascript from '../../assets/java.png';
import Reactjs from '../../assets/react.png';
import Git from '../../assets/github.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>My Skills</span>
        <span className='skillDesc'>I am a skilled and passionate web developer with experience in creating visually appealing and user friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, BOOTSTRAP, RESPONSIVE DESIGNS, JAVA SCRIPT and REACT JS.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={Html} alt='Html' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>HTML</h2>
                    <p>Basic and Advance Knowledge</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Css} alt='Css' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>CSS</h2>
                    <p>Basic and Advance Knowledge</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Bootstrap} alt='Bootstrap' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>BOOTSTRAP</h2>
                    <p>Basic and Advance Knowledge</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Responsive} alt='Responsive Design' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>RESPONSIVE DESIGN</h2>
                    <p>Basic and Advance Knowledge</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Javascript} alt='Java Script' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>JAVA SCRIPT</h2>
                    <p>Basic and Advance Knowledge</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Reactjs} alt='ReactJS' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>REACT JS</h2>
                    <p>Basic and Advance Knowledge</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Git} alt='GitHub' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>GIT HUB</h2>
                    <p>Basic and Advance Knowledge</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Skills;
