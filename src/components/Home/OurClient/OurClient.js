import React from 'react';
import './OurClient.css';

const OurClient = () => {
    return (
        <div className="hero min-h-screen" id='CarouselBackground'>
             
  <div className="hero-overlay bg-opacity-60">
  <div className='mb-10'>
                <h2 className='title font-bold text-red-500 text-4xl py-2'>SPICE TASTE</h2>
                <h2 className='title font-bold text-3xl py-2 text-red-500'>WHAT OUR CLIENT SAYS</h2>
                <h2 className='title font-semibold text-xl text-red-500'>Fresh From Our Farm SPICE</h2>
            </div>
  </div>
  <div className="hero-content text-center text-neutral-content mt-28">
    <div className="max-w-md mt-40"></div>

            <div className="carousel carousel-center rounded-box pl-0 my-5 ">
                <div className="carousel-item card w-96 shadow-xl m-5 p-5 backGround">
                    <figure>
                        <div className="avatar" id='avatarcss'>
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://i.ibb.co/09zZD79/human3.webp" alt='' />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold text-center text-white">
                        Xomelot tekpo
                        </h2>
                        <p className='text-start text-white'>Web developing trends are always on the move. Creative folks from all around the world keep coming up with mind-blowing website layouts, bringing to life their best and most original ideas.</p>
                        <h3 className='text-white font-bold'>Amazing</h3>
                    </div>
                </div>

                <div className="carousel-item card w-96 shadow-xl m-5 p-5 bg-white backGround">
                    <figure>
                        <div className="avatar" id='avatarcss'>
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://i.ibb.co/vkzBKh9/human5.webp" alt='' />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-white font-bold text-center">
                            Lorry Petro
                        </h2>
                        <p className='text-start text-white'>Best website trends are always on the move. Creative folks from all around the world keep coming up with mind-blowing website layouts, bringing to life their best and most original ideas.</p>
                        <h3 className='text-white font-bold'>I like it</h3>
                    </div>
                </div>
                <div className="carousel-item card w-96 shadow-xl m-5 p-5 bg-white backGround">
                    <figure>
                        <div className="avatar" id='avatarcss'>
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://i.ibb.co/jVMPVGF/human4.webp" alt='' />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-white font-bold text-center">
                            Zenio pitter
                        </h2>
                        <p className='text-start text-white'>Spice are awesome trends are always on the move. Creative folks from all around the world keep coming up with mind-blowing website layouts, bringing to life their best and most original ideas.</p>
                        <h3 className='text-white font-bold'>Awesome</h3>
                    </div>
                </div>
                <div className="carousel-item card w-96 shadow-xl m-5 p-5 bg-white backGround">
                    <figure>
                        <div className="avatar" id='avatarcss'>
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://i.ibb.co/Fh56SXB/human6.webp" alt='' />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-white font-bold text-center">
                            Lopez param
                        </h2>
                        <p className='text-white text-start'>Nutt are always on the move. Creative folks from all around the world keep coming up with mind-blowing website layouts, bringing to life their best and most original ideas.</p>
                        <h3 className='text-white font-bold'>Taste</h3>
                    </div>
                </div>
                <div className="carousel-item card w-96 shadow-xl m-5 p-5 bg-white backGround">
                    <figure>
                        <div className="avatar" id='avatarcss'>
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://i.ibb.co/PFtZTWZ/sharif1.jpg" alt='' />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-white font-bold text-center">
                        Sharif Hasan
                        </h2>
                        <p className='text-white text-start'>Fantasting trends are always on the move. Creative folks from all around the world keep coming up with mind-blowing website layouts, bringing to life their best and most original ideas.</p>
                        <h3 className='text-white font-bold'>Super</h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default OurClient;