/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import Link from "next/link";
const linkStyle =
  "border px-4 py-1 border-slate-700 rounded-lg text-slate-400 hover:bg-slate-700";
const Page = () => {
  return (
    <main className="w-full min-h-screen flex items-center justify-center flex-col gap-4">
      <Link href="/dashboard" className={linkStyle}>
        Dashboard
      </Link>
      <Link href="/single-page" className={linkStyle}>
        Single Page
      </Link>
    </main>
  );
};
export default Page;
