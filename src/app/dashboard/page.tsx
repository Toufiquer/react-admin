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
     <div className="min-h-screen">
       <Admin dataProvider={dataProvider} layout={DashboardLayout}>
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
       <div className="bg-[#141A28] pt-12">
         <footer className="text-sm py-4 text-center w-full text-slate-200  border-t border-slate-700">
           All right reserved &copy; {new Date().getFullYear()}
         </footer>
       </div>
     </div>
   );
 };

export default Page;
