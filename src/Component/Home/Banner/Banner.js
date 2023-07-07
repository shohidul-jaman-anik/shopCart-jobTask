import React, { useEffect, useState } from 'react';
import "./Banner.css";


const Banner = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://api.hiring.masterkey.tech/api/v1/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data.products[0].productData.slice(0, 6))
            })
    }, [])
    return (
        <div id="banner" class="bannerContainer container ">

            <div class="py-20">
                <h1 class="BannerHeading">We picked some cool things for you!</h1>

            </div>

            <div class="bannerRightSide">
                {
                    products?.map(product =>
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

export default Banner;