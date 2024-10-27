import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { CourseContext } from '@/context/CoursesContext';
import { formatDuration } from '@/utils/formatDuration';
import { CourseComponent } from './Course';
import { Lesson } from './types';

jest.mock('@/utils/formatDuration', () => ({
  formatDuration: jest.fn((seconds: number) => `${seconds / 60} minutes`)
}));

const mockedFormatDuration = jest.mocked(formatDuration);

jest.mock('@expo/vector-icons', () => ({
  Ionicons: 'Ionicons',
}));

interface MockProps {
  id: string;
  name: string;
  lessons: Lesson[];
  duration: number;
  progress: number;
  coverImage: string;
  onPress: jest.Mock;
}

const mockProps: MockProps = {
  id: '1',
  name: 'React Native Course',
  lessons: [{ id: '1', name: 'Lesson 1', duration: 12 }, { id: '2', name: 'Lesson 2', duration: 13 }],
  duration: 3600,
  progress: 0.75,
  coverImage: 'https://example.com/image.jpg',
  onPress: jest.fn(),
};

interface MockContextValue {
  newCourses: any[];
  bookmarkedCourses: any[];
  startedCourses: any[];
  isLoading: boolean;
  error: Error | null;
  fetchCourses: jest.Mock;
  isBookmarked: jest.Mock;
  toggleBookmark: jest.Mock;
}

const mockContextValue: MockContextValue = {
  newCourses: [],
  bookmarkedCourses: [],
  startedCourses: [],
  isLoading: false,
  error: null,
  fetchCourses: jest.fn(),
  isBookmarked: jest.fn(),
  toggleBookmark: jest.fn(),
};

const renderWithContext = (
  ui: React.ReactElement, 
  contextValue: MockContextValue = mockContextValue
) => {
  return render(
    <CourseContext.Provider value={contextValue}>
      {ui}
    </CourseContext.Provider>
  );
};

describe('CourseComponent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockedFormatDuration.mockImplementation((seconds: number) => `${seconds / 60} minutes`);
    mockContextValue.isBookmarked.mockReturnValue(false);
  });

  it('renders correctly with all props', () => {
    renderWithContext(<CourseComponent {...mockProps} />);

    expect(screen.getByText('React Native Course')).toBeTruthy();
    expect(screen.getByText('75% completed')).toBeTruthy();
    expect(screen.getByText('2 lessons')).toBeTruthy();
    expect(screen.getByText('60 minutes')).toBeTruthy();
  });

  it('calls onPress when card is pressed', () => {
    renderWithContext(<CourseComponent {...mockProps} />);
    
    const touchable: any = screen.getByText('React Native Course').parent;
    fireEvent.press(touchable);
    
    expect(mockProps.onPress).toHaveBeenCalledTimes(1);
  });

  it('formats duration correctly', () => {
    renderWithContext(<CourseComponent {...mockProps} />);
    
    expect(mockedFormatDuration).toHaveBeenCalledWith(mockProps.duration);
    expect(screen.getByText('60 minutes')).toBeTruthy();
  });

  it('renders progress badge with correct percentage', () => {
    renderWithContext(<CourseComponent {...mockProps} />);
    
    expect(screen.getByText('75% completed')).toBeTruthy();
  });

  it('renders correct number of lessons', () => {
    renderWithContext(<CourseComponent {...mockProps} />);
    
    expect(screen.getByText('2 lessons')).toBeTruthy();
  });

  it('handles loading state correctly', () => {
    const loadingContextValue: MockContextValue = {
      ...mockContextValue,
      isLoading: true
    };
    
    renderWithContext(<CourseComponent {...mockProps} />, loadingContextValue);
  });

  it('handles error state correctly', () => {
    const errorContextValue: MockContextValue = {
      ...mockContextValue,
      error: new Error('Failed to fetch courses')
    };
    
    renderWithContext(<CourseComponent {...mockProps} />, errorContextValue);
  });
});