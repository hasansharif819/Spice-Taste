import React from 'react';

const SingleItem = ({ item, refetch, index }) => {
    const {name, img, price, email, quantity} = item;

    const deleteItem = _id => {
        console.log('deleted', _id);
        const proceed = window.confirm('Are you sure to delete');
        if(proceed){
          const url = `https://boiling-coast-23133.herokuapp.com/spice/${item?._id}`;
          fetch(url, {
            method: "DELETE"
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0){
              refetch();
            }
          })
        }
    }

    return (
        <tr>
        <th>
          <label>
            {index + 1}
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img height={50} width={50} src={img} alt="" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50 text-red-900 font-semibold">{price} tk</div>
            </div>
          </div>
        </td>
        <td>
          {email}
          <br />
          <span className="badge badge-ghost badge-sm">Quantity: {quantity}</span>
        </td>
        <th>
          <button onClick={() => deleteItem(item._id)} ><img className='rounded-full' height={50} width={50} src="https://i.ibb.co/thV5zXx/deleteicon1.jpg" alt="" /></button>
        </th>
      </tr>
    );
};

export default SingleItem;