import React, { useState } from "react";
import { Button } from "@/components/ui/8bit/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Smile } from "lucide-react";

interface Reaction {
  emoji: string;
  timestamp: number;
}

interface Props {
  reactions: Reaction[];
  onReaction: (emoji: string) => void;
  className?: string;
}

const EMOJI_OPTIONS = ["😀", "😂", "❤️", "👍", "👎", "🔥", "💯", "🎉", "😮", "😢"];

const ReactionSystem: React.FC<Props> = ({ reactions, onReaction, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Show only recent reactions (last 10 seconds)
  const recentReactions = reactions.filter(
    r => Date.now() - r.timestamp < 10000
  );

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Recent reactions display */}
      {recentReactions.length > 0 && (
        <div className="flex gap-1">
          {recentReactions.slice(-3).map((reaction, index) => (
            <div
              key={`${reaction.timestamp}-${index}`}
              className="animate-bounce text-sm"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: '0.6s',
                animationIterationCount: '1'
              }}
            >
              {reaction.emoji}
            </div>
          ))}
        </div>
      )}

      {/* Reaction picker */}
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0 opacity-60 hover:opacity-100">
            <Smile className="h-3 w-3" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-fit p-2" side="top">
          <div className="grid grid-cols-5 gap-1">
            {EMOJI_OPTIONS.map((emoji) => (
              <Button
                key={emoji}
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-lg hover:bg-muted"
                onClick={() => {
                  onReaction(emoji);
                  setIsOpen(false);
                }}
              >
                {emoji}
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ReactionSystem;