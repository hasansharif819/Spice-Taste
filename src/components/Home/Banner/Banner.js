import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div id='outside'>
            <div className="hero min-h-screen" id='large'>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md mt-40">
      <h1 className="mb-5 text-5xl font-bold">SPICE  TASTE</h1>
      <p className="mb-5 text-3xl">A well known Spice Stock Market</p>
      <Link to='/allinventories'><button className="btn bg-red-900" id='buttonID'>SPICES</button>
</Link>
    </div>
  </div>
</div>

            {/* small / side part  */}
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