import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, Bot, User, Loader2 } from "lucide-react";
import { useTheme } from "../components/ThemeProvider";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SYSTEM_PROMPT = `You are a helpful AI assistant embedded in Sunita Kumari's developer portfolio.
Sunita is a Full Stack Web Developer specializing in MEAN and MERN stacks, and UI/UX Design.
Answer questions about her skills, projects, experience, or anything a visitor might ask.
Be friendly, concise, and professional. If asked something you don't know about Sunita specifically, answer helpfully in general.`;

type AiChatProps = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
};

export default function AiChat({ isOpen, setIsOpen }: AiChatProps) {
  const { theme } = useTheme();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! 👋 I'm Sunita's AI assistant. Ask me anything about her skills, projects, or experience!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 200);
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const userMsg: Message = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...updatedMessages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      const assistantReply =
        data.choices?.[0]?.message?.content ||
        "Sorry, I couldn't get a response. Please try again.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: assistantReply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Oops! Something went wrong. Please check the API key or try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Hi! 👋 I'm Sunita's AI assistant. Ask me anything about her skills, projects, or experience!",
      },
    ]);
  };

  return (
    <>
      {/* ── Floating Chat Panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`
              fixed bottom-6 right-6 z-[100] w-[360px] max-w-[calc(100vw-2rem)]
              rounded-2xl shadow-2xl flex flex-col overflow-hidden
              border
              ${
                theme === "dark"
                  ? "bg-gray-900 border-gray-700"
                  : "bg-white border-gray-200"
              }
            `}
            style={{ height: "500px" }}
          >
            {/* Header */}
            <div
              className={`flex items-center justify-between px-4 py-3 border-b shrink-0
              ${
                theme === "dark"
                  ? "border-gray-700 bg-gray-900"
                  : "border-gray-100 bg-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-sm">
                  <Sparkles size={14} className="text-white" />
                </div>
                <div>
                  <p
                    className={`text-sm font-semibold leading-tight ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    AI Assistant
                  </p>
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                    Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {/* Clear chat */}
                <button
                  onClick={clearChat}
                  title="Clear chat"
                  className={`p-1.5 rounded-lg text-xs transition-colors
                    ${
                      theme === "dark"
                        ? "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
                        : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  Clear
                </button>
                {/* Close */}
                <button
                  onClick={() => setIsOpen(false)}
                  className={`p-1.5 rounded-lg transition-colors
                    ${
                      theme === "dark"
                        ? "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
                        : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              className={`flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth
              ${theme === "dark" ? "bg-gray-950" : "bg-gray-50"}`}
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2.5 ${
                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm
                    ${
                      msg.role === "assistant"
                        ? "bg-gradient-to-br from-indigo-500 to-violet-600"
                        : theme === "dark"
                        ? "bg-gray-700"
                        : "bg-gray-200"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <Bot size={12} className="text-white" />
                    ) : (
                      <User
                        size={12}
                        className={
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }
                      />
                    )}
                  </div>

                  {/* Bubble */}
                  <div
                    className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm
                    ${
                      msg.role === "user"
                        ? "bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded-tr-sm"
                        : theme === "dark"
                        ? "bg-gray-800 text-gray-200 rounded-tl-sm border border-gray-700"
                        : "bg-white text-gray-700 rounded-tl-sm border border-gray-100"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shrink-0">
                    <Bot size={12} className="text-white" />
                  </div>
                  <div
                    className={`px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm border
                    ${
                      theme === "dark"
                        ? "bg-gray-800 border-gray-700"
                        : "bg-white border-gray-100"
                    }`}
                  >
                    <div className="flex gap-1 items-center h-4">
                      {[0, 0.2, 0.4].map((delay, i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-indigo-400"
                          animate={{ y: [0, -4, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.8,
                            delay,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div
              className={`px-3 py-3 border-t shrink-0
              ${
                theme === "dark"
                  ? "border-gray-700 bg-gray-900"
                  : "border-gray-100 bg-white"
              }`}
            >
              <div
                className={`flex items-center gap-2 rounded-xl border px-3 py-2 transition-colors
                ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 focus-within:border-indigo-500"
                    : "bg-gray-50 border-gray-200 focus-within:border-indigo-400"
                }`}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  className={`flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400
                  ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:from-indigo-700 hover:to-violet-700 transition-all shrink-0"
                >
                  {isLoading ? (
                    <Loader2 size={13} className="text-white animate-spin" />
                  ) : (
                    <Send size={13} className="text-white" />
                  )}
                </button>
              </div>
              <p
                className={`text-[10px] text-center mt-2
                ${theme === "dark" ? "text-gray-600" : "text-gray-400"}`}
              >
                Powered by OpenAI · Press Enter to send
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Trigger Button (when closed) ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-[100] w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-shadow"
            title="Ask AI"
          >
            <Sparkles size={22} className="text-white" />
            {/* Ping ring */}
            <span className="absolute w-full h-full rounded-full bg-indigo-500/30 animate-ping" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}