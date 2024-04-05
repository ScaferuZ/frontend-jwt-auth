import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function authHeaderLayout() {
  return (
    <>
      <header>
        <div className="root-layout-header">
          <NavLink to="/">Authorization Demo</NavLink>
        </div>
        <nav>
          <div>
            <NavLink to="/item1">Item 1</NavLink>
            <NavLink to="/item2">Item 2</NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
