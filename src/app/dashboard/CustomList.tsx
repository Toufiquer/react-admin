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
const background_color = {
  backgroundColor: "#1e293b",
};
const text_color = {
  color: "#cbd5e1",
};
const font_bold = {
  fontWidth: "bold",
};
const font_size = {
  fontSize: "18px",
};
const CustomList = () => {
  return (
    <List
      resource="users"
      sx={{
        "& .RaList-actions": background_color,
        "& .RaList-content": background_color,
      }}
    >
      {/* <Datagrid> */}
      <Datagrid
        rowClick="show"
        sx={{
          "& .RaDatagrid-root": { ...background_color, ...text_color },
          "& .MuiCheckbox-root": {
            ...background_color,
            ...text_color,
          }, // active header (checkbox)
          "& .RaDatagrid-tableWrapper .Mui-active": {
            ...background_color,
            ...text_color,
            ...font_bold,
            ...font_size,
          }, // active header (Text)
          "& .RaDatagrid-tableWrapper .css-1qgma8u-MuiButtonBase-root-MuiTableSortLabel-root:hover":
            {
              ...background_color,
              ...text_color,
              ...font_bold,
              ...font_size,
            }, // active header (Text:hover)
          "& .RaDatagrid-tableWrapper .Mui-active .MuiTableSortLabel-icon": {
            ...background_color,
            ...text_color,
          }, // active header (Icon)
          "& .RaDatagrid-headerCell": {
            ...background_color,
            ...text_color,
            ...font_bold,
            ...font_size,
          },
        }}
      >
        <TextField color={text_color} source="id" />
        <TextField source="name" color={text_color} />
        <TextField source="username" color={text_color} />
        <TextField source="email" color={text_color} />
        <TextField source="address.street" color={text_color} />
        <TextField source="phone" color={text_color} />
        <TextField source="website" color={text_color} />
        <TextField source="company.name" color={text_color} />
      </Datagrid>
    </List>
  );
};
export default CustomList;
