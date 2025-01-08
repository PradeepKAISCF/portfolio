import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hey there! I'm A Pradeep, a final-year student at VIT Chennai with a passion for technology, AI, and full-stack development. I love the thrill of solving complex problems – whether it’s debugging code or finding the best move in a game of chess ♟️.
              <br />
              🚀 I’m constantly learning and experimenting with Machine Learning, Deep Learning, and web development. From building autonomous systems to crafting sleek web apps, I enjoy blending creativity with technology.
              <br />
              ♟️ When I’m not coding, you’ll probably find me deep in a chess match, strategizing my next move. Chess fuels my analytical thinking and sharpens my problem-solving skills – qualities I bring to every project I work on.
              <br />
              I'm excited about where tech is heading and can’t wait to be part of shaping the future. Let’s connect and create something amazing! 🌟  
            </p>

            <ButtonLink
              url='https://drive.google.com/file/d/1y-7KOumnavhduhaMgRGXyznrWApTf5AK/view?usp=drive_link'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;