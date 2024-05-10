/*
|-----------------------------------------
| setting up AdminApp for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client"; // remove this line if you choose Pages Router
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("http://localhost:5000");

const AdminApp = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="users"
        list={ListGuesser}
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
