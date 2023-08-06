import React from 'react'
import "./about.css";
import Image from "../../assets/avatar-2.svg"

const About = () => {
  return (
    <section className='about container section' id='about'>
     <h2 className='section_title'>About Me</h2> 
     <div className='about_container grid'>
      <img src={Image} alt="" className='about_img'/>
      <div className='about_data grid'>
        <div className='about_info'>
          <p className='about_description'>
          Experienced Developer with a Strong Focus on Quality and Timely Delivery
          Results-driven and adaptable developer with a proven ability to excel in both independent and collaborative work environments. Committed to delivering high-quality outcomes while meeting strict deadlines, I bring a track record of success and a dedication to excellence. Whether working autonomously or as part of a team, I possess a versatile skill set that enables me to consistently produce exceptional results. 
          </p>
          <a href='./Shivam_resume_new.pdf' download className='btn'>Download CV</a>
        </div>

        <div className='about_skills grid'>
          <div className='skills_data'>
            <div className='skills_titles'>
              <h3 className='skills_name'>HTML|CSS|Bootstrap</h3>
              <span className='skills_number'>90%</span>
            </div>

            <div className='skills_bar'>
              <span className='skills_percentage html'></span>
            </div>
          </div>

            <div className='skills_data'>
            <div className='skills_titles'>
              <h3 className='skills_name'>Github</h3>
              <span className='skills_number'>75%</span>
            </div>

            <div className='skills_bar'>
              <span className='skills_percentage github'></span>
            </div>
            </div>

            <div className='skills_data'>
            <div className='skills_titles'>
              <h3 className='skills_name'>Javascript</h3>
              <span className='skills_number'>70%</span>
            </div>

            <div className='skills_bar'>
              <span className='skills_percentage javascript'></span>
            </div>
            </div>

            <div className='skills_data'>
            <div className='skills_titles'>
              <h3 className='skills_name'>React</h3>
              <span className='skills_number'>70%</span>
            </div>

            <div className='skills_bar'>
              <span className='skills_percentage react'></span>
            </div>
            </div>

            <div className='skills_data'>
            <div className='skills_titles'>
              <h3 className='skills_name'>Vue</h3>
              <span className='skills_number'>65%</span>
            </div>

            <div className='skills_bar'>
              <span className='skills_percentage vue'></span>
            </div>
            </div>

            <div className='skills_data'>
            <div className='skills_titles'>
              <h3 className='skills_name'>Docker & Kubernates</h3>
              <span className='skills_number'>50%</span>
            </div>

            <div className='skills_bar'>
              <span className='skills_percentage dockub'></span>
            </div>
            </div>

            <div className='skills_data'>
            <div className='skills_titles'>
              <h3 className='skills_name'>Cypress</h3>
              <span className='skills_number'>65%</span>
            </div>
 
            <div className='skills_bar'>
              <span className='skills_percentage cypress'></span>
            </div>
            </div>

            <div className='skills_data'>
            <div className='skills_titles'>
              <h3 className='skills_name'>Familiar: TailwindCss | NodeJs | Electron JS</h3>
              <span className='skills_number'>65%</span>
            </div>
 
            <div className='skills_bar'>
              <span className='skills_percentage cypress'></span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About