/*
|-----------------------------------------
| setting up PostList for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: apps, May, 2024
|-----------------------------------------
*/

import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";
const PostList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="publishedAt" />
        <EditButton basePath="/posts" />
        <DeleteButton basePath="/posts" />
      </Datagrid>
    </List>
  );
};
export default PostList;
