/*
|-----------------------------------------
| setting up DashboardAppBar for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import {
  AppBar,
  LocalesMenuButton,
  ToggleThemeButton,
  LoadingIndicator,
} from "react-admin";
import { globalStyle } from "./style";
const DashboardAppBar = () => {
  return (
    <AppBar
      sx={{ ...globalStyle.background_color, ...globalStyle.text_color }}
      toolbar={
        <>
          <LocalesMenuButton />
          <ToggleThemeButton />
          <LoadingIndicator />
        </>
      }
    />
  );
};
export default DashboardAppBar;
