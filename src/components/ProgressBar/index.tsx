// Libs
import { useState, useEffect } from "react";
import * as Progress from "@radix-ui/react-progress";

// Documentação da lib
// Progress: https://www.radix-ui.com/primitives/docs/components/progress

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const meta = 75;
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>
        prev == meta ? prev : prev > meta ? prev - 1 : prev + 1
      );
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Progress.Root
        className="relative overflow-hidden bg-white rounded-full w-48 h-5"
        style={{ transform: "translateZ(0)" }}
      >
        <Progress.Indicator
          className="bg-purple-600 w-full h-full transition-transform duration-25 ease-in-out"
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </Progress.Root>
      <span className="font-medium text-white ">Meta de Fretes</span>
      <span className="font-medium text-white ">{progress} %</span>
    </div>
  );
}
