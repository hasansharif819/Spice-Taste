import React from 'react';

const SingleItem = ({ item, refetch, index }) => {
    const {name, img, price, email, quantity} = item;

    const deleteItem = _id => {
        console.log('deleted', _id);
        const proceed = window.confirm('Are you sure to delete');
        if(proceed){
          const url = `http://localhost:5000/spice/${item?._id}`;
          fetch(url, {
            method: "DELETE"
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
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
          <button onClick={() => deleteItem(item._id)} className="btn bg-red-500 btn-xs">REMOVE</button>
        </th>
      </tr>
    );
};

export default SingleItem;