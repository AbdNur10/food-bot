import React from 'react'
import heroAbout from '../../assets/content.png'
import content2 from '../../assets/content 2.png'
import about from '../../assets/About.png'
import testimonial from '../../assets/Testimonial(1).png'
import '../../styles/about.css'

const About = () => {
  return (
    <div className="about">
      <div className="img">
        <img src={heroAbout}  />
        <img src={content2} style={{height:900}} />
        <img src={about} />
        <img src={testimonial} style={{height:700}} />
      </div>

    </div>
  )
}

export default About