import { CourseProps } from "../Course/types";

export interface CoursesListProps {
    courses: CourseProps[];
    isLoading?: boolean;
    error?: string;
    onRefresh?: () => void;
    isRefreshing?: boolean;
  }

