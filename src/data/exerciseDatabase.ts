import { Exercise } from '../types/exercise';

export const exerciseDatabase: Exercise[] = [
  // Cardio Exercises
  {
    name: "Walking",
    category: "cardio",
    difficulty: "beginner",
    duration: "20-30 minutes",
    reps: "Daily",
    targetMuscles: ["Legs", "Cardiovascular"],
    description: "Low-impact cardiovascular exercise perfect for beginners and weight management.",
    instructions: [
      "Start with comfortable walking shoes",
      "Begin with 10-15 minutes daily",
      "Maintain a brisk pace that allows conversation",
      "Gradually increase duration and intensity",
      "Focus on proper posture"
    ],
    benefits: [
      "Improves cardiovascular health",
      "Aids in weight management",
      "Strengthens leg muscles",
      "Low impact on joints",
      "Reduces stress"
    ],
    precautions: [
      "Start slowly if sedentary",
      "Wear proper footwear",
      "Stay hydrated"
    ]
  },
  {
    name: "Jumping Jacks",
    category: "cardio",
    difficulty: "intermediate",
    duration: "10-15 minutes",
    reps: "3 sets of 30-60 seconds",
    targetMuscles: ["Full Body", "Cardiovascular"],
    description: "Full-body cardiovascular exercise that improves coordination and burns calories.",
    instructions: [
      "Stand with feet together, arms at sides",
      "Jump while spreading legs shoulder-width apart",
      "Simultaneously raise arms overhead",
      "Jump back to starting position",
      "Maintain steady rhythm"
    ],
    benefits: [
      "Burns calories quickly",
      "Improves coordination",
      "Strengthens multiple muscle groups",
      "No equipment needed",
      "Boosts metabolism"
    ],
    precautions: [
      "Avoid if you have knee problems",
      "Land softly to protect joints",
      "Start with shorter durations"
    ]
  },
  
  // Strength Exercises
  {
    name: "Push-ups",
    category: "strength",
    difficulty: "intermediate",
    duration: "10-15 minutes",
    reps: "3 sets of 8-15 reps",
    targetMuscles: ["Chest", "Arms", "Core"],
    description: "Classic upper body strength exercise that builds chest, arm, and core strength.",
    instructions: [
      "Start in plank position with hands shoulder-width apart",
      "Lower body until chest nearly touches floor",
      "Push back up to starting position",
      "Keep body straight throughout movement",
      "Modify on knees if needed"
    ],
    benefits: [
      "Builds upper body strength",
      "Improves core stability",
      "No equipment required",
      "Multiple difficulty variations",
      "Functional movement pattern"
    ],
    precautions: [
      "Start with modified version if unable to do full push-ups",
      "Don't let hips sag",
      "Stop if you feel wrist pain"
    ]
  },
  {
    name: "Squats",
    category: "strength",
    difficulty: "beginner",
    duration: "10-15 minutes",
    reps: "3 sets of 10-20 reps",
    targetMuscles: ["Legs", "Glutes", "Core"],
    description: "Fundamental lower body exercise that strengthens legs and glutes.",
    instructions: [
      "Stand with feet shoulder-width apart",
      "Lower body as if sitting back into a chair",
      "Keep chest up and knees behind toes",
      "Lower until thighs are parallel to floor",
      "Push through heels to return to standing"
    ],
    benefits: [
      "Strengthens leg muscles",
      "Improves functional movement",
      "Burns calories",
      "Builds core stability",
      "No equipment needed"
    ],
    precautions: [
      "Don't let knees cave inward",
      "Start with bodyweight only",
      "Use proper depth based on mobility"
    ]
  },
  
  // Flexibility Exercises
  {
    name: "Forward Fold Stretch",
    category: "flexibility",
    difficulty: "beginner",
    duration: "5-10 minutes",
    reps: "Hold for 30-60 seconds",
    targetMuscles: ["Hamstrings", "Lower Back", "Calves"],
    description: "Gentle forward bend that stretches the entire back body and relieves tension.",
    instructions: [
      "Stand with feet hip-width apart",
      "Slowly hinge at hips and fold forward",
      "Let arms hang heavy or hold opposite elbows",
      "Keep slight bend in knees",
      "Breathe deeply and relax into the stretch"
    ],
    benefits: [
      "Stretches hamstrings and calves",
      "Released lower back tension",
      "Calms the nervous system",
      "Improves circulation",
      "Relieves stress"
    ],
    precautions: [
      "Don't force the stretch",
      "Keep knees slightly bent",
      "Come up slowly to avoid dizziness"
    ]
  },
  {
    name: "Shoulder Rolls",
    category: "flexibility",
    difficulty: "beginner",
    duration: "5 minutes",
    reps: "10-15 rolls each direction",
    targetMuscles: ["Shoulders", "Upper Back", "Neck"],
    description: "Simple shoulder mobility exercise to release tension and improve posture.",
    instructions: [
      "Stand or sit with arms at sides",
      "Slowly roll shoulders up, back, and down",
      "Complete full circles in one direction",
      "Reverse direction after 10-15 rolls",
      "Focus on smooth, controlled movement"
    ],
    benefits: [
      "Relieves shoulder tension",
      "Improves posture",
      "Increases shoulder mobility",
      "Reduces upper back stiffness",
      "Can be done anywhere"
    ],
    precautions: [
      "Move slowly and controlled",
      "Stop if you feel pain",
      "Don't force the movement"
    ]
  },
  
  // Yoga Exercises
  {
    name: "Child's Pose",
    category: "yoga",
    difficulty: "beginner",
    duration: "5-10 minutes",
    reps: "Hold for 1-3 minutes",
    targetMuscles: ["Back", "Hips", "Shoulders"],
    description: "Restorative yoga pose that provides gentle stretching and stress relief.",
    instructions: [
      "Kneel on floor with big toes touching",
      "Sit back on heels and separate knees hip-width apart",
      "Fold forward and extend arms in front",
      "Rest forehead on floor or prop",
      "Breathe deeply and relax"
    ],
    benefits: [
      "Stretches hips and back",
      "Calms the mind",
      "Relieves stress and anxiety",
      "Gently stretches shoulders",
      "Promotes relaxation"
    ],
    precautions: [
      "Use props if uncomfortable",
      "Avoid if you have knee injuries",
      "Come out slowly"
    ]
  },
  {
    name: "Cat-Cow Stretch",
    category: "yoga",
    difficulty: "beginner",
    duration: "5-10 minutes",
    reps: "10-15 cycles",
    targetMuscles: ["Spine", "Core", "Back"],
    description: "Gentle spinal mobility exercise that improves flexibility and relieves back tension.",
    instructions: [
      "Start on hands and knees in tabletop position",
      "Arch back and lift chest and tailbone (Cow)",
      "Round spine and tuck chin to chest (Cat)",
      "Move slowly between positions",
      "Synchronize with breathing"
    ],
    benefits: [
      "Improves spinal mobility",
      "Relieves back tension",
      "Strengthens core",
      "Improves posture",
      "Reduces stress"
    ],
    precautions: [
      "Move slowly and gently",
      "Don't overextend the neck",
      "Stop if you feel pain"
    ]
  },
  
  // Rehabilitation Exercises
  {
    name: "Wall Push-ups",
    category: "rehabilitation",
    difficulty: "beginner",
    duration: "5-10 minutes",
    reps: "2-3 sets of 10-15 reps",
    targetMuscles: ["Chest", "Arms", "Shoulders"],
    description: "Modified push-up that's easier on joints and perfect for building upper body strength safely.",
    instructions: [
      "Stand arm's length from wall",
      "Place palms flat against wall at shoulder height",
      "Lean in toward wall, then push back",
      "Keep body straight throughout movement",
      "Adjust distance from wall to modify difficulty"
    ],
    benefits: [
      "Builds upper body strength safely",
      "Low impact on joints",
      "Good for beginners",
      "Improves posture",
      "Can be done anywhere"
    ],
    precautions: [
      "Start close to wall for easier variation",
      "Keep movements controlled",
      "Stop if you feel pain"
    ]
  },
  {
    name: "Ankle Circles",
    category: "rehabilitation",
    difficulty: "beginner",
    duration: "5 minutes",
    reps: "10 circles each direction, each foot",
    targetMuscles: ["Ankles", "Calves", "Feet"],
    description: "Gentle ankle mobility exercise that improves circulation and prevents stiffness.",
    instructions: [
      "Sit comfortably with one leg extended",
      "Slowly rotate ankle in circular motion",
      "Complete 10 circles clockwise",
      "Repeat counterclockwise",
      "Switch to other foot"
    ],
    benefits: [
      "Improves ankle mobility",
      "Enhances circulation",
      "Prevents ankle stiffness",
      "Good for desk workers",
      "Helps with balance"
    ],
    precautions: [
      "Move slowly and gently",
      "Don't force the movement",
      "Stop if you feel pain"
    ]
  },
  
  // Additional Cardio
  {
    name: "High Knees",
    category: "cardio",
    difficulty: "intermediate",
    duration: "10-15 minutes",
    reps: "3 sets of 30-60 seconds",
    targetMuscles: ["Legs", "Core", "Cardiovascular"],
    description: "High-intensity cardio exercise that improves leg strength and cardiovascular fitness.",
    instructions: [
      "Stand with feet hip-width apart",
      "Run in place lifting knees to waist level",
      "Pump arms naturally",
      "Maintain quick pace",
      "Land on balls of feet"
    ],
    benefits: [
      "Improves cardiovascular fitness",
      "Strengthens leg muscles",  
      "Burns calories quickly",
      "Improves coordination",
      "No equipment needed"
    ],
    precautions: [
      "Start with lower intensity",
      "Land softly to protect joints",
      "Stop if you feel dizzy"
    ]
  },
  
  // Additional Strength
  {
    name: "Lunges",
    category: "strength",
    difficulty: "intermediate",
    duration: "10-15 minutes",
    reps: "3 sets of 10-12 each leg",
    targetMuscles: ["Legs", "Glutes", "Core"],
    description: "Unilateral leg exercise that builds strength and improves balance.",
    instructions: [
      "Stand with feet hip-width apart",
      "Step forward into lunge position",
      "Lower back knee toward ground",
      "Keep front knee over ankle",
      "Push back to starting position"
    ],
    benefits: [
      "Builds leg strength",
      "Improves balance",
      "Corrects muscle imbalances", 
      "Functional movement",
      "Enhances stability"
    ],
    precautions: [
      "Don't let front knee extend past toes",
      "Start with bodyweight only",
      "Use wall for balance if needed"
    ]
  }
];