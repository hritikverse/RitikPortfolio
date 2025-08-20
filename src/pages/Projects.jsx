import React, { useEffect } from 'react';
import { projects } from '../constants';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className='max-container'>
      <h1 className='head-text '>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>

      <div className='mt-2 flex flex-col gap-3 text-slate-500'>
        <p>
          From concept to creation, each project has been a journey of learning and innovation. 
          Here's a glimpse into the digital experiences I've built with passion and code!
        </p>
      </div>

      ssss
      <hr className='border-slate-300' />
      <CTA />
    </section>
  );
};

export default Projects;
