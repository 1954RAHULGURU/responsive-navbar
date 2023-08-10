import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const MenuList = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Items",
      url: "/KeyFeatures",
    },
    {
      title: "Price",
      url: "/Pricing",
    },
    {
      title: "About Us",
      url: "/Testimonials",
    },
    {
      title: "Order online",
      url: "/Demo",
    },
  ];
  
  return (
    <nav>
      <div className="logo">
        Indian<font>Foods</font>
      </div>
     
    <ul className="menu-list">
      {MenuList.map(({url,title})=>{
       return(
       <li >
        <NavLink exact to={url} >
          {title}
        </NavLink>
      </li>
      )}
      )}</ul>
    </nav>
  );
};

export default Navbar;
