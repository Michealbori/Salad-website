import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav';
import Hero2 from './components/hero2/Hero2';
import Work from './components/howitWorks/Works';
import Menu from './components/menuHeader/Menu';
 import MenuList from './components/menuList/MenuList';
import Footer from './components/footer/Footer';
import Login from './components/account/login/Login';
// import SignUp from './components/account/signUp/Signup';

export default function App(){
  return (
    <div className="App">

       <Header />
       <Nav />
       <Hero2 />
       <Work />
      <Menu />
      <MenuList />
      <Footer />
      <Login />
    </div>
  )
}
