/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";

var routes = [
  {
    path: "/dashboard",
    name: "Cartas",
    icon: "nc-icon nc-email-85",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Clientes",
    icon: "nc-icon nc-single-02",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Relatórios",
    icon: "nc-icon nc-single-copy-04",
    component: <Maps />,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Assembleia",
    icon: "nc-icon nc-bank",
    component: <Notifications />,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "Negociações",
    icon: "nc-icon nc-briefcase-24",
    component: <UserPage />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tabelas",
    icon: "nc-icon nc-chart-bar-32",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Gestão",
    icon: "nc-icon nc-vector",
    component: <Typography />,
    layout: "/admin",
  }
];
export default routes;
