import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({ text, link, btnText}) => (
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn' >
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)


const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Ritik </span> 👋
            <br/>
            A Web Developer from Mumbai, India.
        </h1>
    ),
    2: (
        <InfoBox 
            text="Learned and gained skills by building various projects through Tutorials and College Projects"
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox 
        text="Created Multiple Projects using various languages, frameworks and libraries"
        link="/projects"
        btnText="Visit my Portfolio"
    />
    ),
    4: (
        <InfoBox 
        text="Need a project done? or Looking for a dev? Im just a few keystrokes away"
        link="/contact"
        btnText="Let's Talk"
    />
    ),
}


const Homeinfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default Homeinfo
