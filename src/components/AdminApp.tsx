/*
|-----------------------------------------
| setting up AdminApp for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
"use client";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import CustomList from "./CustomList";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const AdminApp = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        sx={{ "& .RaLayout-contentWithSidebar": { backgroundColor: "black" } }}
        name="users"
        list={CustomList}
        edit={EditGuesser}
        recordRepresentation="name"
      />
      <Resource
        name="posts"
        list={ListGuesser}
        edit={EditGuesser}
        recordRepresentation="title"
      />
      <Resource name="comments" list={ListGuesser} edit={EditGuesser} />
    </Admin>
  );
};

export default AdminApp;
