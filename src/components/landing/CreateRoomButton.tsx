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
    <Button size="xl" variant="outline" onClick={handleCreateRoom} aria-label="Create Room" className="motion-reduce:transform-none border-b-4 border-transparent pt-2 focus:border-y-4 focus:border-foreground focus:dark:border-ring focus:border-dashed">
      <Play />
      Create Room
    </Button>
  );
};

export default CreateRoomButton;
