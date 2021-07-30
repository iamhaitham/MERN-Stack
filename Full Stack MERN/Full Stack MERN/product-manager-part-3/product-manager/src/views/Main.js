import React, { useEffect, useState } from 'react';
import ProductManager from '../components/ProductManager';
import ProductsList from '../components/ProductsList';
import axios from 'axios';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            });
    },[])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    return (
        <div>
           <ProductManager/>
           <hr/>
           {loaded && <ProductsList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}
export default Main;