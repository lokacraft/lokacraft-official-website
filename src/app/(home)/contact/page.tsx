import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero */}
      {/* Contact Form */}
      {/* Linked Contact */}
      {/* maps Location */}
      <div className="h-screen w-full flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://kosen.id"
        className=""
      >
        <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[45rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base">
            Address
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
      
    </div>
  );
}
