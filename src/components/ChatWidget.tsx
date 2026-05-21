import { useState } from "react";
import { MessageCircle, X, Send, Settings } from "lucide-react";

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
        headers: { "Content-Type": "application/json" },
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
        className="fixed bottom-6 right-6 z-40 w-14 h-14 md:w-16 md:h-16 bg-white text-black rounded-full shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)] hover:bg-white/90 transition-all flex items-center justify-center"
      >
        {isOpen ? (
          <X className="w-6 h-6 md:w-7 md:h-7" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full ring-2 ring-background" />
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-[90vw] md:w-96 h-[520px] rounded-2xl flex flex-col overflow-hidden bg-[#0F0F0F] border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="px-4 py-4 flex items-center justify-between border-b border-white/10 bg-[#141414]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm">M</div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">Automation Assistant</h3>
                <p className="text-[11px] text-foreground/50 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Usually replies instantly
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="text-foreground/60 hover:text-foreground hover:bg-white/5 rounded-full p-1.5 transition-colors"
              >
                <Settings className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-foreground/60 hover:text-foreground hover:bg-white/5 rounded-full p-1.5 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Settings Panel */}
          {showSettings && (
            <div className="p-4 border-b border-white/10 bg-[#0A0A0A]">
              <label className="text-xs text-foreground/50 mb-2 block">Webhook URL</label>
              <input
                type="text"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                placeholder="https://..."
                className="w-full bg-[#141414] border border-white/10 text-foreground px-3 py-2 rounded-lg text-sm focus:outline-none focus:border-white/30"
              />
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-white text-black rounded-br-md"
                      : "bg-[#1A1A1A] text-foreground border border-white/5 rounded-bl-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#1A1A1A] border border-white/5 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="px-4 pb-3 flex flex-wrap gap-2">
              {quickReplies.map((reply, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs bg-[#1A1A1A] border border-white/10 hover:border-white/25 hover:bg-[#222] text-foreground/80 px-3 py-1.5 rounded-full transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-white/10 bg-[#0A0A0A]">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your question..."
                className="flex-1 bg-[#141414] border border-white/10 text-foreground placeholder:text-foreground/40 px-4 py-2.5 rounded-full text-sm focus:outline-none focus:border-white/30"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0"
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
