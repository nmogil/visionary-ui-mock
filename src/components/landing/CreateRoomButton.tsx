import { Button } from "@/components/ui/8bit/button";
import { Play } from "lucide-react";

// Mock function - just for demonstration
const handleCreateRoom = () => {
  const code = "ABCDEF"; // fixed code for demo
  console.log("Creating room with code:", code);
  window.location.href = `/room/${code}`;
};

export const CreateRoomButton = () => {
  return (
    <Button size="xl" onClick={handleCreateRoom} aria-label="Create Room" className="motion-reduce:transform-none">
      <Play />
      Create Room
    </Button>
  );
};

export default CreateRoomButton;
