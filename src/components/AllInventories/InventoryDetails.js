import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const InventoryDetails = () => {
    const { inventoryId } = useParams();
    const [product, setProduct] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/spice/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [inventoryId, product, product.quantity])

    //add quantity
    const UpdateQuantity = event => {
        event.preventDefault();

        const stock = parseInt(event.target.quantity.value);
        if (stock < 0) {
            alert('Enter positive number');
        }
        else {
            const previousQuantity = parseInt(product?.quantity);
            const quantity = {
                quantity: previousQuantity + stock
            }

            const url = `http://localhost:5000/spice/${product._id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(quantity)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        event.target.reset();
                    }
                })
        }
    }
    // //delivery
    const handleDelivery = () => {
        const quantity = {
            quantity: product.quantity - 1
        }

        const url = `http://localhost:5000/spice/${product._id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(quantity)
        })
            .then(res => res.json())
    }


    return (
        <div className="hero min-h-screen shadow-5xl" id='signLog'>
            <div className="hero-content flex-col lg:flex-row">
                <img src={product.img} className="max-w-sm rounded-lg shadow-5xl mr-28" alt='' />
                <div>
                    <h1 className="text-5xl font-bold text-red-400">{product.name}</h1>
                    <p className="text-2xl font-semibold text-red-300 py-2">Price: {product.price} tk</p>
                    <p className="text-2xl font-semibold text-red-300 py-2">Quantity: {product.quantity} kg</p>
                    <form onSubmit={UpdateQuantity}>
                        <input type="number" name="quantity" placeholder='Quantity' className='input input-bordered h-8 w-28' required />
                        <button className='btn btn-sm bg-red-800 ml-3'> <input type="submit" value="STOCK" /></button>
                    </form>
                    <button onClick={handleDelivery} className="btn bg-red-800 mt-5">DELIVERY</button>
                    <Link to='/manageInventory'><button className='btn bg-red-800 my-5 ml-10'>MANAGE INVENTORY</button></Link>

                </div>
            </div>
        </div>
    );
};

export default InventoryDetails;