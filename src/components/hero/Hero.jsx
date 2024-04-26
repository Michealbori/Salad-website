import "../hero/Hero.css";
import 'animate.css';
import { motion } from "framer-motion";


export default function Hero()
{
    return(
        <div className="hero">
            <div className="hero_Text">
            <h6 className='animate__animated animate__fadeInLeftBig'>Your Favourite Food <br /> Delivered hot & <br /> Fresh</h6>
            <p id="Diet_quotes">I tried every diet in the book.
             I tried some that weren't in the book. I tried eating the book.
            It tasted better than most of the diets.</p>
            <a href="">Order now <motion.img 
                 initial={{ opacity: 0}}
                 animate={{ opacity: 1}}
                 transition={{delay: 1.5, duration: 1}}
            src="src/assets/Arrow.png" alt="" /></a>

            </div>
              

              <div className="hero_img">
                <img src="src/assets/Hero img.png" alt="Hero Food" />
              </div>
        </div>
    )
}