import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/8bit/button";

const Room = () => {
  const { code } = useParams<{ code: string }>();

  useEffect(() => {
    document.title = `Room ${code} — AI Image Party`;
  }, [code]);

  return (
    <main className="container mx-auto min-h-screen px-4 py-16">
      <h1 className="font-display text-2xl">Room {code}</h1>
      <p className="mt-2 text-muted-foreground">This is a demo page. No backend connected.</p>
      <div className="mt-6">
        <Button asChild variant="outline">
          <Link to="/">← Back to Home</Link>
        </Button>
      </div>
    </main>
  );
};

export default Room;
