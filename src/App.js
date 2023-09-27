import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import Products from './pages/Products';





// import components

import Header from './components/Header';

import Footer from './components/Footer';
import Copyright from './components/Copyright';


const Layout = ()=> {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Copyright />
    </div>
    
  );
};
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {path: '/', element: <Home />}, 
      {path: '/company', element: <Company />}, 
      {path: '/contact', element: <Contact />}, 
      {path: '/partners', element: <Partners />}, 
      {path: '/products', element: <Products />},           

    ],
  },

]);

const App = () => {
  return <div>
    <RouterProvider router={router} />
  </div>;
};


export default App;
