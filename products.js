import { useEffect, useState } from 'react';
import axios from "axios";
import './products.css';

function Products() {
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?sort=desc").then(response => {
      setProducts(response.data);
    });
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const addToCart = (product) => {
    const index = cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[index].count < 10) {
        updatedCart[index].count += 1;
        setCart(updatedCart);
      } else {
        alert("Maximum quantity reached for this item.");
      }
    } else {
      setCart(prevCart => [...prevCart, { ...product, count: 1 }]);
    }
    alert("Item added to cart successfully!");
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const decreaseQuantity = (id) => {
    const index = cart.findIndex(item => item.id === id);
    const updatedCart = [...cart];
    if (updatedCart[index].count > 1) { 
      updatedCart[index].count -= 1;
      setCart(updatedCart);
    } else {
      alert("Minimum quantity reached for this item.");
    }
  };

  const increaseQuantity = (id) => {
    const index = cart.findIndex(item => item.id === id);
    const updatedCart = [...cart];
    if (updatedCart[index].count < 10) { 
      updatedCart[index].count += 1;
      setCart(updatedCart);
    } else {
      alert("Maximum quantity reached for this item.");
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <h1>Products</h1>
      <input
        id='searchInput'
        type='text'
        placeholder='Search'
        value={searchInput}
        onChange={handleSearchInput}
      />
      <div id='main'>
        {filteredProducts.map(product =>
          <ul key={product.id} id='ul'>
            <li id='li'><h2>{product.title}</h2></li>
            <li id='li'><img src={product.image} style={{ width: "150px" }} alt={product.title} /></li>
            <li id='li'><h2>PRICE: {product.price}</h2></li>
            <button onClick={() => addToCart(product)} id='Button'>Add to cart</button>
          </ul>
        )}
      </div>
      <div id='main22'>
        {cart.map(item =>
          <ul key={item.id} id='pola'>
            <li id='li22'>{item.id} ITEMNAME: {item.title} AMOUNT: {item.price} QUANTITY: {item.count}</li>
            <button onClick={() => decreaseQuantity(item.id)} id='Button'>-</button>
            <button onClick={() => increaseQuantity(item.id)} id='Button'>+</button>
            <button onClick={() => removeFromCart(item.id)} id='Button'>REMOVE</button>
          </ul>
        )}
      </div>
    </>
  );
}

export default Products;
