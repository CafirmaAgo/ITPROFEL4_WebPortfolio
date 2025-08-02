import React from 'react';
import techicon1 from "../assets/Techicon1.jpg";
import techicon2 from "../assets/Techicon2.jpg";
import techicon3 from "../assets/techicon3.jpg";
import techicon4 from "../assets/Techicon4.jpg";
import techicon5 from "../assets/Techicon5.jpg";
import techicon6 from "../assets/techicon6.jpg";
import techicon7 from "../assets/Techicon7.jpg";
import techicon8 from "../assets/Techicon8.jpg";
import techicon9 from "../assets/techicon9.jpg";
import techicon10 from "../assets/Techicon10.jpg";
import techicon11 from "../assets/Techicon11.jpg";

const techtools = [
  {
    id: 1,
    name: "NETBEANS IDE",
    description: "NetBeans is an open-source integrated development environment used primarily for Java development. I use it because it provides a stable environment for building structured applications, reinforcing object-oriented programming concepts and improving debugging skills.",
    image: techicon1,
  },
  {
    id: 2,
    name: "THONNY",
    description: "Thonny is a lightweight Python IDE designed for simplicity and ease of use. I use it to develop Python applications quickly without the distraction of overly complex features, making it perfect for clean, focused coding.",
    image: techicon2,
  },
  {
    id: 3,
    name: "GREENFOOT",
    description: "Greenfoot allows the creation of 2D graphical applications and games using Java. It's a practical tool for visualizing object-oriented concepts, making programming more engaging and interactive through game-based learning.",
    image: techicon3,
  },
  {
    id: 4,
    name: "VISUAL STUDIO CODE",
    description: "VS Code is a powerful code editor that supports multiple languages and extensions. I use it for web, JavaScript, and general development because of its fast performance, flexible tooling, and community-driven ecosystem.",
    image: techicon4,
  },
  {
    id: 5,
    name: "SQL SERVER MANAGER",
    description: "SQL Server Management Studio (SSMS) is a tool for configuring, managing, and administering Microsoft SQL databases. It's essential for working with large-scale, enterprise-level relational databases in structured environments.",
    image: techicon5,
  },
  {
    id: 6,
    name: "VISUAL STUDIO",
    description: "Visual Studio is a comprehensive IDE mainly used for developing Windows and .NET applications. I rely on it for building complex systems with C# and integrating services within a scalable Microsoft ecosystem.",
    image: techicon6,
  },
  {
    id: 7,
    name: "TINKERCAD",
    description: "Tinkercad is a web-based 3D design and electronics simulation tool. I use it for circuit design and prototyping because it simplifies understanding electronics, especially microcontrollers and basic engineering logic.",
    image: techicon7,
  },
  {
    id: 8,
    name: "MYSQL-FRONT",
    description: "MySQL-Front provides a graphical interface for managing MySQL databases. I use it for quick database management tasks, making it easier to execute queries, manage tables, and visualize data relationships.",
    image: techicon8,
  },
  {
    id: 9,
    name: "POSTMAN",
    description: "Postman is a collaboration platform for API development. I use it to test and document APIs, making backend integration smoother, debugging faster, and software delivery more efficient and reliable.",
    image: techicon9,
  },
  {
    id: 10,
    name: "MYSQL SHELL/WORKBENCH",
    description: "MySQL Workbench provides visual tools for database design, modeling, and administration. I use it to design complex databases and understand schema relationships, which is critical for data-driven applications.",
    image: techicon10,
  },
  {
    id: 11,
    name: "XAMPP",
    description: "XAMPP is a local web server stack including Apache, MySQL, PHP, and Perl. I use it to test and build web applications in a controlled local environment before deploying them to a live server.",
    image: techicon11,
  },
];

const TechTools = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-800 to-sky-900 text-white py-20' id='projects'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Technology Tools Used</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {techtools.map((teto) => (
            <div
              key={teto.id}
              className='bg-gradient-to-t from-cyan-800 to-teal-700 p-6 rounded-xl hover:shadow-lg transform transition-transform duration-300 hover:scale-105'
            >
              <div className='flex justify-center mb-6 mt-2'>
                <img src={teto.image} alt={teto.name} className='w-20 h-20 object-contain bg-transparent'/>
              </div>
              <h3 className='inline-block bg-teal-400 px-4 py-1 rounded-full text-slate-700 font-bold text-lg mb-4 hover:bg-sky-600 transition-colors duration-200'>
                {teto.name}</h3>
              <p className='text-white text-sm leading-relaxed'>{teto.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechTools
//                    <a href={project.link} className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' target='_blank' rel='noopener noreferrer'>FB Page</a>