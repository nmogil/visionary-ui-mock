import { RetroCard as Card, RetroCardContent as CardContent } from "@/components/retro/RetroCard";
import { Users, Sparkles, Trophy } from "lucide-react";

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="container mx-auto px-4 py-16">
      <h2 className="font-display mb-8 text-center text-2xl md:text-3xl">Ready to laugh?</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md animate-fade-in motion-reduce:animate-none motion-reduce:transform-none" style={{ animationDelay: "0ms" }}>
          <CardContent className="flex items-start gap-4 p-6">
            <Users className="mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Create or Join</h3>
              <p className="text-sm text-muted-foreground">Start a room or join with a code</p>
            </div>
          </CardContent>
        </Card>
        <Card className="transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md animate-fade-in motion-reduce:animate-none motion-reduce:transform-none" style={{ animationDelay: "75ms" }}>
          <CardContent className="flex items-start gap-4 p-6">
            <Sparkles className="mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Generate Images</h3>
              <p className="text-sm text-muted-foreground">Use AI to create images matching the prompt</p>
            </div>
          </CardContent>
        </Card>
        <Card className="transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md animate-fade-in motion-reduce:animate-none motion-reduce:transform-none" style={{ animationDelay: "150ms" }}>
          <CardContent className="flex items-start gap-4 p-6">
            <Trophy className="mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Vote & Win</h3>
              <p className="text-sm text-muted-foreground">Card Czar picks the winner each round</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HowItWorksSection;
