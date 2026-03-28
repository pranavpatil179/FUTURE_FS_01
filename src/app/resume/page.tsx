"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 font-sans p-8 md:p-16">
      <div className="max-w-[1000px] mx-auto bg-white shadow-[0_0_100px_rgba(0,0,0,0.05)] border border-slate-100 p-12 md:p-20 relative overflow-hidden">
        
        {/* Print Button - Only visible in digital view */}
        <div className="absolute top-8 right-8 print:hidden flex gap-4">
          <Link href="/" className="px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full text-xs font-bold transition-all">
            ← Back to Site
          </Link>
          <button 
            onClick={() => window.print()} 
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold transition-all shadow-lg shadow-blue-500/20"
          >
            Print / PDF
          </button>
        </div>

        {/* HEADER */}
        <header className="border-b-4 border-slate-900 pb-10 mb-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">Pranav Patil</h1>
          <h2 className="text-xl md:text-2xl font-bold text-blue-600 uppercase tracking-widest mb-6">Software Developer</h2>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-slate-500">
            <span className="flex items-center gap-2">📧 patilpranav1012@gmail.com</span>
            <span className="flex items-center gap-2">📞 +91 74208 71303</span>
            <span className="flex items-center gap-2">📍 Maharashtra, India</span>
          </div>
        </header>

        {/* SUMMARY */}
        <section className="mb-12">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-4 border-l-4 border-blue-600 pl-4">Professional Summary</h3>
          <p className="text-slate-700 leading-relaxed text-lg">
            Driven Computer Science and Engineering student with hands-on experience building AI-powered systems through multiple hackathons and real-world projects. 
            Specialize in Python, Machine Learning, and Computer Vision, with a strong focus on building scalable systems such as environmental risk detection 
            and smart civic monitoring platforms.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2 space-y-12">
            
            {/* EDUCATION */}
            <section>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6 border-l-4 border-blue-600 pl-4">Education</h3>
              <div>
                <h4 className="text-xl font-bold">B.Tech in Computer Science</h4>
                <p className="text-slate-600">Shri Sant Gadge Baba College of Engineering, Bhusawal</p>
                <p className="text-blue-500 text-sm font-bold mt-2 font-mono italic">2022 - 2026</p>
              </div>
            </section>

            {/* PROJECTS */}
            <section>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-8 border-l-4 border-blue-600 pl-4">Top Engineering Projects</h3>
              <div className="space-y-10">
                <div>
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">AstraSense (AI Environmental Risk Detection)</h4>
                  <ul className="text-slate-600 text-sm list-disc pl-5 space-y-2">
                    <li>Developed AI environmental monitoring system analyzing satellite imagery (MODIS, Sentinel, Landsat).</li>
                    <li>Built automated data pipeline for NDVI/NDWI/LST indices calculation.</li>
                    <li>Hybrid AI architecture: CNN (spatial pattern detection) + LSTM (time-series prediction).</li>
                    <li>Designed scalable cloud architecture with real-time risk visualization dashboards.</li>
                  </ul>
                  <p className="text-[10px] font-mono mt-4 text-blue-600 uppercase tracking-widest">Stack: Python, TensorFlow, FastAPI, Docker, AWS, GCP</p>
                </div>

                <div>
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">Smart Energy & Civic Monitoring System</h4>
                  <ul className="text-slate-600 text-sm list-disc pl-5 space-y-2">
                    <li>AI-powered monitoring system detecting potholes, debris, and stray animals via YOLO.</li>
                    <li>Implemented Ward Health Index (WHI) to analyze issue frequency and resolution speed.</li>
                    <li>Mobile application for field workers to capture and report issues in real-time.</li>
                  </ul>
                  <p className="text-[10px] font-mono mt-4 text-blue-600 uppercase tracking-widest">Stack: Flutter, YOLO, PostgreSQL, Firebase, Google Maps API</p>
                </div>

                <div>
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">AgriSense AI (Intelligent Farming)</h4>
                  <ul className="text-slate-600 text-sm list-disc pl-5 space-y-2">
                    <li>Mobile platform assisting farmers with crop disease detection (CNN-based).</li>
                    <li>Integrated real-time weather and soil data for irrigation recommendations.</li>
                  </ul>
                  <p className="text-[10px] font-mono mt-4 text-blue-600 uppercase tracking-widest">Stack: Python, Machine Learning, CNN, Weather/Soil APIs</p>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-12">
            
            {/* SKILLS */}
            <section>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6 border-l-4 border-blue-600 pl-4">Skill Matix</h3>
              <div className="space-y-6">
                <div>
                  <h5 className="text-[10px] font-mono uppercase text-slate-400 tracking-widest mb-2 font-bold">Languages</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Java", "JavaScript", "SQL"].map(s => (
                      <span key={s} className="px-2 py-1 bg-slate-50 text-slate-700 text-xs border border-slate-100 rounded">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-[10px] font-mono uppercase text-slate-400 tracking-widest mb-2 font-bold">AI / ML / CV</h5>
                  <div className="flex flex-wrap gap-2">
                    {["Machine Learning", "CNN", "LSTM", "YOLO", "Computer Vision", "Deep Learning"].map(s => (
                      <span key={s} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs border border-blue-100 rounded font-medium">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-[10px] font-mono uppercase text-slate-400 tracking-widest mb-2 font-bold">Backend & Dev</h5>
                  <div className="flex flex-wrap gap-2">
                    {["FastAPI", "Next.js", "GitHub", "AWS", "PostgreSQL", "Docker"].map(s => (
                      <span key={s} className="px-2 py-1 bg-slate-50 text-slate-700 text-xs border border-slate-100 rounded">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ACHIEVEMENTS / HACKATHONS */}
            <section>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6 border-l-4 border-blue-600 pl-4">Achievements</h3>
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-bold text-slate-800">AWS AI for Bharat Hackathon</h5>
                  <p className="text-xs text-slate-500 italic mt-1 font-medium">Built AI environment risk detector</p>
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-800">VMC Innovate Hackathon 2026</h5>
                  <p className="text-xs text-slate-500 italic mt-1 font-medium">Developed civic monitoring platform</p>
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-800">PU Code Hackathon 3.0 & 2.0</h5>
                  <p className="text-xs text-slate-500 italic mt-1 font-medium">National-level participant (Multiple editions)</p>
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-800">National Level Hackathons</h5>
                  <p className="text-xs text-slate-500 italic mt-1 font-medium">Selected participant building AI prototypes</p>
                </div>
              </div>
            </section>

             {/* LANGUAGES */}
             <section>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-6 border-l-4 border-blue-600 pl-4">Languages</h3>
              <div className="text-sm font-bold tracking-tighter uppercase text-slate-500 flex gap-4">
                  <span>English</span>
                  <span>Marathi</span>
                  <span>Hindi</span>
              </div>
            </section>

          </div>
        </div>

        {/* FOOTER */}
        <footer className="mt-20 pt-8 border-t border-slate-100 text-center">
          <p className="text-[10px] font-mono text-slate-300 uppercase tracking-[0.5em]">Digital CV • 2026 Edition • Pranav Patil</p>
        </footer>

      </div>
    </div>
  )
}
