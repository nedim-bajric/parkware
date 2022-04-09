import Homepage from "../pages/Homepage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Parking from "../pages/Parking";
import Splash from "../pages/Splash";
import Rezervacija from "../pages/Rezervacija";
import Profile from "../pages/Profile";

const routes = [
  { path: "/profile", element: Profile },
  { path: "/rezervacija", element: Rezervacija },
  { path: "/parking", element: Parking },
  { path: "/login", element: Login },
  { path: "/register", element: Register },
  { path: "/home", element: Homepage },
  { path: "/", element: Splash },
];
export default routes;
