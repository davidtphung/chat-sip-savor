
import React, { useState, useRef, useEffect } from "react";
import { Send, RefreshCw } from "lucide-react";

interface ConversationInputProps {
  onSubmit: (message: string) => void;
  isLoading: boolean;
  onReset: () => void;
}

const ConversationInput: React.FC<ConversationInputProps> = ({
  onSubmit,
  isLoading,
  onReset,
}) => {
  const [message, setMessage] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea as content grows
  useEffect(() => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = "auto";
      textArea.style.height = `${Math.min(textArea.scrollHeight, 200)}px`;
    }
  }, [message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSubmit(message.trim());
      setMessage("");
    }
  };

  return (
    <div className="w-full animate-slide-up [animation-delay:200ms] opacity-0">
      <div className="relative w-full max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative input-glass overflow-hidden">
            <textarea
              ref={textAreaRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share a conversation, describe a mood, or mention flavors you like..."
              className="w-full px-4 py-3 pr-24 resize-none bg-transparent focus:outline-none min-h-[56px] max-h-[200px] placeholder:text-muted-foreground/70"
              rows={1}
              disabled={isLoading}
            />
            <div className="absolute right-2 bottom-2 flex gap-2">
              {message.trim().length > 0 && (
                <button
                  type="submit"
                  disabled={isLoading}
                  className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 disabled:opacity-50"
                  aria-label="Send message"
                >
                  <Send size={18} className={isLoading ? "animate-pulse" : ""} />
                </button>
              )}

              <button
                type="button"
                onClick={onReset}
                className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-200"
                aria-label="Reset conversation"
              >
                <RefreshCw size={18} />
              </button>
            </div>
          </div>
        </form>
        
        <div className="mt-3 text-center">
          <p className="text-sm text-muted-foreground">
            Try: "Sunday brunch with friends" or "Relaxing after a long day at work"
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConversationInput;
