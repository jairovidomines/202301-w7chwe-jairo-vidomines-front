import { Outlet } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <h1>Social App</h1>
      <Outlet />
      <LoginForm />
    </LayoutStyled>
  );
};

export default Layout;
