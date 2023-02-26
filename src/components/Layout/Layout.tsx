import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <h1>Social App</h1>
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
