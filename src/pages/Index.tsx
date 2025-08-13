import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LandingPage from "./LandingPage";

const Index = () => {
  useEffect(() => {
    // Canonical H1 is inside HeroSection
  }, []);

  return (
    <div>
      <LandingPage />
      
      {/* Demo Links Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Component Demos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Image Grid</CardTitle>
                <CardDescription>
                  Responsive image gallery with filtering, sorting, and drag-to-reorder
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/image-grid-demo">
                  <Button className="w-full">View Demo</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
