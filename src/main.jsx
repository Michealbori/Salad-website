import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import About from './components/aboutUs/Aboutus.jsx';
import ConatctUs from './components/contactUs/Contact.jsx';
import Error404 from './components/404/404.jsx';
import Footer from './components/footer/Footer.jsx';
import Meal from './components/meal/Meal.jsx';
import Junk from './components/junks/Junk.jsx';
 import Drinks from './components/drinks/Drinks.jsx';
import MenuList from './components/menuList/MenuList.jsx';

const router = createBrowserRouter([

{
  path: '/',
  element: <App />,
  errorElement: <Error404 />
},

{
  path: '/Header',
  element: <Header />,
  errorElement: <Error404 />
},

{
  path: '/AboutUs',
  element: <About />,
  errorElement: <Error404 />
},

{
  path: '/ContactUs',
  element: <ConatctUs />,
  errorElement: <Error404 />
},

{
  path: '/Footer',
  element: <Footer />,
  errorElement: <Error404 />
},

{
   path: '/Meal',
   element: <Meal />,
   errorElement: <Error404 />
},

{
   path: '/Junk',
   element: <Junk />,
   errorElement: <Error404 />
},

{
  path: '/Drinks',
  element: <Drinks />,
  errorElement: <Error404 />
},

{
   path: '/MenuList',
   element: <MenuList />,
   errorElement: <Error404 />
}

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
