import React from "react";

interface Props {
  latency: number;
}

const NetworkLatency: React.FC<Props> = ({ latency }) => {
  const getLatencyColor = () => {
    if (latency < 100) return "text-green-600 dark:text-green-400";
    if (latency < 200) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  const getLatencyBars = () => {
    const bars = 3;
    const activeBars = latency < 100 ? 3 : latency < 200 ? 2 : 1;
    
    return (
      <div className="flex gap-0.5">
        {Array.from({ length: bars }).map((_, i) => (
          <div
            key={i}
            className={`w-0.5 h-2 rounded-full ${
              i < activeBars ? getLatencyColor().replace('text-', 'bg-') : 'bg-muted'
            }`}
            style={{ height: `${4 + i * 2}px` }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex items-center gap-1">
      {getLatencyBars()}
      <span className={`text-xs ${getLatencyColor()}`}>
        {latency}ms
      </span>
    </div>
  );
};

export default NetworkLatency;