import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube} from 'react-icons/fa'

const Footer = () => {
    return (
 <footer className='bg-black text-white py-8'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
        <div className='flex-1 mb-4 md:mb-0'>
            <h3 className='text-2xl font-bold mb-2'>Orion Russbher</h3>
            <p className='text-gray-400'>BSIT 3rd Year Student</p>
        </div>

        </div>
        <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
        <div className=''>
            <p className='text-gray-400'>
                &copy; {new Date().getFullYear()} Cafirma, All rights reserved.
            </p>
        </div>
            <div className='flex space-x-4 my-4 md:my-0'>
                <a href='https://www.facebook.com/orionrussbher.cafirma' className='text-gray-400 hover:text-white'><FaFacebook/></a>
                <a href='https://x.com/OCafirma' className='text-gray-400 hover:text-white'><FaTwitter/></a>
                <a href='https://www.youtube.com/channel/UCDEhGmje3ehSbAuXj9e6mLw' className='text-gray-400 hover:text-white'><FaYoutube/></a>
            </div>
            <div className='flex space-x-4'>
                <a href='#' className='text-gray-400 hover:text-white'>
                    Privacy</a>
                <a href='#' className='text-gray-400 hover:text-white'>
                    Terms of Services</a>
            </div>
        </div>    
    </div>
 </footer>
    )
}
/*        <div className='flex-1 w-full'>
            <form className='flex items-center justify-center'>
                <input type="email" placeholder="your Email" className='w-full p-2 rounded-1-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'/>
                <button type='submit' className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg'>Subscribe</button>
            </form>
        </div>


References:
https://www.youtube.com/watch?v=Y7VblfjzJik 
https://www.youtube.com/watch?v=ZU-drSVodBw 
https://www.youtube.com/watch?v=vOrQsP5lx9Y&list=PL1HMn5V7V6NGNIblxjbNFXIz9O6pBOGid&index=10
*/
export default Footer