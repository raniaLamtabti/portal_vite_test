import { Icon } from "@chakra-ui/react";
import { MdHome, MdLock } from "react-icons/md";

// Admin Imports
import MainDashboard from "./views/admin/dashboard";
// import OffersList from "views/admin/offers";
// import News from "views/admin/news";
// import Profile from "views/admin/profile/Profile";

// // Auth Imports
// import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  // {
  //   name: "Offers",
  //   layout: "/admin",
  //   path: "/offers",
  //   icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  //   component: OffersList,
  // },
  // {
  //   name: "News",
  //   layout: "/admin",
  //   path: "/news",
  //   icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  //   component: News,
  // },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "/profile",
  //   icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  //   component: Profile,
  // },
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "/sign-in",
  //   icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  //   component: SignInCentered,
  // },
];

export default routes;
