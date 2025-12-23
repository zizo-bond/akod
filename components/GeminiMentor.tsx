
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { getQuranicLeadershipAdvice } from '../services/geminiService';

const GeminiMentor: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; text: string }[]>([
    { role: 'ai', text: 'أهلاً بك في ركن المستشار الرقمي. أنا هنا لألهمك بمبادئ القيادة المستمدة من آيات الذكر الحكيم. ما الذي يشغل بالك اليوم في مسيرتك القيادية؟' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const aiResponse = await getQuranicLeadershipAdvice(userText);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[600px]">
      <div className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 p-4 border-b border-white/10 flex items-center gap-3">
        <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
          <Sparkles className="text-white w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-lg">المستشار القيادي الرقمي</h3>
          <p className="text-xs text-amber-400">مدعوم بتقنيات الذكاء الاصطناعي والتدبر القرآني</p>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
            <div className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.role === 'user' ? 'bg-indigo-600' : 'bg-amber-600'
              }`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-indigo-500/20 border border-indigo-500/30' 
                  : 'bg-white/5 border border-white/10'
              }`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-end">
            <div className="flex flex-row-reverse gap-3 max-w-[80%]">
              <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center animate-pulse">
                <Bot size={16} />
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                <Loader2 className="animate-spin text-amber-500" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-black/40 border-t border-white/10">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="اسأل عن مبدأ قيادي أو استشر في موقف عملي..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
          />
          <button 
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white p-2 px-4 rounded-xl transition-all"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default GeminiMentor;
