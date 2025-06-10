import React from 'react';
import { Activity, Heart, Target } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">EliteFit</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">Health First</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Target className="h-4 w-4" />
              <span className="text-sm font-medium">Goal Oriented</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};