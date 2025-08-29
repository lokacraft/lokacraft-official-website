"use client";

import type React from "react";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useRef, useState, useEffect } from "react";
import { db } from "../../../../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  imageFileName: string;
  imageUrl: string;
}

const ProjectCard = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [projects, setProjects] = useState<Project[]>([]);
  const r2PublicUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

  // Fetch data dari Firestore
  useEffect(() => {
    const q = collection(db, "projects");
    const unsub = onSnapshot(q, (snap) => {
      const list: Project[] = [];
      snap.forEach((docSnap) => {
        const data = docSnap.data() as Omit<Project, "id" | "imageUrl">;
        list.push({
          id: docSnap.id,
          ...data,
          imageUrl: `${r2PublicUrl}/${data.imageFileName}`,
        });
      });
      setProjects(list);
    });
    return () => unsub();
  }, [r2PublicUrl]);

  // Scroll dengan mouse wheel horizontal
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  return (
    <div className="w-full py-12 px-[15vh] border-y border-y-[#ABFA54] bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="w-full flex flex-row gap-y-5 relative ">
          <div className="pt-5">
            <div className="p-4 size-[60px] rounded-full bg-[#ABFA54] text-center justify-center items-center flex">
              <h1 className="text-[46px] font-normal text-black">
                {projects.length}
              </h1>
            </div>
          </div>
          <div className="flex flex-col ml-4 lg:justify-start leading-tight mt-5 pb-5 pl-5 w-[90%]">
            <div className="text-[#ABFA54] w-50 text-[20px]">Our Projects</div>
            <h1 className="text-[42px] font-medium">
              Works That Tell of Our Commitment
            </h1>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel */}
        <div
          ref={scrollContainerRef}
          className={`overflow-x-auto px-[15vh] pb-4 ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-6 min-w-max">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-[30rem] h-[30rem] rounded-2xl overflow-hidden relative select-none"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.imageUrl})` }}
                >
                  <div className="absolute inset-0 bg-black/70"></div>
                </div>

                <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                  <div>
                    <p className="text-[24px] leading-tight font-thin opacity-90">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack?.map((tech, index) => (
                        <div
                          key={index}
                          className="rounded-full p-[1px] bg-gradient-to-b from-[#ABFA54] to-[#7400B8]"
                        >
                          <div className="relative bg-[#121212] text-white rounded-full py-[2px] px-[7px] group overflow-hidden">
                            <h2 className="relative text-[16px] font-normal">
                              {tech}
                            </h2>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-[40px] font-semibold leading-none">
                      {project.title}
                    </h3>

                    <Link
                      href={project.link || "/about"}
                      className="text-[18px] font-semibold mt-auto flex items-center gap-x-2"
                    >
                      <span className="bg-gradient-to-r from-[#ABFA54] to-[#7400B8] text-transparent bg-clip-text">
                        Visit Website
                      </span>
                      <HiOutlineArrowLongRight className="size-6 text-[#7400B8]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-4">
          <p className="text-sm text-muted-foreground">
            ← Drag or scroll to see all projects →
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
