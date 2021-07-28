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
    return (
        <div>
           <ProductManager/>
           <hr/>
           {loaded && <ProductsList products={products}/>}
        </div>
    )
}
export default Main;