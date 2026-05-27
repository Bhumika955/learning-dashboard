import { Suspense } from 'react'
import Sidebar from '@/components/Sidebar'
import HeroTile from '@/components/HeroTile'
import CourseGrid from '@/components/CourseGrid'
import ActivityTile from '@/components/ActivityTile'
import SkeletonLoader from '@/components/SkeletonLoader'

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-[#0a0a0f] overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6">

        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-gray-400 text-xs font-medium uppercase tracking-widest">
            Dashboard
          </h2>
        </div>

        {/* Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Hero Tile — spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            <HeroTile />
          </div>

          {/* Activity Tile */}
          <div className="lg:col-span-1">
            <ActivityTile />
          </div>

          {/* Course Cards — fetched from Supabase */}
          <Suspense fallback={<SkeletonLoader />}>
            <CourseGrid />
          </Suspense>

        </section>

        {/* Mobile Bottom Nav */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#111118] border-t border-white/5 flex justify-around py-3 px-4 z-50">
          {['Home', 'Courses', 'Progress', 'Settings'].map((item) => (
            <button
              key={item}
              className="text-gray-500 text-xs flex flex-col items-center gap-1"
            >
              <div className="w-5 h-5 bg-white/10 rounded" />
              {item}
            </button>
          ))}
        </nav>

      </main>
    </div>
  )
}