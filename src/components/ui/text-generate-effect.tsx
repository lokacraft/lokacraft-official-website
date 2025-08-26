"use client";
import { useEffect, ReactNode } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  // 1. Ubah tipe 'words' menjadi ReactNode
  words: ReactNode; 
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  
  // 2. Animasikan setiap elemen anak langsung dari 'scope'
  useEffect(() => {
    animate(
      "span", // Targetkan semua anak dari span di dalam scope
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: stagger(0.1), // Delay dibuat sedikit lebih cepat
      }
    );
  }, [scope.current]); // Dependency array tetap

  const renderWords = () => {
    // 3. Jika 'words' adalah string, kita pecah menjadi kata-kata
    if (typeof words === "string") {
      const wordsArray = words.split(" ");
      return (
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className="opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.div>
      );
    }

    // 4. Jika 'words' sudah berupa JSX, kita bungkus setiap kata manual dengan <span>
    // dan berikan opacity-0 agar bisa dianimasikan.
    return (
      <motion.div ref={scope}>
        <span className="[&>span]:opacity-0" style={{filter: filter ? "blur(10px)" : "none"}}>
          {words}
        </span>
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};