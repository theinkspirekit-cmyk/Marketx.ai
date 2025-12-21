import { useState } from "react";
import { MessageCircle, X, Send, Settings } from "lucide-react";

// Default webhook URL - can be configured
const DEFAULT_WEBHOOK_URL = "https://dheekshit19.app.n8n.cloud/webhook/website-chat";

interface ChatWidgetProps {
  onBookCallClick: () => void;
}

const ChatWidget = ({ onBookCallClick }: ChatWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState(DEFAULT_WEBHOOK_URL);
  const [messages, setMessages] = useState([
    {
      text: "Hi! 👋 I'm here to help you learn about our automation services. Ask me anything!",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const quickReplies = ["How does it work?", "Pricing information", "Book a call", "Success stories"];

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { text: userMessage, sender: "user" }]);
    setInput("");
    setIsLoading(true);

    // Handle book call locally
    if (userMessage.toLowerCase().includes("book") && userMessage.toLowerCase().includes("call")) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: "Great! Opening our calendar for you...", sender: "bot" }]);
        setIsLoading(false);
        onBookCallClick();
        setIsOpen(false);
      }, 500);
      return;
    }

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          message: userMessage,
          source: window.location.origin,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const botResponse = data.response || data.message || data.output || "Thanks for your message! We'll get back to you soon.";
        setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
      } else {
        setMessages((prev) => [...prev, { text: "Thanks for your message! We'll get back to you soon.", sender: "bot" }]);
      }
    } catch (error) {
      console.error("Error sending to webhook:", error);
      setMessages((prev) => [...prev, { text: "Thanks for your message! We'll get back to you soon.", sender: "bot" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = (reply: string) => {
    setInput(reply);
    setTimeout(() => handleSend(), 0);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 md:w-16 md:h-16 glass-button-primary text-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group rounded-full text-xs"
      >
        {isOpen ? (
          <X className="w-6 h-6 md:w-7 md:h-7" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full pulse-glow"></div>
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-[90vw] md:w-96 h-[500px] glass-card rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="glass-button-primary text-foreground p-4 flex items-center justify-between border-b border-white/10">
            <div>
              <h3 className="font-semibold">Automation Assistant</h3>
              <p className="text-xs opacity-90">Usually replies instantly</p>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="hover:bg-white/10 rounded-full p-1 transition-colors"
              >
                <Settings className="w-5 h-5" />
              </button>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 rounded-full p-1 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Settings Panel */}
          {showSettings && (
            <div className="p-4 border-b border-border bg-background/50">
              <label className="text-xs text-muted-foreground mb-2 block">Webhook URL</label>
              <input
                type="text"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                placeholder="https://hooks.zapier.com/..."
                className="w-full glass-input text-foreground px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <p className="text-xs text-muted-foreground mt-2">Messages will be sent to this webhook</p>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.sender === "user" ? "glass-button-primary text-foreground" : "glass-input text-foreground"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="glass-input text-foreground max-w-[80%] rounded-2xl px-4 py-2">
                  <p className="text-sm">Typing...</p>
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {quickReplies.map((reply, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs glass-input hover:border-white/20 text-foreground px-3 py-1.5 rounded-full transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your question..."
                className="flex-1 glass-input text-foreground px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                onClick={handleSend}
                className="glass-button-primary text-foreground w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
