export interface UserProfile {
  height: number;
  weight: number;
  unit: 'metric' | 'imperial';
  bmi: number;
  category: string;
  healthConcerns: string[];
}

export interface Exercise {
  name: string;
  category: 'cardio' | 'strength' | 'flexibility' | 'yoga' | 'rehabilitation';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  reps: string;
  targetMuscles: string[];
  description: string;
  instructions: string[];
  benefits: string[];
  precautions: string[];
}