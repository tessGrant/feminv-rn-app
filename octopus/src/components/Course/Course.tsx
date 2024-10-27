import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CourseProps } from './types';
import { styles } from './styles';
import { formatDuration } from '@/utils/formatDuration';
import { useCourseContext } from '@/context/CoursesContext';

export const CourseComponent = ({
  id,
  name,
  lessons,
  duration,
  progress,
  coverImage,
  onPress,
  }: CourseProps) => {
  
  const { isBookmarked, toggleBookmark } = useCourseContext();
  const bookmarked = isBookmarked(id);

  const handleBookmarkPress = (e: any) => {
    e.stopPropagation();
    toggleBookmark(id);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        {progress > 0 && (
        <View style={styles.progressBadge}>
          <Text style={styles.progressText}>{`${Math.round(progress * 100)}% completed`}</Text>
        </View>
        )}
    
        <View style={styles.imageContainer}>
          <Image
            source={{uri: coverImage}} 
            style={styles.moneyImage}
            resizeMode="contain"
          />
        </View>
    
        <TouchableOpacity style={styles.bookmarkButton} onPress={handleBookmarkPress}>
          <Ionicons 
            name={bookmarked ? "bookmark" : "bookmark-outline"} 
            size={24} 
            color={bookmarked ? "#75A846" : "black"} 
          />
        </TouchableOpacity>
           
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Ionicons name="book-outline" size={16} color="#666" />
              <Text style={styles.statText}>{`${lessons.length} lessons`}</Text>
            </View>
            <View style={styles.stat}>
              <Ionicons name="time-outline" size={16} color="#666" />
              <Text style={styles.statText}>{formatDuration(duration)}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};