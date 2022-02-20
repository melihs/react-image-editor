import React from "react";
import "./sidebarItem.scss";

const SidebarItem = ({name, active, handleClick}) => {
  return (
    <button 
      onClick={handleClick}
      className={`sidebar-item ${active ? 'active' : ''}`}
    >{name}</button>
  );
};

export default SidebarItem;
 