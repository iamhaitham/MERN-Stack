import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

const ProductsList= props => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data));
    }, [])

    const removeFromDom = productId => {
        console.log(products);
        setProducts(products.filter(product => product._id !== productId));
        console.log(products);
    }

    return (
        <div>
            <h1>All Products:</h1>
            {props.products.map((product, idx)=>{
                return <div key={idx}>
                <Link to={`/api/products/${product._id}`}><p>{product.title}</p></Link>
                <Link to={`/${product._id}/edit`}>Edit</Link> 
                <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                </div>
            })}
        </div>
    )
}

export default ProductsList;