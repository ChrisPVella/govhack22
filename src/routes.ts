import { uid } from "uid";
import Dashboard from "./view/dashboard";
import Error404 from "./view/error/404";
import Login from "./view/login";

export type IRoutes = {
  id: string;
  path: string;
  name: string;
  icon: string;
  subMenu?: IRoutes;
  component: () => JSX.Element;
  layout: string;
  sideMenu: boolean;
}[];

const routes: IRoutes = [
  {
    id: uid(),
    path: "/index",
    name: "Dashboard",
    icon: "dashboard",
    component: Dashboard,
    layout: "/admin",
    sideMenu: true,
  },
  {
    id: uid(),
    path: "/login",
    name: "Login",
    icon: "log-in",
    component: Login,
    layout: "/auth",
    sideMenu: false,
  },
  {
    id: uid(),
    path: "/error/404",
    name: "404, Not Found",
    icon: "error",
    component: Error404,
    layout: "/admin",
    sideMenu: false,
  },
];

export default routes;
