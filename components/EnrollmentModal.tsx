
import React, { useState } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-slate-900 border border-white/10 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {step === 1 ? (
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-2">التسجيل في البرنامج</h2>
            <p className="text-gray-400 mb-6">انضم إلى مجتمع قادة المستقبل بنور القرآن</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">الاسم الكامل</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 focus:border-amber-500 outline-none transition-all"
                  placeholder="أدخل اسمك كما تريده في الشهادة"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">البريد الإلكتروني</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 focus:border-amber-500 outline-none transition-all"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">المستوى القيادي الحالي</label>
                <select className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 focus:border-amber-500 outline-none transition-all appearance-none text-white">
                  <option className="bg-slate-900">طالب / مبتدئ</option>
                  <option className="bg-slate-900">مدير فريق / متوسط</option>
                  <option className="bg-slate-900">قائد تنفيذي / متقدم</option>
                </select>
              </div>
              
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 py-3 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? <Loader2 className="animate-spin" /> : 'تأكيد التسجيل'}
              </button>
            </form>
          </div>
        ) : (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-500 w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold mb-4">تم التسجيل بنجاح!</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              لقد بدأت رحلتك نحو القيادة القرآنية. ستصلك رسالة تأكيد عبر البريد الإلكتروني تحتوي على تفاصيل الوصول إلى المنصة التعليمية.
            </p>
            <button 
              onClick={onClose}
              className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-bold transition-all"
            >
              العودة للرئيسية
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnrollmentModal;
