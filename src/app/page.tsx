"use client"

import { ShaderAnimation } from "@/components/ui/shader-animation"
import { HyperText } from "@/components/ui/hyper-text"
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity"
import { Rotating3DCards } from "@/components/ui/rotating-3d-cards"
import { SquircleSocialIcons } from "@/components/ui/squircle-social-icons"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-600/30 font-sans dark custom-scrollbar">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-blue-600/30 z-[100]">
        <div className="h-full bg-blue-600 shadow-[0_0_10px_#2563eb]" id="scroll-progress"></div>
      </div>
      <script dangerouslySetInnerHTML={{__html: `
        window.onscroll = () => {
          const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = (winScroll / height) * 100;
          document.getElementById("scroll-progress").style.width = scrolled + "%";
        };
      `}} />

      {/* STICKY NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-xs">PP</div>
            <span className="font-bold tracking-tight text-xl hidden sm:block">PRANAV PATIL</span>
          </div>
          <nav className="flex items-center gap-4 md:gap-8">
          {["about", "skills", "experience", "projects", "contact"].map((item) => (
            <a key={item} href={`#${item}`} className="text-sm font-medium text-white/60 hover:text-white transition-colors capitalize">
              {item}
            </a>
          ))}
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume" 
            target="_blank"
            className="px-5 py-2 bg-blue-600 text-white text-xs font-bold rounded-full hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20"
          >
            Resume
          </motion.a>
        </nav>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <ShaderAnimation />
        <div className="z-10 flex flex-col items-center justify-center px-4 max-w-4xl mx-auto text-center gap-6 mix-blend-difference">
          <p className="text-blue-400 font-mono tracking-widest uppercase text-sm animate-fade-in">Welcome to the future of development</p>
          <HyperText 
            className="text-5xl md:text-8xl font-black text-white/90"
            duration={1500}
          >
            PRANAV PATIL
          </HyperText>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-light">
            Software Development Engineer
          </p>
          <div className="flex gap-4 mt-8">
            <a href="#projects" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full backdrop-blur-md transition-all font-semibold">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-4 bg-blue-600/80 hover:bg-blue-500 border border-blue-400/50 rounded-full backdrop-blur-md transition-all font-semibold shadow-[0_0_30px_rgba(37,99,235,0.4)]">
              Contact Me
            </a>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* 2. ABOUT & BIO */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black mb-8">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">System</span> Thinker.
              </h2>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 space-y-6">
                  <p className="text-lg text-white/70 leading-relaxed">
                    Driven Computer Science and Engineering student at <span className="text-blue-400">Shri Sant Gadge Baba College of Engineering, Bhusawal</span>, with hands-on experience building AI-powered systems.
                  </p>
                  <p className="text-lg text-white/70 leading-relaxed">
                    I specialize in Python, Machine Learning, and Computer Vision, with a proven ability to design scalable solutions such as environmental risk detection systems, smart civic monitoring platforms, and AI-based crop advisory tools.
                  </p>
                </div>
              </div>
            </div>
          <div className="md:w-1/2 h-[400px]">
            <Rotating3DCards />
          </div>
        </div>
      </section>



      {/* 3. SKILLS (SCROLL VELOCITY) */}
      <section id="skills" className="py-24 overflow-hidden border-y border-white/10 bg-black/50">
        <ScrollVelocityContainer className="text-5xl md:text-8xl font-black opacity-30 pointer-events-none">
          <ScrollVelocityRow baseVelocity={-2}>
            Python Java JavaScript SQL Machine-Learning CNN LSTM YOLO Computer-Vision
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={2} className="text-transparent stroke-text" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}>
            Next.js FastAPI PostgreSQL Docker AWS GitHub React Redis 
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </section>



      {/* 4. EXPERIENCE */}
      <section id="experience" className="py-32 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-16 text-center">Experience</h2>
        <div className="relative border-l border-white/20 pl-8 ml-4 md:ml-0 space-y-12">
          {/* Timeline Item */}
          <div className="relative group">
            <span className="absolute -left-[45px] top-2 w-5 h-5 rounded-full bg-blue-500 border-4 border-black group-hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all" />
            <div className="p-8 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 hover:border-blue-500/50 transition-colors backdrop-blur-sm">
              <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Full Stack Web Development Intern</h3>
                  <p className="text-blue-400 font-mono mt-1">Future Interns</p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono border border-white/20">Remote</span>
                  <p className="text-white/50 text-sm mt-2 font-mono">March 2026 – Present</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-white/70 space-y-2 mt-6 marker:text-blue-500">
                <li>Building and optimizing full-stack web applications using modern frameworks</li>
                <li>Working on real-world projects with scalable architecture</li>
                <li>Collaborating in a remote development environment</li>
                <li>Improving UI/UX and performance of web platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECTS */}
      <section id="projects" className="py-32 px-6 bg-gradient-to-b from-black to-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-16 text-center">Featured Projects</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project 1: AstraSense */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity p-px pointer-events-none" />
              <div className="flex flex-col h-full relative z-10">
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex gap-2 mb-6">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-mono flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Ongoing
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">AstraSense</h3>
                  <p className="text-blue-400 font-mono text-sm mb-6">AI-Powered Environmental Intelligence</p>
                  <p className="text-white/70 mb-8 leading-relaxed text-sm">
                    Platform analyzing satellite imagery (MODIS, Landsat) to detect early environmental hazards. 
                    Uses hybrid AI (CNN for spatial, LSTM for time-series) for predictive alerts for governments and environmental agencies.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {["Python", "TensorFlow", "FastAPI", "Docker", "AWS"].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-mono border border-white/10 text-white/60">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 relative z-50">
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://astrasense-app.vercel.app" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-5 py-2 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-500 transition-colors cursor-pointer shadow-lg shadow-blue-500/20"
                    >
                      Live Demo
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://github.com/pranavpatil179/astrasense" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-5 py-2 bg-white/10 text-white border border-white/20 text-sm font-bold rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
                <div className="relative bg-black/50 overflow-hidden h-48 border-t border-white/10">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img 
                     src="/astrasense.png" 
                     alt="AstraSense Project" 
                     className="w-full h-full object-cover object-left-top hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                   />
                </div>
              </div>
            </motion.div>

            {/* Project 2: Smart Energy & Civic Monitoring */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity p-px pointer-events-none" />
              <div className="flex flex-col h-full relative z-10">
                <div className="p-8 flex flex-col flex-grow">
                   <div className="flex gap-2 mb-6">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full text-xs font-mono">
                      Completed
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Smart Civic Monitoring</h3>
                  <p className="text-purple-400 font-mono text-sm mb-6">Infrastructure Issue Detection</p>
                  <p className="text-white/70 mb-8 leading-relaxed text-sm">
                    AI-powered monitoring system detecting urban infrastructure problems (potholes, debris, stray animals) using YOLO-based image detection. 
                    Includes a Ward Health Index (WHI) for analyzing issue frequency and resolution.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {["Flutter", "YOLO", "PostgreSQL", "Google Maps API", "Firebase"].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-mono border border-white/10 text-white/60">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <span className="text-xs font-mono text-white/40 italic">Demo link unavailable</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 3: AgriSense AI */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-2 group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity p-px pointer-events-none" />
              <div className="flex flex-col md:flex-row h-full relative z-10">
                <div className="md:w-1/2 p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4">AgriSense AI</h3>
                  <p className="text-green-400 font-mono text-sm mb-6">Smart Crop Monitoring & Disease Detection</p>
                  <p className="text-white/70 mb-8 leading-relaxed">
                    Personalized AI crop monitoring platform for farmers. Integrated with weather and soil datasets, it uses CNN-based 
                    plant disease detection for irrigation schedules, fertilizer guidance, and growth tracking.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["Python", "Machine Learning", "CNN", "Mobile App", "Weather API"].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/5 rounded-md text-xs font-mono border border-white/10 text-white/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:w-1/2 relative bg-black/40 flex items-center justify-center p-12">
                   <div className="w-full text-center space-y-4">
                      <div className="text-6xl font-black text-white/10">AGRI SENSE</div>
                      <div className="w-full h-1 bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
                      <p className="text-xs font-mono text-white/30 tracking-widest uppercase">Intelligent Farming Pipeline</p>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5.5 HACKATHONS */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tighter">Hackathon <span className="text-blue-500">Log</span></h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto" />
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              name: "AWS AI for Bharat", 
              desc: "Built AI-powered environmental risk detection system using satellite data.", 
              year: "2025" 
            },
            { 
              name: "VMC Innovate 2026", 
              desc: "Developed smart civic issue monitoring platform using computer vision and geofencing.", 
              year: "2026",
              highlight: true 
            },
            { 
              name: "PU Code Hackathon 3.0", 
              desc: "Participated in team-based software development challenge.", 
              year: "2024" 
            },
            { 
              name: "National Level Hackathons", 
              desc: "Selected participant in multiple national-level hackathons, building AI & Computer Vision prototypes.", 
              year: "2023-24" 
            }
          ].map(hack => (
            <div key={hack.name} className={cn(
              "p-8 rounded-2xl border transition-all hover:scale-[1.02]",
              hack.highlight ? "bg-blue-600/10 border-blue-500/50" : "bg-white/5 border-white/10"
            )}>
              <span className="text-[10px] font-mono text-blue-400 mb-4 block uppercase tracking-widest">{hack.year}</span>
              <h4 className="text-xl font-bold mb-4">{hack.name}</h4>
              <p className="text-white/60 text-sm leading-relaxed">{hack.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ACHIEVEMENTS */}
      <section className="py-24 px-6 border-y border-white/10 bg-black">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8">
            <h4 className="text-5xl font-black bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent mb-4">Top 10</h4>
            <p className="text-white/60 font-mono text-sm uppercase tracking-wider text-center">IIM Indore National Hackathon</p>
          </div>
          <div className="p-8 md:border-x border-white/10">
            <h4 className="text-5xl font-black bg-gradient-to-br from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">5+</h4>
            <p className="text-white/60 font-mono text-sm uppercase tracking-wider text-center">Hackathon Grand Finalist</p>
          </div>
          <div className="p-8">
            <h4 className="text-5xl font-black bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent mb-4">Active</h4>
            <p className="text-white/60 font-mono text-sm uppercase tracking-wider">AI + Full Stack Builder</p>
          </div>
        </div>
      </section>

      {/* 7. CONTACT */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 relative z-10">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Let's Connect</h2>
            <p className="text-white/60 mb-12">
              Interested in collaborating or have an opportunity? Drop a message below or connect via socials.
            </p>
            <SquircleSocialIcons />
          </div>
          <div className="md:w-1/2">
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Name" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" />
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" />
              <textarea placeholder="Message" rows={5} className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"></textarea>
              <button type="button" className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors mt-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center border-t border-white/10 text-white/40 font-mono text-xs">
        &copy; {new Date().getFullYear()} Pranav Patil. Crafted with Next.js, Framer Motion & Three.js
      </footer>
    </main>
  )
}
