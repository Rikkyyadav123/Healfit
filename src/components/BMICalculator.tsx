import React, { useState } from 'react';
import { Calculator, Scale, Ruler } from 'lucide-react';
import { useExerciseStore } from '../store/exerciseStore';

export const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const { setUserProfile } = useExerciseStore();

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    
    if (!h || !w || h <= 0 || w <= 0) return;

    let bmi: number;
    if (unit === 'metric') {
      // height in cm, weight in kg
      bmi = w / ((h / 100) ** 2);
    } else {
      // height in inches, weight in lbs
      bmi = (w / (h ** 2)) * 703;
    }

    const category = getBMICategory(bmi);
    
    setUserProfile({
      height: h,
      weight: w,
      unit,
      bmi: Math.round(bmi * 10) / 10,
      category,
      healthConcerns: []
    });
  };

  const getBMICategory = (bmi: number): string => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

  const getBMIColor = (bmi: number): string => {
    if (bmi < 18.5) return 'text-blue-600';
    if (bmi < 25) return 'text-green-600';
    if (bmi < 30) return 'text-yellow-600';
    return 'text-red-600';
  };

  const { userProfile } = useExerciseStore();

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Calculator className="h-5 w-5 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">BMI Calculator</h2>
      </div>

      <div className="space-y-6">
        {/* Unit Selection */}
        <div className="flex space-x-4">
          <button
            onClick={() => setUnit('metric')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              unit === 'metric'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Metric (cm/kg)
          </button>
          <button
            onClick={() => setUnit('imperial')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              unit === 'imperial'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Imperial (in/lbs)
          </button>
        </div>

        {/* Input Fields */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              <div className="flex items-center space-x-2">
                <Ruler className="h-4 w-4" />
                <span>Height ({unit === 'metric' ? 'cm' : 'inches'})</span>
              </div>
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder={unit === 'metric' ? '170' : '70'}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              <div className="flex items-center space-x-2">
                <Scale className="h-4 w-4" />
                <span>Weight ({unit === 'metric' ? 'kg' : 'lbs'})</span>
              </div>
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder={unit === 'metric' ? '70' : '150'}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <button
          onClick={calculateBMI}
          disabled={!height || !weight}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02]"
        >
          Calculate BMI
        </button>

        {/* BMI Result */}
        {userProfile?.bmi && (
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">{userProfile.bmi}</div>
              <div className={`text-lg font-semibold ${getBMIColor(userProfile.bmi)}`}>
                {userProfile.category}
              </div>
              <div className="text-sm text-gray-600">
                Your BMI indicates you are in the {userProfile.category.toLowerCase()} range
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};