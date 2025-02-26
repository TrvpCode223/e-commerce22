import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home";
// import NotFound from "./Pages/NotFound";
// import SignUp from "./Pages/SignUp";
// import Login from "./Pages/Login";
// import AccountDropdownWithAccountCart from "./Pages/AccountDropdownWithaccount";
import CategoryDropdown from "./Pages/CategoryDropdown";
// import WishlistCart from "./pages/Wishlist";
 import Cart from "./Pages/Cart/";
import Error from "./Pages/Error";
import EcommerceHome from "./Pages/ECommerceHome";
import CheckOut from "./Pages/CheckOut";
import Account from "./Pages/Account";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ProductDetails from "./Pages/ProductDetails";

const ProjectRoutes = () => {
    let element = useRoutes([
        { path: '/', element: <Home /> },
        // { path: '*', element: <NotFound /> },
        // {
        //     path: '/sign-up',
        //     element: <SignUp />
        // },
        // {
        //     path: '/login',
        //     element: <Login />
        // },
        // {
        //     path: '/account-dropdown-with-account-cart',
        //     element: <AccountDropdownWithAccountCart />
        // },
         {
             path: '/category-dropdown',
             element: <CategoryDropdown />
        },
        // {
        //     path: '/wishlist-cart',
        //     element: <WishlistCart />
        // },
         {
             path: '/cart',
             element: <Cart />
        },
         {
             path: '/error',
             element: <Error />
         },
         {
            path: '/ecommercehome',
            element: <EcommerceHome />
        },
         {
             path: '/check-out',
             element: <CheckOut />
         },
         {
             path: '/account',
             element: <Account />
        },
         {
            path: '/about',
            element: <About />
         },
         {
             path: '/contact',
             element: <Contact />
         },
         {
             path: '/productdetails',
             element: <ProductDetails />
         },
    ]);
    return element;
};

export default ProjectRoutes;
