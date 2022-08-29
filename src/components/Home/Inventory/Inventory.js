import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Inventory = ( {inventory} ) => {
    const {_id, name, img, price, quantity} = inventory;

    const navigate = useNavigate();
    const navigateToDetail = _id => {
        navigate(`/allinventories/${_id}`)
    }

    const handleClick= () => {
      console.log('clicked')
    }
    return (
        <div className="card w-96 glass" id='inventory'>
  <figure>
    <img id='img1' src={img} alt="SPICE" />
    </figure>
    <div className="card-body items-center text-center">
    <h2 className="card-title text-red-300 font-bold text-2xl py-2">{name}</h2>
    <p>
    <div className="rating rating-md">
  <input type="radio" onChange={handleClick} name="rating-6" className="mask mask-star bg-orange-400" checked={true}/>
  <input type="radio" name="rating-6" className="mask mask-star bg-orange-400"  />
  <input type="radio" name="rating-6" className="mask mask-star bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star bg-orange-400" />
</div>
    </p>
    <h2 className="card-title text-red-500 py-2">{price} tk</h2>
    <h2 className="card-title text-green-500 py-2">Stock: {quantity} kg</h2>
    <div className="card-actions">
      <Link to={`/allinventories/${_id}`}><button onClick={() => navigateToDetail(_id)} className="btn bg-red-900">UPDATE</button></Link>
    </div>
  </div>
</div>
    );
};

export default Inventory;