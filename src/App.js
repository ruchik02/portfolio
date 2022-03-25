import React from 'react'
import './index.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Service from './components/services/Service'
import Portfolio from './components/portfolio/Portfolio'
import Test from './components/testimonials/Test.jsx'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer.jsx'


const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Service/>
    <Portfolio/>
    <Test/>
    <Contact/>
    <Footer/>
    </>
    
  )
}

export default App
