import React from "react";
import "./SideItem.css";
import {Link} from 'react-router-dom';

function SideItem({Icon , Name , active , link}) {

    const buttonHandler = () => {
      
    }

  return (
    <>
      <Link to={link ? link : '/'} className="link"><div onClick={() => buttonHandler()} className={active ? 'sideitem active' : 'sideitem'}>
       <Icon className="icon" />
       <span>{Name}</span>
      </div></Link>
    </>
  );
}

export default SideItem;
