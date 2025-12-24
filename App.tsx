
import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Users, Award, CheckCircle, Lock, Play, 
  FileText, MessageCircle, Calendar, Star, TrendingUp, 
  ArrowLeft, BrainCircuit, ShieldCheck, Zap, Library
} from 'lucide-react';
import { TabType, UserProgress } from './types';
import { LEVELS, FEATURES, STATISTICS } from './constants';
import LeadershipLibrary from './components/LeadershipLibrary';
import EnrollmentModal from './components/EnrollmentModal';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [showEnrollment, setShowEnrollment] = useState(false);
  const [userProgress] = useState<UserProgress>({
    level1: 45,
    level2: 10,
    level3: 0,
    level4: 0,
    completedActivities: ['1-1', '1-2']
  });

  // Handle scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-amber-500/30">
      {/* Background blobs for aesthetics */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-900/10 blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-xl border-b border-white/10 sticky top-0 z-[60]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl md:text-2xl font-bold tracking-tight">أقود بنور القرآن</h1>
                <p className="text-xs text-amber-400/80 font-medium">برنامج القيادة القرآنية المتكامل</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowEnrollment(true)}
                className="bg-gradient-to-r from-amber-500 to-orange-600 px-5 md:px-8 py-2.5 rounded-full font-bold hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 transition-all text-sm md:text-base"
              >
                انضم إلينا
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-slate-900/30 border-b border-white/5 sticky top-[81px] z-50">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
            {[
              { id: 'overview', label: 'نظرة عامة', icon: BookOpen },
              { id: 'levels', label: 'المستويات', icon: Star },
              { id: 'assessment', label: 'التقييم والشهادة', icon: Award },
              { id: 'resources', label: 'مكتبة القيادة', icon: Library }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/50' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon size={18} />
                <span className="text-sm font-semibold">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Tab content logic */}
        {activeTab === 'overview' && (
          <div className="space-y-24">
            {/* Hero */}
            <section className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span className="text-xs font-bold text-amber-200">الدفعة القادمة تبدأ قريباً</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-extrabold leading-[1.1] bg-gradient-to-r from-white via-amber-200 to-orange-400 bg-clip-text text-transparent">
                اصنع أثراً باقياً <br /> بقيادة قرآنية ملهمة
              </h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                اكتشف أسرار القيادة الفعالة من كتاب الله. برنامج تدريبي تفاعلي يجمع بين الأصالة الشرعية وأحدث أساليب التطوير القيادي العالمي.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  onClick={() => setActiveTab('levels')}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-full font-bold hover:bg-amber-100 transition-all flex items-center justify-center gap-2 group"
                >
                  استكشف المنهج <ArrowLeft className="group-hover:translate-x-[-4px] transition-transform" />
                </button>
                <button 
                  onClick={() => setShowEnrollment(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white rounded-full font-bold hover:bg-slate-700 border border-white/10 transition-all"
                >
                  احجز مقعدك الآن
                </button>
              </div>
            </section>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {STATISTICS.map((stat, idx) => (
                <div key={idx} className="group relative p-8 bg-slate-900/40 border border-white/5 rounded-3xl overflow-hidden hover:border-amber-500/20 transition-all">
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <TrendingUp size={48} className="text-amber-500" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-amber-500 mb-2">{stat.number}</div>
                  <div className="text-lg font-bold text-slate-200">{stat.label}</div>
                  <div className="text-sm text-slate-500">{stat.desc}</div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="p-8 bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl hover:translate-y-[-8px] transition-all duration-300">
                  <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-amber-500/30">
                    <feature.icon className="w-7 h-7 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Social Proof Section */}
            <section className="bg-slate-900/40 border border-white/5 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-600" />
               <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-bold">لماذا القيادة القرآنية؟</h3>
                    <p className="text-slate-400 leading-relaxed">
                      القيادة في المفهوم القرآني ليست مجرد "سلطة" بل هي "أمانة" و"رسالة". نحن نركز على بناء القائد من الداخل (التزكية) قبل الخارج (التأثير).
                    </p>
                    <ul className="space-y-4">
                      {[
                        { icon: ShieldCheck, text: "توازن بين الدنيا والآخرة في اتخاذ القرار" },
                        { icon: Zap, text: "طاقة إيمانية مستدامة لمواجهة التحديات" },
                        { icon: Users, text: "بناء فرق عمل قائمة على المودة والشورى" }
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300">
                          <item.icon className="text-amber-500 shrink-0" size={20} />
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-amber-500 blur-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
                    <img 
                      src="https://picsum.photos/seed/quran/800/600" 
                      alt="Leader studying" 
                      className="rounded-3xl border border-white/10 relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
               </div>
            </section>
          </div>
        )}

        {activeTab === 'levels' && (
          <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-700">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">خريطة التعلم</h2>
              <p className="text-slate-400">تدرج مدروس يبدأ من أعماق النفس ويصل إلى آفاق التأثير العالمي</p>
            </div>

            <div className="grid gap-6">
              {LEVELS.map((level) => (
                <div 
                  key={level.id} 
                  className={`group bg-slate-900/40 border border-white/10 rounded-[32px] overflow-hidden transition-all duration-500 ${
                    selectedLevel === level.id ? 'ring-2 ring-amber-500/50 shadow-2xl shadow-amber-500/10' : 'hover:border-white/20'
                  }`}
                >
                  <div className={`bg-gradient-to-r ${level.color} p-8 relative overflow-hidden`}>
                    <div className="absolute top-[-20%] left-[-10%] w-[30%] h-[150%] bg-white/10 skew-x-[-20deg] pointer-events-none" />
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center font-black text-3xl shadow-inner">
                          {level.id}
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white">{level.title}</h3>
                          <p className="text-white/90 font-medium">{level.subtitle}</p>
                        </div>
                      </div>
                      
                      <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-5 border border-white/20 flex-1 md:max-w-md">
                        <p className="text-2xl font-arabic mb-1 text-white leading-relaxed">{level.verse}</p>
                        <p className="text-xs text-white/60 font-medium tracking-widest uppercase">{level.reference}</p>
                      </div>

                      <button
                        onClick={() => setSelectedLevel(selectedLevel === level.id ? null : level.id)}
                        className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-full font-bold transition-all shadow-lg"
                      >
                        {selectedLevel === level.id ? 'إغلاق المحاور' : 'استعراض المحاور'}
                      </button>
                    </div>
                  </div>

                  {selectedLevel === level.id && (
                    <div className="p-8 space-y-12 animate-in zoom-in-95 duration-300">
                      {/* Grid for Modules and Activities */}
                      <div className="grid lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-3 space-y-6">
                          <h4 className="text-xl font-bold flex items-center gap-3">
                            <Play className="text-amber-500" fill="currentColor" />
                            المحاور التدريبية
                          </h4>
                          <div className="grid gap-4">
                            {level.modules.map((module) => (
                              <div key={module.id} className="bg-slate-800/50 border border-white/5 p-5 rounded-2xl hover:bg-slate-800 transition-colors flex items-center justify-between group/mod">
                                <div className="space-y-1">
                                  <h5 className="font-bold text-slate-100">{module.name}</h5>
                                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {module.duration}</span>
                                    <span className="flex items-center gap-1.5"><FileText size={14} /> {module.type}</span>
                                  </div>
                                </div>
                                {userProgress.completedActivities.includes(`${level.id}-${module.id}`) ? (
                                  <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 ring-1 ring-emerald-500/50">
                                    <CheckCircle size={18} />
                                  </div>
                                ) : (
                                  <Lock size={18} className="text-slate-600 group-hover/mod:text-amber-500 transition-colors" />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="lg:col-span-2 space-y-6">
                          <h4 className="text-xl font-bold flex items-center gap-3">
                            <MessageCircle className="text-amber-500" />
                            الأنشطة العملية
                          </h4>
                          <div className="space-y-3">
                            {level.activities.map((activity, idx) => (
                              <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 group/act hover:border-amber-500/30 transition-all">
                                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-xs font-bold text-amber-500 group-hover/act:bg-amber-500 group-hover/act:text-white transition-all">
                                  {idx + 1}
                                </div>
                                <span className="text-slate-300 font-medium">{activity}</span>
                              </div>
                            ))}
                          </div>

                          <div className="mt-8 p-6 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
                             <div className="flex items-center justify-between mb-4">
                               <span className="text-sm font-bold text-amber-200">التقدم في المستوى</span>
                               <span className="text-amber-400 font-black">{level.id === 1 ? userProgress.level1 : level.id === 2 ? userProgress.level2 : 0}%</span>
                             </div>
                             <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                               <div 
                                 className={`h-full bg-gradient-to-r ${level.color} transition-all duration-1000`}
                                 style={{ width: `${level.id === 1 ? userProgress.level1 : level.id === 2 ? userProgress.level2 : 0}%` }}
                               />
                             </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'assessment' && (
          <div className="max-w-5xl mx-auto space-y-16 animate-in fade-in duration-700">
            <section className="text-center space-y-6">
              <div className="inline-block p-4 bg-amber-500/10 rounded-3xl mb-4">
                <Award className="w-16 h-16 text-amber-500" />
              </div>
              <h2 className="text-4xl font-bold">التميز والجودة</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">نظام تقييم دقيق يضمن لك تحويلاً حقيقياً في المهارات القيادية وحصولك على اعتماد مهني وشرعي.</p>
            </section>

            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-slate-900/60 p-8 rounded-[40px] border border-white/5 space-y-8">
                  <h3 className="text-2xl font-bold flex items-center gap-3">
                    <CheckCircle className="text-emerald-500" />
                    معايير التقييم
                  </h3>
                  <div className="space-y-6">
                    {[
                      { title: 'الاختبارات المعرفية', desc: 'قياس مدى استيعاب المفاهيم القيادية القرآنية.' },
                      { title: 'التطبيقات العملية', desc: 'تنفيذ مهام قيادية حقيقية وتقييم أثرها.' },
                      { title: 'الحضور والتفاعل', desc: 'المشاركة الفعالة في جلسات الشورى والورش.' },
                      { title: 'مشروع التخرج', desc: 'خطة قيادية كاملة لمؤسسة أو فريق عمل.' }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-1.5 h-auto bg-amber-500/50 rounded-full" />
                        <div>
                          <h4 className="font-bold text-slate-100">{item.title}</h4>
                          <p className="text-sm text-slate-400">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>

               <div className="relative group">
                 <div className="absolute inset-0 bg-amber-500 blur-[100px] opacity-10" />
                 <div className="relative z-10 bg-gradient-to-br from-amber-600 to-orange-700 p-10 rounded-[40px] shadow-2xl text-center flex flex-col items-center h-full justify-center space-y-6">
                    <Award size={80} className="text-white mb-2" />
                    <h3 className="text-3xl font-bold text-white">الشهادة المعتمدة</h3>
                    <p className="text-white/80 leading-relaxed">
                      بمجرد إتمامك للمستويات الأربعة واجتياز المشروع النهائي، ستحصل على شهادة "قائد قرآني معتمد" موقعة من نخبة من علماء التدبر وخبراء الإدارة.
                    </p>
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-xs text-white">
                        توثيق إلكتروني (BlockChain)
                      </div>
                      <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-xs text-white">
                        رقم أكاديمي معتمد
                      </div>
                    </div>
                 </div>
               </div>
            </div>

            {/* Success rates / testimonials placeholder */}
            <div className="bg-white/5 p-12 rounded-[40px] text-center border border-white/10">
               <h3 className="text-2xl font-bold mb-10">إحصائيات نجاح خريجينا</h3>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                 <div>
                   <div className="text-4xl font-black text-amber-500 mb-2">98%</div>
                   <p className="text-slate-400 text-sm">معدل رضا المشاركين</p>
                 </div>
                 <div>
                   <div className="text-4xl font-black text-amber-500 mb-2">+450</div>
                   <p className="text-slate-400 text-sm">قائد تم تخريجه</p>
                 </div>
                 <div className="col-span-2 md:col-span-1">
                   <div className="text-4xl font-black text-amber-500 mb-2">12</div>
                   <p className="text-slate-400 text-sm">دولة حول العالم</p>
                 </div>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="animate-in fade-in zoom-in-95 duration-700">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl font-bold">مكتبة القيادة</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">استكشف المبادئ والأسس القيادية التي أرساها القرآن الكريم، والمصنفة حسب مجالات التأثير المختلفة.</p>
            </div>
            <LeadershipLibrary />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-white/5 py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-amber-500" />
                <span className="text-2xl font-bold">أقود بنور القرآن</span>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed">
                منصة متخصصة في تطوير القيادات بالاعتماد على القيم القرآنية، تهدف لبناء جيل من القادة يحمل رسالة الخير للبشرية.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-slate-100">روابط سريعة</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><button onClick={() => setActiveTab('overview')} className="hover:text-amber-500 transition-colors">عن البرنامج</button></li>
                <li><button onClick={() => setActiveTab('levels')} className="hover:text-amber-500 transition-colors">المستويات</button></li>
                <li><button onClick={() => setActiveTab('assessment')} className="hover:text-amber-500 transition-colors">الاعتمادات</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-slate-100">تواصل معنا</h4>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li>info@quranic-leadership.com</li>
                <li>واتساب: +966 50 000 0000</li>
                <li>الرياض، المملكة العربية السعودية</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-xs">
            © {new Date().getFullYear()} جميع الحقوق محفوظة لبرنامج أقود بنور القرآن.
          </div>
        </div>
      </footer>

      {/* Enrollment Modal */}
      <EnrollmentModal isOpen={showEnrollment} onClose={() => setShowEnrollment(false)} />
    </div>
  );
};

export default App;
