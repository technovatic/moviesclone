import React from "react";
import "./SideItem.css";
import { NavLink } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {toggleMenu} from '../../../features/buttonSlice';

function SideItem({ Icon, Name, link , close }) {
  const dispatch = useDispatch();
  const buttonHandler = ({ isActive }) => {
    return {
      background: isActive ? "var(--five-color)" : "",
      color: isActive ? "#fff" : "gray",
      borderLeft: isActive ? "1px solid var(--second-color)" : "",
    };
  };

  return (
    <>
      
        <NavLink to={link ? link : "/"} style={buttonHandler} onClick={close && dispatch(toggleMenu(false))} className={close ? 'close sideitem' : 'sideitem'}>
          <Icon className="icon" />
          <span>{Name}</span>
        </NavLink>
   
    </>
  );
}

export default SideItem;
