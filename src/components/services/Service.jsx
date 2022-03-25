import React from 'react'
import './service.css'
import {BsCheckLg} from 'react-icons/bs'

const Service = () => {
  return (
    <section id='services'>
      <h5>What I Offers</h5>
      <h2>Services</h2>
      {/* Start of Frontend Development */}
      <div className="container service_container">
        <article className="serivce">
          <div className="service_head">
            <h3>Frontend Development</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BsCheckLg className='service_list-icons'/>
            <p>HTML stands for Hyper Text Markup Language.It  describes the structure of a Web page.</p>
            </li>
            <li>
            <BsCheckLg className='service_list-icons'/>
            <p>CSS stands for Cascading Style Sheets.It saves a lot of work.</p>
            </li>
            <li>
            <BsCheckLg className='service_list-icons'/>
            <p>Bootstrap is a free front-end framework for faster and easier web development.</p>
            </li>
            <li>
            <BsCheckLg className='service_list-icons'/>
            <p>React is a JavaScript library for building user interfaces.It is used to build single-page applications.</p>
            </li>
            <li>
            <BsCheckLg className='service_list-icons'/>
            <p>AngularJS extends HTML with new attributes.It is perfect for Single Page Applications </p>
            </li>
            <li>
            <BsCheckLg className='service_list-icons'/>
            <p>jQuery is a lightweight.The purpose of jQuery is to make it much easier to use JavaScript on your website.</p>
            </li>
          </ul>
        </article>
        {/* end of Frontend Development */}
        {/* start of backend development */}
        <article className="serivce">
          <div className="service_head">
            <h3>Backend Development</h3>
          </div>
          <ul className='service_list'>
            <li>
            <BsCheckLg className='service_list-icons'/>
            <p>Node.js is an open source server environment.It is free.Node.js uses JavaScript on the server.</p>
            </li>
            <li>
            <BsCheckLg className='service_list-icons'/>
            <p>MongoDB is developed by MongoDB Inc.One of the most popular NoSQL database is MongoDB.</p>
            </li>
            <li>
            <BsCheckLg className='service_list-icons'/>
            <p>MySQL is a widely used relational database management system.It is free and open-source.</p>
            </li>
            <li>
            <BsCheckLg className='service_list-icons'/>
            <p>Express.js is a web framework for Node.js. It is a fast, robust and asynchronous in nature.</p>
            </li>
            <li>
            <BsCheckLg className='service_list-icons'/>
            <p>JavaScript is the programming language of the Web.It is used Client side and Server side.</p>
            </li>
            <li>
            <BsCheckLg className='service_list-icons'/>
            <p>Java is a popular programming language, created in 1995.It is used for Web servers and application servers.</p>
            </li>
          </ul>
        </article>
        {/* end of backend development */}
      </div>
    </section>
  )
}

export default Service