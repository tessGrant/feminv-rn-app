import { useState, useEffect, useCallback } from 'react';
import { postsAPI } from '@/services/api';
import { MockPost } from '@/mocks/postsData';

export const useFeedPosts = () => {
  const [posts, setPosts] = useState<MockPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchPosts = useCallback(async (page: number, shouldAppend = true) => {
    try {
      setError(null);
      setIsLoading(true);
      
      const response = await postsAPI.getPosts(page);
      
      setPosts(prev => 
        shouldAppend ? [...prev, ...response.data] : response.data
      );
      setHasMore(response.meta.hasMore);
    } catch (err) {
      setError('Failed to fetch posts');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);
  const refresh = async () => {
    setIsRefreshing(true);
    setCurrentPage(1);
    await fetchPosts(1, false);
    setIsRefreshing(false);
  };

  const loadMore = async () => {
    if (!isLoading && hasMore) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      await fetchPosts(nextPage);
    }
  };

  useEffect(() => {
    fetchPosts(1, false);
  }, []);

  return {
    posts,
    isLoading,
    error,
    hasMore,
    loadMore,
    refresh,
    isRefreshing,
  };
};