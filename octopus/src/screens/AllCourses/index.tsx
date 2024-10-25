import { CourseProps } from "@/components/Course";
import { CoursesList } from "@/components/CoursesList/CourseList";
import { Layout } from "@/components/Layout";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export const AllCourses = () => {
    const [isStartedCourses, setIsStartedCourses] = useState(true);
    const { data, loading, error, refetch } = useFetch<CourseProps[]>({
        url: 'http://localhost:3000/courses',
        options: {
          headers: {
            'Authorization': 'Bearer token'
          }
        }
      });
    
      if (loading) return <ActivityIndicator />;
      if (error) return <Text>Error: {error.message}</Text>;

      return (
        <Layout>
            {isStartedCourses && (
                <>
                <Text>Continue Learning</Text>
                <CoursesList courses={data ?? []} />
                </>
            )}
            <Text>You might also like</Text>
            <CoursesList courses={data ?? []} />
        </Layout>
      );
}