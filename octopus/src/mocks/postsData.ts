export interface MockPost {
    id: string;
    author: {
      name: string;
      initials: string;
    };
    content: string;
    timestamp: Date;
    likes: number;
  }

  export const generateMockPosts = (): MockPost[] => {
    return Array.from({ length: 50 }, (_, index) => ({
      id: `post-${index + 1}`,
      author: {
        name: `User ${index + 1}`,
        initials: `U${index + 1}`,
      },
      content: `This is a mock post #${index + 1} with some content. ${
        Math.random() > 0.5 ? 'Including some extra text for variety.' : ''
      }`,
      timestamp: new Date(Date.now() - Math.random() * 10000000000),
      likes: Math.floor(Math.random() * 100),
    }));
  };