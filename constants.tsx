
import React from 'react';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';
import { Level, Feature, Statistic } from './types';

export const LEVELS: Level[] = [
  {
    id: 1,
    title: "الكفاءة الشخصية",
    subtitle: "التزكية والإحسان",
    verse: "﴿قَدْ أَفْلَحَ مَن زَكَّاهَا﴾",
    reference: "الشمس: 9",
    color: "from-emerald-500 to-teal-600",
    modules: [
      { id: 1, name: "معرفة النفس", duration: "45 دقيقة", type: "فيديو + تمرين" },
      { id: 2, name: "تزكية النفس", duration: "60 دقيقة", type: "ورشة تفاعلية" },
      { id: 3, name: "تطهير القلب", duration: "50 دقيقة", type: "جلسة حوارية" },
      { id: 4, name: "التفكر والتدبر", duration: "30 يوم", type: "تحدي يومي" }
    ],
    activities: ["خريطة النفس الشخصية", "ورشة التزكية العملية", "جلسة علل القلوب", "سجل التزكية الرقمي"]
  },
  {
    id: 2,
    title: "من الفكرة إلى التنفيذ",
    subtitle: "العزم والتوكل",
    verse: "﴿فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ﴾",
    reference: "آل عمران: 159",
    color: "from-blue-500 to-indigo-600",
    modules: [
      { id: 1, name: "التخطيط الاستراتيجي", duration: "90 دقيقة", type: "محاكاة" },
      { id: 2, name: "العزيمة والإرادة", duration: "45 دقيقة", type: "تمرين عملي" },
      { id: 3, name: "إدارة الموارد", duration: "60 دقيقة", type: "ورشة" },
      { id: 4, name: "التوكل والأسباب", duration: "40 دقيقة", type: "دراسة حالة" }
    ],
    activities: ["محاكاة خطة يوسف", "خارطة العزم", "إدارة المال والوقت", "مشروع تنفيذي شخصي"]
  },
  {
    id: 3,
    title: "التواصل الفعال",
    subtitle: "الحكمة والموعظة الحسنة",
    verse: "﴿ادْعُ إِلَى سَبِيلِ رَبِّكَ بِالْحِكْمَةِ﴾",
    reference: "النحل: 125",
    color: "from-purple-500 to-pink-600",
    modules: [
      { id: 1, name: "الحكمة في الخطاب", duration: "50 دقيقة", type: "لعب أدوار" },
      { id: 2, name: "الموعظة الحسنة", duration: "45 دقيقة", type: "ورشة" },
      { id: 3, name: "الجدال بالحسنى", duration: "60 دقيقة", type: "مناظرة" },
      { id: 4, name: "القول اللين", duration: "40 دقيقة", type: "تحليل" }
    ],
    activities: ["حوار مع المخالف", "صياغة الخطاب التأثيري", "مناظرة افتراضية", "فيديو حل النزاعات"]
  },
  {
    id: 4,
    title: "سفير القيادة",
    subtitle: "القدوة والشورى",
    verse: "﴿فَبِمَا رَحْمَةٍ مِّنَ اللَّهِ لِنتَ لَهُمْ﴾",
    reference: "آل عمران: 159",
    color: "from-amber-500 to-orange-600",
    modules: [
      { id: 1, name: "الرحمة في القيادة", duration: "55 دقيقة", type: "ورشة" },
      { id: 2, name: "منهج الشورى", duration: "70 دقيقة", type: "محاكاة" },
      { id: 3, name: "القدوة الحسنة", duration: "45 دقيقة", type: "بحث" },
      { id: 4, name: "تحمل المسؤولية", duration: "50 دقيقة", type: "دراسة حالة" }
    ],
    activities: ["قيادة الفرق بلين", "مجلس شورى", "صفات الأنبياء", "مشروع قيادة جماعي"]
  }
];

export const FEATURES: Feature[] = [
  { icon: BookOpen, title: "محتوى قرآني أصيل", desc: "منهج مستمد 100% من آيات القرآن الكريم وتدبر معانيها القيادية." },
  { icon: Users, title: "تفاعل مباشر", desc: "جلسات حية أسبوعية مع خبراء في القيادة والتدبر القرآني." },
  { icon: Award, title: "شهادات معتمدة", desc: "شهادة إتمام لكل مستوى وشهادة قيادة قرآنية شاملة عند التخرج." },
  { icon: TrendingUp, title: "تطوير مستدام", desc: "متابعة وتقييم دوري لمدة 3 أشهر لضمان تحويل المعرفة إلى سلوك." }
];

export const STATISTICS: Statistic[] = [
  { number: "12", label: "أسبوعاً", desc: "مدة البرنامج التدريبي المكثف" },
  { number: "4", label: "مستويات", desc: "رحلة تطوير متكاملة ومتدرجة" },
  { number: "16", label: "محوراً", desc: "مهارات قيادية عملية وتطبيقية" },
  { number: "100%", label: "قرآني", desc: "مرجعية القيم والمبادئ الأساسية" }
];
