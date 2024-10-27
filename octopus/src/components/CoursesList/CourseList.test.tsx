import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import { CoursesList } from './CourseList';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const renderWithGestureHandler = (component: React.ReactElement) => {
    return render(
    <GestureHandlerRootView>{component}</GestureHandlerRootView>
    );
};

describe('CoursesList', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders loading state correctly', () => {
    renderWithGestureHandler(
        <CoursesList
        courses={[]}
        isLoading={true}
        />
    );

    expect(screen.getByTestId('loading-indicator')).toBeTruthy();
    });

    it('renders error state correctly', async () => {
    const errorMessage = 'Failed to load courses';
    renderWithGestureHandler(
        <CoursesList
        courses={[]}
        isLoading={false}
        error={errorMessage}
        />
    );

    waitFor(() => expect(screen.getByText(errorMessage)).toBeTruthy());
    });

    it('renders empty state when no courses provided', async () => {
    renderWithGestureHandler(
        <CoursesList
        courses={[]}
        isLoading={false}
        />
    );

    waitFor(() => expect(screen.queryByTestId('course-1')).toBeNull());
    });

});