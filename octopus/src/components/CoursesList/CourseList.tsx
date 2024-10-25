import { CourseProps } from "../Course/types";
import { 
   View, 
    ActivityIndicator, 
    Text,
  } from 'react-native';
  import { CourseComponent } from '@components/Course/Course';
import { styles } from "./styles";
import { CoursesListProps } from "./types";
import Carousel from "react-native-reanimated-carousel";

export const CoursesList = ({
    courses,
    isLoading,
    error,
  }: CoursesListProps) => {
    const renderItem = ({ item: course }: { item: CourseProps }) => (
      <CourseComponent
        {...course}
        onPress={() => console.log(course.id)}
      />
    );
    // const renderEmpty = () => (
    //     <View style={styles.emptyContainer}>
    //       <Text style={styles.emptyText}>No courses available</Text>
    //     </View>
    //   );
    
      const renderError = () => (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      );
    
      if (isLoading) {
        return (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" />
          </View>
        );
      }
    
      if (error) {
        return renderError();
      }
      return (
        <Carousel
            loop={true}
            width={250}
            height={258}
            snapEnabled={true}
            pagingEnabled={true}
            autoPlayInterval={2000}
            data={courses}
            style={{ width: "100%" }}
            renderItem={renderItem}
        />
      );
    };

