import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const ProductsList= props => {
    return (
        <div>
            <h1>All Products:</h1>
            {props.products.map((product, idx)=>{
                return <Link to={`/api/products/${product._id}`}><p key={idx}>{product.title}</p></Link>
            })}
        </div>
    )
}

export default ProductsList;