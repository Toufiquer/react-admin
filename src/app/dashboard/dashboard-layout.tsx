/*
|-----------------------------------------
| setting up DashboardLayout for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { Layout } from "react-admin";
import DashboardMenu from "./dashboard-menu";

import { globalStyle } from "./style";
import DashboardAppBar from "./dashboard-app-bar";

const DashboardLayout = (props) => (
  <Layout
    appBar={DashboardAppBar}
    {...props}
    menu={DashboardMenu}
    sx={{
      "& .RaLayout-appFrame": {
        ...globalStyle.background_color,
        ...globalStyle.text_color,
      },
      "& .RaLayout-contentWithSidebar": {
        ...globalStyle.background_color,
        ...globalStyle.text_color,
      },
      "& .RaLayout-content": {
        ...globalStyle.background_color,
        ...globalStyle.text_color,
      },
    }}
  />
);
export default DashboardLayout;
