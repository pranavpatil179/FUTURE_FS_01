"use client"

import React, { useRef } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "motion/react"
import { cn } from "@/lib/utils"

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

interface ScrollVelocityContainerProps {
  children: React.ReactNode
  className?: string
}

export function ScrollVelocityContainer({
  children,
  className,
}: ScrollVelocityContainerProps) {
  return (
    <div className={cn("relative w-full overflow-hidden flex flex-col gap-4 py-8", className)}>
      {children}
    </div>
  )
}

interface ScrollVelocityRowProps {
  children: string
  baseVelocity: number
  direction?: 1 | -1
  className?: string
  style?: React.CSSProperties
}

export function ScrollVelocityRow({
  children,
  baseVelocity = 100,
  direction = 1,
  className,
  style,
}: ScrollVelocityRowProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  // Magic numbers depending on content length to wrap nicely
  // In a robust component, we would measure the width of the text dynamically.
  // We'll use wrap(-20, -45) as an approximation, which means it loops seamlessly 
  // if you repeat the text often enough. 
  // Let's create multiple copies of the child string.
  
  const content = Array(6).fill(children).join(" • ")

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  useAnimationFrame((t, delta) => {
    let velocityAdded = 0

    // Accelerate when scrolling
    if (velocityFactor.get() < 0) {
      velocityAdded += direction * Math.min(velocityFactor.get(), -0.5) * 5
    } else if (velocityFactor.get() > 0) {
      velocityAdded += direction * Math.max(velocityFactor.get(), 0.5) * 5
    }

    const moveBy = (direction * baseVelocity * (delta / 1000)) + velocityAdded
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className={cn("overflow-hidden whitespace-nowrap flex flex-nowrap m-0", className)} style={style}>
      <motion.div className="flex whitespace-nowrap text-inherit font-inherit gap-8 items-center" style={{ x }}>
        <span className="block">{content}</span>
        <span className="block">{content}</span>
        <span className="block">{content}</span>
        <span className="block">{content}</span>
      </motion.div>
    </div>
  )
}
