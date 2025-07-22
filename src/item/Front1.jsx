import React, { useState, useEffect } from 'react';
import './Front1.css';
import styles from './front2.module.css';
import { IndianRupee } from 'lucide-react';
import { useCart } from '../cart/cartFunctions';
import { useContext } from "react";
import CounterContext from "../context/CounterContext";

function Front1()
{
    const username = useContext(CounterContext);
    console.log(username);
    const{addToCart}=useCart();

    const [data, setData] = useState(null);
  // State to store any error
  const [error, setError] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch('https://supersimplebackend.dev/products');
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const jsonData = await response.json();
                    setData(jsonData);
                } catch (err) {
                    setError(err.message);
                }
            };

            fetchData();
        }, []);

        if (error) {
            return <div className="error">Error: {error}</div>;
        }

        if (!data) {
            return <div className="loading">Loading...</div>;
        }


    return(
        <div className={styles.bottom}>
            {data.map((d,index)=>(
            <div className="block" key={d.id}>
                <div className="photo">
                    <img className="photo-logo" src={`./${d.image}`}/>
                </div>

                <div className="info">
                    <p className="detail">{d.name}</p>
                    <div className="rate">
                        <img className="star" src={`./images/ratings/rating-${d.rating.stars*10}.png`}/>
                        <p className="number">{d.rating.stars}</p>
                    </div>
                    <p className="price"><strong><IndianRupee className='rupee'/>{d.priceCents}</strong></p>
                    
                      <button className="add" onClick={()=>addToCart(d.id)}>Add to cart</button>
                </div>
            </div>
            ))}
            </div>
    )
}
export default Front1;