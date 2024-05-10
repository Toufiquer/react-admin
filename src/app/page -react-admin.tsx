/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: apps, May, 2024
|-----------------------------------------
*/

"use client";

import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-simple-rest";

import PostList from "./post-list";
const Page = () => {
  return (
    <Admin dataProvider={jsonServerProvider("http://localhost:5000/posts")}>
      <Resource name="post" list={PostList} />
    </Admin>
  );
};
export default Page;
