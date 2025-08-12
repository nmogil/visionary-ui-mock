import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

// Mock function - just for demonstration
const handleCreateRoom = () => {
  const code = "ABCDEF"; // fixed code for demo
  console.log("Creating room with code:", code);
  window.location.href = `/room/${code}`;
};

export const CreateRoomButton = () => {
  return (
    <Button variant="hero" size="xl" onClick={handleCreateRoom} aria-label="Create Room">
      <Play />
      Create Room
    </Button>
  );
};

export default CreateRoomButton;
