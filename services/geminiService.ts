
import { GoogleGenAI } from "@google/genai";

// Fix: Initialize GoogleGenAI using process.env.API_KEY directly as per naming conventions
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getQuranicLeadershipAdvice = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `
          أنت "مستشار القيادة القرآنية". مهمتك هي مساعدة المتدربين في برنامج "أقود بنور القرآن".
          يجب أن تكون إجاباتك:
          1. مستمدة من آيات القرآن الكريم.
          2. تركز على الجوانب القيادية (مثل: التزكية، العزم، الشورى، الرحمة، العدل).
          3. باللغة العربية الفصحى الراقية والودودة.
          4. مختصرة وعملية.
          
          مثال: إذا سأل المستخدم عن كيفية التعامل مع فريق صعب، استشهد بقوله تعالى "فبما رحمة من الله لنت لهم" واشرح كيف طبقها النبي صلى الله عليه وسلم في قيادته.
        `,
        temperature: 0.7,
      },
    });

    // Fix: Access .text property directly instead of calling it as a method
    return response.text || "عذراً، لم أتمكن من استحضار الإجابة الآن. حاول مرة أخرى.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "حدث خطأ أثناء التواصل مع المستشار الرقمي. يرجى التأكد من اتصالك بالإنترنت.";
  }
};