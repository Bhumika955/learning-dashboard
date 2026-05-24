export default function SkeletonLoader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 4 }, (_, i) => (
        <div
          key={i}
          className="rounded-2xl p-5 bg-[#111118] border border-white/5 animate-pulse"
        >
          <div className="w-10 h-10 rounded-xl bg-white/10 mb-4" />
          <div className="h-4 bg-white/10 rounded mb-2 w-3/4" />
          <div className="h-3 bg-white/10 rounded mb-4 w-1/2" />
          <div className="h-1.5 bg-white/10 rounded-full w-full" />
        </div>
      ))}
    </div>
  )
}