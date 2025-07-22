import React, { useEffect, useState } from 'react';
import "./track.css";
import { useCart } from "../cart/cartFunctions";
import styles from './track1.module.css'
import { useNavigate ,useLocation  } from 'react-router-dom';


const Trackcontent = () => {
  const navigate=useNavigate();
    const { cart, reboot, addToCart, deliveryOptions, price, deliveryDate } = useCart();
    const [items, setItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const { username,id } = location.state || {};

    useEffect(() => {
        async function showorder() {
            try {
                const itemsResponse = await fetch(`http://localhost:3000/items/${username}`);
                const productsResponse = await fetch('https://supersimplebackend.dev/products');

                if (!itemsResponse.ok || !productsResponse.ok) {
                    throw new Error(`HTTP error! status: ${itemsResponse.status}`);
                }

                const itemsData = await itemsResponse.json();
                const productsData = await productsResponse.json();

                setItems(itemsData);
                setProducts(productsData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        }
        
        showorder();
        
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
        
    }
    console.log(username);
    const item = items.find((p) => p.or_id === id);
    const product = item ? products.find((p) => p.id === item.productId) : null;

    if (!item || !product) {
        return <div>Order not found</div>;
        
    }

     let statusClass = '';
    if (item.status === "booked") {
        statusClass = 'ordered';
    } else if (item.status === "shipped") {
        statusClass = 'shipped';
    } else if (item.status === "delivered") {
        statusClass = 'delivered';
    }

    const orderpage=()=>{
        navigate('/orders', { state: { username: username } })
      }

    return (
        <div>
            <div className="bottom">
                
                    <p className="view" onClick={orderpage}>View all orders</p>
              
                <div className="bot2">
                    <h1 className="arri">Arriving on {deliveryDate(item)}</h1>
                    <p className="tex">{product.name}</p>
                    <p className="tex">Quantity: {item.quantity}</p>
                    
                    <img className={styles.pho} src={`/${product.image}`} />
                    <p className='price'>Total price : ${price(item,product)}</p>
                    <div className="track">
                        <p className="t-text">Preparing</p>
                        <p className="t-text1">Shipped</p>
                        <p className="t-text2">Delivered</p>
                    </div>
                    <div className="box">
                        <div className={statusClass}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trackcontent;