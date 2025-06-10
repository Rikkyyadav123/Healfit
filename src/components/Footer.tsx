import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-5 w-5 text-red-500" />
              <span className="font-semibold text-gray-900">Health First</span>
            </div>
            <p className="text-sm text-gray-600">
              Always consult with healthcare professionals before starting any new exercise program, 
              especially if you have existing health conditions.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-5 w-5 text-blue-500" />
              <span className="font-semibold text-gray-900">Safe & Effective</span>
            </div>
            <p className="text-sm text-gray-600">
              Our AI-powered recommendations are based on established fitness principles and 
              medical guidelines for safe and effective exercise.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="h-5 w-5 text-green-500" />
              <span className="font-semibold text-gray-900">Community Driven</span>
            </div>
            <p className="text-sm text-gray-600">
              Join thousands of users who have improved their health and fitness with 
              personalized exercise recommendations.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2024 FitGenie. Made with ❤️ for your health journey.
          </p>
        </div>
      </div>
    </footer>
  );
};