import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import AllInventory from './AllInventory';

const AllInventories = () => {
    const [inventories] = useInventory([]);
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
        </div>
    );
};

export default AllInventories;