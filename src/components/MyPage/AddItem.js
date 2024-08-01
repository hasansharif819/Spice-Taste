import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddItem.css';

const AddItem = () => {
    const {register, formState: { errors },reset, handleSubmit} = useForm();
    const [user] = useAuthState(auth);
    const email = user?.email;
    const imageStorageKey = '4fb1911cd7fea07ca539c23c89d490db';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const image = result.data.url;
                const item = {
                    email: email,
                    name:data.name,
                    price: data.price,
                    quantity: data.quantity,
                    img: image
                }
                fetch('https://spice-taste-server.vercel.app/spice', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(item)
                })
                .then(res => res.json())
                .then(result => {
                    if(result.success){
                        toast('Successfully Added New Item');
                        reset();
                    }
                })
            }
        })
    }
    return (
        <div id='backgroundImage'>
            <form onSubmit={handleSubmit(onSubmit)}
            className='grid grid-cols-1 gap-3 justify-items-center py-5'>


                <div className='form-control w-full max-w-xs'>
                    <input 
                    type="text" 
                    placeholder='Name of Product'
                    className='input input-bordered w-full max-w-xs'
                    {...register('name', {
                        required: {
                            value: true,
                            message: 'Name is required'
                        }
                    })}
                    />
                    <label className='label'>
                        {errors.name?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.name.message}</span>}
                    </label>
                </div>
                
                <div className='form-control w-full max-w-xs'>
                    <input 
                    type="text" 
                    placeholder='Price of Product'
                    className='input input-bordered w-full max-w-xs'
                    {...register('price', {
                        required: {
                            value: true,
                            message: 'Price is required'
                        }
                    })}
                    />
                    <label className='label'>
                        {errors.price?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.price.message}</span>}
                    </label>
                </div>

                <div className='form-control w-full max-w-xs'>
                    <input 
                    type="text" 
                    placeholder='Quantity of Product'
                    className='input input-bordered w-full max-w-xs'
                    {...register('quantity', {
                        required: {
                            value: true,
                            message: 'Quantity is required'
                        }
                    })}
                    />
                    <label className='label'>
                        {errors.quantity?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.quantity.message}</span>}
                    </label>
                </div>
                <div className='form-control w-full max-w-xs'>
                    <input 
                    type="file" 
                    placeholder='Image of Product'
                    className='input input-bordered w-full max-w-xs'
                    {...register('image', {
                        required: {
                            value: true,
                            message: 'Image is required'
                        }
                    })}
                    />
                    <label className='label'>
                        {errors.image?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.image.message}</span>}
                    </label>
                </div>
                <input type="submit" value="ADD ITEM"  className='btn bg-red-800 w-full max-w-xs'/>
            </form>
        </div>
    );
};

export default AddItem;