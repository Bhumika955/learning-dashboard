'use client'

import { motion } from 'framer-motion'
import { Flame, Trophy } from 'lucide-react'

export default function HeroTile() {
  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative col-span-2 rounded-2xl p-6 overflow-hidden bg-[#111118] border border-white/5"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-blue-600/10 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium mb-1">Good morning 👋</p>
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, <span className="text-violet-400">Priya!</span>
          </h1>
          <p className="text-gray-400 text-sm">
            You have 3 courses in progress. Keep it up!
          </p>
        </div>

        {/* Streak */}
        <div className="flex flex-col items-center gap-1 bg-orange-500/10 border border-orange-500/20 rounded-2xl px-4 py-3">
          <Flame className="text-orange-400" size={24} />
          <span className="text-2xl font-bold text-white">12</span>
          <span className="text-orange-400 text-xs font-medium">Day Streak</span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="relative z-10 flex gap-4 mt-6">
        {[
          { label: 'Courses Active', value: '4' },
          { label: 'Hours This Week', value: '8.5' },
          { label: 'Completed', value: '12' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-1 bg-white/5 rounded-xl px-4 py-3"
          >
            <span className="text-white font-bold text-lg">{stat.value}</span>
            <span className="text-gray-500 text-xs">{stat.label}</span>
          </div>
        ))}
      </div>
    </motion.article>
  )
}