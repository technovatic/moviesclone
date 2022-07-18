import React from "react";
import "./SideItem.css";
import { NavLink } from "react-router-dom";

function SideItem({ Icon, Name, link }) {
  const buttonHandler = ({ isActive }) => {
    return {
      background: isActive ? "var(--five-color)" : "",
      color: isActive ? "#fff" : "gray",
      borderLeft: isActive ? "1px solid var(--second-color)" : "",
    };
  };

  return (
    <>
      
        <NavLink to={link ? link : "/"} style={buttonHandler} className="sideitem">
          <Icon className="icon" />
          <span>{Name}</span>
        </NavLink>
   
    </>
  );
}

export default SideItem;
