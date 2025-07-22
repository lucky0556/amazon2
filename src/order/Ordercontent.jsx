import { useState,useEffect } from "react";
import "./order-cntent.css"
import dayjs from 'dayjs';
import { useCart } from "../cart/cartFunctions";
import { useNavigate,useLocation   } from 'react-router-dom';

function Ordercontent()
{
    const { cart,reboot,addToCart,deliveryOptions,price,deliveryDate } = useCart();
    const[items,setItems]=useState([])
    const[products,setProducts]=useState([])
    const navigate=useNavigate();
    const location = useLocation();
    const { username } = location.state || {};

    useEffect(()=>{
        async function showorder(){
    try {
        const response = await fetch(`http://localhost:3000/items/${username}`);
        const respons = await fetch('https://supersimplebackend.dev/products');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        setItems(await response.json());
        setProducts(await respons.json());
        
       
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}

    showorder();
    },[])

    

      const trackpage=(id)=>{
        console.log(id);
        navigate('/track', { state: { username: username , id:id} });
      }
    
    return(
        <div>

            <div className="bottom">
            <h1 className="o1">Your order</h1>
            
                {items.map((item,index)=>{
                    const product = products.find((p) => p.id === item.productId)
                    if (!product) {
              return null; // Skip rendering if product not found
            }

                
                    return(
                    <div className="orr" key={index}>
                    <div className="o2">
                <div className="o21">
                    <p className="o22">order placed</p>
                    <p className="o22">{dayjs(item.date).format('dddd, MMMM D')}</p>
                </div>
                
                <div className="021">
                    <p className="o22">Total:</p>
                    <p className="o22">${price(item,product)}</p>
                </div>

            </div>

            <div className="o3">
                <div className="o31">
                    <div className="o-ph">
                        <img className="o-photo" src={product.image}/>
                    </div>
                    <div className="o311">
                        <h1 className="o-h">{product.name}</h1>
                        <p className="0-p">Arriving on {deliveryDate(item)}</p>
                        <p className="o-p">Quantity : {item.quantity}</p>
                        <button className="o-button" onClick={()=>addToCart(product.id)}>
                            Buy again
                        </button>
                    </div>
                    <div className="o311">
                        
                            <button className="o-button1" onClick={()=>trackpage(item.or_id)}>
                                Track package
                            </button>
                            
                        
                    </div>
                </div>
            </div>
               </div>
               
                    )
                    }  )}
            
        </div>
        </div>
    )
}
export default Ordercontent;
