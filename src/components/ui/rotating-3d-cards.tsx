"use client"
import React from "react"
import { cn } from "@/lib/utils"

interface Rotating3DCardsProps {
  className?: string
}

export function Rotating3DCards({ className }: Rotating3DCardsProps) {
  return (
    <div className={cn("w-full h-full relative text-center flex items-center justify-center overflow-hidden", className)}>
      <div 
        className="absolute z-10"
        style={{
          width: "100px",
          height: "150px",
          top: "25%",
          left: "calc(50% - 50px)",
          transformStyle: "preserve-3d",
          transform: "perspective(1000px)",
          animation: "rotating 20s linear infinite",
          // custom properties for cards
          "--w": "100px",
          "--h": "150px",
          "--translateZ": "250px",
          "--rotateX": "-15deg",
          "--perspective": "1000px"
        } as React.CSSProperties}
      >
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes rotating {
            from {
              transform: perspective(1000px) rotateX(-15deg) rotateY(0);
            }
            to {
              transform: perspective(1000px) rotateX(-15deg) rotateY(1turn);
            }
          }
        `}} />
        
        {/* Card 1: GitHub */}
        <div 
          className="absolute border-2 border-[rgba(var(--color-card))] rounded-xl overflow-hidden inset-0 flex flex-col items-center justify-center gap-2 p-2"
          style={{
            transform: "rotateY(calc((360deg / 4) * 0)) translateZ(var(--translateZ))",
            "--color-card": "255, 255, 255"
          } as React.CSSProperties}
        >
          <div className="absolute inset-0 w-full h-full bg-black/40 backdrop-blur-sm -z-10" />
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="text-white text-sm font-semibold">GitHub</span>
        </div>

        {/* Card 2: LinkedIn */}
        <div 
          className="absolute border-2 border-[rgba(var(--color-card))] rounded-xl overflow-hidden inset-0 flex flex-col items-center justify-center gap-2 p-2"
          style={{
            transform: "rotateY(calc((360deg / 4) * 1)) translateZ(var(--translateZ))",
            "--color-card": "0, 119, 181"
          } as React.CSSProperties}
        >
          <div className="absolute inset-0 w-full h-full bg-[#0077b5]/20 backdrop-blur-sm -z-10" />
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#0077b5]">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          <span className="text-white text-sm font-semibold">LinkedIn</span>
        </div>

        {/* Card 3: Skills / React */}
        <div 
          className="absolute border-2 border-[rgba(var(--color-card))] rounded-xl overflow-hidden inset-0 flex flex-col items-center justify-center gap-2 p-2"
          style={{
            transform: "rotateY(calc((360deg / 4) * 2)) translateZ(var(--translateZ))",
            "--color-card": "97, 218, 251"
          } as React.CSSProperties}
        >
          <div className="absolute inset-0 w-full h-full bg-[#61dafb]/20 backdrop-blur-sm -z-10" />
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#61dafb]">
            <path d="M12 22.75A10.75 10.75 0 1 1 22.75 12 10.762 10.762 0 0 1 12 22.75ZM12 2.75A9.25 9.25 0 1 0 21.25 12 9.26 9.26 0 0 0 12 2.75Z"/>
            <path d="M12 15a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3Zm0-4.5a1.5 1.5 0 1 0 1.5 1.5A1.502 1.502 0 0 0 12 10.5Z"/>
            <path d="M12 16.5a7.464 7.464 0 0 1-5.115-2.003A11.139 11.139 0 0 1 3.5 12a11.139 11.139 0 0 1 3.385-2.497A7.464 7.464 0 0 1 12 7.5a7.464 7.464 0 0 1 5.115 2.003A11.139 11.139 0 0 1 20.5 12a11.139 11.139 0 0 1-3.385 2.497A7.464 7.464 0 0 1 12 16.5ZM12 9a5.976 5.976 0 0 0-4.062 1.572A9.615 9.615 0 0 0 5.1 12a9.615 9.615 0 0 0 2.838 1.428A5.976 5.976 0 0 0 12 15a5.976 5.976 0 0 0 4.062-1.572A9.615 9.615 0 0 0 18.9 12a9.615 9.615 0 0 0-2.838-1.428A5.976 5.976 0 0 0 12 9Z"/>
          </svg>
          <span className="text-white text-sm font-semibold">React.js</span>
        </div>

        {/* Card 4: Skills / Node */}
        <div 
          className="absolute border-2 border-[rgba(var(--color-card))] rounded-xl overflow-hidden inset-0 flex flex-col items-center justify-center gap-2 p-2"
          style={{
            transform: "rotateY(calc((360deg / 4) * 3)) translateZ(var(--translateZ))",
            "--color-card": "83, 158, 67"
          } as React.CSSProperties}
        >
          <div className="absolute inset-0 w-full h-full bg-[#539E43]/20 backdrop-blur-sm -z-10" />
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#539E43]">
             <path d="M12.016 0A2.083 2.083 0 0 0 10.975.32l-8.627 4.963A2.094 2.094 0 0 0 1.252 7.1v9.802c0 .762.408 1.446 1.096 1.838l8.627 4.965A2.072 2.072 0 0 0 12 24a2.08 2.08 0 0 0 1.042-.295l8.608-4.965a2.088 2.088 0 0 0 1.096-1.838V7.1a2.087 2.087 0 0 0-1.096-1.815L13.042.32A2.08 2.08 0 0 0 12.016 0zm-1.076 2.376c.44-.249.96-.249 1.402 0l7.307 4.22h-13.68c.245-.733.896-1.4 1.407-1.688l3.564-2.532zm-6.236 5.672h14.61v6.98c-1.39-1.99-3.32-3.153-5.592-3.414v-.004c-1.29-.14-2.593-.05-3.834.254-2.502.596-4.665 2.215-6.075 4.542l.891-8.358zM12 12.793c1.687-.233 3.323.279 4.671 1.413 1.15.967 1.815 2.368 1.815 3.868v1.65h-13v-1.65c0-1.5.666-2.901 1.816-3.868 1.348-1.134 2.984-1.646 4.706-1.413v-.001h-.008zm-9.39 3.992c1.782-3.568 5.093-6.014 9.382-6.626 4.269-.607 8.356 1.085 10.74 4.542.427.618.673 1.32.748 2.042v.358c0 .762-.407 1.445-1.096 1.837l-8.626 4.965a2.072 2.072 0 0 1-2.085 0L3.064 18.94C2.378 18.548 1.97 17.864 1.97 17.1V7.1a2.087 2.087 0 0 1 .64-1.472l.001 11.163z"/>
          </svg>
          <span className="text-white text-sm font-semibold">Node.js</span>
        </div>
      </div>
    </div>
  )
}
