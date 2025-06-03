import React from 'react'
import './Contact.css'
import Section from '../section/Section'
import { Bounce } from 'react-reveal'
import ContactForm from '../contactForm/ContactForm'
import linkedin from '../../images/social/linkedin.png'
import github from '../../images/social/github.png'
import instagram from '../../images/social/instagram.png'
import twitter from '../../images/social/twitter.png'
import Stackoverflow from '../../images/social/stackoverflow.png'

const Contact = () => {
  return (
    <Section title="Contact">
      <ContactForm />
      <Bounce cascade>
        <div className="links">
          <a
            href="https://github.com/anujraghuvanshi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github Logo" width="40px" />
          </a>

          <a
            href="https://stackoverflow.com/users/7078456/anuj-raghuvanshi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Stackoverflow} alt="Stackoverflow Logo" width="40px" />
          </a>

          <a
            href="https://www.linkedin.com/in/itsanujraghuvanshi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin Logo" width="40px" />
          </a>

          <a
            href="https://www.instagram.com/javascript_essentials/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram Logo" width="40px" />
          </a>

          <a
            href="https://twitter.com/itsMrAnujSingh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="Facebook Logo" width="40px" />
          </a>
        </div>
      </Bounce>
    </Section>
  )
}

export default Contact
