"use client";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import CustomList from "./CustomList";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const Page = () => {
  return (
    <main>
      <Admin dataProvider={dataProvider}>
        <Resource
          name="users"
          list={CustomList}
          edit={EditGuesser}
          recordRepresentation="name"
        />
        {/* <Resource
          name="posts"
          list={ListGuesser}
          edit={EditGuesser}
          recordRepresentation="title"
        /> */}
        {/* <Resource name="comments" list={ListGuesser} edit={EditGuesser} /> */}
      </Admin>
    </main>
  );
};

export default Page;
