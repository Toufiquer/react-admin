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

const CustomList = () => {
  return (
    <List
      resource="users"
      sx={{ "& .RaLayout-contentWithSidebar": { backgroundColor: "black" } }}
    >
      {/* <Datagrid> */}
      <Datagrid sx={{ width: "100%" }} rowClick="show">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="address.street" />
        <TextField source="phone" />
        <TextField source="website" />
        <TextField source="company.name" />
        <EditButton basePath="/" />
        <DeleteButton basePath="/" />
      </Datagrid>
    </List>
  );
};
export default CustomList;
