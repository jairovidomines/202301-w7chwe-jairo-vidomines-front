import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import LoginPage from "../pages/LoginPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <LoginPage /> }],
  },
];

export const router = createBrowserRouter(routes);
