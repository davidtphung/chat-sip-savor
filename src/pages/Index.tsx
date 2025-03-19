
import React, { useState } from "react";
import Layout from "@/components/Layout";
import ConversationInput from "@/components/ConversationInput";
import DrinkResult from "@/components/DrinkResult";
import { DrinkDetails } from "@/components/DrinkResult";
import { generateDrink } from "@/utils/drinkGenerator";
import { Wine, Coffee } from "lucide-react";

const Index = () => {
  const [conversation, setConversation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [drinkType, setDrinkType] = useState<"alcoholic" | "non-alcoholic">("alcoholic");
  const [drinkResult, setDrinkResult] = useState<DrinkDetails | null>(null);

  const handleSubmit = (message: string) => {
    setConversation(message);
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const drink = generateDrink(message, drinkType === "alcoholic");
      setDrinkResult(drink);
      setIsLoading(false);
    }, 1500);
  };

  const handleReset = () => {
    setConversation("");
    setDrinkResult(null);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center space-y-12 py-8">
        <section className="text-center max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl font-medium tracking-tight mb-4">
            From Conversation to Drink
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Share a snippet of conversation, a mood, or an occasion, and we'll suggest the perfect drink for the moment.
          </p>
        </section>

        <section className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8 animate-slide-up opacity-0 [animation-delay:100ms]">
            <div className="inline-flex p-1 bg-secondary rounded-xl">
              <button
                onClick={() => setDrinkType("alcoholic")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  drinkType === "alcoholic"
                    ? "bg-white dark:bg-black shadow-sm"
                    : "hover:bg-white/50 dark:hover:bg-white/10"
                }`}
              >
                <Wine size={18} />
                <span>Alcoholic</span>
              </button>
              <button
                onClick={() => setDrinkType("non-alcoholic")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  drinkType === "non-alcoholic"
                    ? "bg-white dark:bg-black shadow-sm"
                    : "hover:bg-white/50 dark:hover:bg-white/10"
                }`}
              >
                <Coffee size={18} />
                <span>Non-Alcoholic</span>
              </button>
            </div>
          </div>

          <ConversationInput
            onSubmit={handleSubmit}
            isLoading={isLoading}
            onReset={handleReset}
          />

          {isLoading && (
            <div className="mt-12 text-center animate-fade-in">
              <div className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-secondary">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary/30 border-t-primary"></div>
                <span>Creating your perfect drink...</span>
              </div>
            </div>
          )}

          {drinkResult && !isLoading && (
            <div className="mt-12">
              <DrinkResult drink={drinkResult} />
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default Index;
