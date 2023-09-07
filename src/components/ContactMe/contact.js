import React, {useRef} from 'react'
import fb from '../../assets/facebook-icon.png';
import ig from '../../assets/instagram.png';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9t285gg', 'template_jtjlmlm', form.current, 'jTQm_5-CfwBO_GMvT')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent !');
      }, (error) => {
          console.log(error.text);
      });
    };
  return (
    <section id='contactPage'>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Your Name' name='your_name' />
                <input type="email" className='email' placeholder='Your Email' name='your_email' />
                <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                <button className='submitBtn' type='submit' value="Send">Submit</button>
                <div className='links'>
                  <a target="_blank" rel="noopener no-referrer" href='https://www.facebook.com/khan.quiambao0420/'><img src={fb} alt='' className='link' /></a>
                  <a target="_blank" rel="noopener no-referrer" href='https://www.instagram.com/'><img src={ig} alt='' className='link' /></a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact;
