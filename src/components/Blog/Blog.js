import React from 'react';

const Blog = () => {
    return (
        <div className='my-5 bg-red-900'>
            <div>
            <h2 className='title font-bold text-red-300 text-4xl py-2'>SPICE TASTE</h2>
            <h2 className='title font-bold text-3xl py-2 text-red-300'>Welcome to our blog</h2>
            </div>
        <div className="carousel carousel-center rounded-box pl-0 my-5">
            <div className="carousel-item card w-96 shadow-xl m-5 p-5 bg-white">
                <figure>
                    <div className="avatar" id='avatarcss'>
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/HPkB17T/r1.jpg" alt='' />
                        </div>
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-primary font-bold text-center">
                        React
                    </h2>
                    <p>Toss out that granular state management, manual refetching and endless bowls of async-spaghetti code. TanStack Query gives you declarative, always-up-to-date auto-managed queries and mutations that directly improve both your developer and user experiences.</p>
                    <a href="https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/"><button className='btn bg-red-800'>DOCs</button></a>
                </div>
            </div>
            <div className="carousel-item card w-96 shadow-xl m-5 p-5 bg-white">
                <figure>
                    <div className="avatar" id='avatarcss'>
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/C6cw0MS/js1.webp" alt='' />
                        </div>
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-primary font-bold text-center">
                        Java Script
                    </h2>
                    <p>JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript.</p>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><button className='btn bg-red-800'>DOCs</button></a>
                </div>
            </div>
            <div className="carousel-item card w-96 shadow-xl m-5 p-5 bg-white">
                <figure>
                    <div className="avatar" id='avatarcss'>
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/N2Rpy4K/rquery2.webp" alt='' />
                        </div>
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-primary font-bold text-center">
                        React Toastify
                    </h2>
                    <p>Frontend developers use HTML, CSS, and JavaScript to build graphical interfaces for websites that users can see and interact with. The objective is to build and design a site users can open, use, and interact with easily, especially when reading vital information.

Part of frontend development involves how beautiful and aesthetically pleasing the website is, also known as UI. Another aspect called UX involves how easy and straightforward it is to use the website.</p>
                    <a href="https://blog.logrocket.com/using-react-toastify-style-toast-messages/"><button className='btn bg-red-800'>DOCs</button></a>
                </div>
            </div>
            <div className="carousel-item card w-96 shadow-xl m-5 p-5 bg-white">
                <figure>
                    <div className="avatar" id='avatarcss'>
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/qCnNJP5/rhook1.jpg" alt='' />
                        </div>
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-primary font-bold text-center">
                        React Hook Form
                    </h2>
                    <p>Forms are an essential part of how users interact with websites and web applications. Validating the user’s data passed through the form is a crucial responsibility for a developer.

React Hook Form is a library that helps you validate forms in React. It is a minimal library without any other dependencies, while being performant and straightforward to use, requiring developers to write fewer lines of code than other form libraries.</p>
                    <a href="https://blog.logrocket.com/react-hook-form-complete-guide/"><button className='btn bg-red-800'>DOCs</button></a>
                </div>
            </div>
            <div className="carousel-item card w-96 shadow-xl m-5 p-5 bg-white">
                <figure>
                    <div className="avatar" id='avatarcss'>
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/567Lmr6/firebase1.jpg" alt='' />
                        </div>
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-primary font-bold text-center">
                        Firebase
                    </h2>
                    <p>Firebase evolved from Envolve, a prior startup founded by James Tamplin and Andrew Lee in 2011. Envolve provided developers an API that enables the integration of online chat functionality into their websites. Firebase's first product was the Firebase Realtime Database, an API that synchronizes application data across iOS, Android, and Web devices, and stores it on Firebase's cloud. The product assists software developers in building real-time,</p>
                    <a href="https://en.wikipedia.org/wiki/Firebase"><button className='btn bg-red-800'>DOCs</button></a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Blog;