import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const Detail= props => {
    const [product, setProduct] = useState({})
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data))
    }, [])

    const deleteProduct = (e,productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                navigate("/api/products");
            })
    }
    return (
        <>
            <div>
                <p>Title: {product.title}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
            </div>
            <Link to={"/"+ product._id + "/edit"}>
                Edit
            </Link>
            <button onClick={(e)=>deleteProduct(e,product._id)}>Delete</button>
    </>
    )
}
export default Detail;