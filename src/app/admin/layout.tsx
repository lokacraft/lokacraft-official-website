"use client"
import { useUser } from "@/lib/auth"
import { redirect } from "next/navigation";
import { ReactNode } from "react"

export default function Layout({children}: {children: ReactNode}) {
      const user = useUser();
      if(user === false) return <div className="w-screen h-screen bg-white flex flex-col space-y-4 items-center justify-center"><h1 className="text-lg font-semibold text-gray-500">loading</h1></div>
      if(!user) return redirect("/auth/sign-in")
      return children;
}