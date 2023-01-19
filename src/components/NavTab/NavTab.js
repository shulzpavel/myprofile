import React from "react";
import { NavLink } from "react-router-dom";

function NavTab() {
  return (
    <ul className="navtab">
      <NavLink exact to="/profile" className="navtab__item">
        Обо мне
      </NavLink>
      <NavLink exact to="/projects" className="navtab__item">
        Проекты
      </NavLink>
      {/* <NavLink exact to='/tech' className='navtab__item'>
        Технологии
      </NavLink> */}
    </ul>
  );
}

export default NavTab;
