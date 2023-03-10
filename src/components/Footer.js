import React from 'react'
import up from '../assets/up.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import vimeo from '../assets/vimeo.png'
import youtube from '../assets/youtube.png'



export default function Footer() {
  return (
    <div className="bg-white-100 font-outfit text-blue-100">

      <div className='bg-black-50 h-44'>

      </div>

      <footer className='container mx-auto lg:px-20 font-russo px-5'>

        <div className='lg:flex justify-between items-center md:w-9/12 w-full rounded-xl bg-white-100 lg:p-12 p-6 mx-auto lg:-mt-16 -mt-8 shadow-md'>
          <h2 className='md:text-3xl text-xl font-poppins font-semibold text-blue-100'>
            Subscribe for news
          </h2>

          <div className="py-2 lg:px-5 px-0 lg:w-7/12 lg:bg-white-50 lg:space-y-0 space-y-5 lg:flex items-center justify-between rounded-md">
            <input type="email" placeholder="Enter your email" id="email" required="" className="bg-white-50 focus:ring-0 focus:outline-none lg:p-0 p-5 text-blue-100 lg:w-7/12 w-full" />

            <button className='text-white-100 lg:px-5 px-2 lg:py-3 py-2 bg-blue-200 rounded-md'>
              Subcribe
            </button>
          </div>
        </div>

        <div className='lg:py-12 py-6'>

          <div className='lg:flex items-center justify-between'>

            <nav>
              <ul className="text-md flex justify-center sm:gap-12 gap-4 items-center text-black-50 font-semibold font-Outfit">
                <li><a href="/" className="text-zinc-100">Home</a></li>
                <li><a href="#audit" className=" cursor-pointer">Audit</a></li>
                <li><a href="#token" className="cursor-pointer">Token</a></li>
                <li><a href="#staking" className="cursor-pointer">Staking</a></li>
              </ul>

              <ul className="text-md flex justify-center sm:gap-12 gap-4 items-center mt-6 text-black-50 font-semibold font-Outfit">
                <li><a href="#roadmap" className="cursor-pointer">Roadmap</a></li>
                <li><a href="#team" className="cursor-pointer">Team</a></li>
                <li><a href="#faq" className="cursor-pointer">FAQ</a></li>
                <li><a href="#about" className="cursor-pointer">About Us</a></li>
              </ul>
            </nav>

            <div className='flex justify-center gap-8 items-center lg:mt-0 mt-6'>

              <a href='/'>
                <img src={facebook} alt="Facebook" className='' />
              </a>

              <a href='/'>
                <img src={twitter} alt="Twitter" className='' />
              </a>

              <a href='/'>
                <img src={vimeo} alt="Vimeo" className='' />
              </a>

              <a href='/'>
                <img src={youtube} alt="Youtube" className='' />
              </a>

            </div>

          </div>

          <div className='lg:flex items-end justify-between pt-12 md:text-left text-center'>
            <p>
              © Copyrights, {new Date().getFullYear()} Twitter CEO. All Right Recived.
            </p>

            <a href='#home' className='flex flex-col gap-8 items-center justify-start lg:mt-0 mt-6'>
              <img src={up} alt="arrow" className='' />

              <p className='text-center'>
                Scroll to the Top
              </p>
            </a>

            <ul className="flex gap-6 items-center justify-center lg:mt-0 mt-6 lg:text-center">
              <li><a href="/" className="">Terms of Service</a></li>
              <li><a href="/" className="">Privacy Policy</a></li>
            </ul>
          </div>

        </div>
      </footer>
    </div >

  )
}
