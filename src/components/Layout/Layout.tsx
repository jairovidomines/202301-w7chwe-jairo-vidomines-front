import { Outlet } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";

const Layout = (): JSX.Element => {
  return (
    <>
      <h1>Social App</h1>
      <Outlet />
      <LoginForm />
    </>
  );
};

export default Layout;
