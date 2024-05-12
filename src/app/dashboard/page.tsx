"use client";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import CustomList from "./CustomList";
import DashboardLayout from "./dashboard-layout";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const Page = () => {
  return (
    <main className="min-h-screen w-full bg-slate-800">
      <Admin
        dataProvider={dataProvider}
        defaultTheme="dark"
        layout={DashboardLayout}
      >
        <Resource
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
    </main>
  );
};

export default Page;
