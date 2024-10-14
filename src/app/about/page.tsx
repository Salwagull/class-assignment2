import React from 'react'
import Header from '../components/header/header';
import Hero from '../components/herosection/hero';
import Footer from '../components/footer/footer';

const About = () => {
  return (
    <div>
        {/* <Header home="About Page"></Header> */}
        <Header></Header>
        <Hero title="About Us" buttonText="Contact Page" buttonLink="contact"></Hero>
        <Footer></Footer>
        </div>
  )
}

export default About;