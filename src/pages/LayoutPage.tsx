import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const LayoutPage: FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <NavLink to="/">Home | </NavLink>
          <NavLink to="/users">Users | </NavLink>
          <NavLink to="/todos">Todos</NavLink>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
