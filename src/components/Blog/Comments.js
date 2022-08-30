import React from 'react';

const Comments = ( {com, refetch} ) => {
    const {name, email, comment, img} = com;
    return (
        <div>
            {/* <img className='rounded' height={40} width={40} src={img} alt="" />
            <div>
                <p>{name}</p>
                <p>{comment}</p>
            </div> */}
        </div>
    );
};

export default Comments;