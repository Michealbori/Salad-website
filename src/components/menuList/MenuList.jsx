import { Link } from "react-router-dom";
import '../menuList/MenuList.css';


export default function MenuList()
{
    return(
        <div>

{/* <section id='topper'>
            <Link to="/"> <img src="src/assets/Back.png" alt="back arrow" /> </Link>    
                <h5>Tea menu</h5>
            </section> */}
            







            <div className="Menu">


                            <div className="card" id="hambuger">
    <img src="src/assets/fastfood/FOOD1.png" alt=""  style={{width:"100%"}}/>
    <h1>FastFood</h1>
    <p className="price"></p>
    <p>Hamburger🍔<span>||</span>  Pizza🍕  <span>||</span>  Cake🥮   ...</p>
    <p><Link to="/Junk"> <button><span id="add">CheckOut</span> </button></Link></p>
</div>
           
        


<div className="card" id="menuDesign1">
    <img src="src/assets/meal/FOOD9.jpg" alt=""  style={{width:"100%"}}/>
    <h1> Dish </h1>
    <p className="price"></p>
    <p>Rice 🍙  <span>||</span>  Noodle🍜 <span>||</span>  Spaghetti🍝 <span>||</span> Soup🍲
    ...</p>
     <p><Link to="/Meal"> <button> <span id="add">CheckOut</span>  </button></Link></p>
</div>


<div className="card">
    <img src="src/assets/drinks/FOOD1.jpg" alt=""  style={{width:"100%"}}/>
    <h1> Drinks </h1>
    <p className="price"></p>
    <p>Red win  <span>||</span>  Smoothie  <span>||</span>  Chocolate Drink
      ...</p>
  <p><Link to="/Drinks"> <button> <span id="add">CheckOut</span> </button></Link></p>
</div>


</div>

</div>

    )
}