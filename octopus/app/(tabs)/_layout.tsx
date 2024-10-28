import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#75A846',
        headerShown: true,
        tabBarStyle: {
          height: 60, 
          paddingBottom: 8,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon accessibilityHint="Navigate to Home Screen" name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: 'My Courses',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon accessibilityHint="Navigate to My Courses Screen" name={focused ? 'bookmark' : 'bookmark-outline'} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="community"
        options={{
          title: 'Community',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon accessibilityHint="Navigate to Community Screen" name={focused ? 'people-sharp' : 'people-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
