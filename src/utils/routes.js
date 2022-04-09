import Homepage from "../pages/Homepage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Parking from "../pages/Parking";
import Splash from "../pages/Splash";
const routes = [
  { path: "/parking", element: Parking },
  { path: "/login", element: Login },
  { path: "/register", element: Register },
  { path: "/home", element: Homepage },
  { path: "/", element: Splash },
];
export default routes;
