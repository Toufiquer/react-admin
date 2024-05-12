/*
|-----------------------------------------
| setting up DashboardLayout for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { Layout } from "react-admin";
import DashboardMenu from "./dashboard-menu";

const DashboardLayout = (props) => <Layout {...props} menu={DashboardMenu} />;
export default DashboardLayout;
