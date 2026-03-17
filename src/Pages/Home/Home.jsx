import React from 'react';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import playstore from "../../assets/playsotre.png"
import appstore from "../../assets/appstore.png"
import banner from "../../assets/hero.png"

const Home = () => {
    return (
        <div className='text-center my-10'>
           <h1 className='md:text-6xl text-4xl mb-5 font-bold'>We Build <br></br> <span className='text-[#632EE3]'>Productive</span> Apps</h1>
            <p className='text-xl md:w-2/5 mx-auto'>At APPNEST, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex mx-auto justify-center-safe mt-5 gap-5'>
                <button className='flex btn btn-outline items-center gap-2'>
                    <img className='w-[20px]' src={playstore} alt="" />
                    <h1>Google Play</h1>
                </button>
                <button className='flex btn btn-outline items-center gap-2'>
                    <img className='w-[20px]' src={appstore} alt="" />
                    <h1>App Store</h1>
                </button>
            </div>
            <div className='flex justify-center-safe mt-5'>
                <img src={banner} alt="" />
            </div>
            <div className='bg-gradient-to-r py-10 text-center from-[#632EE3] to-[#9F62F2]'> 
                <h1 className='text-4xl mb-5 font-bold'>Trusted by Millions, Built for You</h1>
                <div className='md:flex gap-10 justify-center-safe'>
                    <div className='mb-5'>
                        <h1>Total Downloads</h1>
                        <h1 className='md:text-4xl text-2xl font-bold'>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className='mb-5'>
                        <h1>Total Reviews</h1>
                        <h1 className='text-4xl font-bold'>29.6M</h1>
                        <p>46% more than last month</p>
                    </div>
                    <div className=''>
                        <h1>Active Apps</h1>
                        <h1 className='text-4xl font-bold'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;