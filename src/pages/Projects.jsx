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

      <div className='flex flex-wrap justify-center my-20 gap-16'>
        {projects.map((project, index) => (
          <div
            key={project.name}
            className='lg:w-[400px] w-full bg-white/10 backdrop-blur-md p-6 rounded-2xl 
            shadow-md transition-all duration-300 ease-out 
            transform hover:-translate-y-10 hover:scale-105 
            hover:border hover:border-blue-500 hover:shadow-blue-500/30'
            data-aos='fade-up'
            data-aos-delay={index * 100}
          >
            {/* Icon */}
            <div className='block-container w-14 h-14 mb-4'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={project.iconUrl} alt="icon" className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>

            {/* Project Title */}
            <h4 className='text-2xl font-poppins font-semibold text-slate-800 dark:text-white'>
              {project.name}
            </h4>

            {/* Preview */}
            {project.preview && (
              <div className='overflow-hidden rounded-lg mt-4 border border-white/10 shadow-md'>
                <img
                  src={project.preview}
                  alt={`${project.name} Preview`}
                  className='w-full h-48 object-cover transition-transform duration-300 hover:scale-105'
                />
              </div>
            )}

            {/* Description */}
            <p className='mt-3 text-slate-500 text-sm'>
              {project.description}
            </p>

            {/* Tags */}
            {project.tags && (
              <div className='flex flex-wrap gap-2 mt-4'>
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className='text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full transition-all duration-200 hover:bg-blue-200'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Live Link */}
            <div className='mt-5 flex items-center gap-2 font-poppins'>
              <Link
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className='font-semibold text-blue-500 hover:underline'
              >
                Live Link
              </Link>
              <img src={arrow} alt="arrow" className='w-4 h-4 object-contain' />
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-300' />
      <CTA />
    </section>
  );
};

export default Projects;
