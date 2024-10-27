import { CoursesList } from "@/components/CoursesList/CourseList";
import { HeaderTitle } from "@/components/HeaderTitle";
import { Layout } from "@/components/Layout";
import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./styles";
import { useCourseContext } from "@/context/CoursesContext";

export const AllCourses = () => {
  const { newCourses, startedCourses, isLoading, error } = useCourseContext();

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (

    <Layout>
      {startedCourses?.length ? (
        <View style={styles.listContainer}>
          <HeaderTitle title='Continue Learning' />
          <CoursesList courses={startedCourses ?? []} />
        </View>
      ) : <ActivityIndicator />}
      <View style={styles.listContainer}>
        <HeaderTitle title={'You might also like'} />
        <CoursesList courses={newCourses ?? []} />
      </View>
    </Layout>
   
  );
}