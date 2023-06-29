import React from "react";
import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <div>
      <header>
        <h1>LOGO</h1>
      </header>
      <div>
        {/* Место, где будет отображаться содержимое текущего маршрута */}
        <Outlet />
      </div>
    </div>
  );
};
