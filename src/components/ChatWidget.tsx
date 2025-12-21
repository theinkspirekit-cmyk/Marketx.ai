import { useState } from "react";
import { MessageCircle, X, Send, Settings } from "lucide-react";

// Default webhook URL - can be configured
const DEFAULT_WEBHOOK_URL = "";

interface ChatWidgetProps {
  onBookCallClick: () => void;
}

const ChatWidget = ({
  onBookCallClick
}: ChatWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState(DEFAULT_WEBHOOK_URL);
  const [messages, setMessages] = useState([{
    text: "Hi! 👋 I'm here to help you learn about our automation services. Ask me anything!",
    sender: "bot"
  }]);
  const [input, setInput] = useState("");
  const quickReplies = ["How does it work?", "Pricing information", "Book a call", "Success stories"];

  const sendToWebhook = async (userMessage: string, botResponse: string) => {
    if (!webhookUrl) return;
    
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          userMessage,
          botResponse,
          source: window.location.origin,
        }),
      });
      console.log("Webhook triggered successfully");
    } catch (error) {
      console.error("Error triggering webhook:", error);
    }
  };
  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = {
      text: input,
      sender: "user"
    };
    setMessages([...messages, userMessage]);

    // Simple bot responses
    const currentInput = input;
    setTimeout(() => {
      let botResponse = "";
      const lowerInput = currentInput.toLowerCase();
      if (lowerInput.includes("price") || lowerInput.includes("cost")) {
        botResponse = "Our pricing is customized based on your needs. Most automations range from $500-$2000. Book a free call to get an exact quote tailored to your business.";
      } else if (lowerInput.includes("how") || lowerInput.includes("work")) {
        botResponse = "We follow 3 simple steps: 1) Free strategy call to identify opportunities, 2) Build custom automations within 48 hours, 3) Train your team and optimize. Want to book a call?";
      } else if (lowerInput.includes("book") || lowerInput.includes("call") || lowerInput.includes("schedule")) {
        botResponse = "Great! I'll open our calendar for you. Click the button below to choose a time that works for you.";
        setTimeout(() => {
          onBookCallClick();
          setIsOpen(false);
        }, 1000);
      } else if (lowerInput.includes("time") || lowerInput.includes("save")) {
        botResponse = "Our clients typically save 10-15 hours per week. Some save even more! The exact time savings depend on your current manual processes.";
      } else {
        botResponse = "That's a great question! For detailed answers, I recommend booking a free 15-minute call with our automation expert. They can provide specific insights for your business.";
      }
      setMessages(prev => [...prev, {
        text: botResponse,
        sender: "bot"
      }]);
      
      // Send to webhook
      sendToWebhook(currentInput, botResponse);
    }, 1000);
    setInput("");
  };
  const handleQuickReply = (reply: string) => {
    setInput(reply);
    handleSend();
  };
  return <>
      {/* Chat Button */}
      <button onClick={() => setIsOpen(!isOpen)} aria-label="Open chat" className="fixed bottom-6 right-6 z-40 w-14 h-14 md:w-16 md:h-16 glass-button-primary text-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group rounded-full text-xs">
        {isOpen ? <X className="w-6 h-6 md:w-7 md:h-7" /> : <>
            <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full pulse-glow"></div>
          </>}
      </button>

      {/* Chat Window */}
      {isOpen && <div className="fixed bottom-24 right-6 z-40 w-[90vw] md:w-96 h-[500px] glass-card rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="glass-button-primary text-foreground p-4 flex items-center justify-between border-b border-white/10">
            <div>
              <h3 className="font-semibold">Automation Assistant</h3>
              <p className="text-xs opacity-90">Usually replies instantly</p>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={() => setShowSettings(!showSettings)} className="hover:bg-white/10 rounded-full p-1 transition-colors">
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
                onChange={e => setWebhookUrl(e.target.value)}
                placeholder="https://hooks.zapier.com/..."
                className="w-full glass-input text-foreground px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <p className="text-xs text-muted-foreground mt-2">Messages will be sent to this webhook</p>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${msg.sender === "user" ? "glass-button-primary text-foreground" : "glass-input text-foreground"}`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>)}
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && <div className="px-4 pb-2 flex flex-wrap gap-2">
              {quickReplies.map((reply, idx) => <button key={idx} onClick={() => handleQuickReply(reply)} className="text-xs glass-input hover:border-white/20 text-foreground px-3 py-1.5 rounded-full transition-colors">
                  {reply}
                </button>)}
            </div>}

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center space-x-2">
              <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === "Enter" && handleSend()} placeholder="Type your question..." className="flex-1 glass-input text-foreground px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/20" />
              <button onClick={handleSend} className="glass-button-primary text-foreground w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>}
    </>;
};
export default ChatWidget;