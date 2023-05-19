import React from 'react';

const CategoryCart = ({categoryToy}) => {
    const {_id, category, toyName} = categoryToy;
    return (
        <div>
            <h2>category Tos: {category} </h2>
            <h2>Toy name: {toyName}</h2>
        </div>
    );
};

export default CategoryCart;