import React from 'react';
import './Carousel.css';

const Carousel = () => {
    return (
        <div className=' my-5' id='inventoryID'>
            <div>
            <h2 className='title font-bold text-4xl text-red-400 py-2'>SPICE TASTE</h2>
            <h2 className='title font-bold text-2xl text-red-400 py-2'>FROM OUR BLOGS</h2>
            </div>
        <div className="carousel carousel-center pl-0 rounded-box my-5 h-96 gap-5" id='carouselcss'>
            <div className="carousel-item">
                <img src="https://i.ibb.co/wpKR8gK/masaala10.jpg" className="rounded-box" alt='' />
            </div>
            <div className="carousel-item">
                <img src="https://i.ibb.co/2gCmN3w/masala1.jpg" className="rounded-box" alt='' />
            </div>
            <div className="carousel-item">
                <img src="https://i.ibb.co/ByDM9nk/masala2.webp" className="rounded-box" alt='' />
            </div>
            <div className="carousel-item">
                <img src="https://i.ibb.co/jRRPqzz/masala3.jpg" className="rounded-box" alt='' />
            </div>
            <div className="carousel-item">
                <img src="https://i.ibb.co/1vmbt41/masala4.jpg" className="rounded-box" alt='' />
            </div>
            <div className="carousel-item">
                <img src="https://i.ibb.co/yXGBX4W/masala6.jpg" className="rounded-box" alt='' />
            </div>
            <div className="carousel-item">
                <img src="https://i.ibb.co/L8hXvgT/masala7.jpg" className="rounded-box" alt='' />
            </div>
            <div className="carousel-item">
                <img src="https://i.ibb.co/QnR8Kr3/masala8.jpg" className="rounded-box" alt='' />
            </div>
            <div className="carousel-item">
                <img src="https://i.ibb.co/F3DqYSb/masala9.jpg" className="rounded-box" alt='' />
            </div>
            <div className="carousel-item">
                <img src="https://i.ibb.co/smtRzkf/mosla2.jpg" className="rounded-box" alt='' />
            </div>
            <div className="carousel-item">
                <img src="https://i.ibb.co/HHG0DCh/mosla3.jpg" className="rounded-box" alt='' />
            </div>
        </div>
        </div>
    );
};

export default Carousel;