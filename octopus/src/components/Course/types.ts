export interface Lesson {
    id: string;
    name: string;
    duration: number;
  }
  
  export interface CourseProps {
    id: string;
    name: string;
    description: string;
    lessons: Lesson[];
    coverImage: string;
    duration: number;
    progress: number;
    onPress?: () => void;
  }