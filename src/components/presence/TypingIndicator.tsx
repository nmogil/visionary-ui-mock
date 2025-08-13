import React from "react";

const TypingIndicator: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-1 px-2 py-1 rounded bg-muted">
      <span className="text-xs text-muted-foreground">typing</span>
      <div className="flex gap-0.5">
        <div className="h-1 w-1 rounded-full bg-muted-foreground animate-[bounce_1.4s_ease-in-out_infinite]" />
        <div className="h-1 w-1 rounded-full bg-muted-foreground animate-[bounce_1.4s_ease-in-out_infinite_0.16s]" />
        <div className="h-1 w-1 rounded-full bg-muted-foreground animate-[bounce_1.4s_ease-in-out_infinite_0.32s]" />
      </div>
    </div>
  );
};

export default TypingIndicator;