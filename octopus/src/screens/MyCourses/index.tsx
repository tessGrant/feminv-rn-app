import { CoursesList } from '@/components/CoursesList';
import { HeaderTitle } from '@/components/HeaderTitle';
import { Layout } from '@/components/Layout'
import {  useCourseContext } from '@/context/CoursesContext'
import {Text, View} from 'react-native'

export const MyCourses = () => {
  const { newCourses, startedCourses, bookmarkedCourses } = useCourseContext();

  const filteredCourses = [...startedCourses, ...newCourses].filter(course => 
    bookmarkedCourses.includes(course.id)
  );

  return (
      <Layout>
        <HeaderTitle title={'My Courses'} />

        <CoursesList 
          courses={filteredCourses}
          isLoading={false}
        />
    </Layout>
   
  )
}

