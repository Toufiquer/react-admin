"use client";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import CustomList from "./CustomList";
import DashboardLayout from "./dashboard-layout";
 import InsertCommentIcon from "@mui/icons-material/InsertComment";
 import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
 import PostAddIcon from "@mui/icons-material/PostAdd";

 const dataProvider = jsonServerProvider(
   "https://jsonplaceholder.typicode.com",
 );

 const Page = () => {
   return (
     <Admin
       dataProvider={dataProvider}
       defaultTheme="dark"
       layout={DashboardLayout}
     >
       <Resource
         icon={PeopleAltIcon}
         name="users"
         list={CustomList}
         edit={EditGuesser}
         recordRepresentation="name"
       />
       <Resource
         icon={PostAddIcon}
         name="posts"
         list={ListGuesser}
         edit={EditGuesser}
         recordRepresentation="title"
       />
       <Resource
         icon={InsertCommentIcon}
         name="comments"
         list={ListGuesser}
         edit={EditGuesser}
       />
     </Admin>
   );
 };

export default Page;
