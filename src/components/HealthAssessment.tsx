import React, { useState } from 'react';
import { Heart, Plus, X } from 'lucide-react';
import { useExerciseStore } from '../store/exerciseStore';

const commonConcerns = [
  'Back pain',
  'Knee problems',
  'Weight loss',
  'Muscle building',
  'Flexibility',
  'Cardiovascular health',
  'Stress relief',
  'Poor posture',
  'Arthritis',
  'Diabetes',
  'High blood pressure',
  'Insomnia'
];

export const HealthAssessment: React.FC = () => {
  const [customConcern, setCustomConcern] = useState('');
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const { userProfile, setHealthConcerns, generateRecommendations } = useExerciseStore();

  const toggleConcern = (concern: string) => {
    setSelectedConcerns(prev => 
      prev.includes(concern) 
        ? prev.filter(c => c !== concern)
        : [...prev, concern]
    );
  };

  const addCustomConcern = () => {
    if (customConcern.trim() && !selectedConcerns.includes(customConcern.trim())) {
      setSelectedConcerns(prev => [...prev, customConcern.trim()]);
      setCustomConcern('');
    }
  };

  const handleSubmit = () => {
    setHealthConcerns(selectedConcerns);
    generateRecommendations();
  };

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-red-100 rounded-lg">
          <Heart className="h-5 w-5 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Health Assessment</h2>
      </div>

      <div className="space-y-6">
        <p className="text-gray-600">
          Select any health concerns or fitness goals you have. This helps us provide personalized exercise recommendations.
        </p>

        {/* Common Concerns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {commonConcerns.map((concern) => (
            <button
              key={concern}
              onClick={() => toggleConcern(concern)}
              className={`p-3 rounded-lg text-sm font-medium transition-all ${
                selectedConcerns.includes(concern)
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {concern}
            </button>
          ))}
        </div>

        {/* Custom Concern Input */}
        <div className="flex space-x-3">
          <input
            type="text"
            value={customConcern}
            onChange={(e) => setCustomConcern(e.target.value)}
            placeholder="Add your own concern..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onKeyPress={(e) => e.key === 'Enter' && addCustomConcern()}
          />
          <button
            onClick={addCustomConcern}
            className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all"
          >
            <Plus className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Selected Concerns */}
        {selectedConcerns.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-medium text-gray-900">Selected Concerns:</h3>
            <div className="flex flex-wrap gap-2">
              {selectedConcerns.map((concern) => (
                <div
                  key={concern}
                  className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  <span>{concern}</span>
                  <button
                    onClick={() => toggleConcern(concern)}
                    className="hover:bg-blue-200 rounded-full p-1"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={selectedConcerns.length === 0}
          className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:from-red-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02]"
        >
          Get Exercise Recommendations
        </button>
      </div>
    </section>
  );
};