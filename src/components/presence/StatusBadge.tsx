import React from "react";
import { Badge } from "@/components/ui/badge";
import { Brain, Pencil, Check, Hand, Clock } from "lucide-react";

interface Props {
  status: "thinking" | "writing" | "submitted" | "voting" | "idle";
}

const StatusBadge: React.FC<Props> = ({ status }) => {
  const getStatusConfig = () => {
    switch (status) {
      case "thinking":
        return {
          label: "Thinking",
          icon: <Brain className="h-3 w-3" />,
          emoji: "🧠",
          variant: "secondary" as const,
          className: "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-950"
        };
      case "writing":
        return {
          label: "Writing",
          icon: <Pencil className="h-3 w-3 animate-pulse" />,
          emoji: "✏️",
          variant: "secondary" as const,
          className: "text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-950"
        };
      case "submitted":
        return {
          label: "Submitted",
          icon: <Check className="h-3 w-3" />,
          emoji: "✅",
          variant: "secondary" as const,
          className: "text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-950"
        };
      case "voting":
        return {
          label: "Voting",
          icon: <Hand className="h-3 w-3 animate-bounce" />,
          emoji: "👆",
          variant: "secondary" as const,
          className: "text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-950"
        };
      default:
        return {
          label: "Idle",
          icon: <Clock className="h-3 w-3" />,
          emoji: "💤",
          variant: "outline" as const,
          className: "text-muted-foreground"
        };
    }
  };

  const config = getStatusConfig();

  return (
    <Badge 
      variant={config.variant} 
      className={`inline-flex items-center gap-1 text-xs ${config.className}`}
    >
      <span className="text-xs">{config.emoji}</span>
      {config.icon}
      {config.label}
    </Badge>
  );
};

export default StatusBadge;