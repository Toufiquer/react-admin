"use client";
import { useState } from "react";

export default function Home() {
  const [userData, setUserData] = useState([]);
  const handleGetUserData = () => {
    const runAsync = async () => {
      const res = await fetch("http://localhost:5000/posts");
      const jsonParse = await res.json();
      console.log("jsonParse : ", jsonParse);
      if (jsonParse.length > 0) setUserData(jsonParse);
    };
    runAsync();
  };
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <button
        className="px-4 py-1 border rounded-lg cursor-pointer"
        onClick={handleGetUserData}
      >
        Get User Data
      </button>
      <div className="border p-4 w-full m-4 ">
        {userData.map((curr) => (
          <div key={curr.id}>{curr.title}</div>
        ))}
      </div>
    </div>
  );
}
