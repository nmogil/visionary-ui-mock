import { Helmet } from "react-helmet-async";
import { Label } from "@/components/ui/label";
import RetroButton from "@/components/retro/RetroButton";
import { RetroCard, RetroCardContent } from "@/components/retro/RetroCard";
import RetroInput from "@/components/retro/RetroInput";
import { Link } from "react-router-dom";

const Login = () => {
  const canonical =
    typeof window !== "undefined"
      ? `${window.location.origin}/login`
      : "/login";

  return (
    <>
      <Helmet>
        <title>Login | AI Image Party</title>
        <meta
          name="description"
          content="Login to AI Image Party to create and join rooms for collaborative AI image fun. Secure sign-in with a retro 8-bit style."
        />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <main className="container mx-auto max-w-md px-4 py-16">
        <section aria-labelledby="login-title">
          <RetroCard className="p-0">
            <RetroCardContent className="space-y-6">
              <header className="space-y-1">
                <h1 id="login-title" className="text-2xl font-bold tracking-tight">
                  Log in
                </h1>
                <p className="text-sm text-muted-foreground">
                  Welcome back! Enter your details to continue.
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
                <div className="flex items-center justify-between text-sm">
                  <div />
                  <a href="#" className="underline underline-offset-4">
                    Forgot password?
                  </a>
                </div>
                <RetroButton type="submit" className="w-full">
                  Log in
                </RetroButton>
              </form>

              <p className="text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="underline underline-offset-4">
                  Sign up
                </Link>
              </p>
            </RetroCardContent>
          </RetroCard>
        </section>
      </main>
    </>
  );
};

export default Login;
