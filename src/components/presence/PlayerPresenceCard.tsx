import React from "react";
import { Card, CardContent } from "@/components/ui/8bit/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Crown, Wifi, WifiOff, Eye, EyeOff } from "lucide-react";
import StatusBadge from "./StatusBadge";
import TypingIndicator from "./TypingIndicator";
import NetworkLatency from "./NetworkLatency";
import ReactionSystem from "./ReactionSystem";
import { PresencePlayer } from "./PresenceIndicator";

interface Reaction {
  emoji: string;
  timestamp: number;
}

interface Props {
  player: PresencePlayer;
  showNetworkStatus: boolean;
  reactions: Reaction[];
  onReaction: (emoji: string) => void;
}

const PlayerPresenceCard: React.FC<Props> = ({ 
  player, 
  showNetworkStatus, 
  reactions,
  onReaction 
}) => {
  const formatLastSeen = (date?: Date) => {
    if (!date) return "";
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 1) return "just now";
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return "offline";
  };

  const getConnectionIcon = () => {
    if (!player.isConnected) return <WifiOff className="h-3 w-3 text-destructive" />;
    if (player.latency > 200) return <Wifi className="h-3 w-3 text-warning" />;
    return <Wifi className="h-3 w-3 text-primary" />;
  };

  return (
    <Card className={`relative transition-all duration-300 ${
      !player.isConnected ? 'opacity-60' : ''
    } ${player.isConnected && player.latency < 100 ? 'border-primary/50' : ''}`}>
      <CardContent className="p-3">
        <div className="flex items-start gap-3">
          {/* Avatar with status indicators */}
          <div className="relative">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-primary/10 text-foreground">
                {player.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            
            {/* Connection status dot */}
            <span
              className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-background ${
                player.isConnected ? 'bg-primary' : 'bg-muted-foreground'
              }`}
              aria-label={player.isConnected ? 'connected' : 'disconnected'}
            />
            
            {/* Attention indicator */}
            {player.isTabAway && (
              <div className="absolute -top-1 -left-1 h-3 w-3 rounded-full bg-warning border border-background">
                <EyeOff className="h-2 w-2 text-background" />
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            {/* Name and host badge */}
            <div className="flex items-center gap-2 mb-1">
              <span className="truncate text-sm font-medium">{player.name}</span>
              {player.isHost && (
                <Badge variant="secondary" className="inline-flex items-center gap-1 text-xs">
                  <Crown className="h-3 w-3" /> Host
                </Badge>
              )}
            </div>

            {/* Status badges and indicators */}
            <div className="flex items-center gap-2 mb-2">
              <StatusBadge status={player.status} />
              {player.isTyping && <TypingIndicator />}
            </div>

            {/* Phase and network info */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Phase: {player.phase}</span>
              {showNetworkStatus && (
                <>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    {getConnectionIcon()}
                    <NetworkLatency latency={player.latency} />
                  </div>
                </>
              )}
            </div>

            {/* Last seen for disconnected players */}
            {!player.isConnected && player.lastSeen && (
              <div className="text-xs text-muted-foreground mt-1">
                Last seen: {formatLastSeen(player.lastSeen)}
              </div>
            )}
          </div>
        </div>

        {/* Reactions */}
        <ReactionSystem 
          reactions={reactions}
          onReaction={onReaction}
          className="mt-2"
        />

        {/* Reconnection animation */}
        {!player.isConnected && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-lg">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>Reconnecting...</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PlayerPresenceCard;