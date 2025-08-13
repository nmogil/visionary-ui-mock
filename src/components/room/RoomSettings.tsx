'use client'

import type React from "react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/8bit/card";
import { Label } from "@/components/ui/8bit/label";
import { Slider } from "@/components/ui/8bit/slider";

export default function RoomSettings({ className, ...props }: React.ComponentProps<"div">) {
  const [timer, setTimer] = useState(30);
  const [rounds, setRounds] = useState(10);
  const [maxPlayers, setMaxPlayers] = useState(8);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">Room Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <Label htmlFor="timer">Timer</Label>
            <Slider
              id="timer"
              defaultValue={[30]}
              min={15}
              max={120}
              step={15}
              className="w-full"
              onChange={(value) => setTimer(value[0])}
            />
            <div className="text-sm font-medium text-green-500">{timer}s / round</div>
          </div>
          <div className="space-y-4">
            <Label htmlFor="rounds">Rounds</Label>
            <Slider
              id="rounds"
              defaultValue={[10]}
              min={1}
              max={20}
              step={1}
              className="w-full"
              onChange={(value) => setRounds(value[0])}
            />
            <div className="text-sm font-medium text-green-500">{rounds} rounds</div>
          </div>
          <div className="space-y-4">
            <Label htmlFor="maxPlayers">Max Players</Label>
            <Slider
              id="maxPlayers"
              defaultValue={[8]}
              min={2}
              max={16}
              step={1}
              className="w-full"
              onChange={(value) => setMaxPlayers(value[0])}
            />
            <div className="text-sm font-medium text-green-500">{maxPlayers}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
