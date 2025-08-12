import RetroButton from "@/components/retro/RetroButton";
import { Play } from "lucide-react";

// Mock function - just for demonstration
const handleCreateRoom = () => {
  const code = "ABCDEF"; // fixed code for demo
  console.log("Creating room with code:", code);
  window.location.href = `/room/${code}`;
};

export const CreateRoomButton = () => {
  return (
    <RetroButton size="xl" onClick={handleCreateRoom} aria-label="Create Room" className="motion-reduce:transform-none">
      <Play />
      Create Room
    </RetroButton>
  );
};

export default CreateRoomButton;
