import Homepage from "../pages/Homepage";
import Register from "../pages/Register";
import Parking from "../pages/Parking";
import Login from "../pages/Login";
const routes = [
  { path: "/parking", element: Parking },
  { path: "/login", element: Login },
  { path: "/register", element: Register },
  { path: "/", element: Homepage },
];
export default routes;
