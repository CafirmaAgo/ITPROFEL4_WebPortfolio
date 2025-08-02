import React from 'react'
import AboutImage from '../assets/user_sample.jpg'

const About = () => { return (
    <div className="bg-gradient-to-r from-cyan-800 to-sky-900 text-white py-25" id='about'>
        <div className='container mx-auto px-8 md:px-5 lg:px-35'>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={AboutImage} alt="" className='mb-8 w-72 h-max transform transition-transform duration-300 hover:scale-105'/>
            <div className='flex-3 flex-col justify-center p-10 m-6 rounded-lg shadow-lg bg-gradient-to-r from-cyan-700 to-cyan-800'>
                <h1 className="text-4xl font-bold py-2 text-center md:text-left sm:text-center sm:text-3xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-cyan-300">
                    About Me
                </span>
                </h1>
                <p className='text-lg mb-6 text-justify'>
                    I am currently pursuing a Bachelor of Science in Information Technology (BSIT), 
                    where I am building a strong foundation in core areas such as web development, 
                    cybersecurity, and user experience design. My academic journey is complemented 
                    by hands-on projects that allow me to apply theoretical knowledge to real-world 
                    solutions. Through coursework and self-initiated learning, I continuously explore 
                    modern tools, frameworks, and technologies to enhance my skills and stay current 
                    with industry trends.
                </p>
            <div className="space-y-4">
                <div className='mt-2 flex justify-between text-center'>
                    <div>
             <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-400'>
                3rd 
            </h3>
            <p>Year</p>
        </div>
        <div>
            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-400'>
                July 25, 2003 
            </h3>
            <p>Birthday</p>
        </div>
        <div>
            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-400'>
                22 
            </h3>
            <p>Years Old</p>
        </div>
    </div>
            </div>
</div>
            </div>
        </div>

</div>
)}

export default About