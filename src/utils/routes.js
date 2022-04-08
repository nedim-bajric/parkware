import Homepage from "../pages/Homepage";
import Register from "../pages/Register";
import Login from "../pages/Login";
const routes = [
  { path: "/login", element: Login },
  { path: "/register", element: Register },
  { path: "/", element: Homepage },
];
export default routes;
