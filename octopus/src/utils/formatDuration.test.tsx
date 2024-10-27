import { formatDuration } from './formatDuration';

describe('formatDuration', () => {
  it('formats minutes only when less than 1 hour', () => {
    expect(formatDuration(1800)).toBe('30m');  // 30 minutes
    expect(formatDuration(300)).toBe('5m');    // 5 minutes
    expect(formatDuration(60)).toBe('1m');     // 1 minute
  });

  it('formats hours only when minutes are 0', () => {
    expect(formatDuration(3600)).toBe('1h');    // 1 hour exactly
    expect(formatDuration(7200)).toBe('2h');    // 2 hours exactly
    expect(formatDuration(18000)).toBe('5h');   // 5 hours exactly
  });

  it('formats hours and minutes when both present', () => {
    expect(formatDuration(3660)).toBe('1h 1m');      // 1 hour 1 minute
    expect(formatDuration(5400)).toBe('1h 30m');     // 1 hour 30 minutes
    expect(formatDuration(7260)).toBe('2h 1m');      // 2 hours 1 minute
    expect(formatDuration(9000)).toBe('2h 30m');     // 2 hours 30 minutes
  });

  it('handles decimal values', () => {
    expect(formatDuration(90.5)).toBe('1m');         // Rounds down
    expect(formatDuration(3600.7)).toBe('1h');       // Rounds down
    expect(formatDuration(5400.9)).toBe('1h 30m');   // Rounds down
  });
});


describe('formatDuration', () => {
  describe('basic formatting', () => {
    it('formats minutes only when less than 1 hour', () => {
      const testCases = [
        { input: 1800, expected: '30m' },
        { input: 300, expected: '5m' },
        { input: 60, expected: '1m' }
      ];

      testCases.forEach(({ input, expected }) => {
        expect(formatDuration(input)).toBe(expected);
      });
    });

    it('formats hours only when minutes are 0', () => {
      const testCases = [
        { input: 3600, expected: '1h' },
        { input: 7200, expected: '2h' },
        { input: 18000, expected: '5h' }
      ];

      testCases.forEach(({ input, expected }) => {
        expect(formatDuration(input)).toBe(expected);
      });
    });

    it('formats hours and minutes when both present', () => {
      const testCases = [
        { input: 3660, expected: '1h 1m' },
        { input: 5400, expected: '1h 30m' },
        { input: 7260, expected: '2h 1m' },
        { input: 9000, expected: '2h 30m' }
      ];

      testCases.forEach(({ input, expected }) => {
        expect(formatDuration(input)).toBe(expected);
      });
    });
  });
});