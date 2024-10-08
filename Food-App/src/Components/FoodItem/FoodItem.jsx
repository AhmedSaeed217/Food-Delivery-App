/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';

export default function FoodItem({id,name,description,price,image}) {
    const[itemCount,setItemCount]=useState(0); 


  return <>
  <div className='food-item'>
    <div className="food-item-img-box">
        <img src={image} alt="" className="food-item-img" />

        {!itemCount?<img className='add-item' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white}/>:<div className='food-item-counter'>
        <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
        <p>{itemCount}</p>
        <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
        </div>  }

    </div>
    <div className="food-item-info">
        <div className="name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
    </div>


  </div>
  
  
  
  
  </>
}
