import React, { useEffect, useState } from "react";
import { useLocation, Route, Navigate, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

import routes, { IRoutes } from "../routes";
import Footer from "../components/admin/footer";

const Admin = () => {
  const [activeRoute, setActiveRoute] = useState<string>("Default");

  const getRouteDetails = (path: string, routes: IRoutes) => {
    for (let i = 0; i < routes.length; i++) {
      const menu = routes[i];
      if (path.includes(menu.layout + menu.path) && !menu.subMenu) {
        const { name } = menu;
        return setActiveRoute(name);
      } else if (menu.subMenu) {
        menu.subMenu !== undefined &&
          menu.subMenu.map((sub: any, key: any) => {
            if (path.includes(sub.layout + sub.path)) {
              const { name } = menu;
              return setActiveRoute(name);
            }
            return null;
          });
      }
    }
    return "Login";
  };

  const getRoutes = (layoutRoutes: IRoutes) => {
    return layoutRoutes.map((prop, key) => {
      // if a route doesn't have any subMenu and its layout is admin
      const propPath = prop.layout + prop.path;
      if (prop.layout === "/admin" && !prop.subMenu) {
        return <Route path={propPath} element={<prop.component />} key={key} />;
      } else if (prop.subMenu) {
        return (
          prop.subMenu !== undefined &&
          prop.subMenu.map((sub, key) => {
            return (
              <Route
                path={sub.layout + sub.path}
                element={<sub.component />}
                key={key}
              />
            );
          })
        );
      }
      return <Navigate to="/admin/error/404" key={key} />;
    });
  };

  const location = useLocation();

  useEffect(() => {
    getRouteDetails(location.pathname, routes);
  }, [location]);

  return (
    <>
      <div className="row">
        <Routes>{getRoutes(routes)}</Routes>
        <Footer />
      </div>
    </>
  );
};

export default Admin();
