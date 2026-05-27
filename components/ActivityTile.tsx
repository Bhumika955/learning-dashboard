'use client'

import { motion } from 'framer-motion'
import { Activity } from 'lucide-react'
import { useMemo } from 'react'

// Fixed seed data — Math.random() nahi, fixed array
const activityData = [
  2,3,1,0,3,2,1,3,0,2,
  1,3,2,1,0,3,2,0,1,3,
  0,2,3,1,2,0,3,1,2,3,
  1,0,2,3,1,2,3,0,1,2,
  3,2,1,0,2,3,1,2,0,3,
  1,2,0,3,2,1,3,0,2,1,
  0,3,2,1,3,2,0,1,3,2,
]

const intensityColors = [
  'bg-white/5',
  'bg-violet-500/30',
  'bg-violet-500/60',
  'bg-violet-500',
]

export default function ActivityTile() {
  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative rounded-2xl p-5 overflow-hidden bg-[#111118] border border-white/5 h-full"
    >
      {/* Background Glow */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <Activity size={16} className="text-violet-400" />
          <h2 className="text-white font-semibold text-sm">Learning Activity</h2>
        </div>

        <p className="text-gray-500 text-xs mb-4">Last 10 weeks</p>

        {/* Activity Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(10, 1fr)',
            gap: '4px',
          }}
        >
          {activityData.map((intensity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: idx * 0.005,
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
              className={`aspect-square rounded-sm ${intensityColors[intensity]}`}
            />
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-gray-600 text-xs">Less</span>
          {intensityColors.map((color, i) => (
            <div key={i} className={`w-3 h-3 rounded-sm ${color}`} />
          ))}
          <span className="text-gray-600 text-xs">More</span>
        </div>
      </div>
    </motion.article>
  )
}