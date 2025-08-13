import { useState, useEffect, useCallback } from "react";

interface Reaction {
  emoji: string;
  timestamp: number;
}

interface PresenceState {
  reactions: Record<string, Reaction[]>;
}

export const usePresence = () => {
  const [state, setState] = useState<PresenceState>({
    reactions: {}
  });

  // Clean up old reactions every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setState(prev => ({
        ...prev,
        reactions: Object.fromEntries(
          Object.entries(prev.reactions).map(([playerId, reactions]) => [
            playerId,
            reactions.filter(r => Date.now() - r.timestamp < 15000)
          ])
        )
      }));
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const addReaction = useCallback((playerId: string, emoji: string) => {
    setState(prev => ({
      ...prev,
      reactions: {
        ...prev.reactions,
        [playerId]: [
          ...(prev.reactions[playerId] || []),
          { emoji, timestamp: Date.now() }
        ]
      }
    }));
  }, []);

  return {
    reactions: state.reactions,
    addReaction
  };
};