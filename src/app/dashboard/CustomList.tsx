/*
|-----------------------------------------
| setting up CustomList for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  EmailField,
} from "react-admin";
import { globalStyle } from "./style";

const CustomList = () => {
  return (
    <List
      resource="users"
      sx={{
        "& .RaList-actions": globalStyle.background_color,
        "& .RaList-content": globalStyle.background_color,
      }}
    >
      {/* <Datagrid> */}
      <Datagrid
        rowClick="show"
        sx={{
          "& .RaDatagrid-root": {
            ...globalStyle.background_color,
            ...globalStyle.text_color,
          },
          "& .MuiCheckbox-root": {
            ...globalStyle.background_color,
            ...globalStyle.text_color,
          }, // active header (checkbox)
          "& .RaDatagrid-tableWrapper .Mui-active": {
            ...globalStyle.background_color,
            ...globalStyle.text_color,
            ...globalStyle.font_bold,
            ...globalStyle.font_size,
          }, // active header (Text)
          "& .RaDatagrid-tableWrapper .css-1qgma8u-MuiButtonBase-root-MuiTableSortLabel-root:hover":
            {
              ...globalStyle.background_color,
              ...globalStyle.text_color,
              ...globalStyle.font_bold,
              ...globalStyle.font_size,
            }, // active header (Text:hover)
          "& .RaDatagrid-tableWrapper .Mui-active .MuiTableSortLabel-icon": {
            ...globalStyle.background_color,
            ...globalStyle.text_color,
          }, // active header (Icon)
          "& .RaDatagrid-headerCell": {
            ...globalStyle.background_color,
            ...globalStyle.text_color,
            ...globalStyle.font_bold,
            ...globalStyle.font_size,
          },
        }}
      >
        <TextField color={globalStyle.text_color} source="id" />
        <TextField source="name" color={globalStyle.text_color} />
        <TextField source="username" color={globalStyle.text_color} />
        <TextField source="email" color={globalStyle.text_color} />
        <TextField source="address.street" color={globalStyle.text_color} />
        <TextField source="phone" color={globalStyle.text_color} />
        <TextField source="website" color={globalStyle.text_color} />
        <TextField source="company.name" color={globalStyle.text_color} />
      </Datagrid>
    </List>
  );
};
export default CustomList;
