import React from "react";
import { Card, CardContent } from "@/components/ui/8bit/card";
import PlayerPresenceCard from "./PlayerPresenceCard";
import CursorTracker from "./CursorTracker";
import { usePresence } from "@/hooks/usePresence";

export interface PresencePlayer {
  id: string;
  name: string;
  isHost?: boolean;
  isConnected: boolean;
  status: "thinking" | "writing" | "submitted" | "voting" | "idle";
  phase: string;
  isTyping: boolean;
  lastSeen?: Date;
  latency: number;
  isTabAway: boolean;
  cursorPosition?: { x: number; y: number };
}

interface Props {
  players: PresencePlayer[];
  showCursors?: boolean;
  showNetworkStatus?: boolean;
  className?: string;
}

const PresenceIndicator: React.FC<Props> = ({ 
  players, 
  showCursors = false, 
  showNetworkStatus = true,
  className = ""
}) => {
  const { reactions, addReaction } = usePresence();

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Cursor tracking overlay for lobby */}
      {showCursors && <CursorTracker players={players} />}
      
      {/* Players presence cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {players.map((player) => (
          <PlayerPresenceCard
            key={player.id}
            player={player}
            showNetworkStatus={showNetworkStatus}
            reactions={reactions[player.id] || []}
            onReaction={(emoji) => addReaction(player.id, emoji)}
          />
        ))}
      </div>
    </div>
  );
};

export default PresenceIndicator;