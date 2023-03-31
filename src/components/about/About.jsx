import React from 'react'
import './about.css'
import ME from'../../assets/about.jpg'
import {GiStarsStack} from 'react-icons/gi'
import {BsFillPeopleFill} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <GiStarsStack className='about__icon'/>
                <h5>Experience</h5>
                <small>2+ years working</small>
              </article>
              <article className="about__card">
                <BsFillPeopleFill className='about__icon'/>
                <h5>Clients</h5>
                <small>40+ Worldwide</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>20+ Completed</small>
              </article>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam magni voluptas ad asperiores quia labore beatae nulla iusto velit at rem vel sit odit corrupti quos ullam consectetur ea, ut architecto explicabo sunt mollitia minus debitis nobis. Praesentium, beatae et.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about