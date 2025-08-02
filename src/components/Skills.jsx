import React from 'react'
import icon1 from '../assets/iconpl1.png'
import icon2 from '../assets/iconpl2.png'
import icon3 from '../assets/iconpl3.png'
import icon4 from '../assets/iconpl4.svg'
import icon5 from '../assets/iconpl5.png'
import icon6 from '../assets/iconpl6.png'

const prolanglist = [
    {
        id: 1,
        image: icon1,
        title: "HTML", 
        description: "I am skilled in creating clean, semantic, and accessible HTML structures for responsive web pages.",
        level: "w-8/12",
        bgColor: 'bg-linear-to-t from-lime-600 to-lime-700',
    },
    {
        id: 2,
        image: icon2,
        title: "Java", 
        description: "I have decent command over Java, with solid understanding of object-oriented programming and experience using frameworks.",
        level: "w-7/12",
        bgColor: 'bg-linear-to-t from-blue-500 to-sky-600',
    },
    {
        id: 3,
        image: icon3,
        title: "Python", 
        description: "I'm proficient in Python for both scripting and development, using it extensively for automation, data analysis, and web apps.",
        level: "w-8/12",
        bgColor: 'bg-linear-to-b from-blue-500 to-yellow-500',
    },
    {
        id: 4,
        image: icon4,
        title: "SQL", 
        description: "I am capable of SQL, for writing complex queries and managing data in relational databases effectively.",
        level: "w-7/12",
        bgColor: 'bg-linear-to-b from-lime-500 to-green-400',
    },
    {
        id: 5,
        image: icon5,
        title: "PHP", 
        description: "I use PHP to build dynamic server-side applications and integrate it smoothly into full-stack web projects.",
        level: "w-7/12",
        bgColor: 'bg-linear-to-t from-purple-500 to-indigo-700',
    },
    {
        id: 6,
        image: icon6,
        title: "C#", 
        description: "I'm familiar with developing applications in C#. As they are used for things like 3d design functioning",
        level: "w-6/12",
        bgColor: 'bg-linear-to-t from-teal-500 to-indigo-700',
    },
]

const Skills = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-800 to-sky-900 text-white py-24' id='skill'>
      <div className='container mx-auto px-6 md:px-12 lg:px-20'>
        <h2 className='text-4xl font-bold text-center mb-16'>My Programming Skills</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {prolanglist.map((prolang) => (
            <div
              key={prolang.id}
              className='bg-gradient-to-b from-green-700 to-lime-700 px-10 pt-10 pb-10 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 mt-6'
            >
              <div className='flex justify-center mb-4'>
                <img
                  src={prolang.image}
                  alt={prolang.title}
                  className='w-20 h-20 object-contain mt-[-4rem] bg-transparent'
                />
              </div>

              {/* ✅ UPDATED TITLE WITH CUSTOM BACKGROUND AND ROUNDED BOX */}
              <h3
                className={`text-2xl font-bold text-white text-center rounded-md px-4 py-2 mt-2 ${prolang.bgColor || 'bg-blue-900'}`}>
                {prolang.title}
              </h3>

              <p className='mt-2 text-gray-300 text-center font-semibold'>
                {prolang.description}
              </p>

              <div className='text-center mt-6'>
                <div className='flex items-center gap-4 justify-center'>
                  <label className='w-4/12 text-left text-sm md:text-base text-white'>
                    {prolang.title}
                  </label>
                  <div className='grow bg-gray-800 rounded-full h-2.5'>
                    {/* ✅ FIXED TEMPLATE STRING FOR CLASSNAME */}
                    <div
                      className={`bg-gradient-to-r from-emerald-400 to-sky-400 
                      h-2.5 rounded-full transform transition-transform duration-300 
                      hover:scale-105 ${prolang.level}`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Skills