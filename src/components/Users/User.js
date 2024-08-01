import React from 'react';
import { toast } from 'react-toastify';

const User = ({user, index, refetch}) => {
    const {email, role } = user;

    const makeAdmin = () => {
        fetch(`https://spice-taste-server.vercel.app/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to make new admin')
            }
            return res.json()
        })
        .then(data => {
            if(data.modifiedCount > 0){
                refetch();
                toast.success('Successfully make admin');
            }
        })
    }

    const deleteItem = _id => {
        console.log('deleted', _id);
        const proceed = window.confirm('Are you sure to delete');
        if(proceed){
          const url = `https://spice-taste-server.vercel.app/user/${user?._id}`;
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
          {email}
        </td>
        <td>
          { role !== 'admin' && <button onClick={makeAdmin} className='btn btn-sm bg-red-900'>Admin</button>}
        </td>
        <td>
          <button onClick={() => deleteItem(user._id)} ><img className='rounded-full' height={50} width={50} src="https://i.ibb.co/thV5zXx/deleteicon1.jpg" alt="" /></button>
        </td>
      </tr>
    );
};

export default User;