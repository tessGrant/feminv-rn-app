import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { PostProps } from './types';
import { usePosts } from '@/context/PostsContext';
import { getTimeAgo } from '@/utils/getTimeAgo';

export const Post: React.FC<PostProps> = ({ id, author, content, timestamp }) => {
  const { likedPosts, toggleLike } = usePosts();
  const isLiked = likedPosts.includes(id);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{author.initials}</Text>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.authorName}>{author.name}</Text>
          <Text style={styles.timestamp}>{getTimeAgo(timestamp)}</Text>
        </View>
      </View>
      
      <Text style={styles.content}>{content}</Text>
      
      <TouchableOpacity
        onPress={() => toggleLike(id)}
        style={styles.likeButton}
      >
        <Ionicons
          name={isLiked ? 'heart' : 'heart-outline'}
          size={24}
          color={isLiked ? '#FF4081' : '#000'}
        />
      </TouchableOpacity>
    </View>
  );
};