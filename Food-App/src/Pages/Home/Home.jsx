import { useState } from 'react';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import Hero from '../../Components/Hero/Hero';
import './Home.css';
import Food from '../../Components/Food/Food';
export default function Home() {
const[category,setCategory]=useState('all');

return <div>

    <Hero/>
    <ExploreMenu category={category} setCategory={setCategory}/>
    <Food category={category}/>


</div>
}
