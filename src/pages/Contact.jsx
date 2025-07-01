import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';


const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name: "" , email: "", message: ""})
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  const {alert, showAlert, hideAlert} = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value})
  } ;

  const handleFocus = () => setCurrentAnimation('walk');

  const handleBlur = () => setCurrentAnimation('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit'); // Start 'hit' animation
  
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Ritik",
        from_email: form.email,
        to_email: "hritildubey142@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      setCurrentAnimation('idle'); // Immediately stop the fox
  
      showAlert({
        show: true,
        text: 'Message sent successfully !',
        type: 'success'
      });
  
      // Clear form and hide alert after 3 seconds
      setTimeout(() => {
        hideAlert();
        setForm({ name: '', email: '', message: '' });
      }, 3000);
    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('idle'); // Reset fox even on error
      console.log(error);
  
      showAlert({
        show: true,
        text: 'I did not receive your message',
        type: 'danger'
      });
  
      // Hide alert after 3 seconds
      setTimeout(() => {
        hideAlert();
      }, 3000);
    });
  };

  return (
    <section className='flex flex-col lg:flex-row max-container w-full h-[100vh]'>
      <Alert {...alert} show={alert.show} />
  
      {/* Form Section */}
      <div className='w-full lg:w-1/2 flex flex-col px-4'>
        <h1 className='head-text'>Get In Touch</h1>
  
        <form
          className='w-full flex flex-col gap-7 mt-5'
          onSubmit={handleSubmit}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
  
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='John@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
  
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              className='textarea'
              placeholder='Let me know how can I help you'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
  
          <button
            type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
  
      {/* Fox Model Section */}
      <div className='w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-auto px-4 lg:mt-0'>
        <Canvas
          className='w-full h-full'
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )   
}

export default Contact
