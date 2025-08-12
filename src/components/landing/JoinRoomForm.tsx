import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/8bit/button";
import { LogIn } from "lucide-react";

const handleJoinRoom = (code: string) => {
  if (!/^[A-Z]{6}$/.test(code)) {
    alert("Please enter a valid 6-letter code");
    return;
  }
  console.log("Joining room:", code);
  window.location.href = `/room/${code}`;
};

export const JoinRoomForm = () => {
  const [code, setCode] = useState("");

  return (
    <form
      className="flex w-full items-center gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        handleJoinRoom(code);
      }}
    >
      <Input
        aria-label="Room code"
        placeholder="Enter 6-letter code"
        value={code}
        maxLength={6}
        onChange={(e) => {
          const next = e.target.value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 6);
          setCode(next);
        }}
        className="h-12 text-center tracking-[0.1em] uppercase md:h-12"
      />
      <Button type="submit" variant="outline" size="xl" aria-label="Join with code">
        <LogIn />
        Join
      </Button>
    </form>
  );
};

export default JoinRoomForm;
