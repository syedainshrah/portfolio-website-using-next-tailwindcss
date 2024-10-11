import * as React from 'react';
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Services from '@/components/Services'
import Projects from '@/components/Project'
import Testimonials from '@/components/Testimonials'
import ContactMe from '@/components/Contact'



export default function Home() {
  return (
   <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <ContactMe />
      
   </>
  );
}