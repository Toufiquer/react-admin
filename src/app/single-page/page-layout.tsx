/*
|-----------------------------------------
| setting up DashboardLayout for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { Layout } from "react-admin";
import DashboardMenu from "./single-page-menu";

import { globalStyle } from "./style";
import DashboardAppBar from "./single-page-app-bar";

const DashboardLayout = (props: any) => (
  <Layout
    appBar={DashboardAppBar}
    {...props}
    menu={DashboardMenu}
    sx={{
      "& .RaLayout-appFrame": {
        ...globalStyle.background_dark,
        ...globalStyle.text_color,
      },
      "& .RaLayout-contentWithSidebar": {
        ...globalStyle.background_dark,
        ...globalStyle.text_color,
      },
      "& .RaLayout-content": {
        ...globalStyle.background_dark,
        ...globalStyle.text_color,
      },
    }}
  />
);
export default DashboardLayout;
