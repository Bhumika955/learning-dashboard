'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  Code,
  GitBranch,
  FileCode,
  Palette,
  BookOpen,
  Brain,
  Globe,
  Database,
} from 'lucide-react'
import type { Course } from '@/types'

const iconMap: Record<string, React.ElementType> = {
  Code,
  GitBranch,
  FileCode,
  Palette,
  BookOpen,
  Brain,
  Globe,
  Database,
}

const gradients = [
  'from-violet-600/20 to-blue-600/10',
  'from-blue-600/20 to-cyan-600/10',
  'from-emerald-600/20 to-teal-600/10',
  'from-orange-600/20 to-pink-600/10',
]

interface CourseCardProps {
  course: Course
  index: number
}

export default function CourseCard({ course, index }: CourseCardProps) {
  const Icon = iconMap[course.icon_name] || BookOpen
  const gradient = gradients[index % gradients.length]

  // Animated progress bar
  const [displayProgress, setDisplayProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayProgress(course.progress)
    }, index * 150 + 300)
    return () => clearTimeout(timer)
  }, [course.progress, index])

  return (
    <motion.article
      whileHover={{
        scale: 1.02,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      className={`relative rounded-2xl p-5 overflow-hidden bg-[#111118] border border-white/5 cursor-pointer`}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} pointer-events-none`} />

      {/* Grain Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hover Glow Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
        whileHover={{ opacity: 1 }}
        style={{
          background:
            'linear-gradient(135deg, rgba(139,92,246,0.15), transparent)',
          border: '1px solid rgba(139,92,246,0.3)',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
          <Icon size={20} className="text-violet-400" />
        </div>

        {/* Title */}
        <h3 className="text-white font-semibold text-sm mb-1 leading-snug">
          {course.title}
        </h3>
        <p className="text-gray-500 text-xs mb-4">{course.progress}% complete</p>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-violet-500 to-blue-500 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${displayProgress}%` }}
            transition={{
              duration: 1,
              delay: index * 0.15,
              ease: 'easeOut',
            }}
          />
        </div>
      </div>
    </motion.article>
  )
}