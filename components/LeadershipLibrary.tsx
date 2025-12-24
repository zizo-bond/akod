
import React, { useState } from 'react';
import { Book, Search, Filter, Bookmark, ArrowUpRight, Heart, Share2 } from 'lucide-react';
import { LEADERSHIP_RESOURCES } from '../constants';

const LeadershipLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const categories = ['الكل', ...new Set(LEADERSHIP_RESOURCES.map(r => r.category))];

  const filteredResources = LEADERSHIP_RESOURCES.filter(resource => {
    const matchesSearch = resource.title.includes(searchTerm) || resource.description.includes(searchTerm);
    const matchesCategory = selectedCategory === 'الكل' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      {/* Search and Filter Header */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-900/50 p-6 rounded-[32px] border border-white/5">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text"
            placeholder="ابحث عن مبدأ قيادي..."
            className="w-full bg-slate-800 border border-white/10 rounded-2xl py-3 pr-12 pl-4 focus:outline-none focus:border-amber-500/50 transition-all text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto no-scrollbar w-full md:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat 
                  ? 'bg-amber-500 text-slate-950' 
                  : 'bg-white/5 text-slate-400 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="group bg-slate-900/40 border border-white/10 rounded-[32px] p-8 flex flex-col justify-between hover:border-amber-500/30 transition-all duration-500 hover:translate-y-[-4px]">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-lg text-[10px] font-black tracking-widest uppercase">
                  {resource.category}
                </span>
                <div className="flex gap-2">
                   <button className="text-slate-500 hover:text-white transition-colors"><Bookmark size={16} /></button>
                   <button className="text-slate-500 hover:text-white transition-colors"><Share2 size={16} /></button>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold group-hover:text-amber-400 transition-colors">{resource.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{resource.description}</p>
              </div>

              <div className="p-5 bg-black/40 rounded-2xl border border-white/5">
                 <p className="text-xl font-arabic text-amber-100 text-center leading-relaxed">
                   {resource.verse}
                 </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-black text-slate-500 uppercase flex items-center gap-2">
                  <ArrowUpRight size={14} /> أثر المبدأ في القيادة
                </h4>
                <p className="text-sm text-slate-300 italic">"{resource.benefit}"</p>
              </div>
            </div>

            <button className="mt-8 w-full py-3 bg-white/5 border border-white/5 rounded-2xl text-sm font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
               قراءة المزيد <Book size={16} />
            </button>
          </div>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-20 bg-slate-900/20 rounded-[40px] border border-dashed border-white/10">
           <Search size={48} className="mx-auto text-slate-700 mb-4" />
           <p className="text-slate-500">لم نجد نتائج تطابق بحثك، جرب كلمات أخرى.</p>
        </div>
      )}
    </div>
  );
};

export default LeadershipLibrary;
