import React from 'react';
import ratings from "../../../Asset/Component 3.svg";
import leftImg from "../../../Asset/Rectangle 4.svg";
import rightImg from "../../../Asset/rightMbl.svg";
import "./Reviews.css";


const Reviews = () => {
    return (
        <div className='reviewContainer container'>

            <div class="flex">
                <img alt="ecommerce" class=" " src={leftImg} />
                <div class="w-full lg:py-6 mt-6 lg:mt-0" >

                    <h2 class="title-font font-medium mb-1" >2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 128GB)</h2>

                    <div class="py-5">
                        <p>you bought it at the best price </p>
                        <span class="title-font font-medium text-2xl text-gray-900">₹99,900.00</span>

                    </div>
                    <img src={ratings} alt="" srcset="" />
                </div>
            </div>


            <div class="flex">
                <img alt="ecommerce" class=" " src={rightImg} />
                <div class="w-full lg:py-6 mt-6 lg:mt-0" >

                    <h2 class="title-font font-medium mb-1" >iPhone 14 Pro Max with Apple M1 chip (6.7-inch/17.0 cm, 128GB)</h2>

                    <div class="py-5">
                        <p>you bought it at the best price </p>
                        <span class="title-font font-medium text-2xl text-gray-900">₹1,39,900.00</span>

                    </div>
                    <img src={ratings} alt="" srcset="" />
                </div>
            </div>

        </div>
    );
};

export default Reviews;