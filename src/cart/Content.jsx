import { useState, useEffect } from "react";
import styles from "./Content1.module.css";
import "./Content.css";
import { useCart } from "./cartFunctions";
import dayjs from 'dayjs';
import { useNavigate,useLocation  } from 'react-router-dom';

function Content() {
  const { cart,reboot,deliveryOptions } = useCart();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(dayjs().format('dddd, MMMM D')); // Default selected date
  const[items,setItems]=useState(0)
  const[ship,setShip]=useState(0);
  const navigate = useNavigate();
  const location = useLocation();
    const { username } = location.state || {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://supersimplebackend.dev/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setProducts(jsonData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  

  const deliveryDate = (cartItem) => {
    let dateString;
    deliveryOptions.forEach((option) => {
      if (option.id === cartItem.deliveryId) {
        const today = dayjs();
        const deliveryDate = today.add(option.deliveryDay, 'days');
        dateString = deliveryDate.format('dddd, MMMM D');
      }
    });
    return dateString;
  };

  const handleDeliveryChange = (productId, deliveryId) => {
  const updatedCart = cart.map(item =>
    item.productId === productId ? { ...item, deliveryId } : item
  );

  // Assuming `setCart` is available from `useCart()`
  localStorage.setItem("cart", JSON.stringify(updatedCart));
   window.location.reload();// Or trigger re-render another way
};

  useEffect(() => {
  let totalItems = 0;
  let totalShip = 0;

  cart.forEach((d) => {
    const product = products.find((p) => p.id === d.productId);
    if (product) {
      totalItems += (product.priceCents * d.quantity) / 100;
      const delivery = deliveryOptions.find(opt => opt.id === d.deliveryId);
      if (delivery) {
        totalShip += delivery.deliveryPrice;
      }
    }
  });

  setItems(totalItems);
  setShip(totalShip);
}, [cart, products]);

    const handleDelete = (productId) => {
  const updatedCart = cart.filter(item => item.productId !== productId);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  window.location.reload(); // or use state update to trigger re-render
};

      const handleUpdate = (productId, newQuantity) => {
      cart.map(item => {
    if (item.productId === productId) {
      item.quantity=newQuantity
    }

  });

  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.reload(); // Optional: replace with setCart() if using state
};

  const placeorder=()=>{
    const isconfirmed=confirm("are you sure!");
    if(isconfirmed)
    {
      cart.map((op)=>(
        op.date=dayjs(),
        op.status="booked",
        op.or_id=Math.random().toString(36).substr(2, 9)
      ))

      bookitem();
      reboot();
      alert("the items are been booked!");
      navigate('/orders', { state: { username: username } });
    }
  }

  async function bookitem() {
  try {
    const data = {user:username,newItems: cart };

    const response = await fetch('http://localhost:3000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const newItem = await response.json();
    console.log(newItem);
  } catch (error) {
    console.error('Error adding item:', error);
  }
}

  return (
    <div>
      <h1 className="sentence">Review your order</h1>
      <div className={styles.layer}>
        <div className={styles.bottom}>
          {cart.map((d, index) => {
            const product = products.find((p) => p.id === d.productId);

            if (!product) {
              return null; // Skip rendering if product not found
            }

            return (
              <div key={index} className="b-left">
                <div>
                <h1 className="first">Delivery date: {deliveryDate(d)}</h1>
                </div>
                <div className="second">
                  <div className="imm">
                  <img className="b-photo" src={`./${product.image}`} alt={product.name} />
                  </div>
                  <div className="row2">
                    <h1 className="row21">{product.name}</h1>
                    <h1 className="row22">${(product.priceCents / 100).toFixed(2)}</h1>
                    <div className="row66">
                      <p className="row24">Quantity {d.quantity}</p>
                      <p className="row26" onClick={()=>handleDelete(d.productId)}>delete</p>
                      <div className="row25">
                        <select className='select1' onChange={(e) => handleUpdate(d.productId, e.target.value)}>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </select>
                      </div>
                      
                    </div>
                  </div>
                  <div className="row2">
                    <h1 className="row31">Choose Delivery Date</h1>
                    <div className="row32">
                      <div className="row33">
                                            {deliveryOptions.map((option, idx) => {
                        const calculatedDate = dayjs().add(option.deliveryDay, 'days').format('dddd, MMMM D');
                        return (
                          <div className="grp" key={option.id}>
                            <input
                              type="radio"
                              id={`option-${d.productId}-${option.id}`}
                              name={`deliveryDate-${d.productId}`} // unique name per item
                              className="selector1"
                              value={option.id}
                              checked={d.deliveryId === option.id}
                              onChange={() => handleDeliveryChange(d.productId, option.id)}
                            />
                            <label htmlFor={`option-${d.productId}-${option.id}`} className="selector1-label">
                              {calculatedDate}-- ${option.deliveryPrice.toFixed(2)}
                            </label>
                          </div>
                        );
                      })}

                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      

      <div className="last">
        <h1 className="last1">Order Summary</h1>
        <div className="last2">
          <div className="last3">
            <p className="last622">Items(3)</p>
            <p className="last6">shipping & handling</p>
            <p className="last6">total before tax</p>
            <p className="last6">Estimated tax(10%)</p>
            <h1 className="last5">order total</h1>
          </div>
          <div className="last12">
           <p className="last7">${items.toFixed(2)}</p>
          <p className="last7">${ship.toFixed(2)}</p>
          <p className="last7">${(items + ship).toFixed(2)}</p>
          <p className="last7">${((items + ship) * 0.1).toFixed(2)}</p>
          <h1 className="last5">${((items + ship) * 1.1).toFixed(2)}</h1>

          </div>
        </div>
        <button className="l-button" onClick={()=>{placeorder()}}>place your order</button>
      </div>
      </div>
    </div>
  );
}

export default Content;