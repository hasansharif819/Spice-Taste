import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div className='outer'>
                <div className='inner1'>
                    <img className='fluid' src="https://i.ibb.co/HqhkXsy/cumins1.webp" alt="" />
                </div>
                <div className='inner2 justify-center'>
                    <div className="card w-96 text-red-50 shadow-xl sm:justify-center">
                        <div className="card-body">
                            <h2 className="card-title text-red-400">CUMINS</h2>
                            <p>Cumin is a flowering plant in the family Apiaceae, native to the Irano-Turanian Region. Its seeds – each one contained within a fruit, which is dried – are used in the cuisines of many cultures in both whole and ground form.</p>
                            <div className="card-actions justify-center">
                                <a href="https://en.wikipedia.org/wiki/Cumin"><button className="btn btn-sm bg-red-900">MORE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='inner3 text-2xl font-bold text-red-500 text-center align-center'>
                    <Link to='/allInventories'><button className='btn bg-red-800 mt-10'>INVENTORY</button> <br /></Link>
                    <Link to='/manageInventory'><button className='btn bg-red-800 mt-10'>MANAGE ITEM</button></Link>
                </div>
            </div>
            <div className='outer'>
                <div className='inner1'>
                    <img src="https://i.ibb.co/84CS4b4/cardamons1.jpg" alt="" />
                </div>
                <div className='inner2'>
                    <div className="card w-96 text-red-50 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-red-400">CARDAMONS</h2>
                            <p>Cardamom, sometimes cardamon or cardamum, is a spice made from the seeds of several plants in the genera Elettaria and Amomum in the family Zingiberaceae. Elettaria pods are light green and smallerElettaria pods are light green and smaller, while Amomum pods .</p>
                            <div className="card-actions justify-center">
                                <a href="https://en.wikipedia.org/wiki/Cardamom"><button className="btn btn-sm bg-red-900">MORE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='inner3 text-2xl font-bold text-red-500 text-center align-center'>
                    <Link to='/allInventories'><button className='btn bg-red-800 mt-10'>INVENTORY</button> <br /></Link>
                    <Link to='/manageInventory'><button className='btn bg-red-800 mt-10'>MANAGE ITEM</button></Link>
                </div>
            </div>
            <div className='outer'>
                <div className='inner1'>
                    <img src="https://i.ibb.co/WxYFmK2/nutmeg.webp" alt="" />
                </div>
                <div className='inner2'>
                    <div className="card w-96 text-red-50 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-red-400">NUTMEG</h2>
                            <p>Nutmeg is the seed or ground spice of several species of the genus Myristica. Myristica fragrans is a dark-leaved evergreen tree cultivated for two spices derived from its fruit: nutmeg, from its seed, and mace, from the seed covering. It is also a commercial source of an essential oil and nutmeg butter. </p>
                            <div className="card-actions justify-center">
                                <a href="https://en.wikipedia.org/wiki/Nutmeg"><button className="btn btn-sm bg-red-900">MORE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='inner3 text-2xl font-bold text-red-500 text-center align-center'>
                    <Link to='/allInventories'><button className='btn bg-red-800 mt-10'>INVENTORY</button> <br /></Link>
                    <Link to='/manageInventory'><button className='btn bg-red-800 mt-10'>MANAGE ITEM</button></Link>
                </div>
            </div>
            <div className='outer'>
                <div className='inner1'>
                    <img src="https://i.ibb.co/86gq8bx/nuts.webp" alt="" />
                </div>
                <div className='inner2'>
                    <div className="card w-96 text-red-50 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-red-400">NUT</h2>
                            <p>A nut is a fruit consisting of a hard or tough nutshell protecting a kernel which is usually edible. In general usage and in a culinary sense, a wide variety of dry seeds are called nuts, but in a botanical context "nut" implies that the shell does not open to release the seed.</p>
                            <div className="card-actions justify-center">
                                <a href="https://en.wikipedia.org/wiki/Nut_(fruit)"><button className="btn btn-sm bg-red-900">MORE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='inner3 text-2xl font-bold text-red-500 text-center align-center'>
                    <Link to='/allInventories'><button className='btn bg-red-800 mt-10'>INVENTORY</button> <br /></Link>
                    <Link to='/manageInventory'><button className='btn bg-red-800 mt-10'>MANAGE ITEM</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;