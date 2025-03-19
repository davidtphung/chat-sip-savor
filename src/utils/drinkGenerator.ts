import { DrinkDetails } from "@/components/DrinkResult";

// In a real app, this would use an API to generate drinks based on conversation
// For now, we'll simulate the process with some pre-defined drinks and logic

const alcoholicDrinks: DrinkDetails[] = [
  {
    name: "Sunset Conversation",
    isAlcoholic: true,
    ingredients: [
      "2 oz Vodka",
      "1 oz Fresh lemon juice",
      "0.5 oz Simple syrup",
      "0.5 oz Grenadine",
      "Soda water",
      "Lemon twist for garnish",
    ],
    steps: [
      "Fill a shaker with ice",
      "Add vodka, lemon juice, and simple syrup",
      "Shake well until chilled",
      "Strain into a tall glass filled with ice",
      "Slowly pour grenadine down the side of the glass",
      "Top with soda water",
      "Garnish with a lemon twist",
    ],
    timeToMake: "5 minutes",
    imageUrl: "https://images.unsplash.com/photo-1609951651556-5334e2706168?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "This vibrant sunset-colored drink perfectly complements relaxed evening conversations, with a balance of sweet and tart notes that help ease into meaningful discussions.",
  },
  {
    name: "Midnight Whisper",
    isAlcoholic: true,
    ingredients: [
      "2 oz Bourbon",
      "0.75 oz Sweet vermouth",
      "2 dashes Angostura bitters",
      "1 Cherry for garnish",
      "Orange peel for garnish",
    ],
    steps: [
      "Add bourbon, sweet vermouth, and bitters to a mixing glass with ice",
      "Stir until well-chilled",
      "Strain into a chilled coupe glass",
      "Garnish with a cherry and orange peel",
    ],
    timeToMake: "3 minutes",
    imageUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Inspired by deep, intimate late-night talks, this bourbon-based cocktail has a rich complexity that unfolds slowly, much like a meaningful conversation.",
  },
  {
    name: "Urban Legend",
    isAlcoholic: true,
    ingredients: [
      "2 oz Gin",
      "0.75 oz Fresh lime juice",
      "0.5 oz Simple syrup",
      "6-8 Mint leaves",
      "Club soda",
      "Mint sprig for garnish",
    ],
    steps: [
      "Gently muddle mint leaves in a shaker",
      "Add gin, lime juice, and simple syrup with ice",
      "Shake vigorously",
      "Double-strain into a highball glass with ice",
      "Top with club soda",
      "Garnish with mint sprig",
    ],
    timeToMake: "4 minutes",
    imageUrl: "https://images.unsplash.com/photo-1551734413-5943d61e982f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Perfect for lively group conversations in urban settings, this refreshing gin cocktail with bright citrus and mint notes keeps the stories flowing.",
  },
];

const nonAlcoholicDrinks: DrinkDetails[] = [
  {
    name: "Thoughtful Breeze",
    isAlcoholic: false,
    ingredients: [
      "3 oz Fresh orange juice",
      "2 oz Cranberry juice",
      "1 oz Lime juice",
      "0.5 oz Honey syrup",
      "Club soda",
      "Orange slice for garnish",
    ],
    steps: [
      "Fill a shaker with ice",
      "Add orange juice, cranberry juice, lime juice, and honey syrup",
      "Shake well",
      "Strain into a glass filled with ice",
      "Top with club soda",
      "Garnish with an orange slice",
    ],
    timeToMake: "3 minutes",
    imageUrl: "https://images.unsplash.com/photo-1621263764899-fc3b3d789520?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Created for thoughtful discussions, this refreshing blend of fruit juices promotes clarity and focus while the honey adds a touch of sweetness to keep the conversation flowing.",
  },
  {
    name: "Morning Inspiration",
    isAlcoholic: false,
    ingredients: [
      "1 cup Cold brew coffee",
      "0.5 cup Almond milk",
      "1 tbsp Maple syrup",
      "0.25 tsp Vanilla extract",
      "Ice cubes",
      "Cinnamon for garnish",
    ],
    steps: [
      "Mix cold brew coffee, almond milk, maple syrup, and vanilla extract in a glass",
      "Stir well to combine",
      "Add ice cubes",
      "Sprinkle with cinnamon",
    ],
    timeToMake: "2 minutes",
    imageUrl: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Designed for morning brainstorming sessions, this coffee-based beverage balances energy with the calming effects of vanilla and cinnamon to inspire creative thinking.",
  },
  {
    name: "Mindful Moment",
    isAlcoholic: false,
    ingredients: [
      "1 cup Coconut water",
      "0.5 cup Watermelon juice",
      "0.5 oz Lime juice",
      "0.5 oz Agave nectar",
      "Mint leaves",
      "Ice cubes",
      "Watermelon slice for garnish",
    ],
    steps: [
      "Muddle a few mint leaves in the bottom of a glass",
      "Fill the glass with ice cubes",
      "Add coconut water, watermelon juice, lime juice, and agave nectar",
      "Stir gently to combine",
      "Garnish with watermelon slice and mint",
    ],
    timeToMake: "4 minutes",
    imageUrl: "https://images.unsplash.com/photo-1546171753-97d7676e4602?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Created for mindful, present conversations, this hydrating blend of coconut water and watermelon provides a refreshing backdrop for genuine connection.",
  },
];

export const generateDrink = (
  conversation: string,
  isAlcoholic: boolean
): DrinkDetails => {
  // In a real app, this would use NLP to analyze the conversation
  // and generate a relevant drink based on the content
  
  const availableDrinks = isAlcoholic ? alcoholicDrinks : nonAlcoholicDrinks;
  
  // Analyze the conversation text to choose a more relevant drink
  // For demo purposes, we'll use simple keyword matching
  const conversationLower = conversation.toLowerCase();
  
  // Try to find a drink that matches keywords in the conversation
  const keywords = {
    "evening": 0, "sunset": 0, "relax": 0,
    "night": 1, "deep": 1, "serious": 1,
    "fun": 2, "friend": 2, "gathering": 2,
    "morning": 0, "work": 0, "thinking": 0,
    "creative": 1, "coffee": 1, "brainstorm": 1,
    "calm": 2, "peaceful": 2, "mindful": 2
  };
  
  let bestMatchIndex = Math.floor(Math.random() * availableDrinks.length); // Default to random
  let bestMatchScore = 0;
  
  Object.entries(keywords).forEach(([keyword, drinkIndex]) => {
    if (conversationLower.includes(keyword)) {
      const matchScore = conversationLower.split(keyword).length - 1;
      if (matchScore > bestMatchScore) {
        bestMatchScore = matchScore;
        bestMatchIndex = drinkIndex;
      }
    }
  });
  
  // Generate a custom description based on the conversation if we're not using a pre-existing one
  const selectedDrink = { ...availableDrinks[bestMatchIndex] };
  
  // If no strong match was found, add a generic context-based description
  if (bestMatchScore === 0) {
    // Keep the existing description as it's already good
  } else {
    // Enhance the existing description with conversation context
    selectedDrink.description = `Based on your conversation about "${conversation.slice(0, 30)}...", ${selectedDrink.description}`;
  }
  
  return selectedDrink;
};
