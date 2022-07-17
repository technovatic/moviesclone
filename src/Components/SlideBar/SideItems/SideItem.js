import React from "react";
import "./SideItem.css";

function SideItem({Icon , Name , active}) {

    const buttonHandler = () => {
      
    }

  return (
    <>
      <div onClick={() => buttonHandler()} className={active ? 'sideitem active' : 'sideitem'}>
       <Icon className="icon" />
       <span>{Name}</span>
      </div>
    </>
  );
}

export default SideItem;
