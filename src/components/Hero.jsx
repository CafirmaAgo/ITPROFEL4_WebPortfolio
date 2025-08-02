import React from "react";
import HeroImage from '../assets/user_sample.jpg'
import {ReactTyped} from "react-typed";

const Hero = () => {
    return (
    <div className='bg-gradient-to-r from-cyan-800 to-sky-900 text-white text-center py-22' id='hero'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-6 w-55 h-55 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold drop-shadow-[0_0_8px_rgba(34,197,94,0.7)]'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>Orion Russbher A. Cafirma</span>
        </h1>
        <div className='w-full max-w-3xl md:max-w-2xl sm:max-w-md mx-auto mt-8 px-4'>
        <div className='bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 text-black rounded-2xl p-6 shadow-lg'>
            <p className='text-lg font-bold sm:text-base text-justify'>
            I'm Orion Russbher A. Cafirma, a passionate B.S. Information Technology student (BSIT), 
            specializing in web development and cybersecurity. I love building practical, 
            user-friendly solutions and am always eager to learn new technologies to create 
            meaningful digital experiences.
            </p>
      </div>
    </div>
</div>
    )
}
/*    <img src={HeroImage} alt="" className=""/>

    <p className="mt-4 text-lg text-gray-300">
        4th Year College Student
    </p>*/
/*    <div className="mt-8 space-x-4">
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
        Contact With Me</button>
        <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
        Resume</button>
    </div>
*/ 
export default Hero