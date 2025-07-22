import React, { useState, useEffect, useRef } from 'react';
import dayjs from 'dayjs'; // Make sure to install dayjs using npm or yarn

export const useCart = () => {
  const [cart, setCart] = useState(()=>{
    const storedCart = localStorage.getItem('cart');
      return storedCart?JSON.parse(storedCart):[];
  });


  useEffect(() => {
    const con=JSON.stringify(cart);
    
      localStorage.setItem('cart', con); // Convert the cart array to string
    
  }, [cart]);

  const addToCart = (productid) => {
    const newCart = [...cart];
    const found = newCart.find((item) => item.productId === productid);

    if (found) {
      found.quantity += 1;
    } else {
      newCart.push({
        productId:productid,
        quantity: 1,
        deliveryId: "1",
        date: dayjs().toISOString(),
        or_id: "1",
        status: "cart"
      });
    }

    setCart(newCart);
    alert("Item added to cart");
  };

    const totalQuantity = cart.reduce((total, item) => total + parseInt(item.quantity, 10), 0);

  const reboot=()=>{
    setCart([]);
  }

  const deliveryOptions = [
      {
        deliveryDay: 7,
        deliveryPrice: 0,
        id: "1"
      },
      {
        deliveryDay: 3,
        deliveryPrice: 4.99,
        id: "2"
      },
      {
        deliveryDay: 1,
        deliveryPrice: 9.99,
        id: "3"
      }
    ];

    const deliveryDate = (cartItem) => {
        let dateString;
        deliveryOptions.forEach((option) => {
          if (option.id === cartItem.deliveryId) {
            const today = dayjs(cartItem.date);
            const deliveryDate = today.add(option.deliveryDay, 'days');
            dateString = deliveryDate.format('dddd, MMMM D');
          }
        });
        return dateString;
      };

      const price = (cartItem,pr) => {
        let dateString;
        deliveryOptions.forEach((option) => {
          if (option.id === cartItem.deliveryId) {
            const ship=((pr.priceCents)*(cartItem.quantity))+(option.deliveryPrice)
            dateString=(ship*1.1).toFixed(2);
          }
        });
        return dateString;
      };

  return {
    cart,
    addToCart,
    totalQuantity,
    reboot,
    deliveryOptions,
    price ,
    deliveryDate
  };
};