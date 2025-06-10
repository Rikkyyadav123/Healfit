import React, { useState } from 'react';
import { Dumbbell, Clock, Target, Star, Play } from 'lucide-react';
import { useExerciseStore } from '../store/exerciseStore';
import { ExerciseCard } from './ExerciseCard';

export const ExerciseRecommendations: React.FC = () => {
  const { recommendations, userProfile } = useExerciseStore();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', 'cardio', 'strength', 'flexibility', 'yoga', 'rehabilitation'];
  
  const filteredRecommendations = activeCategory === 'all' 
    ? recommendations 
    : recommendations.filter(exercise => exercise.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'cardio': return '🏃‍♂️';
      case 'strength': return '💪';
      case 'flexibility': return '🤸‍♀️';
      case 'yoga': return '🧘‍♀️';
      case 'rehabilitation': return '🏥';
      default: return '🎯';
    }
  };

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-green-100 rounded-lg">
            <Dumbbell className="h-5 w-5 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Personalized Recommendations</h2>
        </div>
        
        <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Target className="h-4 w-4" />
            <span>BMI: {userProfile?.bmi} ({userProfile?.category})</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4" />
            <span>{recommendations.length} exercises</span>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? 'bg-green-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <span className="mr-2">{getCategoryIcon(category)}</span>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Exercise Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecommendations.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>

      {filteredRecommendations.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No exercises found for the selected category.</p>
        </div>
      )}
    </section>
  );
};