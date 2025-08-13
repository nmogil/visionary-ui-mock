import React from "react";
import { Button } from "@/components/ui/8bit/button";
import { Input } from "@/components/ui/8bit/input";
import PromptPhase from "./phases/PromptPhase";
import GeneratingPhase from "./phases/GeneratingPhase";

export type GamePhase = "prompting" | "generating" | "voting" | "results" | "gameOver";

export interface Player { id: string; name: string; score: number }
export interface Submission { playerId: string; prompt: string; imageUrl: string | null }

interface Props {
  phase: GamePhase;
  timeRemaining: number;
  currentQuestion: string;
  players: Player[];
  submissions: Submission[];
  generatedImages: string[];
  selectedWinner: number | null;
  cardCzarId: string;
  currentUserId: string;
  onSubmitPrompt: (prompt: string) => void;
  onVote: (index: number) => void;
}

const PhaseContainer: React.FC<Props> = (props) => {
  const { phase } = props;
  if (phase === "prompting") return <PromptPhase {...props} />;
  if (phase === "generating") return <GeneratingPhase players={props.players} timeRemaining={props.timeRemaining} />;
  if (phase === "voting") return <VotingPhase {...props} />;
  if (phase === "results") return <ResultsPhase {...props} />;
  return <GameOverPhase {...props} />;
};

export default PhaseContainer;



// Voting Phase
const VotingPhase: React.FC<Props> = ({ currentQuestion, generatedImages, onVote, cardCzarId, currentUserId }) => {
  const isCzar = cardCzarId === currentUserId;
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base md:text-lg font-medium">{currentQuestion}</h2>
        <span className="text-xs text-muted-foreground">{isCzar ? "You're the Card Czar" : "Waiting for Card Czar…"}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {generatedImages.map((src, i) => (
          <button
            key={i}
            className={`relative aspect-square overflow-hidden rounded-none border-2 border-foreground bg-card ${isCzar ? "hover-scale" : "opacity-80 cursor-not-allowed"}`}
            onClick={() => isCzar && onVote(i)}
            disabled={!isCzar}
            aria-label={`Vote image ${i + 1}`}
          >
            <img src={src} alt={`Generated image ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

// Results Phase
const ResultsPhase: React.FC<Props> = ({ generatedImages, selectedWinner, players }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-base md:text-lg font-medium">Round Results</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {generatedImages.map((src, i) => (
          <div
            key={i}
            className={`relative aspect-square overflow-hidden rounded-none border-2 ${i === selectedWinner ? "border-primary" : "border-foreground"}`}
          >
            <img src={src} alt={`Result image ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-background/80 px-2 py-1 text-xs flex items-center justify-between">
              <span>{players[i]?.name ?? `Player ${i + 1}`}</span>
              {i === selectedWinner && <span className="text-primary">+1 point</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Game Over Phase
const GameOverPhase: React.FC<Props> = ({ players }) => {
  const sorted = [...players].sort((a, b) => b.score - a.score);
  return (
    <div className="space-y-4">
      <h2 className="text-base md:text-lg font-medium">🎉 {sorted[0]?.name} is the champion!</h2>
      <div>
        <ol className="list-decimal pl-5 space-y-1">
          {sorted.map((p) => (
            <li key={p.id} className="flex items-center justify-between">
              <span>{p.name}</span>
              <span className="font-medium">{p.score}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="flex gap-2">
        <Button onClick={() => (window.location.href = "/room/ABCDEF")}>Play Again</Button>
        <Button variant="outline" onClick={() => (window.location.href = "/")}>Back to Home</Button>
      </div>
    </div>
  );
};
