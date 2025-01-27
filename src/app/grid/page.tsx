"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function ColorPage() {
  const [isVertical, setIsVertical] = useState(false);
  const [count, setCount] = useState("9");

  const generateColors = (num: number) => {
    return Array.from({ length: num }, (_, i) => {
      const hueSteps = [0, 60, 120, 180, 240, 300];
      const baseHue = hueSteps[i % hueSteps.length];
      const offset =
        Math.floor(i / hueSteps.length) *
        (360 / Math.ceil(num / hueSteps.length));
      return `hsl(${(baseHue + offset) % 360}, 85%, 50%)`;
    });
  };

  return (
    <div className="min-h-screen flex">
      <div className={`flex ${isVertical ? "flex-col" : ""} w-full relative`}>
        {generateColors(Number(count) || 1).map((color, i) => (
          <div key={i} className="flex-1" style={{ backgroundColor: color }} />
        ))}

        {/* Grid overlay tüm renklerin üzerinde */}
        <div className="absolute inset-0 grid grid-cols-9 grid-rows-6">
          {Array.from({ length: 54 }).map((_, i) => (
            <div
              key={i}
              className="border border-white/30 hover:bg-white/10 transition-colors cursor-pointer"
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center gap-4 z-10">
          <Input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            min={1}
            max={30}
            value={count}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                if (
                  value === "" ||
                  (Number(value) >= 1 && Number(value) <= 20)
                ) {
                  setCount(value);
                }
              }
            }}
            className="w-20 bg-white/80"
          />
          <Button
            onClick={() => {
              setIsVertical(!isVertical);
              setCount(isVertical ? "9" : "6");
            }}
            className="bg-white/80 text-black hover:bg-white/90"
          >
            {isVertical ? "Yatay" : "Dikey"}
          </Button>
          <Link
            href={"/test"}
            className="text-white rounded-sm bg-black/50 p-2"
          >
            Test
          </Link>{" "}
          <Link href={"/"} className="text-white rounded-sm bg-black/50 p-2">
            Anasayfa
          </Link>
        </div>
      </div>
    </div>
  );
}
