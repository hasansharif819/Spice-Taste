import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import AllInventory from './AllInventory';
import './AllInventories.css';

const AllInventories = () => {
    const [inventories, setInventories] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);

    useEffect( () => {
        fetch(`https://boiling-coast-23133.herokuapp.com/spice?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => setInventories(data))
    }, [page, size])

    useEffect( () => {
        fetch('https://boiling-coast-23133.herokuapp.com/spiceCount')
        .then(res => res.json())
        .then(data => {
            const count = data.count;
            const pages = Math.ceil(count / 6);
            setPageCount(pages);
        })
    }, [])

    return (
        <div className='my-5' id='inventoryID'>
            <div>
            <h2 className='title font-bold text-4xl py-2 text-red-300'>SPICE TASTE</h2>
            <h2 className='title font-bold text-3xl py-2 text-red-300'>LATEST FROM INVENTORY</h2>
            <h2 className='title font-semibold text-xl py-2 text-red-300'>You can view different types of SPICE</h2>
            </div>

           <div className='grid grid-cols-1md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 mt-10 p-5'>
           {
                inventories.map(inventory => <AllInventory
                    key={inventory._id}
                    inventory={inventory}
                ></AllInventory>)
            }
           </div>
           <div className='pagination'>
                {
                    [...Array(pageCount).keys()]
                    .map(number => <button 
                    onClick={() => setPage(number)}
                    className={page===number?'bg-yellow-900 btn btn-sm mr-5':'btn btn-sm mr-5 bg-red-500'}
                    >{number +1}</button>)
                }
                <select onChange={e=> setSize(e.target.value)} className='btn btn-sm bg-red-500' >
                    <option value="6" selected>6</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                    <option value="24">24</option>
                </select>
           </div>
        </div>
    );
};

export default AllInventories;