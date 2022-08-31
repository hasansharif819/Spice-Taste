import React from 'react';
import { useQuery } from 'react-query';
import ManageInventory from './ManageInventory';
import Loading from '../../Shared/Loading/Loading';

const ManageInventories = () => {
    const {data: inventories, isLoading, refetch} = useQuery('inventories', () => fetch('https://boiling-coast-23133.herokuapp.com/spice').then(res => res.json()))
if(isLoading){
    return <Loading></Loading>
}
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>NAME</th>
                            <th>EMAIL & QUANTITY</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            inventories.map((inventory, index) => <ManageInventory
                                key={inventory._id}
                                inventory={inventory}
                                index={index}
                                refetch={refetch}
                            ></ManageInventory>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageInventories;