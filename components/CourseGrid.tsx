import { supabase } from '@/lib/supabase'
import CourseCard from './CourseCard'
import type { Course } from '@/types'

async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Supabase error:', error)
    return []
  }

  return data || []
}

export default async function CourseGrid() {
  const courses = await getCourses()

  if (courses.length === 0) {
    return (
      <div className="col-span-3 flex items-center justify-center p-10">
        <p className="text-gray-500 text-sm">No courses found. Add some in Supabase!</p>
      </div>
    )
  }

  return (
    <>
      {courses.map((course, index) => (
        <CourseCard key={course.id} course={course} index={index} />
      ))}
    </>
  )
}