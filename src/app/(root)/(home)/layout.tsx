'use client';
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

export default function Rootlayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const {user}=useUser();
  if(!user) return router.push("/sign-in");
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pd-6 pt-28 max-md:pd-14 sm:px-14">
          {children}
        </section>
      </div>
    </main>
  );
}
