import React, { useEffect, useState } from 'react';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputValue.trim() !== '') {
      fetch(
        `https://api.hiring.masterkey.tech/api/v1/products/search?search=${inputValue}`
      )
        .then((res) => res.json())
        .then((data) => {
            console.log(data.products[0]?.productData ,"search")
          setProducts(data.products[0]?.productData || []);
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
    } else {
      setProducts([]);
    }
  }, [inputValue]);

  return (
    <div className="container">
      <form className="flex justify-between my-5">
        <p>Dhaka, 1212</p>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <input type="button" value="Search" />
      </form>

      {inputValue.trim() !== '' && (
        <div className="productsContainer">
          {products.map((product) => (
            <div className="nftCard" key={product._id}>
              <div>
                <img src={product.product_img} alt="" />
                <h5 className="productTitle">{product.product_name}</h5>
                <div className="flex justify-between items-center pt-4 pb-6">
                  <p className="Eth">{product.product_price}</p>
                  <p className="text-red-400">{product.product_discount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
