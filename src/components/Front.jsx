import React, { useState } from 'react';
import './Front.css';
import image1 from '../assets/amazon-logo-white.png';
import image2 from '../assets/icons/search-icon.png';
import image3 from '../assets/icons/cart-icon.png';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCart } from "../cart/cartFunctions";
import { useLocation } from 'react-router-dom';
import { useContext } from "react";
import CounterContext from "../context/CounterContext";

function Front() {
    const { cart, totalQuantity } = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isAddressFormOpen, setIsAddressFormOpen] = useState(false);
    const[address,setAddress]=useState("bengaluru,560057");
    const username = useContext(CounterContext);

    const handleNavigateToCart = () => {
        navigate('/cart', { state: { username: username } });
    };

    const handleNavigateToOrders = () => {
        navigate('/orders', { state: { username: username } });
    };

    const handleNavigate = () => {
        navigate('/', { state: { username: username } });
    };

    const handleNavigatetologin = () => {
        navigate('/login');
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleAddressFormToggle = () => {
        setIsAddressFormOpen(!isAddressFormOpen);
    };
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    return (
        <div>
            <div className="header">
                <div className="logo bo" onClick={handleNavigate}>
                    <img src={image1} alt='amazon-logo' className='image1' />
                </div>
                <div className="location bo">
                    <div className='loc'>
                        <FaMapMarkerAlt size={25} />
                    </div>
                    <div>
                        <p className='hii'>Deliver to {address}</p>
                        <p className='hii' onClick={handleAddressFormToggle}><strong>Update Location</strong></p>
                        {isAddressFormOpen && (
                            <div className="address-form">
                                <form id="addressForm" onSubmit={()=>setIsAddressFormOpen(false)}>
                                    <input type="text" id="address" name="address" placeholder="Enter new address" required onChange={handleAddressChange} />
                                    <button type="submit">Update</button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
                <div className='select'>
                    <select className='select1'>
                        <option value="1">All</option>
                        <option value="2">Pharmacy</option>
                        <option value="3">Fresh</option>
                        <option value="4">Mobiles</option>
                        <option value="5">Games</option>
                        <option value="6">Sports</option>
                        <option value="7">Prime</option>
                        <option value="8">Alexa</option>
                        <option value="9">Fashion</option>
                        <option value="10">Shoes</option>
                    </select>
                </div>
                <div className="search">
                    <input placeholder="search" type="text" className='search-box' />
                </div>
                <div className="search-logo">
                    <img src={image2} alt='search-icon' className='image2' />
                </div>
                <div className="login bo" onClick={handleDropdownToggle}>
                    <p>Hello,</p><p> {username ? username : "sign up"}</p>
                    {isDropdownOpen && (
                        <div className='dropdown'>
                            <p className='dropdown-item' onClick={handleNavigatetologin}>Logout</p>
                        </div>
                    )}
                </div>
                <div className="return bo" onClick={handleNavigateToOrders}>
                    <p className='ret1'>Return</p>
                    <p className='ret1'><strong>& Orders</strong></p>
                </div>
                <div className="cart" onClick={handleNavigateToCart}>
                    <img src={image3} alt='cart-icon' className='image3' />
                    <p className='num'>{totalQuantity}</p>
                </div>
                <div className='cart1'>
                    <p className='cart1'><strong>cart</strong></p>
                </div>
            </div>
        </div>
    );
}

export default Front;

