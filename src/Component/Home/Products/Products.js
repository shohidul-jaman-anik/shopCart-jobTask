import React, { useEffect, useState } from 'react';
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchClicked, setSearchClicked] = useState(false);

  useEffect(() => {
    if (searchClicked) {
      const encodedQuery = encodeURIComponent(inputValue.trim());
      const searchURL = `https://api.hiring.masterkey.tech/api/v1/products/search?search=${encodedQuery}`;

      fetch(searchURL)
        .then(res => res.json())
        .then(data => {
          if (data.success && data.products.length > 0) {
            const result = data.products[0].Result;
            setProducts(result);
          } else {
            setProducts([]);
          }
        })
        .catch(error => {
          console.error('Error fetching products:', error);
          setProducts([]);
        })
        .finally(() => {
          setSearchClicked(false);
        });
    }
  }, [searchClicked]);

  const handleSearch = () => {
    setSearchClicked(true);
  };

  return (
    <div className='container'>
      <div className='flex justify-between my-5'>
        <p>Dhaka, 1212</p>
        <div className="flex">
          <input
            onChange={(e) => setInputValue(e.target.value)}
            className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button onClick={handleSearch} className="ml-2 bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Search
          </button>
        </div>
      </div>

      <div>
        <div className="productsContainer">
          {products.length > 0 ? (
            products.map(product => (
              <div className='nftCard' key={product._id}>
                <div>
                  <img src={product.product_img} alt="" />
                  <h5 className='productTitle'>{product.product_name}</h5>
                  <div className='flex justify-between items-center pt-4 pb-6'>
                    <p className='Eth'>{product.product_price}</p>
                    <p className='text-red-400'>{product.product_discount}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
