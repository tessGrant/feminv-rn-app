import React from 'react';
import { 
  FlatList, 
  ActivityIndicator, 
  RefreshControl,
  View,
  Text
} from 'react-native';
import { Post } from '@/components/Post';
import { useFeedPosts } from '@/hooks/usePosts';
import { styles } from './styles';

export const Feed = () => {
  const { 
    posts, 
    isLoading, 
    error, 
    hasMore, 
    loadMore, 
    refresh, 
    isRefreshing 
  } = useFeedPosts();

  const renderFooter = () => {
    if (!hasMore) return null;
    
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="small" />
      </View>
    );
  };

  const renderEmpty = () => {
    if (isLoading) return null;

    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No posts yet</Text>
      </View>
    );
  };

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <Post {...item} />}
      keyExtractor={item => item.id}
      onEndReached={loadMore}
      onEndReachedThreshold={0.3}
      ListFooterComponent={renderFooter}
      ListEmptyComponent={renderEmpty}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={refresh}
        />
      }
      contentContainerStyle={styles.container}
    />
  );
};
