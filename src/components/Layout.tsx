
import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";
import { ExternalLink, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background transition-colors duration-300 flex flex-col">
        <header className="w-full px-6 py-4 border-b border-border/40 backdrop-blur-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-lg font-medium">CD</span>
              </div>
              <h1 className="text-lg font-medium tracking-tight">
                Convo to Drink
              </h1>
            </div>
            <ThemeToggle />
          </div>
        </header>
        <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-8">
          {children}
        </main>
        <footer className="w-full border-t border-border/40 py-4 px-6">
          <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              Presented by{" "}
              <a
                href="https://x.com/davidtphung"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
              >
                David T Phung
              </a>{" "}
              • Powered by{" "}
              <a
                href="https://davidtphung.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
              >
                NLT143
              </a>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="px-2 h-8 flex items-center gap-1"
                      asChild
                    >
                      <a
                        href="https://warpcast.com/davidtphung"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Warpcast Profile"
                      >
                        <span>Warpcast</span>
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Visit me on Warpcast</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="px-2 h-8 flex items-center gap-1"
                      asChild
                    >
                      <a
                        href="https://youtube.com/playlist?list=PLqchICbseuRpn8PqBDDXwnpAp5MI-9-zN&si=_HIPzt7cMObwWsuX"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube Podcast"
                      >
                        <span>Podcast</span>
                        <Youtube size={16} />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Check out my podcast on YouTube</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
