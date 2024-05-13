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
import { Box, Typography } from "@mui/material";
import Link from "next/link";
const DashboardAppBar = () => {
  return (
    <AppBar
      sx={{ ...globalStyle.background_dark, ...globalStyle.text_color }}
      toolbar={
        <>
          <LocalesMenuButton />
          <ToggleThemeButton />
          <LoadingIndicator />
        </>
      }
    >
      <Link href="/" className="font-semibold text-stone-300">
        MealNight
      </Link>
      <Box flex="1" />
    </AppBar>
  );
};
export default DashboardAppBar;
