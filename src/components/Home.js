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
import metamask from '../assets/metamask.png';
import fortmatic from '../assets/fortmatic.png';
import bitski from '../assets/bitski.png';
import coinbase from '../assets/coinbase.png';
import torus from '../assets/torus.png';
import wallet from '../assets/wallet.png';
import kaikas from '../assets/kaikas.png';
import authereum from '../assets/authereum.png';
import team from '../assets/team.png';
import team_1 from '../assets/team_1.png';
import team_2 from '../assets/team_2.png';
import team_3 from '../assets/team_3.png';
import team_4 from '../assets/team_4.png';

import swap from '../assets/swap.png';
import chart_1 from '../assets/chart_1.png';
import uneven_1 from '../assets/uneven_1.png';
import uneven from '../assets/uneven.png';
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
            title: 'What is Twitter CEO ? ',
            content: `Twitter CEO leads innovation meme, drives trends, and connects people worldwide. It sets the tone for social media culture.`
        },
        {
            title: 'How to buy TCEO?',
            content: <>Buy TCEO at <a href='http://pancakeswap.finance/' className='text-blue-50'>Pancakeswap.finance</a></>
        },
        {
            title: 'How about TAXES?',
            content: `Tax 10-10 for buy/sell.`
        },
        {
            title: 'Where is TCEO Auditing?',
            content: `TCEO towards Audit at CertiK.`
        }
    ];

    return (
        <div className="bg-white-100 font-outfit overflow-hidden">

            {/* top section */}

            <div data-aos='slide-down' className='absolute right-0 left-0 top-0'>
                <img src={bg_top} alt="" className='flex mx-auto' />
            </div>

            <div id='home' className="lg:px-20 px-5 bg-top relative z-20">
                <div className='container mx-auto'>

                    <Menu />
                    <div className="flex flex-col justify-center items-center gap-y-12 text-center py-12">

                        <h1 className='md:text-5xl text-3xl font-poppins font-semibold lg:text-white-100'>
                            The CEO is in the House!
                        </h1>

                        <div data-aos="zoom-in" className="img md:mt-0 mt-12">
                            <img src={top} alt="Logo" className='w-9/12 flex mx-auto' />
                        </div>

                        <div className='text-center flex flex-col items-center justify-center gap-y-6'>
                            <p className='text-black-50 lg:w-7/12'>
                                Elon Musk's admiration for Floki led to him extending an invitation for me to become Twitter's CEO. I'm honored and excited to take on this role and, with the support of the community and Elon Musk's drive, we'll strive to achieve success. The Twitter CEO meme has the same potential for global recognition as Shib and other cryptocurrencies, and we'll work hard to make it a household name. I'm looking forward to this new chapter and the opportunities it brings.
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

                        {/* <div className='text-center space-y-4 absolute translate-x-24'>
                            <p className='uppercase text-2xl font-semibold'>
                                Buy
                            </p>
                            <p className='uppercase text-2xl font-semibold'>
                                TWITTER
                            </p>
                            <p className='uppercase text-2xl font-semibold'>
                                CEO
                            </p>
                            <p className='uppercase text-2xl font-semibold'>
                                token
                            </p>
                            <p className='uppercase text-2xl font-semibold'>
                                today!
                            </p>
                        </div> */}
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

                        <img src={swap} alt="" className='mt-5 flex mx-auto' />

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
                                            <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
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

            <img src={uneven_1} alt="top" className='bg-black-50 w-full' />
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
                            Why should I own Twitter CEO Token?
                        </h2>


                        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 justify-center mt-6 pb-16'>

                            <div className='space-y-8'>
                                <img src={p_1} alt="" className='' />

                                <h3 className='font-poppins font-medium text-xl'>
                                    Access to exclusive benefits.
                                </h3>

                                <p className='text-gray-50 lg:w-9/12'>
                                    TCEO is fully decentralized and owned by its fun, vibrant community
                                </p>

                            </div>

                            <div className='space-y-8'>
                                <img src={p_2} alt="" className='' />

                                <h3 className='font-poppins font-medium text-xl'>
                                    Support for the CEO
                                </h3>

                                <p className='text-gray-50 lg:w-9/12'>
                                    Elon Musk thinks were pretty cool and invited me to be CEO of Twitter
                                </p>

                            </div>

                            <div className='space-y-8'>
                                <img src={p_3} alt="" className='' />

                                <h3 className='font-poppins font-medium text-xl'>
                                    Secured
                                </h3>

                                <p className='text-gray-50 lg:w-9/12'>
                                    TCEO token secured by advanced encryption, multi-factor authentication, tamper-proof transactions, secure wallets, and stringent identity verification.
                                </p>

                            </div>

                            <div className='space-y-8'>
                                <img src={p_4} alt="" className='' />

                                <h3 className='font-poppins font-medium text-xl'>
                                    Experienced team
                                </h3>

                                <p className='text-gray-50 lg:w-9/12'>
                                    We've had the project xxxx times and it's not hard to do it again
                                </p>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <img src={uneven} alt="top" className='bg-black-50' />

            <div className='md:w-1/2 rounded-xl bg-white-100 lg:p-12 p-3 flex mx-auto text-center justify-center lg:-mt-16 -mt-8 shadow-md'>
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
                        </div>

                        <div className='space-y-6 text-center p-6 bg-yellow-50 rounded-md text-blue-100'>
                            <img src={bitski} alt="" className='flex mx-auto' />

                            <h3 className='font-poppins font-medium text-xl'>
                                Bitski
                            </h3>
                        </div>

                        <div className='space-y-6 text-center p-6 bg-yellow-50 rounded-md text-blue-100'>
                            <img src={fortmatic} alt="" className='flex mx-auto' />

                            <h3 className='font-poppins font-medium text-xl'>
                                Fortmatic
                            </h3>
                        </div>

                        <div className='space-y-6 text-center p-6 bg-yellow-50 rounded-md text-blue-100'>
                            <img src={wallet} alt="" className='flex mx-auto' />

                            <h3 className='font-poppins font-medium text-xl'>
                                Wallet Connect
                            </h3>
                        </div>

                        <div className='space-y-6 text-center p-4 bg-yellow-50 rounded-md text-blue-100'>
                            <img src={coinbase} alt="" className='flex mx-auto' />

                            <h3 className='font-poppins font-medium text-xl'>
                                Coinbase Wallet
                            </h3>
                        </div>

                        <div className='space-y-6 text-center p-6 bg-yellow-50 rounded-md text-blue-100'>
                            <img src={authereum} alt="" className='flex mx-auto' />

                            <h3 className='font-poppins font-medium text-xl'>
                                Authereum
                            </h3>
                        </div>

                        <div className='space-y-6 text-center p-6 bg-yellow-50 rounded-md text-blue-100'>
                            <img src={kaikas} alt="" className='flex mx-auto' />

                            <h3 className='font-poppins font-medium text-xl'>
                                Kaikas
                            </h3>
                        </div>

                        <div className='space-y-6 text-center p-5 bg-yellow-50 rounded-md text-blue-100'>
                            <img src={torus} alt="" className='flex mx-auto' />

                            <h3 className='font-poppins font-medium text-xl'>
                                Torus
                            </h3>
                        </div>

                    </div>

                </div>

            </div>

            {/* token distribution */}

            <div id='token' className="lg:py-12 py-5 lg:px-20 px-5 container mx-auto">

                <div className='lg:flex items-center justify-center gap-6'>

                    <h2 className='lg:text-5xl text-2xl font-poppins text-center font-semibold text-blue-100'>
                        TOKEN DISTRIBUTION
                    </h2>

                    <img src={token} alt="" className='lg:block hidden' />

                </div>

                <div className='flex items-center justify-center pt-8 space-y-5'>

                    <div className=''>

                        <img src={token_1} alt="" className='flex mx-auto w-10/12 md:hidden' />

                        <div className='chart_1 md:block hidden'>

                            <div className='flex items-center justify-between gap-x-36 translate-y-24'>

                                <div data-aos='fade-left' className='flex items-center gap-x-2'>
                                    <div className='text-right'>
                                        <p>3%</p>
                                        <p>Dev</p>
                                    </div>

                                    <div>
                                        <svg width="110" height="31" viewBox="0 0 110 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 1H76.8867L109 30" stroke="#636770" strokeWidth="2" strokeDasharray="2 2" />
                                        </svg>
                                    </div>

                                </div>

                                <div data-aos='fade-right' className='flex items-center gap-x-2'>
                                    <div>
                                        <svg width="123" height="31" viewBox="0 0 123 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M123 1H79.9717H36.9433L0.999999 30" stroke="#636770" strokeWidth="2" strokeDasharray="2 2" />
                                        </svg>
                                    </div>

                                    <div className='text-left'>
                                        <p>40%</p>
                                        <p>Presale</p>
                                    </div>
                                </div>

                            </div>

                            <div data-aos='fade-left' className='flex items-center gap-x-2 absolute mt-36 -ml-6'>

                                <div className='text-right'>
                                    <p>5%</p>
                                    <p>Marketing</p>
                                </div>

                                <svg width="77" height="2" viewBox="0 0 77 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 1L41.4315 1L77 1.00001" stroke="#636770" strokeWidth="2" strokeDasharray="2 2" />
                                </svg>
                            </div>

                            <div className=''>

                                <img src={chart_1} alt="" className='flex mx-auto w-9/12' />

                            </div>

                            <div className='flex items-center justify-between -translate-y-24'>

                                <div data-aos='fade-left' className='flex items-center gap-x-2'>
                                    <div className='text-right'>
                                        <p>22%</p>
                                        <p>Liquidity</p>
                                    </div>

                                    <div>
                                        <svg width="101" height="25" viewBox="0 0 101 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 24H63.2787L100 1" stroke="#636770" strokeWidth="2" strokeDasharray="2 2" />
                                        </svg>
                                    </div>

                                </div>

                                <div data-aos='fade-right' className='flex items-center gap-x-2'>
                                    <svg width="119" height="29" viewBox="0 0 119 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M119 28H40.2039L0.999997 0.999999" stroke="#636770" strokeWidth="2" strokeDasharray="2 2" />
                                    </svg>


                                    <div className='text-left'>
                                        <p>30%</p>
                                        <p>Burn</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


            </div>

            {/* roadmap */}

            <div id='roadmap' className="">

                <div className="lg:py-12 py-5 lg:px-20 px-5 container mx-auto">

                    <p className='text-blue-200 uppercase text-center underline font-semibold pb-5 '>
                        roadmap
                    </p>

                    <h2 className='md:text-3xl text-xl font-poppins text-center font-semibold text-blue-100'>
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

                                    <p className='text-center -mt-7' style={{ color: '#00C4F4' }}>
                                        Mid of 2023
                                    </p>

                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.1" cx="16" cy="16" r="16" fill="#00C4F4" />
                                        <circle cx="16" cy="16" r="8" fill="#00C4F4" className='' />
                                    </svg>

                                    <svg width="1" height="219" viewBox="0 0 1 219" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.5" x2="0.5" y2="219" stroke="#00C4F4" />
                                    </svg>

                                </div>

                                <div
                                    data-aos="flip-right"
                                    className="text-gray-50 lg:pl-20 lg:w-60"
                                >
                                    <h5 className="text-2xl py-4 text-blue-100 font-semibold">Launching</h5>

                                    <p className='leading-loose'>
                                        Presale Launch
                                        CoinGecko Listing
                                        Marketing Campaign
                                        CoinMarketCap Listing
                                    </p>

                                </div>
                            </div>

                            <div className="flex items-baseline gap-x-6">
                                <div
                                    data-aos="zoom-in"
                                    className="absolute -mt-5 lg:flex flex-col items-center justify-center hidden"
                                >

                                    <p className='text-center -mt-7' style={{ color: '#FF9700' }}>
                                        Mid of 2023
                                    </p>

                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.1" cx="16" cy="16" r="16" fill="#FF9700" />
                                        <circle cx="16" cy="17" r="8" fill="#FF9700" className='' />
                                    </svg>

                                    <svg width="1" height="219" viewBox="0 0 1 219" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.5" x2="0.5" y2="219" stroke="#FF9700" />
                                    </svg>

                                </div>

                                <div
                                    data-aos="flip-right"
                                    className="text-gray-50 lg:pl-16 lg:w-60"
                                >
                                    <h5 className="text-2xl py-4 text-blue-100 font-semibold">Growth</h5>

                                    <p className='leading-loose'>
                                        Audit Certik
                                        Skynet at CertiK
                                        10,000 Holders
                                        Marketing Campaign
                                        Listing BabydogeSwap
                                    </p>

                                </div>
                            </div>

                            <div className="flex items-baseline gap-x-6">
                                <div
                                    data-aos="zoom-in"
                                    className="absolute -mt-5 lg:flex flex-col items-center justify-center hidden"
                                >

                                    <p className='text-center -mt-7' style={{ color: '#007FF4' }}>
                                        Mid of 2023
                                    </p>

                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.1" cx="16" cy="16" r="16" fill="#007FF4" />
                                        <circle cx="16" cy="17" r="8" fill="#007FF4" className='' />
                                    </svg>

                                    <svg width="1" height="219" viewBox="0 0 1 219" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.5" x2="0.5" y2="219" stroke="#007FF4" />
                                    </svg>

                                </div>

                                <div
                                    data-aos="flip-right"
                                    className="text-gray-50 lg:pl-16 lg:w-60"
                                >
                                    <h5 className="text-2xl py-4 text-blue-100 font-semibold">Expansion</h5>

                                    <p className='leading-loose'>
                                        Floki CEO Burn Event
                                        15.000 Holder
                                        Listing Bitmard
                                        Listing ETH
                                    </p>

                                </div>
                            </div>

                            <div className="flex items-baseline gap-x-6">
                                <div
                                    data-aos="zoom-in"
                                    className="absolute -mt-5 lg:flex flex-col items-center justify-center hidden"
                                >

                                    <p className='text-center -mt-7' style={{ color: '#007FF4' }}>
                                        Mid of 2023
                                    </p>

                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="16" r="16" fill="#FF4581" fillOpacity="0.1" />
                                        <circle cx="16" cy="17" r="8" fill="#FF4581" className='' />
                                    </svg>

                                    <svg width="1" height="219" viewBox="0 0 1 219" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.5" x2="0.5" y2="219" stroke="#FF4581" />
                                    </svg>

                                </div>

                                <div
                                    data-aos="flip-right"
                                    className="text-gray-50 lg:pl-16 lg:w-60"
                                >
                                    <h5 className="text-2xl py-4 text-blue-100 font-semibold">Utility</h5>

                                    <p className='leading-loose'>
                                        50.000 Holder
                                        Launch event SWAP
                                        Launch event NFTs
                                        Influencer Awareness Partnerships
                                    </p>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            {/* Our team */}

            <div className='relative z-20'>
                <img src={uneven_1} alt="top" className='bg-black-50' />
                <div id='team' className="lg:px-20 lg:py-12 py-6 px-5 bg-black-50 text-white-100">

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
                            <h2 className='md:text-4xl text-2xl font-poppins font-semibold text-center uppercase'>
                                Parnertship
                            </h2>


                            <div className='flex lg:gap-6 gap-3 items-center justify-center mt-8 pb-16'>

                                <div className='space-y-5 text-center'>
                                    <img src={team} alt="" className='flex mx-auto' />
                                </div>

                                <div className='space-y-5 text-center'>
                                    <img src={team_1} alt="" className='flex mx-auto' />
                                </div>

                                <div className='space-y-5 text-center'>
                                    <img src={team_2} alt="" className='flex mx-auto' />

                                </div>

                                <div className='space-y-5 text-center'>
                                    <img src={team_3} alt="" className='flex mx-auto' />
                                </div>

                                <div className='space-y-5 text-center'>
                                    <img src={team_4} alt="" className='flex mx-auto' />
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
                <img src={uneven} alt="top" className='bg-black-50' />
            </div>


            {/* faq section */}

            <div id='faq' className="bg-white-50">

                <div data-aos='slide-down' className='absolute right-0 left-0 -mt-32'>
                    <img src={bg_faq} alt="" className='flex mx-auto w-1/2' />
                </div>

                <div className="lg:py-20 py-5 lg:px-20 px-5 container mx-auto relative z-20">

                    <div className='absolute left-0 mt-28 ml-16 lg:block hidden'>
                        <img src={vector_1} alt="Logo" className='w-10/12' />
                    </div>

                    <div data-aos="fade-up" className='lg:w-8/12 flex flex-col mx-auto'>

                        <h2 className='md:text-3xl text-xl tracking-wider font-poppins text-center font-semibold text-blue-100'>
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
