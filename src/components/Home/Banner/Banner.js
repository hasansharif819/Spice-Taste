import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div id='outside'>
            <div id="large" className="carousel rounded-box">
            <div className="hero min-h-screen ">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold pt-60"><span className='text-yellow-500'>SPICE</span> <span className='text-white'>TASTE</span></h1>
      <p className="py-2 text-white font-bold text-4xl"><span className='text-green-400'>FRESH FR</span>OM OUR FARM SP<span className='text-green-500'>I</span>CE</p>
      {/* <p className="py-2  font-semibold text-3xl text-yellow-300">Time to Taste</p> */}
    </div>
  </div>
</div>
            </div>
            <div id="small">
                <div id='smallUp'>
                <img src="https://i.ibb.co/fHdyj0X/s2.jpg" className="rounded-box" alt=''/>
                </div>
                <div id='smallDown'>
                <img src="https://i.ibb.co/JvsGM0c/s3.jpg" className="rounded-box" alt=''/>
                </div>
            </div>
        </div>
    );
};

export default Banner;