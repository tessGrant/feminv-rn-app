import { CoursesList } from '@/components/CoursesList';
import { HeaderTitle } from '@/components/HeaderTitle';
import { Layout } from '@/components/Layout'
import {  useCourseContext } from '@/context/CoursesContext'
import {Text, View} from 'react-native'

export const MyCourses = () => {
  const { allCourses, bookmarkedCourses } = useCourseContext();
  const filteredCourses = allCourses.filter(course => 
    bookmarkedCourses.includes(course.id)
  );

  console.log({allCourses})
  console.log({filteredCourses})
  return (
    
      <Layout><View style={{ flex: 1 }}>
      <HeaderTitle title={'Bookmarked Courses'} />
      <CoursesList 
        courses={filteredCourses}
        isLoading={false}
      />
    </View></Layout>
   
  )
}

