import { Link } from "react-router-dom";
import './Drinks.css';
import Footer from '../footer/Footer'




export default function Drinks()
{
    return(
        <div className="tea">

<section id='topper'>
            <Link to="/"> <img src="src/assets/Back.png" alt="back arrow" /> </Link>    
                <h5>Tea menu</h5>
            </section>
            

              <div className="DrinksMenu">

<div className="card">
<img src="src/assets/drinks/FOOD1.jpg" alt=""  style={{width:"100%"}}/>
<h1> Hamburger  </h1>
<p className="price">$19.99</p>
<p>
Ground Beef🥩  <span>||</span>  Onions🧅 <span>||</span>  Egg🥚
       <span>||</span>  Onion soup mix🍲 <span>||</span>  Minced garlic🧄
</p>
<p><Link to="/Drinks"> <button><img id="add" src="src/assets/plus.png" alt="" /> </button></Link></p>
</div>


<div className="card" id="MiddleDrinks">
<img src="src/assets/drinks/FOOD2.webp" alt=""  style={{width:"100%"}}/>
<h1> Meal </h1>
<p className="price">$17.79</p>
<p>Flour <span>||</span>  Onions🧅 <span>||</span>  Mushroom 🍄 <span>||</span> Oregano
       <span>||</span>  Cheese🧀  <span>||</span>  Chili flakes ...</p>
       <p><Link to="/Drinks"> <button><img id="add" src="src/assets/plus.png" alt="" /> </button></Link></p>
       </div>


<div className="card">
<img src="src/assets/drinks/FOOD10.jpg" alt=""  style={{width:"100%"}}/>
<h1> Tea </h1>
<p className="price">$12.56</p>
<p>Ground Beef🥩  <span>||</span>  Onions🧅 <span>||</span>  Egg🥚
       <span>||</span>  Onion soup mix🍲 <span>||</span>  Minced garlic🧄 ...</p>
       <p><Link to="/Drinks"> <button><img id="add" src="src/assets/plus.png" alt="" /> </button></Link></p>
</div>


</div>




<div className="DrinksMenu">

<div className="card">
<img src="src/assets/drinks/FOOD5.webp" alt=""  style={{width:"100%"}}/>
<h1> Hamburger  </h1>
<p className="price">$19.99</p>
<p>
Ground Beef🥩  <span>||</span>  Onions🧅 <span>||</span>  Egg🥚
       <span>||</span>  Onion soup mix🍲 <span>||</span>  Minced garlic🧄
</p>
<p><Link to="/Drinks"> <button><img id="add" src="src/assets/plus.png" alt="" /> </button></Link></p>
</div>


<div className="card" id="MiddleDrinks">
<img src="src/assets/drinks/FOOD8.jpg" alt=""  style={{width:"100%"}}/>
<h1> Meal </h1>
<p className="price">$17.79</p>
<p>Flour <span>||</span>  Onions🧅 <span>||</span>  Mushroom 🍄 <span>||</span> Oregano
       <span>||</span>  Cheese🧀  <span>||</span>  Chili flakes ...</p>
       <p><Link to="/Drinks"> <button><img id="add" src="src/assets/plus.png" alt="" /> </button></Link></p>
       </div>


<div className="card">
<img src="src/assets/drinks/FOOD9.jpg" alt=""  style={{width:"100%"}}/>
<h1> Tea </h1>
<p className="price">$12.56</p>
<p>Ground Beef🥩  <span>||</span>  Onions🧅 <span>||</span>  Egg🥚
       <span>||</span>  Onion soup mix🍲 <span>||</span>  Minced garlic🧄 ...</p>
       <p><Link to="/Drinks"> <button><img id="add" src="src/assets/plus.png" alt="" /> </button></Link></p>
</div>


</div>






<div className="DrinksMenu">

<div className="card">
<img src="src/assets/drinks/FOOD7.jpg" alt=""  style={{width:"100%"}}/>
<h1> Hamburger  </h1>
<p className="price">$19.99</p>
<p>
Ground Beef🥩  <span>||</span>  Onions🧅 <span>||</span>  Egg🥚
       <span>||</span>  Onion soup mix🍲 <span>||</span>  Minced garlic🧄
</p>
<p><Link to="/Drinks"> <button><img id="add" src="src/assets/plus.png" alt="" /> </button></Link></p>
</div>


<div className="card" id="MiddleDrinks">
<img src="src/assets/drinks/FOOD4.jpg" alt=""  style={{width:"100%"}}/>
<h1> Meal </h1>
<p className="price">$17.79</p>
<p>Flour <span>||</span>  Onions🧅 <span>||</span>  Mushroom 🍄 <span>||</span> Oregano
       <span>||</span>  Cheese🧀  <span>||</span>  Chili flakes ...</p>
       <p><Link to="/Drinks"> <button><img id="add" src="src/assets/plus.png" alt="" /> </button></Link></p>
       </div>


<div className="card">
<img src="src/assets/drinks/FOOD11.jpg" alt=""  style={{width:"100%"}}/>
<h1> Tea </h1>
<p className="price">$12.56</p>
<p>Ground Beef🥩  <span>||</span>  Onions🧅 <span>||</span>  Egg🥚
       <span>||</span>  Onion soup mix🍲 <span>||</span>  Minced garlic🧄 ...</p>
       <p><Link to="/Drinks"> <button><img id="add" src="src/assets/plus.png" alt="" /> </button></Link></p>
</div>


</div>

<Footer />



        </div>
      
    )
}