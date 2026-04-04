import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, User, Bot, ArrowRight } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: "Hi! Looking for a website or marketing service?", options: ["Website Development", "Digital Marketing", "Video Production"], timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leadStage, setLeadStage] = useState(0); // 0 = initial, 1 = capturing email, 2 = success
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const responses = {
    video: {
      text: "Great choice! We specialize in high-end cinematography, video editing, and color grading. Would you like to see our portfolio or get a quick quote?",
      options: ["View Portfolio", "Get Quote", "Other Services"]
    },
    marketing: {
      text: "Our digital marketing team focuses on data-driven growth. We offer SEO, PPC, and Social Media management. Ready to scale your brand?",
      options: ["Marketing Packages", "Success Stories", "Free Consultation"]
    },
    pricing: {
      text: "Our pricing is tailored to your project's scope. For a rough estimate, you can use our Smart Quote Calculator!",
      options: ["Open Calculator", "Standard Packages", "Contact Sales"]
    },
    web: {
      text: "We build modern, high-performance websites that convert. From simple landing pages to complex platforms. Interested?",
      options: ["Web Portfolio", "Tech Stack", "Start Project"]
    },
    default: {
      text: "I'm still learning, but I can definitely help with Video, Marketing, Web, or Pricing info. What are you looking for?",
      options: ["Video Services", "Digital Marketing", "Web Development", "Calculate Quote"]
    }
  };

  const handleSend = (text = inputValue) => {
    if (!text.trim()) return;

    const newMsg = { id: Date.now(), type: 'user', text, timestamp: new Date() };
    setMessages(prev => [...prev, newMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let botText = "";
      let newStage = leadStage;

      if (leadStage === 0) {
        botText = "Great choice! To help us prepare a custom strategy or quote, could you provide your Name and Contact Email?";
        newStage = 1;
      } else if (leadStage === 1) {
        botText = "Thanks! We've captured your details. Our strategy team will reach out to you within the next 24 hours.";
        newStage = 2;
      } else {
        botText = "If you have any other questions, feel free to ask or browse our portfolio!";
      }

      setLeadStage(newStage);
      setMessages(prev => [...prev, {
          id: Date.now() + 1,
          type: 'bot',
          text: botText,
          timestamp: new Date()
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleOptionClick = (option) => {
    handleSend(option);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-28 sm:right-6 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-orange-500 flex items-center justify-center shadow-2xl z-[1001] group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {isOpen ? <X size={24} /> : <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />}
        {!isOpen && (
          <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full">
            <span className="absolute inset-0 bg-orange-500 rounded-full animate-ping"></span>
          </span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-20 right-4 sm:bottom-48 sm:right-6 w-[calc(100%-2rem)] sm:w-[400px] h-[70vh] sm:h-[500px] glass rounded-3xl overflow-hidden z-[1001] flex flex-col shadow-2xl border border-orange-500/20"
          >
            {/* Header */}
            <div className="p-4 bg-orange-500 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Owl Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-[10px] opacity-80 uppercase tracking-wider font-bold">Online Now</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1.5 rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-black/40">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`p-3 rounded-2xl text-sm ${
                      msg.type === 'user' 
                        ? 'bg-orange-500 text-white rounded-tr-none' 
                        : 'bg-white/10 text-white border border-white/10 rounded-tl-none backdrop-blur-md'
                    }`}>
                      {msg.text}
                    </div>
                    
                    {msg.options && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {msg.options.map((opt, i) => (
                          <button
                            key={i}
                            onClick={() => handleOptionClick(opt)}
                            className="text-[11px] font-bold py-1.5 px-3 rounded-full border border-orange-500/30 text-orange-400 hover:bg-orange-500 hover:text-white transition-all flex items-center gap-1"
                          >
                            {opt} <ArrowRight size={10} />
                          </button>
                        ))}
                      </div>
                    )}
                    <span className="text-[9px] text-gray-500 mt-1 px-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none backdrop-blur-md">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-black/60 border-t border-white/5">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2 bg-white/5 rounded-2xl p-1 border border-white/10 focus-within:border-orange-500/50 transition-all"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about video, marketing..."
                  className="flex-1 bg-transparent border-none outline-none text-sm px-3 py-2 text-white placeholder:text-gray-600"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim()}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                    inputValue.trim() ? 'bg-orange-500 text-white scale-100' : 'bg-white/5 text-gray-600 scale-90'
                  }`}
                >
                  <Send size={18} />
                </button>
              </form>
              <div className="flex items-center justify-center gap-1 mt-2 text-[8px] text-gray-600 uppercase font-bold tracking-widest">
                <Sparkles size={8} /> AI-Powered Owl Assistant
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
