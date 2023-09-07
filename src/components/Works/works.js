import React from 'react'
import './works.css';
import travel from '../../assets/travel.png';
import commerce from '../../assets/ecommerce.png';
import game from '../../assets/game.png';


const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixek perfect. I am excited to bring my skills and experience to help business achieve their goals and create a strong online presence.</span>
        <div className='worksImgs'>
            <a target="_blank" rel="noopener no-referrer" href="https://khanquiambao.github.io/MP1_WD76_QUIAMBAO/"><img src={travel} alt='' className='worksImg' /></a>
            <a target="_blank" rel="noopener no-referrer" href="https://khanquiambao.github.io/MP2/"><img src={commerce} alt='' className='worksImg' /></a>
            <a target="_blank" rel="noopener no-referrer" href="https://khanquiambao.github.io/game/"><img src={game} alt='' className='worksImg' /></a>
        </div>

    </section>
  )
}

export default Works;
