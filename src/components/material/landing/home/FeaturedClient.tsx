"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { db } from "../../../../../firebase"; // sesuaikan path
import { collection, onSnapshot } from "firebase/firestore";
import { motion } from "framer-motion";

interface Partnership {
  id: string;
  imageFileName: string;
  imageUrl: string;
}

export default function FeaturedClient() {
  const [partners, setPartners] = useState<Partnership[]>([]);
  const r2PublicUrl = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

  useEffect(() => {
    const q = collection(db, "partnerships");
    const unsub = onSnapshot(q, (snap) => {
      const list: Partnership[] = [];
      snap.forEach((doc) => {
        const data = doc.data() as Omit<Partnership, "id" | "imageUrl">;
        list.push({
          id: doc.id,
          ...data,
          imageUrl: `${r2PublicUrl}/${data.imageFileName}`,
        });
      });
      setPartners(list);
    });

    return () => unsub();
  }, [r2PublicUrl]);

  if (partners.length === 0) return null;

  return (
    <div className="w-full h-[180px] relative flex items-center overflow-hidden bg-[#121212]">
      <motion.div
        className="flex gap-[7rem] items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {[...partners, ...partners].map((partner) => (
          <div
            key={partner.id}
            className="flex-shrink-0 flex items-center justify-center h-full"
            style={{ width: "auto" }}
          >
            <Image
              src={partner.imageUrl}
              alt="partner"
              height={120} // hampir memenuhi height parent
              width={120} // sementara width fixed, bisa diubah ke auto proporsional
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
