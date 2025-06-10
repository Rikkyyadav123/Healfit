
import { Header } from './components/Header';
import { BMICalculator } from './components/BMICalculator';
import { HealthAssessment } from './components/HealthAssessment';
import { ExerciseRecommendations } from './components/ExerciseRecommendations';
import { HealthChatbot } from './components/HealthChatbot';
import { Footer } from './components/Footer';
import { useExerciseStore } from './store/exerciseStore';

function App() {
  const { userProfile, recommendations } = useExerciseStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your Personal
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI Fitness</span>
            <br />Coach
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get personalized exercise recommendations based on your BMI, health concerns, and fitness goals. 
            Start your journey to better health today.
          </p>
        </section>

        {/* BMI Calculator */}
        <BMICalculator />

        {/* Health Assessment */}
        {userProfile?.bmi && <HealthAssessment />}

        {/* Exercise Recommendations */}
        {recommendations.length > 0 && <ExerciseRecommendations />}
      </main>

      <Footer />
      
      {/* Health Chatbot */}
      <HealthChatbot />
    </div>
  );
}

export default App;