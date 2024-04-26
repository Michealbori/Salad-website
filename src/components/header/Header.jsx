
import '../header/Header.css';
import 'animate.css';
import { motion } from "framer-motion";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Hero from '../hero/Hero';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
       
      <div className="header">

      
 <Navbar collapseOnSelect expand="lg" className='Navbar'>
      <Container>
        <Navbar.Brand href="#home"><img className='animate__animated animate__bounceInUp' src="src/assets/saladLOGO.png" alt="Art.ai LOGO" /></Navbar.Brand>
           <Navbar.Toggle src="src/Accets/menuToggle.png" />       

         {/* <Navbar.Toggle /> */}

        <Navbar.Collapse id="responsive-navbar-nav">

            {/* Center */}

          <Nav className="me-auto justify-content-center flex-grow-1 pe-3">
            <Nav.Link href="#features" id='navDesign'> <motion.b
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{delay: 1.5, duration: 1}}
            > <Link id='link' to="/">Home</Link> </motion.b></Nav.Link>
            <Nav.Link href="#pricing" id='navDesign'> <motion.b
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            transition={{delay: 1.5, duration: 1}}
            >  <Link id='link' to="/MenuList">Account's</Link> </motion.b></Nav.Link>
          </Nav>

           {/* Flex End */}
           
          <Nav>
            <Nav.Link href="#deets" id='navDesign'> <motion.b
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{delay: 1.5, duration: 1}}
            > <Link id='link' to="/AboutUs"> About Us </Link></motion.b></Nav.Link>
            <Nav.Link href="#deets"> <motion.b
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{delay: 1.5, duration: 1}}
            > <Link id='link' to="/ContactUs"> Contact Us </Link></motion.b></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
               <motion.b
                   initial={{ opacity: 0}}
                   animate={{ opacity: 1}}
                   transition={{delay: 1.5, duration: 1}}
               > <img src="src/assets/cart.svg" alt="cart" /> </motion.b> <motion.sup
               initial={{ opacity: 0}}
               animate={{ opacity: 1}}
               transition={{delay: 1.5, duration: 1}}
               >0</motion.sup>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    

    {/* HERO SECTION */}

<Hero />
    
    </div>
    )
}