import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import React, { ReactNode } from "react";

export default function Rootlayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pd-6 pt-28 max-md:pd-14 sm:px-14"></section>
      </div>
      {children}
    </main>
  );
}
