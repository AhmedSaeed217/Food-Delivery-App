import './ExploreMenu.css'
import {menu_list} from '../../assets/assets';
export default function ExploreMenu({category,setCategory}) {
  return <div className='explore-menu'>
    <h1>Explore our menu</h1>
    <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.</p>
    <div className="explore-menu-list">
        {menu_list.map((item,index)=> <div onClick={()=>{
           setCategory(item.menu_name);
            console.log(category)
            
        }}
        className='menu-list-item' key={index}>
                <img className={category===item.menu_name?'active':''} src={item.menu_image} alt="" />
                <p className='menu-list-item-name'>{item.menu_name}</p>
            </div>
        )}
    </div>

  </div>
}
