import { Progress } from "antd";
import { Percent } from "antd/es/progress/style";
import { Span } from "next/dist/trace";

interface ProgressBarAntdProps {
  percentProgress: number;
  meta: number;
}
export default function ProgressBarAntd({
  percentProgress,
  meta,
}: ProgressBarAntdProps) {
  return (
    <div className="w-auto h-full flex items-center justify-center">
      <Progress
        className="text-white"
        type="circle"
        percent={percentProgress}
        strokeColor={"#7e22ce"}
        size={150}
        strokeWidth={10}
        format={(percent) => (
          <div className="flex flex-col gap-1 items-center justify-start">
            <span className="text-white text-xl font-bold">{`Meta`}</span>
            <span className="text-white text-3xl font-bold">{`${percent}%`}</span>
          </div>
        )}
      />
    </div>
  );
}
