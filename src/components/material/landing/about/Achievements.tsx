"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { db } from "../../../../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

interface Achievement {
  id: string;
  title: string;
  penyelenggara: string;
  description: string;
  imageFileName: string;
  imageUrl: string;
}

const Achievements = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const r2PublicUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

  useEffect(() => {
    const q = collection(db, "achievements");
    const unsub = onSnapshot(q, (snap) => {
      const list: Achievement[] = [];
      snap.forEach((docSnap) => {
        const data = docSnap.data() as Omit<Achievement, "id" | "imageUrl">;
        list.push({
          id: docSnap.id,
          ...data,
          imageUrl: `${r2PublicUrl}/${data.imageFileName}`,
        });
      });
      setAchievements(list);
    });
    return () => unsub();
  }, [r2PublicUrl]);

  return (
    <div className="w-full justify-center items-center text-center relative my-[15vh] bg-[#121212] mx-auto flex flex-col">
      <h1 className="text-[86px] my-[40px]">Recognition & Achievements</h1>
      <p className="text-[34px] font-thin leading-tight text-center max-w-5xl mx-auto">
        Our commitment to meaningful innovation has earned recognition at both
        regional and national levels. These achievements validate our vision and
        fuel our passion to continue delivering excellence.
      </p>

      {achievements.map((item, index) => (
        <div
          key={item.id}
          className={`flex flex-col md:flex-row w-full gap-10 justify-center items-center mt-[20vh] ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text */}
          <div className="flex flex-col text-left gap-6 w-full md:w-1/2 px-6">
            <h1 className="text-[#ABFA54] text-[42px] md:text-[50px] font-semibold leading-tight">
              {item.title}
            </h1>
            <h2 className="text-[24px] md:text-[30px] font-thin">
              <strong className="font-bold">Penyelenggara:</strong>{" "}
              {item.penyelenggara}
            </h2>
            <p className="text-[20px] md:text-[28px] font-light">
              {item.description}
            </p>
          </div>

          {/* Image */}
          <div className="w-[450px] h-[600px] relative rounded-2xl overflow-hidden">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
