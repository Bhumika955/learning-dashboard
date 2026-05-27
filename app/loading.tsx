import SkeletonLoader from '@/components/SkeletonLoader'

export default function Loading() {
  return (
    <div className="flex h-screen bg-[#0a0a0f]">
      {/* Sidebar Skeleton */}
      <div className="hidden md:flex flex-col w-[220px] h-screen bg-[#111118] border-r border-white/5 p-4 gap-3 flex-shrink-0">
        <div className="h-8 bg-white/5 rounded-xl animate-pulse mb-4" />
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="h-10 bg-white/5 rounded-xl animate-pulse" />
        ))}
      </div>

      {/* Main Content Skeleton */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Hero Skeleton */}
        <div className="h-48 bg-[#111118] border border-white/5 rounded-2xl animate-pulse mb-4" />
        {/* Cards Skeleton */}
        <SkeletonLoader />
      </main>
    </div>
  )
}