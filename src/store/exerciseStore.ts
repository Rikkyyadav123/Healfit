import { create } from 'zustand';
import { UserProfile, Exercise } from '../types/exercise';
import { exerciseDatabase } from '../data/exerciseDatabase';

interface ExerciseStore {
  userProfile: UserProfile | null;
  recommendations: Exercise[];
  setUserProfile: (profile: UserProfile) => void;
  setHealthConcerns: (concerns: string[]) => void;
  generateRecommendations: () => void;
}

export const useExerciseStore = create<ExerciseStore>((set, get) => ({
  userProfile: null,
  recommendations: [],
  
  setUserProfile: (profile) => set({ userProfile: profile }),
  
  setHealthConcerns: (concerns) => {
    const currentProfile = get().userProfile;
    if (currentProfile) {
      set({
        userProfile: {
          ...currentProfile,
          healthConcerns: concerns
        }
      });
    }
  },
  
  generateRecommendations: () => {
    const { userProfile } = get();
    if (!userProfile) return;

    const recommendations: Exercise[] = [];
    const { bmi, category, healthConcerns } = userProfile;

    // BMI-based recommendations
    if (category === 'Underweight') {
      recommendations.push(...exerciseDatabase.filter(ex => 
        ex.category === 'strength' && ex.difficulty === 'beginner'
      ));
    } else if (category === 'Overweight' || category === 'Obese') {
      recommendations.push(...exerciseDatabase.filter(ex => 
        ex.category === 'cardio' && (ex.difficulty === 'beginner' || ex.difficulty === 'intermediate')
      ));
    } else {
      recommendations.push(...exerciseDatabase.filter(ex => 
        ex.difficulty === 'intermediate'
      ));
    }

    // Health concern-based recommendations
    healthConcerns.forEach(concern => {
      const concernLower = concern.toLowerCase();
      
      if (concernLower.includes('back pain')) {
        recommendations.push(...exerciseDatabase.filter(ex => 
          ex.targetMuscles.includes('Core') || ex.category === 'yoga'
        ));
      }
      
      if (concernLower.includes('knee')) {
        recommendations.push(...exerciseDatabase.filter(ex => 
          ex.category === 'rehabilitation' || (ex.category === 'strength' && ex.targetMuscles.includes('Legs'))
        ));
      }
      
      if (concernLower.includes('weight loss')) {
        recommendations.push(...exerciseDatabase.filter(ex => 
          ex.category === 'cardio'
        ));
      }
      
      if (concernLower.includes('muscle building')) {
        recommendations.push(...exerciseDatabase.filter(ex => 
          ex.category === 'strength'
        ));
      }
      
      if (concernLower.includes('flexibility')) {
        recommendations.push(...exerciseDatabase.filter(ex => 
          ex.category === 'flexibility' || ex.category === 'yoga'
        ));
      }
      
      if (concernLower.includes('stress') || concernLower.includes('insomnia')) {
        recommendations.push(...exerciseDatabase.filter(ex => 
          ex.category === 'yoga'
        ));
      }
      
      if (concernLower.includes('cardiovascular') || concernLower.includes('blood pressure')) {
        recommendations.push(...exerciseDatabase.filter(ex => 
          ex.category === 'cardio' && ex.difficulty === 'beginner'
        ));
      }
      
      if (concernLower.includes('arthritis') || concernLower.includes('posture')) {
        recommendations.push(...exerciseDatabase.filter(ex => 
          ex.category === 'rehabilitation' || ex.category === 'flexibility'
        ));
      }
    });

    // Remove duplicates and limit results
    const uniqueRecommendations = recommendations.filter((exercise, index, self) =>
      index === self.findIndex(ex => ex.name === exercise.name)
    );

    set({ recommendations: uniqueRecommendations.slice(0, 12) });
  }
}));