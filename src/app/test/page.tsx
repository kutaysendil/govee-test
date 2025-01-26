"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const COLORS = [
  "#FF0000", // Kırmızı
  "#FF7F00", // Turuncu
  "#FFFF00", // Sarı
  "#00FF00", // Yeşil
  "#0000FF", // Mavi
  "#4B0082", // İndigo
  "#9400D3", // Mor
];

export default function ColorTest() {
  return (
    <div className="min-h-screen flex relative overflow-hidden bg-black">
      <div className="absolute inset-0 flex items-center justify-center">
        {COLORS.map((color, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{
              scale: [0.1, 1.4, 0.8],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
            style={{
              backgroundColor: color,
              width: "100vh",
              height: "100vh",
              position: "absolute",
              borderRadius: "50%",
              filter: "blur(10px)",
            }}
          />
        ))}
      </div>
      <Link
        href={"/"}
        className="absolute inset-0 flex items-center justify-center text-white bg-black/50 p-2"
      >
        Anasayfa
      </Link>
    </div>
  );
}
