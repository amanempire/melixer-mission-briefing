
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const FloatingCTA = () => {
  const scrollToForm = () => {
    document.getElementById("beta-signup-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button 
        onClick={scrollToForm}
        className="bg-gradient hover:opacity-90 transition-all shadow-lg rounded-full glow-border"
      >
        Apply to Beta <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
};

export default FloatingCTA;
