import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='bg-black text-white py-20' id='contact'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row items-start md:space-x-12'>
          <div className='flex-1 text-left'>
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>
              Contacts
            </h3>
            <p>Here are the ways you can contact me:</p>

            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2' />
              <a
                href='mailto:orionrussbher@gmail.com'
                className='hover:underline'
              >
                orionrussbher@gmail.com
              </a>
            </div>

            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2' />
              <span>(Globe) 0995 360 8873</span>
            </div>

            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
              <span>
                B 2 L 14 Vesta Homes Subdivision,<br />
                San Francisco, San Pablo City
              </span>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Contact