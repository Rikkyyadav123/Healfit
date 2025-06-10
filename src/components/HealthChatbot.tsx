import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Bot, User, X, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const HealthChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI health assistant. I can help answer questions about fitness, nutrition, exercise, and general health topics. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Exercise-related questions
    if (message.includes('exercise') || message.includes('workout') || message.includes('fitness')) {
      if (message.includes('weight loss') || message.includes('lose weight')) {
        return "For weight loss, I recommend combining cardio exercises like walking, jogging, or cycling with strength training. Aim for 150 minutes of moderate cardio per week plus 2-3 strength sessions. Use our BMI calculator above to get personalized exercise recommendations!";
      }
      if (message.includes('muscle') || message.includes('strength')) {
        return "To build muscle, focus on strength training exercises like push-ups, squats, and lunges. Progressive overload is key - gradually increase reps or difficulty. Ensure adequate protein intake (0.8-1g per kg body weight) and get enough rest for muscle recovery.";
      }
      if (message.includes('beginner')) {
        return "As a beginner, start with low-impact exercises like walking, basic bodyweight movements, and gentle stretching. Begin with 15-20 minutes, 3 times per week, and gradually increase intensity. Our exercise recommendations are perfect for beginners!";
      }
      if (message.includes('cardio')) {
        return "Cardio exercises improve heart health and burn calories. Start with walking, then progress to jogging, cycling, or swimming. Aim for 150 minutes of moderate cardio weekly. Our app includes great cardio options like jumping jacks and high knees!";
      }
      return "Regular exercise is crucial for health! Aim for at least 150 minutes of moderate aerobic activity weekly, plus muscle-strengthening activities twice a week. What specific type of exercise are you interested in?";
    }

    // BMI and weight questions
    if (message.includes('bmi') || message.includes('body mass index')) {
      return "BMI is calculated as weight (kg) divided by height (m) squared. It's a useful screening tool but doesn't account for muscle mass. Use our BMI calculator above to determine your BMI and get personalized exercise recommendations based on your results!";
    }

    if (message.includes('underweight')) {
      return "If you're underweight, focus on strength training to build muscle mass, eat nutrient-dense foods with healthy fats and proteins, and consider consulting a healthcare provider. Our strength exercises like push-ups and squats can help build healthy weight.";
    }

    if (message.includes('overweight') || message.includes('obesity')) {
      return "For healthy weight management, combine regular cardio exercise with strength training and a balanced diet. Create a moderate calorie deficit through exercise and nutrition. Our cardio recommendations are perfect for weight management goals!";
    }

    // Health conditions and pain
    if (message.includes('back pain') || message.includes('backache')) {
      return "For back pain, gentle exercises like cat-cow stretches, child's pose, and walking can help. Strengthen your core muscles and improve posture. Our yoga and flexibility exercises are excellent for back health. Avoid bed rest for extended periods.";
    }

    if (message.includes('knee pain') || message.includes('knee')) {
      return "For knee pain, low-impact exercises like swimming, cycling, or walking are beneficial. Strengthen the muscles around the knee, especially quadriceps and hamstrings. Check our rehabilitation exercises section for knee-friendly options.";
    }

    if (message.includes('arthritis')) {
      return "For arthritis, gentle movement is key! Low-impact exercises like walking, swimming, and yoga can reduce stiffness and pain. Our rehabilitation and flexibility exercises are designed to be joint-friendly. Always warm up before exercising.";
    }

    if (message.includes('diabetes')) {
      return "Exercise is excellent for diabetes management! It helps control blood sugar levels. Aim for 150 minutes of moderate aerobic activity weekly plus strength training. Monitor blood sugar before and after exercise, and consult your doctor about exercise plans.";
    }

    if (message.includes('high blood pressure') || message.includes('hypertension')) {
      return "Regular exercise can help lower blood pressure! Start with moderate activities like walking, swimming, or cycling. Aim for 30 minutes most days. Our beginner cardio exercises are perfect for starting a heart-healthy routine.";
    }

    if (message.includes('stress') || message.includes('anxiety')) {
      return "Exercise is excellent for stress management! Try yoga, walking, or any physical activity you enjoy. Deep breathing exercises and meditation also help. Our yoga exercises like child's pose are specifically designed for stress relief.";
    }

    // Nutrition questions
    if (message.includes('diet') || message.includes('nutrition') || message.includes('food') || message.includes('eat')) {
      if (message.includes('weight loss')) {
        return "For healthy weight loss, create a moderate calorie deficit through diet and exercise. Focus on whole foods: lean proteins, vegetables, fruits, whole grains, and healthy fats. Combine this with our cardio exercise recommendations!";
      }
      if (message.includes('protein')) {
        return "Protein needs vary by activity level. Generally, aim for 0.8-1.2g per kg body weight for sedentary adults, up to 1.6-2.2g per kg for active individuals. Good sources include lean meats, fish, eggs, legumes, and dairy.";
      }
      return "A balanced diet includes variety from all food groups. Focus on whole, minimally processed foods. Stay hydrated, eat regular meals, and watch portion sizes. Combine good nutrition with our exercise recommendations for best results!";
    }

    // Sleep and recovery
    if (message.includes('sleep') || message.includes('insomnia')) {
      return "Good sleep hygiene includes regular exercise (but not close to bedtime), avoiding caffeine late in the day, keeping a consistent sleep schedule, and creating a relaxing bedtime routine. Our yoga exercises can help you relax before bed!";
    }

    if (message.includes('recovery') || message.includes('rest')) {
      return "Recovery is crucial for fitness progress! Include rest days, get adequate sleep (7-9 hours), stay hydrated, and do gentle stretching. Our flexibility and yoga exercises are perfect for active recovery days.";
    }

    // Hydration
    if (message.includes('water') || message.includes('hydration')) {
      return "Aim for about 8 glasses (64 oz) of water daily, more if you're active or in hot weather. Proper hydration supports exercise performance and recovery. Drink water before, during, and after workouts!";
    }

    // Flexibility and mobility
    if (message.includes('flexibility') || message.includes('stretching')) {
      return "Flexibility is important for injury prevention and mobility! Stretch major muscle groups 2-3 times per week, holding each stretch for 15-30 seconds. Our flexibility exercises and yoga poses are perfect for improving range of motion.";
    }

    if (message.includes('yoga')) {
      return "Yoga combines physical postures, breathing, and meditation. It improves flexibility, strength, balance, and mental well-being. Our yoga exercises like child's pose and cat-cow stretch are great for beginners and stress relief!";
    }

    // Posture
    if (message.includes('posture')) {
      return "Good posture reduces back pain and improves confidence! Strengthen your core, stretch tight muscles, and be mindful of your positioning. Our core exercises and yoga poses can significantly improve posture over time.";
    }

    // Age-related questions
    if (message.includes('senior') || message.includes('elderly') || message.includes('older')) {
      return "Exercise is beneficial at any age! Focus on balance, flexibility, and gentle strength training. Walking, swimming, and tai chi are excellent options. Our rehabilitation exercises are designed to be safe for all ages.";
    }

    // Motivation and goals
    if (message.includes('motivation') || message.includes('goal')) {
      return "Setting realistic, specific goals helps maintain motivation! Start small, track progress, find activities you enjoy, and celebrate achievements. Use our exercise recommendations to build a routine that fits your lifestyle and goals.";
    }

    // App-specific questions
    if (message.includes('app') || message.includes('recommendation') || message.includes('suggestion')) {
      return "Our app provides personalized exercise recommendations based on your BMI and health concerns! First, use the BMI calculator, then complete the health assessment to get customized exercises perfect for your needs and fitness level.";
    }

    // General health
    if (message.includes('health') || message.includes('healthy') || message.includes('wellness')) {
      return "Maintaining good health involves regular exercise, balanced nutrition, adequate sleep, stress management, and regular medical check-ups. Our exercise recommendations can be a great foundation for your health journey!";
    }

    // Safety questions
    if (message.includes('safe') || message.includes('injury')) {
      return "Exercise safety is paramount! Always warm up before exercising, use proper form, start slowly, listen to your body, and cool down afterward. If you experience pain or discomfort, stop and consult a healthcare provider.";
    }

    // Default responses for unclear questions
    const defaultResponses = [
      "I'd be happy to help with health and fitness questions! You can ask me about exercise routines, nutrition basics, managing health conditions, or how to use our exercise recommendation system.",
      "That's an interesting question! I can provide general health and fitness guidance. Try asking about specific exercises, health conditions, or how our BMI calculator and exercise recommendations work.",
      "I'm here to help with health-related questions! Feel free to ask about exercise routines, nutrition, wellness tips, or how to get the most out of our fitness app.",
      "I can help you with fitness and health questions! Ask me about exercise types, managing health conditions, nutrition basics, or how our personalized exercise recommendations work."
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-96 h-[500px]'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-2xl">
        <div className="flex items-center space-x-2">
          <Bot className="h-5 w-5" />
          <span className="font-semibold">Health Assistant</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-white/20 rounded transition-colors"
          >
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 h-80">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`p-2 rounded-full ${
                    message.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>
                  <div className={`p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-md'
                      : 'bg-gray-100 text-gray-800 rounded-bl-md'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="p-2 rounded-full bg-gray-100 text-gray-600">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="p-3 rounded-2xl bg-gray-100 text-gray-800 rounded-bl-md">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about health, fitness, or nutrition..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};