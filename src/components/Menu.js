import React, { useState } from 'react'



export default function Menu() {

  const [show, setShow] = useState(false);


  return (

    <header>
      <div className="lg:flex hidden items-center justify-between font-outifit  text-white-100 h-28">
        <a href="/" className="logo lg:my-12">
          <h2 className='text-4xl font-poppins font-semibold text-white-100'>
            Twitter CEO
          </h2>
        </a>

        <nav>
          <ul className="text-md flex justify-center gap-8 items-center uppercase">
            <li><a href="/" className="text-zinc-100">Home</a></li>
            <li><a href="#audit" className=" cursor-pointer">audit</a></li>
            <li><a href="#token" className="cursor-pointer">token</a></li>
            <li><a href="#staking" className="cursor-pointer">staking</a></li>
            <li><a href="#roadmap" className="cursor-pointer">roadmap</a></li>
            <li><a href="#team" className="cursor-pointer">team</a></li>
            <li><a href="#faq" className="cursor-pointer">FAQ</a></li>
          </ul>
        </nav>

        <div></div>
      </div>

      <div className="lg:hidden flex items-center justify-between pt-5 font-poppins">
        <a href="/" className="text-white-100">
          <h2 className='text-2xl font-poppins font-semibold text-white-100'>
            Twitter CEO
          </h2>
        </a>

        <button onClick={() => setShow(!show)} className="nav cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>

        </button>
      </div>

      {
        show ? <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-3/4 overflow-y-auto text-center font-poppins font-semibold bg-black-50 z-20" style={{ left: "0" }}>

          <div className="mt-3 px-3 mb-12">
            <a href="/" className="text-white-100">
              <h2 className='text-4xl font-poppins font-semibold text-white-100'>
                Twitter CEO
              </h2>
            </a>
          </div>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md transition duration-500 cursor-pointer  text-white-100">
            <a href="/" className="text-lg ml-4 font-semibold">Home</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-white-100 hover:text-black-50 text-white-100">
            <a href="#audit" className="text-lg ml-4 font-semibold">Audit</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-white-100 hover:text-black-50 text-white-100">
            <a href="#token" className="text-lg ml-4 font-semibold">Token</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-white-100 hover:text-black-50 text-white-100">
            <a href="#staking" className="text-lg ml-4 font-semibold">Staking</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-white-100 hover:text-black-50 text-white-100">
            <a href="#roadmap" className="text-lg ml-4 font-semibold">Roadmap</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-white-100 hover:text-black-50 text-white-100">
            <a href="#team" className="text-lg ml-4 font-semibold">Team</a>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex items-center rounded-md duration-300 cursor-pointer hover:bg-white-100 hover:text-black-50 text-white-100">
            <a href="#faq" className="text-lg ml-4 font-semibold">FAQ</a>
          </button>
        </div> : null
      }


    </header >
  )
}
