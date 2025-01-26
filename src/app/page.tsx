"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function ColorPage() {
  const [isVertical, setIsVertical] = useState(false);
  const [count, setCount] = useState(5);

  const generateColors = (num: number) => {
    return Array.from({ length: num }, (_, i) => {
      // Farklı renk grupları için başlangıç noktaları
      const hueSteps = [0, 60, 120, 180, 240, 300]; // Kırmızı, sarı, yeşil, cyan, mavi, mor
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
        {generateColors(count).map((color, i) => (
          <div key={i} className="flex-1" style={{ backgroundColor: color }} />
        ))}

        <div className="absolute inset-0 flex items-center justify-center gap-4">
          <Input
            type="number"
            min={1}
            max={30}
            value={count}
            onChange={(e) =>
              setCount(Math.min(20, Math.max(1, +e.target.value)))
            }
            className="w-20 bg-white/80"
          />
          <Button
            onClick={() => setIsVertical(!isVertical)}
            className="bg-white/80 text-black hover:bg-white/90"
          >
            {isVertical ? "Yatay" : "Dikey"}
          </Button>
        </div>
      </div>
    </div>
  );
}
