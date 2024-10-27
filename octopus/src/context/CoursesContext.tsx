import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { CourseProps } from '@components/Course/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CourseContextProps {
  newCourses: CourseProps[];
  bookmarkedCourses: string[];
  startedCourses: CourseProps[];
  toggleBookmark: (courseId: string) => void;
  isBookmarked: (courseId: string) => boolean;
  isLoading: boolean;
  error: Error | null;
  refreshCourses: () => Promise<void>;
}

const CourseContext = createContext<CourseContextProps | undefined>(undefined);

const BOOKMARK_STORAGE_KEY = '@bookmarks';
const API_URL = 'http://localhost:3000/courses';

export const CourseContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarkedCourses, setBookmarkedCourses] = useState<string[]>([]);
  const [allCourses, setAllCourses] = useState<CourseProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const startedCourses = useMemo(() => {
    return allCourses.filter(course => course.progress > 0);
  }, [allCourses]);

  const newCourses = useMemo(() => {
    return allCourses.filter(course => course.progress === 0);
  }, [allCourses]);


  const loadBookmarks = async () => {
    try {
      const stored = await AsyncStorage.getItem(BOOKMARK_STORAGE_KEY);
      if (stored) {
        setBookmarkedCourses(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading bookmarks:', error);
    }
  };

  const fetchCourses = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch courses');
      }
      
      const data = await response.json();
      setAllCourses(data);
    } catch (error) {
      setError(error as Error);
      console.error('Error fetching courses:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const initializeData = async () => {
      await Promise.all([loadBookmarks(), fetchCourses()]);
    };
    initializeData();
  }, []);

  const toggleBookmark = async (courseId: string) => {
    try {
      const newBookmarks = bookmarkedCourses.includes(courseId)
        ? bookmarkedCourses.filter(id => id !== courseId)
        : [...bookmarkedCourses, courseId];
      
      setBookmarkedCourses(newBookmarks);
      await AsyncStorage.setItem(BOOKMARK_STORAGE_KEY, JSON.stringify(newBookmarks));
    } catch (error) {
      console.error('Error saving bookmark:', error);
    }
  };

  const isBookmarked = (courseId: string) => bookmarkedCourses.includes(courseId);

  const refreshCourses = async () => {
    await fetchCourses();
  };

  return (
    <CourseContext.Provider 
      value={{ 
        newCourses,
        startedCourses,
        bookmarkedCourses, 
        toggleBookmark, 
        isBookmarked,
        isLoading,
        error,
        refreshCourses
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error('useCourseContext must be used within a CourseContextProvider');
  }
  return context;
};