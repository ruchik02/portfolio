import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            {/* 1 */}
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Advanced</small>
              </div>
              
            </article>
            {/* 2 */}
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>React-Native</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              
            </article>
            {/* 3 */}
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Angular</h4>
              <small className='text-light'>Basic</small>
              </div>
            
            </article>
            {/* 4 */}
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>GraphQL</h4>
              <small className='text-light'>Basic</small>
              </div>
              
            </article>
            {/* 5 */}
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Vue.js</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              
            </article>
            {/* 6 */}
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>TypeScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

          </div>

        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
        <div className="experience_content">
            {/* 1 */}
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            {/* 2 */}
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            {/* 3 */}
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
            <div>
            <h4>MYSQL</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>
            {/* 4 */}
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>Express</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            {/* 5 */}
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>Laravel</h4>
              <small className='text-light'>Basic</small>
             </div>
            </article>
            {/* 6 */}
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience