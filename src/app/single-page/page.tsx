/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
"use client";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";

import PostAddIcon from "@mui/icons-material/PostAdd";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
 
import dataProvider from "./data-provider";
import DashboardLayout from "./page-layout";
import UserList from "./UserList";
import PostList from "./PostList";
import CommentList from "./CommentList";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Admin dataProvider={dataProvider} layout={DashboardLayout}>
        <Resource
          icon={PeopleAltIcon}
          name="users"
          list={UserList}
          edit={EditGuesser}
          recordRepresentation="name"
        />
        <Resource
          icon={PostAddIcon}
          name="posts"
          list={PostList}
          edit={EditGuesser}
          recordRepresentation="title"
        />
        <Resource
          icon={InsertCommentIcon}
          name="comments"
          list={CommentList}
          edit={EditGuesser}
        />
      </Admin>
      <div className="bg-[#141A28] pt-12">
        <footer className="text-sm py-4 text-center w-full text-slate-200  border-t border-slate-700">
          All right reserved | Single Page &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
};
export default Page;
