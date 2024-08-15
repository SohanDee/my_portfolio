import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'

export default function Homepage() {
  return (
    <div>
        <Hero />
        <About />
        <Projects />
        <div id='contact'><Contact /></div>
    </div>
  )
}
