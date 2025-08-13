import React, { useEffect, useState } from "react";
import { PresencePlayer } from "./PresenceIndicator";

interface Props {
  players: PresencePlayer[];
}

interface CursorPosition {
  playerId: string;
  name: string;
  x: number;
  y: number;
  color: string;
}

const CursorTracker: React.FC<Props> = ({ players }) => {
  const [cursors, setCursors] = useState<CursorPosition[]>([]);

  // Mock cursor movement - in real app this would come from websocket
  useEffect(() => {
    const colors = ["#8B5CF6", "#F97316", "#10B981", "#EF4444", "#3B82F6"];
    
    const updateCursors = () => {
      const activePlayers = players.filter(p => p.isConnected && !p.isTabAway);
      
      setCursors(activePlayers.map((player, index) => ({
        playerId: player.id,
        name: player.name,
        x: Math.random() * (window.innerWidth - 100),
        y: Math.random() * (window.innerHeight - 100),
        color: colors[index % colors.length]
      })));
    };

    // Update cursor positions every 2-4 seconds
    const interval = setInterval(updateCursors, 2000 + Math.random() * 2000);
    updateCursors(); // Initial position

    return () => clearInterval(interval);
  }, [players]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {cursors.map((cursor) => (
        <div
          key={cursor.playerId}
          className="absolute transition-all duration-1000 ease-out"
          style={{
            left: cursor.x,
            top: cursor.y,
            transform: 'translate(-50%, -50%)'
          }}
        >
          {/* Cursor */}
          <div className="relative">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill={cursor.color}
              className="drop-shadow-md"
            >
              <path d="M5.65376 12.3673H8.33578L11.4052 17.2195C11.7515 17.7266 12.4766 17.6111 12.6684 17.0195L17.6515 2.92832C17.8875 2.1988 17.0526 1.36388 16.3231 1.59996L2.23193 6.58308C1.64035 6.77493 1.52481 7.50001 2.03188 7.84634L7.01188 10.9748L12.0124 6.1L9.94511 12.3673H5.65376Z" />
            </svg>
            
            {/* Name tag */}
            <div
              className="absolute top-5 left-2 px-2 py-1 text-xs text-white rounded shadow-lg whitespace-nowrap"
              style={{ backgroundColor: cursor.color }}
            >
              {cursor.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CursorTracker;