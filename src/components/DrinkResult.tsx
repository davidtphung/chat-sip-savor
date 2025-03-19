
import React, { useState } from "react";
import { Download, Share2, Heart, Clock, Wine } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export interface DrinkDetails {
  name: string;
  isAlcoholic: boolean;
  ingredients: string[];
  steps: string[];
  timeToMake: string;
  imageUrl: string;
}

interface DrinkResultProps {
  drink: DrinkDetails;
  className?: string;
}

const DrinkResult: React.FC<DrinkResultProps> = ({ drink, className }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(
      !isFavorite ? "Added to favorites!" : "Removed from favorites!"
    );
  };

  const shareResult = () => {
    // In a real app, we would implement actual sharing functionality
    toast.success("Sharing functionality coming soon!");
  };

  const downloadImage = () => {
    // In a real app, we would implement actual download functionality
    toast.success("Download functionality coming soon!");
  };

  return (
    <div
      className={cn(
        "w-full opacity-0 card-glass p-6 md:p-8",
        imageLoaded ? "animate-scale" : "",
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                {drink.isAlcoholic ? "Alcoholic" : "Non-Alcoholic"}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full flex items-center gap-1 bg-secondary text-secondary-foreground">
                <Clock size={12} />
                {drink.timeToMake}
              </span>
            </div>
            <h2 className="text-2xl font-medium">{drink.name}</h2>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Ingredients</h3>
            <ul className="space-y-2">
              {drink.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/80" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Steps</h3>
            <ol className="space-y-3">
              {drink.steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-none mt-0.5 h-6 w-6 rounded-full bg-secondary flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-secondary/50">
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary/30 border-t-primary" />
              </div>
            )}
            <img
              src={drink.imageUrl || "/placeholder.svg"}
              alt={drink.name}
              className={cn(
                "h-full w-full object-cover transition-opacity duration-500",
                imageLoaded ? "opacity-100" : "opacity-0"
              )}
              onLoad={() => setImageLoaded(true)}
            />
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={toggleFavorite}
              className="p-3 rounded-xl hover:bg-secondary/80 transition-all duration-200"
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart
                size={20}
                className={isFavorite ? "fill-red-500 text-red-500" : ""}
              />
            </button>
            <button
              onClick={shareResult}
              className="p-3 rounded-xl hover:bg-secondary/80 transition-all duration-200"
              aria-label="Share drink"
            >
              <Share2 size={20} />
            </button>
            <button
              onClick={downloadImage}
              className="p-3 rounded-xl hover:bg-secondary/80 transition-all duration-200"
              aria-label="Download image"
            >
              <Download size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkResult;
