import React, { useState } from 'react';
import { Clock, Target, Play, CheckCircle, RotateCcw } from 'lucide-react';
import { Exercise } from '../types/exercise';

interface ExerciseCardProps {
  exercise: Exercise;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryEmoji = (category: string) => {
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
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{getCategoryEmoji(exercise.category)}</span>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">{exercise.name}</h3>
              <p className="text-sm text-gray-600">{exercise.category}</p>
            </div>
          </div>
          
          <div className="flex flex-col items-end space-y-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exercise.difficulty)}`}>
              {exercise.difficulty}
            </span>
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <Target className="h-3 w-3" />
              <span>{exercise.targetMuscles.join(', ')}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{exercise.description}</p>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{exercise.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <RotateCcw className="h-4 w-4" />
              <span>{exercise.reps}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsCompleted(!isCompleted)}
              className={`p-2 rounded-full transition-all ${
                isCompleted 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
              }`}
            >
              <CheckCircle className="h-4 w-4" />
            </button>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-all flex items-center space-x-1"
            >
              <Play className="h-3 w-3" />
              <span>{isExpanded ? 'Hide' : 'View'}</span>
            </button>
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="border-t border-gray-200 pt-4 space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                {exercise.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                {exercise.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            {exercise.precautions.length > 0 && (
              <div className="bg-yellow-50 p-3 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Precautions:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700">
                  {exercise.precautions.map((precaution, index) => (
                    <li key={index}>{precaution}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};