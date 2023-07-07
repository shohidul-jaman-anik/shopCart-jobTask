import React from 'react';
import { Link } from 'react-router-dom';
import login from "../../../Asset/Frame 3.svg";
import "./header.css";

const Header = () => {
    return (
        <div className='header container'>
            <nav className='flex justify-between '>
                <h1><Link to="/home">shopcart</Link></h1>
                <img src={login} alt="" />
            </nav>
          
        </div>
    );
};

export default Header;