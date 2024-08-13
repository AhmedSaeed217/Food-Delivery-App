// import React from "react";
import './Navbar.css';
import {assets} from '../../assets/assets';
import { useState } from 'react';
export default function Navbar() {

const [activeLink,setActiveLink]=useState('home');



  return <>

<div className="navbar">

    <div className="left-navbar">
        <img src={assets.logo} className="logo" alt="" />
    </div>
    <div className="center-navbar">
        <ul className="navbar-menu">
            <li onClick={()=>setActiveLink('home')}
             className={activeLink==='home'?"active":''}>Home</li>
            <li onClick={()=>setActiveLink('menu')}
            className={activeLink==='menu'?"active":''}>Menu</li>
            <li onClick={()=>setActiveLink('mobileapp')}
             className={activeLink==='mobileapp'?"active":''}>Mobile-app</li>
            <li onClick={()=>setActiveLink('contact')}
            className={activeLink==='contact'?"active":''}>Contact Us</li>
        </ul>
    </div>
    <div className="right-navbar">
        <div className="search-icon">
            <img src={assets.search_icon} alt="" />
        </div>
        <div className="cart-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="cart-items-number">0</div>
        </div>
        <div className="singup-button">
            <button>Signup</button>
        </div>
    </div>






</div>


  </>
}
