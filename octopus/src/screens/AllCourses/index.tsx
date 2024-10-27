import { CourseProps } from "@/components/Course";
import { CoursesList } from "@/components/CoursesList/CourseList";
import { HeaderTitle } from "@/components/HeaderTitle";
import { Layout } from "@/components/Layout";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./styles";
import { useCourseContext } from "@/context/CoursesContext";

export const AllCourses = () => {
  const [isStartedCourses, setIsStartedCourses] = useState(true);
  
  const { allCourses, isLoading, error } = useCourseContext();
  
  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
 
    <Layout>
      {isStartedCourses && (
        <View style={styles.listContainer}>
          <HeaderTitle title='Continue Learning' />
          <CoursesList courses={allCourses ?? []} />
        </View>
      )}
      <View style={styles.listContainer}>
        <HeaderTitle title={'You might also like'} />
        <CoursesList courses={allCourses ?? []} />
      </View>
    </Layout>
   
  );
}