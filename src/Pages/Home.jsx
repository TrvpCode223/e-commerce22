import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#323232", color: "white" }}>
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>Homepage</h1>

      <div style={{ padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/signup" style={{ color: "#B7CFEA", textDecoration: "none" }}>
            SignUp
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/login" style={{ color: "#B7CFEA", textDecoration: "none" }}>
            LogIn
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/accountdropdownwithaccount" style={{ color: "#B7CFEA", textDecoration: "none" }}>
            AccountDropDownWithAccount
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/categorydropdown" style={{ color: "#B7CFEA", textDecoration: "none" }}>
            CategoryDropDown
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/wishlist" style={{ color: "#B7CFEA", textDecoration: "none" }}>
            Wishlist
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/cart" style={{ color: "#B7CFEA", textDecoration: "none" }}>
            Cart
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/error" style={{ color: "#B7CFEA", textDecoration: "none" }}>
            Error
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/ecommercehome" style={{ color: "#B7CFEA", textDecoration: "none" }}>
            ECommerceHome
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/checkout" style={{ color: "#B7CFEA", textDecoration: "none" }}>
            Checkout
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/account" style={{ color: "#B7CFEA", textDecoration: "none" }}>
            Account
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/about" style={{ color: "#B7CFEA", textDecoration: "none" }}>
            About
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/contact" style={{ color: "#B7CFEA", textDecoration: "none" }}>
            Contact
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/productdetails" style={{ color: "#B7CFEA", textDecoration: "none" }}>
            ProductDetails
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Home;
