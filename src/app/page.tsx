"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function ColorPage() {
  const [isVertical, setIsVertical] = useState(false);
  const [count, setCount] = useState("5"); // string olarak değiştirdik

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

        <div className="absolute inset-0 flex items-center justify-center gap-4">
          <Input
            type="number"
            min={1}
            max={30}
            value={count}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "" || (Number(value) >= 1 && Number(value) <= 20)) {
                setCount(value);
              }
            }}
            className="w-20 bg-white/80"
          />
          <Button
            onClick={() => setIsVertical(!isVertical)}
            className="bg-white/80 text-black hover:bg-white/90"
          >
            {isVertical ? "Yatay" : "Dikey"}
          </Button>
          <Link
            href={"/test"}
            className=" text-white rounded-sm bg-black/50 p-2"
          >
            Test
          </Link>
        </div>
      </div>
    </div>
  );
}
