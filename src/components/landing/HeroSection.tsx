import CreateRoomButton from "./CreateRoomButton";
import JoinRoomForm from "./JoinRoomForm";
import TypewriterText from "@/components/animation/TypewriterText";
const mockStats = {
  gamesPlayed: 1234,
  imagesGenerated: 5678,
  playersOnline: 89,
};

export const HeroSection = () => {
  return (
    <header className="relative flex min-h-[92vh] items-center justify-center bg-background">
      <div className="absolute inset-0 bg-checker opacity-20" aria-hidden="true" />
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <h1
          className="font-display text-3xl leading-tight md:text-4xl lg:text-5xl animate-fade-in motion-reduce:animate-none"
          style={{ animationDelay: "0ms" }}
        >
          <TypewriterText text="AI Image Party" delay={0} />
        </h1>
        <p
          className="mx-auto mt-4 max-w-2xl text-muted-foreground animate-fade-in motion-reduce:animate-none"
          style={{ animationDelay: "100ms" }}
        >
          <TypewriterText
            text="Generate hilarious AI images to match crazy prompts with friends"
            delay={0.2}
            speed={0.02}
          />
        </p>

        <div
          className="mx-auto mt-8 flex w-full max-w-3xl flex-col items-stretch gap-3 md:flex-row md:items-center animate-fade-in motion-reduce:animate-none"
          style={{ animationDelay: "200ms" }}
        >
          <div className="flex-1">
            <CreateRoomButton />
          </div>
          <div className="flex-1">
            <JoinRoomForm />
          </div>
        </div>

        <a href="#how-it-works" className="mt-6 inline-block text-sm text-muted-foreground hover:underline">
          See how it works ↓
        </a>

        <div
          className="mt-10 grid grid-cols-1 gap-4 text-sm text-muted-foreground sm:grid-cols-3 animate-fade-in motion-reduce:animate-none"
          style={{ animationDelay: "300ms" }}
        >
          <div>
            <span className="font-semibold text-foreground">{mockStats.gamesPlayed.toLocaleString()}</span> games played today
          </div>
          <div>
            <span className="font-semibold text-foreground">{mockStats.imagesGenerated.toLocaleString()}</span> images generated
          </div>
          <div>
            <span className="font-semibold text-foreground">{mockStats.playersOnline.toLocaleString()}</span> players online
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
