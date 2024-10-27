import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface PostsContextType {
  likedPosts: string[];
  toggleLike: (postId: string) => void;
  isLiked: (postId: string) => boolean;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

const LIKED_POSTS_STORAGE_KEY = '@liked_posts';

export const PostsProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [likedPosts, setLikedPosts] = useState<string[]>([]);

  useEffect(() => {
    const loadLikedPosts = async () => {
      try {
        const stored = await AsyncStorage.getItem(LIKED_POSTS_STORAGE_KEY);
        if (stored) {
          setLikedPosts(JSON.parse(stored));
        }
      } catch (error) {
        console.error('Error loading liked posts:', error);
      }
    };
    loadLikedPosts();
  }, []);

  const toggleLike = async (postId: string) => {
    try {
      const newLikedPosts = likedPosts.includes(postId)
        ? likedPosts.filter(id => id !== postId)
        : [...likedPosts, postId];
      
      setLikedPosts(newLikedPosts);
      await AsyncStorage.setItem(
        LIKED_POSTS_STORAGE_KEY, 
        JSON.stringify(newLikedPosts)
      );
    } catch (error) {
      console.error('Error saving liked post:', error);
    }
  };

  const isLiked = (postId: string) => likedPosts.includes(postId);

  return (
    <PostsContext.Provider value={{ likedPosts, toggleLike, isLiked }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostsProvider');
  }
  return context;
};