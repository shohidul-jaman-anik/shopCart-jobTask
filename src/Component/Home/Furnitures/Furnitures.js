import React, { useEffect, useState } from 'react';
import "./Furnitures.css"

const Furnitures = () => {
    const [furnitures, setFurnitures] = useState([])

    useEffect(() => {
        fetch("https://api.hiring.masterkey.tech/api/v1/products")
            .then(res => res.json())
            .then(data => {
                setFurnitures(data.products[0].productData.slice(17, 21))
            })
    }, [])
    return (
          <div className='container'>
            <h2 className='mt-10 mb-5'>Deals on furniture</h2>
            <div class="furnitureComponent ">
                {
                    furnitures?.map(product =>
                        <div className='nftCard'>
                            <div>
                                <img src={product.product_img} alt="" />
                                <h5 className='productTitle'>{product.product_name}</h5>
                                <div className='flex justify-between items-center pt-4 pb-6'>
                                    <p className='Eth'>{product.product_price}</p>
                                    <p className='text-red-400'>{product.product_discount}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Furnitures;