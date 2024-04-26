import { color } from 'framer-motion';
import '../footer/Footer.css';
import { Link } from 'react-router-dom';

export default function Footer()
{
    return(
        <div className="fOOTER">
            <div className='Logo'>
            <img src="src/assets/saladLOGO.png" alt="LOGO" />
            </div>

            <div className='links'>
                <section className='LinkSections'>
            <h4>LINKS</h4>
                 <Link id='links' to="/">
                    Home
                 </Link>
                 <Link id='links' to="/Kitchen">
                    Kitchen
                 </Link>
                 <Link id='links'  to="/AboutUs">
                 About Us
                 </Link>
                 <Link id='links' to="/ContactUs">
                 Contact Us
                 </Link>
                </section>

                
                <section  className='LinkCommunication'>
            <h4>Contact Us</h4>
                 <Link id='links' to="/">
                 <img src="src/assets/Location.png" alt="location" /> Lagos 🇳🇬 
                 </Link>
                 <Link id='links' to="/">
                  <img src="src/assets/mail.png" alt="mail" />  gadeleye48@gmail.com
                 </Link>
                 <Link id='links' to="/">
                    <img src="src/assets/Phone.png" alt="phone" /> (+234) 816 344 3676
                 </Link>
                </section>


                <section  className='LinkInputs'>
            <h4>News Letter</h4>
             <input type="text" placeholder='Email'/>
              <button>Submit</button>
                </section>
              
               </div>
              

        </div>
    )
}