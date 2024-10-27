import { MockPost, generateMockPosts } from '@/mocks/postsData';

const POSTS_PER_PAGE = 10;
const ARTIFICIAL_DELAY = 1000; // 1 second delay to simulate network request

interface PaginatedResponse<T> {
  data: T[];
  meta: {
    currentPage: number;
    totalPages: number;
    hasMore: boolean;
  };
}

class PostsAPI {
    private posts: MockPost[];
  
    constructor() {
      this.posts = generateMockPosts();
    }
  
    async getPosts(page: number = 1): Promise<PaginatedResponse<MockPost>> {
    
      await new Promise(resolve => setTimeout(resolve, ARTIFICIAL_DELAY));
  
      const startIndex = (page - 1) * POSTS_PER_PAGE;
      const endIndex = startIndex + POSTS_PER_PAGE;
      const paginatedPosts = this.posts.slice(startIndex, endIndex);
      const totalPages = Math.ceil(this.posts.length / POSTS_PER_PAGE);
  
      return {
        data: paginatedPosts,
        meta: {
          currentPage: page,
          totalPages,
          hasMore: page < totalPages,
        },
      };
    }
    async likePost(postId: string): Promise<{ success: boolean }> {
        await new Promise(resolve => setTimeout(resolve, 500));
        return { success: true };
      }
    
      async unlikePost(postId: string): Promise<{ success: boolean }> {
        await new Promise(resolve => setTimeout(resolve, 500));
        return { success: true };
      }
    }
    
    export const postsAPI = new PostsAPI();  