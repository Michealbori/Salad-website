import '../hero2/Hero2.css';



export default function Hero2(){
     return (
        <div className="Hero">
            <div className="HeroImg">
               <img src="src/assets/Diet.png" alt="Diet Img" />
            </div>

            <div className="HeroText">
                <p id='about'>About Us</p>
                <h6>Food is an <span id="important">Important</span> Part <br /> Of Abundant <span>Diet</span> </h6>
                <p>A diet is when you watch what you eat and wish you could eat what you watch.</p>
                <div className="buttons">
                    <a id='first' href="">Learn More</a>
                    <a id='second' href=""> <img src="src/assets/button-play.svg" alt="" /> Watch Video</a>
                </div>
            </div>
        </div>
     )
}