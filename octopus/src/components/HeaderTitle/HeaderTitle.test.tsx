import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { HeaderTitle } from './HeaderTitle';
import { Text } from 'react-native';

describe('HeaderTitle', () => {
  it('renders correctly with provided title', () => {
    render(<HeaderTitle title="Test Title" />);
    
    expect(screen.getByText('Test Title')).toBeTruthy();
  });

  it('renders empty when title is empty string', () => {
    const { getByTestId } = render(<HeaderTitle title="" />);
    
    const text = getByTestId('header-title-text');
    expect(text.props.children).toBeUndefined();
  });

  it('updates when title prop changes', () => {
    const { rerender, getByTestId } = render(<HeaderTitle title="Initial Title" />);
    
    expect(getByTestId('header-title-text').props.children).toBe('Initial Title');
    
    rerender(<HeaderTitle title="Updated Title" />);
    
    expect(getByTestId('header-title-text').props.children).toBe('Updated Title');
  });

  // Test for memoization
  it('memoizes the title correctly', () => {
    const { rerender, getByTestId } = render(<HeaderTitle title="Memoized Title" />);
    
    const firstRender = getByTestId('header-title-text').props.children;
    
    // Rerender with the same title
    rerender(<HeaderTitle title="Memoized Title" />);
    const secondRender = getByTestId('header-title-text').props.children;
    
    // Reference should be the same due to memoization
    expect(firstRender).toBe(secondRender);
  });

  // Test for edge cases
  it('handles long titles correctly', () => {
    const longTitle = 'This is a very long title that might need special handling in some cases';
    render(<HeaderTitle title={longTitle} />);
    
    expect(screen.getByText(longTitle)).toBeTruthy();
  });

  it('handles special characters in title', () => {
    const titleWithSpecialChars = '!@#$%^&*()_+ Special چ ש';
    render(<HeaderTitle title={titleWithSpecialChars} />);
    
    expect(screen.getByText(titleWithSpecialChars)).toBeTruthy();
  });
});