/*
|-----------------------------------------
| setting up DashboardMenu for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { Menu } from "react-admin";
import { globalStyle } from "./style";

const DashboardMenu = () => {
  return (
    <Menu
      sx={{
        ".MuiListItemIcon-root.RaMenuItemLink-icon.css-cveggr-MuiListItemIcon-root":
          {
            ...globalStyle.text_color,
          }, // Dashboard Icon
        "a.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.MuiMenuItem-root.MuiMenuItem-gutters.css-krc73u-MuiButtonBase-root-MuiMenuItem-root-RaMenuItemLink-root":
          {
            ...globalStyle.text_color,
          }, // Dashboard Menu Text
        "a.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.MuiMenuItem-root.MuiMenuItem-gutters.css-krc73u-MuiButtonBase-root-MuiMenuItem-root-RaMenuItemLink-root:hover":
          {
            ...globalStyle.text_color,
            textDecoration: "underline",
          }, // Dashboard Menu Text
        "&.RaMenu-open": {
          ...globalStyle.background_color,
          ...globalStyle.text_color,
        },

        "&.RaMenu-close": {
          ...globalStyle.background_color,
          ...globalStyle.text_color,
        },
      }}
    >
      <Menu.ResourceItem name="posts" />
      <Menu.ResourceItem name="comments" />
      <Menu.ResourceItem name="users" />
    </Menu>
  );
};
export default DashboardMenu;
