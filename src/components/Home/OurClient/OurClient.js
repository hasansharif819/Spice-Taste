import React from 'react';
import './OurClient.css';

const OurClient = () => {
    return (
        <div className='my-5 bg-red-900'>
            <div>
                <h2 className='title font-bold text-red-300 text-4xl py-2'>SPICE TASTE</h2>
                <h2 className='title font-bold text-3xl py-2 text-red-300'>WHAT OUR CLIENT SAYS</h2>
                <h2 className='title font-semibold text-xl py-2 text-red-300'>Fresh From Our Farm SPICE</h2>
            </div>
            <div className="carousel carousel-center rounded-box pl-0 my-5">
                <div className="carousel-item card w-96 shadow-xl m-5 p-5 bg-white">
                    <figure>
                        <div className="avatar" id='avatarcss'>
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://i.ibb.co/09zZD79/human3.webp" alt='' />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-primary font-bold text-center">
                        Xomelot tekpo
                        </h2>
                        <p>Web developing trends are always on the move. Creative folks from all around the world keep coming up with mind-blowing website layouts, bringing to life their best and most original ideas.</p>
                        <h3 className='text-secondary font-bold'>Amazing</h3>
                    </div>
                </div>
                <div className="carousel-item card w-96 shadow-xl m-5 p-5 bg-white">
                    <figure>
                        <div className="avatar" id='avatarcss'>
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://i.ibb.co/vkzBKh9/human5.webp" alt='' />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-primary font-bold text-center">
                            Lorry Petro
                        </h2>
                        <p>Best website trends are always on the move. Creative folks from all around the world keep coming up with mind-blowing website layouts, bringing to life their best and most original ideas.</p>
                        <h3 className='text-secondary font-bold'>I like it</h3>
                    </div>
                </div>
                <div className="carousel-item card w-96 shadow-xl m-5 p-5 bg-white">
                    <figure>
                        <div className="avatar" id='avatarcss'>
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://i.ibb.co/jVMPVGF/human4.webp" alt='' />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-primary font-bold text-center">
                            Zenio pitter
                        </h2>
                        <p>Spice are awesome trends are always on the move. Creative folks from all around the world keep coming up with mind-blowing website layouts, bringing to life their best and most original ideas.</p>
                        <h3 className='text-secondary font-bold'>Awesome</h3>
                    </div>
                </div>
                <div className="carousel-item card w-96 shadow-xl m-5 p-5 bg-white">
                    <figure>
                        <div className="avatar" id='avatarcss'>
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://i.ibb.co/Fh56SXB/human6.webp" alt='' />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-primary font-bold text-center">
                            Lopez param
                        </h2>
                        <p>Nutt are always on the move. Creative folks from all around the world keep coming up with mind-blowing website layouts, bringing to life their best and most original ideas.</p>
                        <h3 className='text-secondary font-bold'>Taste</h3>
                    </div>
                </div>
                <div className="carousel-item card w-96 shadow-xl m-5 p-5 bg-white">
                    <figure>
                        <div className="avatar" id='avatarcss'>
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://i.ibb.co/PFtZTWZ/sharif1.jpg" alt='' />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-primary font-bold text-center">
                        Sharif Hasan
                        </h2>
                        <p>Fantasting trends are always on the move. Creative folks from all around the world keep coming up with mind-blowing website layouts, bringing to life their best and most original ideas.</p>
                        <h3 className='text-secondary font-bold'>Super</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurClient;