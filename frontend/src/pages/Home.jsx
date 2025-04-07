//eslint-disable-next-line
import React, {useEffect, useState} from "react";
import Product from "../components/products";
import Nav from "../components/nav";

export default function Home() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true); //for loading state
    const [error, setError] = useState(null); // for error handling

useEffect(() => {
    fetch("http://localhost:8000/api/v2/product/get-products").then((res) => {
        if(!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    })
    .then((data) => {
        console.log("Api response", data);
        setProduct(data.product);
        setLoading(false);
    })
    .catch((err) => {
        console.error("Error fetching products:",err);
        setError(err.message);
        setLoading(false);
    });
}, []);

if(loading) {
    return <div className="text-center text-white mt-10">Loading products...</div>
}

if(error) {
    return <div className="text-center text-red-500 mt-10">Error: 
    {error}</div>
}

return (
    <>
    <Nav/>
    <div className="1-full min-h-screen bg-gradient-to-r from-green-800 via-blue-700 to-red-800 px-6 py-6">
        <h1 className="text-3xl text-center text-white py-6">Product Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
            {product.map((product) => (
                <Product key={product._id} {...product}/>
            ))}
        </div>
    </div>
    </>
);
    
}