import { Helmet } from "react-helmet-async";
import { Label } from "@/components/ui/label";
import RetroButton from "@/components/retro/RetroButton";
import { RetroCard, RetroCardContent } from "@/components/retro/RetroCard";
import RetroInput from "@/components/retro/RetroInput";
import { Link } from "react-router-dom";

const Signup = () => {
  const canonical =
    typeof window !== "undefined"
      ? `${window.location.origin}/signup`
      : "/signup";

  return (
    <>
      <Helmet>
        <title>Sign Up | AI Image Party</title>
        <meta
          name="description"
          content="Create your AI Image Party account to start hosting and joining rooms. Retro 8-bit sign up form with accessible design."
        />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <main className="container mx-auto max-w-md px-4 py-16">
        <section aria-labelledby="signup-title">
          <RetroCard className="p-0">
            <RetroCardContent className="space-y-6">
              <header className="space-y-1">
                <h1 id="signup-title" className="text-2xl font-bold tracking-tight">
                  Create an account
                </h1>
                <p className="text-sm text-muted-foreground">
                  Join AI Image Party in just a few seconds.
                </p>
              </header>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <RetroInput id="email" name="email" type="email" required placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <RetroInput id="password" name="password" type="password" required placeholder="••••••••" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm">Confirm password</Label>
                  <RetroInput id="confirm" name="confirm" type="password" required placeholder="••••••••" />
                </div>
                <RetroButton type="submit" className="w-full">
                  Sign up
                </RetroButton>
              </form>

              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="underline underline-offset-4">
                  Log in
                </Link>
              </p>
            </RetroCardContent>
          </RetroCard>
        </section>
      </main>
    </>
  );
};

export default Signup;
