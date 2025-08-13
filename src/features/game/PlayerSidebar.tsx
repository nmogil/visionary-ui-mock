import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/8bit/card";
import { Crown } from "lucide-react";
import { GamePhase } from "./PhaseContainer";
import StatusBadge from "@/components/presence/StatusBadge";
import TypingIndicator from "@/components/presence/TypingIndicator";
import NetworkLatency from "@/components/presence/NetworkLatency";

export interface SidebarPlayer {
  id: string;
  name: string;
  score: number;
  status?: "thinking" | "writing" | "submitted" | "voting" | "idle";
  isTyping?: boolean;
  latency?: number;
}

interface Props {
  players: SidebarPlayer[];
  cardCzarId: string;
  timeRemaining: number;
  phase: GamePhase;
}

const PlayerSidebar: React.FC<Props> = ({ players, cardCzarId, timeRemaining, phase }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Players
          <span className={`text-xs md:text-sm ${timeRemaining <= 5 ? "pulse" : ""}`}>
            {phase !== "gameOver" ? `${timeRemaining}s left` : ""}
          </span>
        </CardTitle>
        <CardDescription>Scores and current Card Czar</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {players.map((p) => (
            <li key={p.id} className="flex items-start justify-between gap-2">
              <div className="flex items-start gap-2 flex-1 min-w-0">
                <div className="h-7 w-7 rounded-full bg-primary/15 border border-foreground flex items-center justify-center text-xs flex-shrink-0">
                  {p.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm truncate">{p.name}</span>
                    {p.id === cardCzarId && (
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0">
                        <Crown className="h-3.5 w-3.5" /> Czar
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {p.status && <StatusBadge status={p.status} />}
                    {p.isTyping && <TypingIndicator />}
                  </div>
                  {p.latency !== undefined && (
                    <div className="mt-1">
                      <NetworkLatency latency={p.latency} />
                    </div>
                  )}
                </div>
              </div>
              <span className="text-sm font-medium flex-shrink-0">{p.score}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PlayerSidebar;
