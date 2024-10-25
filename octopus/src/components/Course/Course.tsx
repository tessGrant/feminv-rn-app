import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CourseProps } from './types';
import { styles } from './styles';
import { formatDuration } from '@/utils/formatDuration';


export const CourseComponent = ({
    name,
    lessons,
    duration,
    progress,
    coverImage,
    onPress,
  }: CourseProps) => {
    return (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.card}>
            {/* Progress Badge */}
            <View style={styles.progressBadge}>
              <Text style={styles.progressText}>{`${Math.round(progress)}% completed`}</Text>
            </View>
    
            {/* Money Bills Image */}
            <View style={styles.imageContainer}>
              <Image
                source={{uri: coverImage}} // Replace with your local image
                style={styles.moneyImage}
                resizeMode="contain"
              />
            </View>
    
            {/* Bookmark Icon */}
            <TouchableOpacity style={styles.bookmarkButton}>
              <Ionicons name="bookmark-outline" size={24} color="black" />
            </TouchableOpacity>
            {/* Course Info */}
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