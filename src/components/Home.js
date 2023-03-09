import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import p_1 from '../assets/p_1.png';
import p_2 from '../assets/p_2.png';
import p_3 from '../assets/p_3.png';
import p_4 from '../assets/p_4.png';
import logo_1 from '../assets/logo_1.png';
import logo_2 from '../assets/logo_2.png';
import logo_3 from '../assets/logo_3.png';
import token_1 from '../assets/token_1.png';
import token_2 from '../assets/token_2.png';
import metamask from '../assets/metamask.png';
import fortmatic from '../assets/fortmatic.png';
import bitski from '../assets/bitski.png';
import coinbase from '../assets/coinbase.png';
import torus from '../assets/torus.png';
import wallet from '../assets/wallet.png';
import kaikas from '../assets/kaikas.png';
import authereum from '../assets/authereum.png';
import team from '../assets/team.png';
import swap from '../assets/swap.png';
// import chart_1 from '../assets/chart_1.png';
// import chart_2 from '../assets/chart_2.png';
import bg_faq from '../assets/bg_faq.png';
import twitter from '../assets/twitter_1.png';
import vector_1 from '../assets/vector_1.png';
import mobile from '../assets/mobile.png';
import token from '../assets/token.png';
import top from '../assets/top.png';
import ceo from '../assets/ceo.png';
import bg_top from '../assets/bg_top.png';
import Accordion from './Accordion';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 3000,
        });
    }, [])

    const accordionData = [
        {
            title: 'What is shiBet  rocket gambling game? ',
            content: `shiBet rocket gambling game is a type of online casino that allows players to bet on the outcome of multiplier games. The player bets Shiba Inu and can win or lose depending on the outcome of the game. With blockchain technology, these games are transparent and safe for players.`
        },
        {
            title: 'How do I place a bet in the shiBet  rocket game? ',
            content: `shiBet rocket gambling game is a type of online casino that allows players to bet on the outcome of multiplier games. The player bets Shiba Inu and can win or lose depending on the outcome of the game. With blockchain technology, these games are transparent and safe for players.`
        },
        {
            title: 'Is playing BetShiba  rocket gambling game on mobile safe?  ',
            content: `shiBet rocket gambling game is a type of online casino that allows players to bet on the outcome of multiplier games. The player bets Shiba Inu and can win or lose depending on the outcome of the game. With blockchain technology, these games are transparent and safe for players.`
        },
        {
            title: 'Can a Rocket Money Game Bring a Real Win? ',
            content: `shiBet rocket gambling game is a type of online casino that allows players to bet on the outcome of multiplier games. The player bets Shiba Inu and can win or lose depending on the outcome of the game. With blockchain technology, these games are transparent and safe for players.`
        }
    ];

    return (
        <div className="bg-white-50 font-outfit overflow-hidden">

            {/* top section */}

            <div data-aos='slide-down' className='absolute right-0 left-0 top-0'>
                <img src={bg_top} alt="" className='flex mx-auto' />
            </div>

            <div id='home' className="lg:px-20 px-5 bg-top relative z-20">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="flex flex-col justify-center items-center gap-y-12 text-center py-12">

                        <h1 className='md:text-5xl text-3xl font-poppins font-semibold text-white-100'>
                            The CEO is in the House!
                        </h1>

                        <div data-aos="zoom-in" className="img md:mt-0 mt-12">
                            <img src={top} alt="Logo" className='w-9/12 flex mx-auto' />
                        </div>

                        <div className='text-center flex flex-col items-center justify-center gap-y-6'>
                            <p className='text-2xl text-black-50 lg:w-7/12'>
                                Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            </p>

                            <div className='flex items-center justify-center gap-x-6'>
                                <a href='/'>
                                    <button className='text-black-50 px-6 py-2 text-lg border-2 border-yellow-100 hover:bg-yellow-100 rounded-lg'>
                                        Buy Now
                                    </button>
                                </a>

                                <a href='/'>
                                    <button className='text-white-100 px-6 py-2 text-lg border-2 border-yellow-100 bg-yellow-100 rounded-lg hover:bg-white-50 hover:text-black-50'>
                                        Telegram
                                    </button>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            {/* Buy the twitter token */}

            <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto">

                <div className='lg:absolute left-0 lg:-mt-20'>
                    <img src={twitter} alt="" className='sm:flex mx-auto' />
                </div>

                <div className='lg:flex items-center justify-center gap-x-24 space-y-8'>

                    <div className=''>
                        <img src={mobile} alt="" className='sm:flex mx-auto' />
                    </div>

                    <div className=''>

                        <p className='text-blue-200 uppercase text-lg underline font-semibold pb-5 '>
                            BUY TWITTER CEO TOKEN
                        </p>

                        <div className='bg-yellow-50 p-5 rounded-xl lg:flex items-center gap-x-3'>

                            <div>
                                <img src={ceo} alt="" className='lg:flex mx-auto' />
                            </div>

                            <div>
                                <h3 className='font-poppins font-semibold text-xl'>
                                    Token current price
                                </h3>
                                <div className='flex justify-between items-center md:gap-x-8 gap-x-4 pt-3'>

                                    <div className='space-y-3'>
                                        <p className='font-poppins text-sm'>
                                            Price in $:
                                        </p>

                                        <img src={logo_1} alt="" className='flex mx-auto' />

                                    </div>

                                    <div className='space-y-5'>
                                        <p className='font-poppins text-sm'>
                                            Price in BNB:
                                        </p>

                                        <img src={logo_2} alt="" className='flex mx-auto' />
                                    </div>

                                    <div className='space-y-5'>
                                        <p className='font-poppins text-sm'>
                                            updated at:
                                        </p>

                                        <img src={logo_3} alt="" className='flex mx-auto' />

                                    </div>

                                </div>
                            </div>

                        </div>

                        <img src={swap} alt="" className='mt-5' />

                        {/* <div className='bg-yellow-50 p-5 rounded-xl mt-5'>

                            <div>
                                <div className='flex justify-between items-center pb-1 '>

                                    <p className='text-sm text-gray-100'>
                                        You Pay
                                    </p>

                                    <div className='text-sm text-white-100 flex items-center gap-x-2'>

                                        <img src={bnb} alt="" className='bnb' />

                                        You Pay


                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>

                                </div>

                                <div className='text-center text-white-100 rounded-lg bg-blue-200 p-5 w-full'>
                                    0.35
                                </div>

                            </div>

                            <div>
                                <div className='flex justify-between items-center pt-3 '>

                                    <p className='text-sm text-gray-50'>
                                        You Pay
                                    </p>

                                    <p className='text-sm text-gray-50'>
                                        You Pay
                                    </p>

                                </div>

                                <div className='text-center text-white-100 rounded-lg bg-blue-200 p-5 w-full'>
                                    0.35
                                </div>

                            </div>


                        </div> */}

                    </div>


                </div>

            </div>

            {/* why Choose us */}

            {/* <img src={uneven_1} alt="top" className='translate-y-4 bg-black-50' /> */}
            <div id='about' className="lg:px-20 lg:py-20 py-6 px-5 bg-black-50 text-white-100">

                <div className='container mx-auto'>

                    <div className="flex flex-col justify-center items-center gap-y-8">

                        <h4 className='font-semibold flex items-center gap-2 uppercase'>
                            <span>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="5" fill="#00C4F4" />
                                </svg>
                            </span>
                            why Choose us
                            <span>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="5" fill="#00C4F4" />
                                </svg>
                            </span>
                        </h4>
                        <h2 className='md:text-4xl text-3xl font-poppins font-semibold lg:w-1/3 text-center'>
                            Why you choose our Twitter CEO Token
                        </h2>


                        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 items-center justify-center mt-6 pb-16'>

                            <div className='space-y-8'>
                                <img src={p_1} alt="" className='' />

                                <h3 className='font-poppins font-medium lg:w-1/2 text-xl'>
                                    Lorem Ipsum
                                    Dollar lieor
                                </h3>

                                <p className='text-gray-50 lg:w-9/12'>
                                    lorem impusm lorem impusmlorem impusmlorem impusm
                                </p>

                            </div>

                            <div className='space-y-8'>
                                <img src={p_2} alt="" className='' />

                                <h3 className='font-poppins font-medium lg:w-1/2 text-xl'>
                                    Lorem Ipsum
                                    Dollar lieor
                                </h3>

                                <p className='text-gray-50 lg:w-9/12'>
                                    lorem impusm lorem impusmlorem impusmlorem impusm
                                </p>

                            </div>

                            <div className='space-y-8'>
                                <img src={p_3} alt="" className='' />

                                <h3 className='font-poppins font-medium lg:w-1/2 text-xl'>
                                    Lorem Ipsum
                                    Dollar lieor
                                </h3>

                                <p className='text-gray-50 lg:w-9/12'>
                                    lorem impusm lorem impusmlorem impusmlorem impusm
                                </p>

                            </div>

                            <div className='space-y-8'>
                                <img src={p_4} alt="" className='' />

                                <h3 className='font-poppins font-medium lg:w-1/2 text-xl'>
                                    Lorem Ipsum
                                    Dollar lieor
                                </h3>

                                <p className='text-gray-50 lg:w-9/12'>
                                    lorem impusm lorem impusmlorem impusmlorem impusm
                                </p>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className='w-1/2 rounded-xl bg-white-100 lg:p-12 p-3 flex mx-auto text-center justify-center lg:-mt-16 -mt-8 shadow-md'>
                <h2 className='md:text-5xl text-xl font-poppins font-semibold text-blue-100'>
                    Trust the Process
                </h2>
            </div>


            {/* Trust the Process */}

            <div id='audit' className="">

                <div className="lg:pt-20 pt-5 lg:px-20 px-5 container mx-auto">

                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:grid-rows-2 grid-rows-1 gap-8 items-center justify-center mt-6 pb-16'>

                        <div className='space-y-6 text-center p-6 bg-yellow-50 rounded-md text-blue-100'>
                            <img src={metamask} alt="" className='flex mx-auto' />

                            <h3 className='font-poppins font-medium text-xl'>
                                Meta Mask
                            </h3>

                            <p className=''>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </p>
                        </div>

                        <div className='space-y-6 text-center p-6 bg-yellow-50 rounded-md text-blue-100'>
                            <img src={bitski} alt="" className='flex mx-auto' />

                            <h3 className='font-poppins font-medium text-xl'>
                                Bitski
                            </h3>

                            <p className=''>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </p>
                        </div>

                        <div className='space-y-6 text-center p-6 bg-yellow-50 rounded-md text-blue-100'>
                            <img src={fortmatic} alt="" className='flex mx-auto' />

                            <h3 className='font-poppins font-medium text-xl'>
                                Fortmatic
                            </h3>

                            <p className=''>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </p>
                        </div>

                        <div className='space-y-6 text-center p-6 bg-yellow-50 rounded-md text-blue-100'>
                            <img src={wallet} alt="" className='flex mx-auto' />

                            <h3 className='font-poppins font-medium text-xl'>
                                Wallet Connect
                            </h3>

                            <p className=''>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </p>
                        </div>

                        <div className='space-y-6 text-center p-6 bg-yellow-50 rounded-md text-blue-100'>
                            <img src={coinbase} alt="" className='flex mx-auto' />

                            <h3 className='font-poppins font-medium text-xl'>
                                Coinbase Wallet
                            </h3>

                            <p className=''>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </p>
                        </div>

                        <div className='space-y-6 text-center p-6 bg-yellow-50 rounded-md text-blue-100'>
                            <img src={authereum} alt="" className='flex mx-auto' />

                            <h3 className='font-poppins font-medium text-xl'>
                                Authereum
                            </h3>

                            <p className=''>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </p>
                        </div>

                        <div className='space-y-6 text-center p-6 bg-yellow-50 rounded-md text-blue-100'>
                            <img src={kaikas} alt="" className='flex mx-auto' />

                            <h3 className='font-poppins font-medium text-xl'>
                                Kaikas
                            </h3>

                            <p className=''>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </p>
                        </div>

                        <div className='space-y-6 text-center p-6 bg-yellow-50 rounded-md text-blue-100'>
                            <img src={torus} alt="" className='flex mx-auto' />

                            <h3 className='font-poppins font-medium text-xl'>
                                Torus
                            </h3>

                            <p className=''>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </p>
                        </div>

                    </div>

                </div>

            </div>


            {/* token distribution */}

            <div id='token' className="lg:py-12 py-5 lg:px-20 px-5 container mx-auto">

                <div className='lg:flex items-center justify-center gap-6'>

                    <h2 className='lg:text-5xl text-3xl font-poppins text-center font-semibold text-blue-100'>
                        TOKEN DISTRIBUTION
                    </h2>

                    <img src={token} alt="" className='lg:block hidden' />

                </div>

                <div className='lg:flex items-center justify-between pt-8 space-y-5'>

                    <div className='flex flex-col items-center justify-center gap-y-8'>

                        <h2 className='text-2xl font-poppins text-center font-semibold text-blue-100'>
                            Token Distribution
                        </h2>

                        <p className='text-gray-200 lg:w-1/2 text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget quam est, elit venenatis nulla.
                        </p>

                        <img src={token_1} alt="" className='w-10/12' />

                        {/* <div>
                            <img src={chart_1} alt="" className='w-10/12' />
                        </div> */}

                    </div>

                    <div className='flex flex-col items-center justify-center  gap-y-8'>

                        <h2 className='text-2xl font-poppins text-center font-semibold text-blue-100'>
                            Token Allocation
                        </h2>

                        <p className='text-gray-200 lg:w-1/2 text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget quam est, elit venenatis nulla.
                        </p>

                        <img src={token_2} alt="" className='w-10/12' />

                        {/* <div>
                            <img src={chart_2} alt="" className='w-10/12' />
                        </div> */}

                    </div>

                </div>


            </div>

            {/* roadmap */}

            <div id='roadmap' className="">

                <div className="lg:py-12 py-5 lg:px-20 px-5 container mx-auto">

                    <p className='text-blue-200 uppercase text-center underline font-semibold pb-5 '>
                        roadmap
                    </p>

                    <h2 className='text-3xl font-poppins text-center font-semibold text-blue-100'>
                        Bigtech Strategy and<br></br> Project Plan
                    </h2>

                    <div className="lg:mt-20 mt-5">

                        <div className="h-1 w-full bg-gradient">

                        </div>

                        <div className='h-1 w-full line -translate-y-1'>

                        </div>

                        <div className="lg:flex items-baseline justify-between gap-6 lg:px-20 lg:space-y-0 space-y-6">

                            <div className="flex items-baseline gap-x-6">
                                <div
                                    data-aos="zoom-in"
                                    className="absolute -mt-5 lg:flex flex-col items-center justify-center hidden"
                                >


                                    <p className='text-center -mt-6' style={{ color: '#00C4F4' }}>
                                        Mid of Q4 2021
                                    </p>

                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.1" cx="16" cy="16" r="16" fill="#00C4F4" />
                                        <circle cx="16" cy="16" r="8" fill="#00C4F4" className='animate-pulse' />
                                    </svg>

                                    <svg width="1" height="219" viewBox="0 0 1 219" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.5" x2="0.5" y2="219" stroke="#00C4F4" />
                                    </svg>

                                </div>

                                <div
                                    data-aos="flip-right"
                                    className="text-gray-50 lg:pl-20 lg:w-60"
                                >
                                    <h5 className="text-2xl py-4 text-blue-100 font-semibold">Concept</h5>

                                    <p className='leading-loose'>
                                        EVM support for parachains
                                        SubQuery Academy
                                        Proof of indexing
                                    </p>

                                </div>
                            </div>

                            <div className="flex items-baseline gap-x-6">
                                <div
                                    data-aos="zoom-in"
                                    className="absolute -mt-5 lg:flex flex-col items-center justify-center hidden"
                                >

                                    <p className='text-center -mt-6' style={{ color: '#FF9700' }}>
                                        Mid Q1 2022
                                    </p>

                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.1" cx="16" cy="16" r="16" fill="#FF9700" />
                                        <circle cx="16" cy="17" r="8" fill="#FF9700" className='animate-pulse' />
                                    </svg>

                                    <svg width="1" height="219" viewBox="0 0 1 219" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.5" x2="0.5" y2="219" stroke="#FF9700" />
                                    </svg>

                                </div>

                                <div
                                    data-aos="flip-right"
                                    className="text-gray-50 lg:pl-16 lg:w-60"
                                >
                                    <h5 className="text-2xl py-4 text-blue-100 font-semibold">App beta test</h5>

                                    <p className='leading-loose'>
                                        Public testnet launch
                                        SubQuery Network Explorer and dApp
                                        Point-in-time indexing
                                    </p>

                                </div>
                            </div>

                            <div className="flex items-baseline gap-x-6">
                                <div
                                    data-aos="zoom-in"
                                    className="absolute -mt-5 lg:flex flex-col items-center justify-center hidden"
                                >

                                    <p className='text-center -mt-6' style={{ color: '#007FF4' }}>
                                        Mid Q1 2022
                                    </p>

                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.1" cx="16" cy="16" r="16" fill="#007FF4" />
                                        <circle cx="16" cy="17" r="8" fill="#007FF4" className='animate-pulse' />
                                    </svg>

                                    <svg width="1" height="219" viewBox="0 0 1 219" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.5" x2="0.5" y2="219" stroke="#007FF4" />
                                    </svg>

                                </div>

                                <div
                                    data-aos="flip-right"
                                    className="text-gray-50 lg:pl-16 lg:w-60"
                                >
                                    <h5 className="text-2xl py-4 text-blue-100 font-semibold">Alpha test</h5>

                                    <p className='leading-loose'>
                                        Launch of the SubQuery Foundation
                                        Finalise research for other Layer-1 chains
                                        Liquidity mining program
                                    </p>

                                </div>
                            </div>

                            <div className="flex items-baseline gap-x-6">
                                <div
                                    data-aos="zoom-in"
                                    className="absolute -mt-5 lg:flex flex-col items-center justify-center hidden"
                                >

                                    <p className='text-center -mt-6' style={{ color: '#007FF4' }}>
                                        Mid Q1 2022
                                    </p>

                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="16" r="16" fill="#FF4581" fillOpacity="0.1" />
                                        <circle cx="16" cy="17" r="8" fill="#FF4581" className='animate-pulse' />
                                    </svg>

                                    <svg width="1" height="219" viewBox="0 0 1 219" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.5" x2="0.5" y2="219" stroke="#FF4581" />
                                    </svg>

                                </div>

                                <div
                                    data-aos="flip-right"
                                    className="text-gray-50 lg:pl-16 lg:w-60"
                                >
                                    <h5 className="text-2xl py-4 text-blue-100 font-semibold">Operational</h5>

                                    <p className='leading-loose'>
                                        SubQuery launches its own parachainSubQuery Foundation
                                    </p>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            {/* OUr team */}

            {/* <img src={uneven_1} alt="top" className='translate-y-4 bg-black-50' /> */}
            <div id='team' className="lg:px-20 lg:py-20 py-6 px-5 bg-black-50 text-white-100 relative z-20">

                <div className='container mx-auto'>

                    <div className="flex flex-col justify-center items-center gap-y-8">

                        <h4 className='font-semibold flex items-center gap-2 uppercase'>
                            <span>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="5" fill="#00C4F4" />
                                </svg>
                            </span>
                            OUr team
                            <span>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="5" fill="#00C4F4" />
                                </svg>
                            </span>
                        </h4>
                        <h2 className='md:text-4xl text-3xl font-poppins font-semibold lg:w-1/3 text-center'>
                            The Leadership Team
                        </h2>


                        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-16 items-center justify-center mt-8 pb-16'>

                            <div className='space-y-5 text-center'>
                                <img src={team} alt="" className='flex mx-auto' />

                                <h3 className='font-poppins font-medium text-xl'>
                                    Cameron Williamson
                                </h3>

                                <p className='text-gray-50'>
                                    Founder & CO
                                </p>

                            </div>

                            <div className='space-y-5 text-center'>
                                <img src={team} alt="" className='flex mx-auto' />

                                <h3 className='font-poppins font-medium text-xl'>
                                    Eleanor Pena
                                </h3>

                                <p className='text-gray-50'>
                                    Head of Design
                                </p>

                            </div>

                            <div className='space-y-5 text-center'>
                                <img src={team} alt="" className='flex mx-auto' />

                                <h3 className='font-poppins font-medium text-xl'>
                                    Bessie Cooper
                                </h3>

                                <p className='text-gray-50'>
                                    Vp People
                                </p>

                            </div>

                            <div className='space-y-5 text-center'>
                                <img src={team} alt="" className='flex mx-auto' />

                                <h3 className='font-poppins font-medium text-xl'>
                                    Darlene Robertson
                                </h3>

                                <p className='text-gray-50'>
                                    Product Manager
                                </p>

                            </div>

                        </div>
                    </div>


                </div>
            </div>


            {/* faq section */}

            <div id='faq' className="">

                <div data-aos='slide-down' className='absolute right-0 left-0 -mt-32'>
                    <img src={bg_faq} alt="" className='flex mx-auto w-1/2' />
                </div>

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto relative z-20">

                    <div className='absolute left-0 mt-28 ml-16 lg:block hidden'>
                        <img src={vector_1} alt="Logo" className='w-10/12' />
                    </div>

                    <div data-aos="fade-up" className='lg:w-8/12 flex flex-col mx-auto'>

                        <h2 className='text-3xl tracking-wider font-poppins text-center font-semibold text-blue-100'>
                            Frequently asked questions
                        </h2>

                        <div data-aos="zoom-in" className="accordion space-y-5 py-12">
                            {accordionData.map(({ title, content }) => (
                                <Accordion title={title} content={content} />
                            ))}
                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}
