import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Contact = () => {
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
                    message:data.message,
                    contact: data.contact,
                    img: image
                }
                fetch('http://localhost:5000/message', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(item)
                })
                .then(res => res.json())
                .then(result => {
                    if(result.success){
                        toast('We received your message. Inform you soon. Thank you');
                        reset();
                    }
                })
            }
        })
    }
    return (
        <div id='backgroundImage'>
            <h2 className='text-center text-5xl font-bold text-red-400' >To Know More About us</h2>
            <h2 className='text-center text-2xl font-bold text-green-600' ><span>Feel free to email</span></h2>
            
            <form onSubmit={handleSubmit(onSubmit)}
            className='grid grid-cols-1 gap-3 justify-items-center py-5'>


                <div className='form-control w-full max-w-xs'>
                    <textarea rows={6} cols={30}
                    type="text" 
                    placeholder='Feel free to say something'
                    className='input input-bordered w-full max-w-xs h-28'
                    {...register('message', {
                        required: {
                            value: true,
                            message: 'Message is required'
                        }
                    })}
                    />
                    <label className='label'>
                        {errors.message?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.message.message}</span>}
                    </label>
                </div>
                
                <div className='form-control w-full max-w-xs'>
                    <input 
                    type="email" 
                    value={user?.email} disabled
                    {...register('email')}
                    className='input input-bordered w-full max-w-xs'
                    />
                    <label className='label'>
                        {errors.email?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.email.message}</span>}
                    </label>
                </div>

                <div className='form-control w-full max-w-xs'>
                    <input 
                    type="text" 
                    placeholder='Your Contact Number'
                    className='input input-bordered w-full max-w-xs'
                    {...register('contact', {
                        required: {
                            value: true,
                            message: 'Contact Number is required'
                        }
                    })}
                    />
                    <label className='label'>
                        {errors.contact?.type === 'required' && <span className='label-text-alt text-red-400'>{errors.contact.message}</span>}
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
                <input type="submit" value="SEND"  className='btn bg-red-800 w-full max-w-xs'/>
            </form>
        </div>
    );
};

export default Contact;