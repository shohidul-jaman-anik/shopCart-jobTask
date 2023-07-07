import React, { useEffect, useState } from 'react';
import "./SearchItems.css";


const SearchItems = () => {
    const [searchItems, setSearchItems] = useState([])

    useEffect(() => {
        fetch("https://api.hiring.masterkey.tech/api/v1/products")
            .then(res => res.json())
            .then(data => {
                setSearchItems(data.products[0].productData.slice(11, 17))
            })
    }, [])
    return (
        <div className='container'>
             <h2 className='mt-10 mb-5'>Your Searched items</h2>
            <div class="searchItemComponent ">
                {
                    searchItems?.map(product =>
                        <div className='nftCard'>
                            <div>
                                <img src={product.product_img} alt="" />
                                
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default SearchItems;