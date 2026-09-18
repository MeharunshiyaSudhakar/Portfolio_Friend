"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Database, Server, TestTube, LineChart, Mail, 
  Phone, MapPin, ChevronRight, Code2, Menu, X, Brain, Network, Settings, BarChart, LayoutDashboard, Sheet, XCircle, Award
} from "lucide-react";
import { SiPython, SiMysql, SiMongodb, SiSelenium } from "react-icons/si";
import { FaJava, FaLinkedin } from "react-icons/fa";

const LINKEDIN_URL = "https://www.linkedin.com/in/shanmuga-ramesh-664739231/";
const MAILTO_LINK = "mailto:shanmugaramesh28@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Shanmuga%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0A%0ARegards%2C";

// CUSTOM CURSOR COMPONENT
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const updatePosition = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'button' || target.tagName.toLowerCase() === 'a' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full mix-blend-screen pointer-events-none z-[100] blur-[1px]"
        animate={{ x: position.x - 6, y: position.y - 6, scale: isHovering ? 2.5 : 1, opacity: isHovering ? 0.4 : 1 }}
        transition={{ type: "spring", stiffness: 600, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 bg-cyan-500/20 rounded-full mix-blend-screen pointer-events-none z-[99] blur-2xl"
        animate={{ x: position.x - 64, y: position.y - 64 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      />
    </>
  );
};

// PROGRESS BAR
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div 
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 z-[100] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

// MAIN PAGE
export default function Home() {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [selectedCert, setSelectedCert] = useState<null | {src: string, title: string, institution: string}>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['about', 'experience', 'work', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  const navLinks = ['About', 'Experience', 'Work', 'Skills', 'Certifications', 'Contact'];

  const certificates = [
    {
      src: "/cert-data-science.jpeg", // Add actual file to public folder
      title: "Data Science",
      institution: "Besant Technologies",
      skills: "Python • SQL • ML • Analytics"
    },
    {
      src: "/cert-java.jpeg", // Add actual file to public folder
      title: "Java and Selenium Testing",
      institution: "Green Technologies",
      skills: "Java • Selenium • Automation"
    }
  ];

  return (
    <div className="bg-[#050508] min-h-screen text-slate-100 overflow-hidden font-sans">
      <CustomCursor />
      <ScrollProgress />

      {/* NEW PREMIUM HEADER */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/50' : 'py-6 bg-transparent border-b border-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 group relative z-50">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-heading font-bold text-white group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-colors">
              SR
            </div>
            <div className="font-heading font-bold tracking-widest text-lg text-white group-hover:text-cyan-50 transition-colors hidden sm:block">
              SHANMUGA R
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="relative px-5 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors group"
              >
                {link}
                {activeSection === link.toLowerCase() && (
                  <motion.div layoutId="navIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-t-full" />
                )}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-[#0077b5]/10 hover:border-[#0077b5]/30 hover:text-[#0077b5] hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0,119,181,0.2)] transition-all group">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-semibold hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all">
              VIEW RESUME
              <ExternalLinkIcon className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden relative z-50 p-2 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col items-center gap-8 w-full px-6">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="text-3xl font-heading font-bold text-slate-300 hover:text-cyan-400"
                >
                  {link}
                </motion.a>
              ))}
              <div className="flex gap-4 mt-4">
                 <motion.a 
                  href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                  className="p-4 rounded-full bg-white/5 text-slate-300 hover:bg-[#0077b5] hover:text-white transition-colors"
                 >
                   <FaLinkedin className="w-6 h-6" />
                 </motion.a>
              </div>
              <motion.a 
                href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                className="mt-4 px-8 py-4 rounded-full bg-cyan-500 text-black font-bold flex items-center gap-2"
              >
                VIEW RESUME <Code2 className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-900/20 rounded-full blur-[120px] mix-blend-screen" />
           <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen" />
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <motion.div style={{ y: yHero, opacity: opacityHero }} className="relative z-10 w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="flex flex-col items-start z-20 mt-20 lg:mt-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-cyan-400 font-semibold tracking-[0.2em] text-xs uppercase mb-6 flex items-center gap-2">
              <div className="w-8 h-px bg-cyan-400/50" />
              Software Developer
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.8 }} className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white leading-[1.1] mb-6 font-heading">
              SHANMUGA<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">R</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex flex-wrap gap-3 mb-8">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">Backend Development</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">Software Testing</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">Data Science</span>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }} className="text-lg md:text-xl text-slate-400 max-w-lg mb-10 leading-relaxed">
              Building scalable data-driven solutions with clean code. Experienced in backend APIs, end-to-end automation, and robust database architectures.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex flex-col sm:flex-row gap-4 items-center">
              <a href="#experience" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform flex items-center gap-2 justify-center w-full sm:w-auto">
                Explore Experience <ChevronRight className="w-4 h-4" />
              </a>
              <a href={MAILTO_LINK} className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-colors flex items-center justify-center w-full sm:w-auto">
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right: Premium Photo Composition */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1, duration: 1 }} className="relative flex justify-center lg:justify-end">
            {/* Tech Constellation Background */}
            <div className="absolute inset-0 -m-20 pointer-events-none opacity-40">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }} className="w-full h-full relative">
                 <div className="absolute top-[10%] left-[20%] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]" />
                 <div className="absolute top-[30%] right-[10%] w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_10px_#818cf8]" />
                 <div className="absolute bottom-[20%] left-[30%] w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]" />
                 <svg className="absolute inset-0 w-full h-full stroke-white/10" fill="none">
                    <line x1="20%" y1="10%" x2="90%" y2="30%" strokeWidth="1" />
                    <line x1="20%" y1="10%" x2="30%" y2="80%" strokeWidth="1" />
                 </svg>
              </motion.div>
            </div>

            {/* Main Portrait */}
            <motion.div whileHover={{ rotateY: 5, rotateX: -5 }} className="relative w-full max-w-[320px] md:max-w-[420px] aspect-[3/4] z-20 perspective-1000">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/30 to-indigo-500/30 blur-2xl -z-10" />
              <div className="w-full h-full rounded-3xl overflow-hidden border border-white/20 bg-slate-900 shadow-2xl relative">
                <Image src="/profile.jpeg" alt="Shanmuga R" fill className="object-cover" priority sizes="(max-width: 768px) 320px, 420px" />
                <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />
              </div>

              {/* Floating Tech Labels */}
              <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 -left-6 md:-left-16 px-4 py-2 bg-black/70 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl flex items-center gap-2">
                <SiPython className="text-cyan-400 w-4 h-4" />
                <span className="text-sm font-medium">Python & Java</span>
              </motion.div>

              <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-20 -right-6 md:-right-12 px-4 py-2 bg-black/70 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl flex items-center gap-2">
                <SiMongodb className="text-emerald-400 w-4 h-4" />
                <span className="text-sm font-medium">MySQL & MongoDB</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-6 pb-0">

        {/* EXPERIENCE TIMELINE */}
        <section id="experience" className="pt-32 pb-20 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">Experience.</h2>
            <p className="text-slate-400 text-lg mb-16 max-w-2xl">A history of building backends, validating complex workflows, and deploying reliable software architectures.</p>
          </motion.div>

          <div className="relative border-l border-white/10 pl-8 md:pl-16 ml-4 space-y-24">
            
            {/* Experience 1 */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} className="relative group">
              <div className="absolute -left-[41px] md:-left-[73px] top-1 w-5 h-5 rounded-full bg-[#050508] border-4 border-cyan-500 shadow-[0_0_15px_#06b6d4] transition-transform group-hover:scale-125" />
              <div className="absolute -left-[41px] md:-left-[73px] top-1 w-5 h-5 rounded-full bg-cyan-500 animate-ping opacity-20" />
              
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Software Testing</h3>
                    <div className="text-cyan-400 font-medium">NIGSOFT PRIVATE LIMITED</div>
                    <div className="text-slate-400 text-sm mt-1">Superjet Web Application</div>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm whitespace-nowrap">
                    May 2024 – Feb 2025
                  </div>
                </div>
                <ul className="relative z-10 space-y-3 text-slate-300 list-disc list-inside mb-6">
                  <li>Developed and executed end-to-end automation testing scripts.</li>
                  <li>Validated critical web application workflows and identified edge cases.</li>
                  <li>Prepared detailed test execution reports and bug documentation.</li>
                  <li>Collaborated with developers to resolve defects and ensure timely delivery.</li>
                </ul>
                <div className="relative z-10 flex flex-wrap gap-2">
                  {['Automation Testing', 'Java', 'Selenium'].map(s => (
                    <span key={s} className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Experience 2 */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} className="relative group">
              <div className="absolute -left-[41px] md:-left-[73px] top-1 w-5 h-5 rounded-full bg-[#050508] border-4 border-indigo-500 transition-transform group-hover:scale-125" />
              
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.04] transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Backend Developer</h3>
                    <div className="text-indigo-400 font-medium">NIGSOFT PRIVATE LIMITED</div>
                    <div className="text-slate-400 text-sm mt-1">Albumati Mobile Application</div>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm whitespace-nowrap">
                    Dec 2024 – May 2025
                  </div>
                </div>
                <ul className="relative z-10 space-y-3 text-slate-300 list-disc list-inside mb-6">
                  <li>Analyzed legacy application code and workflows to support enhancements.</li>
                  <li>Identified, reported, and tracked MySQL database and API-related issues.</li>
                  <li>Supported User Acceptance Testing (UAT) and documented results.</li>
                  <li>Assisted in debugging, testing, and delivering optimized software solutions.</li>
                </ul>
                <div className="relative z-10 flex flex-wrap gap-2">
                  {['Backend', 'MySQL', 'API Testing'].map(s => (
                    <span key={s} className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Experience 3 */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} className="relative group">
              <div className="absolute -left-[41px] md:-left-[73px] top-1 w-5 h-5 rounded-full bg-[#050508] border-4 border-violet-500 transition-transform group-hover:scale-125" />
              
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.04] transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Backend Developer</h3>
                    <div className="text-violet-400 font-medium">NIGSOFT PRIVATE LIMITED</div>
                    <div className="text-slate-400 text-sm mt-1">Lawe Web Application</div>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm whitespace-nowrap">
                    Aug 2024 – Dec 2025
                  </div>
                </div>
                <ul className="relative z-10 space-y-3 text-slate-300 list-disc list-inside mb-6">
                  <li>Developed and enhanced search engine functionality for the web application.</li>
                  <li>Migrated data from MySQL to MongoDB using Python accurately and efficiently.</li>
                  <li>Analyzed project requirements and implemented backend functionality.</li>
                  <li>Collaborated with the team to deliver code enhancements for clients.</li>
                </ul>
                <div className="relative z-10 flex flex-wrap gap-2">
                  {['Python', 'MongoDB', 'MySQL'].map(s => (
                    <span key={s} className="px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-300 border border-violet-500/20">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WORK & VISUALIZATIONS */}
        <section id="work" className="pt-32 pb-20">
           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">Engineering Architecture.</h2>
            <p className="text-slate-400 text-lg mb-16 max-w-2xl">Visualizing workflows from my professional experience and coursework.</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Backend Diagram */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 group">
               <h3 className="text-2xl font-bold mb-2 flex items-center gap-3"><Server className="text-indigo-400"/> Backend & Migration</h3>
               <p className="text-slate-400 mb-10">Application data architecture for Lawe Web Application.</p>
               <div className="flex flex-col items-center gap-4 relative py-6">
                 <div className="w-48 py-3 rounded-xl bg-black/50 border border-white/10 text-center text-sm font-medium shadow-lg z-10">Web Application</div>
                 <div className="w-px h-8 bg-gradient-to-b from-white/20 to-indigo-500 relative"><div className="absolute inset-0 bg-indigo-500 animate-pulse" /></div>
                 <div className="w-48 py-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-center text-sm font-medium text-indigo-300 shadow-lg z-10 flex justify-center items-center gap-2"><SiPython/> Python Backend</div>
                 <div className="w-px h-8 bg-gradient-to-b from-indigo-500 to-cyan-500" />
                 <div className="flex items-center gap-4 z-10 w-full justify-center">
                   <div className="flex-1 max-w-[120px] py-3 rounded-xl bg-cyan-900/20 border border-cyan-500/30 text-center text-sm font-medium text-cyan-300 flex justify-center items-center gap-2"><SiMysql/> MySQL</div>
                   <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Migration</div>
                   <div className="flex-1 max-w-[120px] py-3 rounded-xl bg-emerald-900/20 border border-emerald-500/30 text-center text-sm font-medium text-emerald-300 flex justify-center items-center gap-2"><SiMongodb/> MongoDB</div>
                 </div>
               </div>
            </motion.div>

            {/* Testing Workflow */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 group">
               <h3 className="text-2xl font-bold mb-2 flex items-center gap-3"><TestTube className="text-cyan-400"/> Automation Pipeline</h3>
               <p className="text-slate-400 mb-10">End-to-end testing workflow for Superjet Web Application.</p>
               <div className="flex flex-wrap gap-4">
                  {[
                    { title: "Develop", tech: "Java & Selenium", icon: <SiSelenium className="text-cyan-400 mt-1"/> },
                    { title: "Execute", tech: "Automation Scripts", icon: <Settings className="text-cyan-400 mt-1 w-4 h-4"/> },
                    { title: "Identify", tech: "Edge Cases", icon: <TestTube className="text-cyan-400 mt-1 w-4 h-4"/> },
                    { title: "Document", tech: "Test Reports", icon: <Code2 className="text-cyan-400 mt-1 w-4 h-4"/> },
                  ].map((step, i) => (
                    <div key={i} className="flex-1 min-w-[140px] p-5 rounded-2xl bg-black/40 border border-white/5 hover:border-cyan-500/30 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                         <div className="text-2xl font-black text-white/10">0{i+1}</div>
                         {step.icon}
                      </div>
                      <div className="text-white font-medium mb-1">{step.title}</div>
                      <div className="text-cyan-400 text-xs">{step.tech}</div>
                    </div>
                  ))}
               </div>
            </motion.div>
          </div>
        </section>

        {/* REDESIGNED SKILLS / TECH STACK */}
        <section id="skills" className="pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">Technology Stack.</h2>
            <p className="text-slate-400 text-lg mb-16 max-w-2xl">
              Tools and technologies used across software development, backend systems, testing, automation and data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             
             {/* Category 1: Software Dev */}
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col gap-4">
                <div className="text-sm font-bold text-white/50 tracking-widest uppercase mb-2">Software Development</div>
                
                <div className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.04] transition-all duration-300">
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                   <SiPython className="w-10 h-10 text-slate-400 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300 mb-4" />
                   <h4 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">Python</h4>
                   <p className="text-xs text-slate-500 mt-1">Backend & Data</p>
                </div>

                <div className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:-translate-y-1 hover:border-red-500/50 hover:bg-white/[0.04] transition-all duration-300">
                   <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                   <FaJava className="w-10 h-10 text-slate-400 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300 mb-4" />
                   <h4 className="text-lg font-bold text-white group-hover:text-red-200 transition-colors">Java</h4>
                   <p className="text-xs text-slate-500 mt-1">Testing</p>
                </div>
             </motion.div>

             {/* Category 2: Backend */}
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col gap-4">
                <div className="text-sm font-bold text-white/50 tracking-widest uppercase mb-2">Backend & Database</div>
                
                <div className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-white/[0.04] transition-all duration-300">
                   <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                   <SiMysql className="w-10 h-10 text-slate-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300 mb-4" />
                   <h4 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">MySQL</h4>
                   <p className="text-xs text-slate-500 mt-1">Database</p>
                </div>

                <div className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-white/[0.04] transition-all duration-300">
                   <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                   <SiMongodb className="w-10 h-10 text-slate-400 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300 mb-4" />
                   <h4 className="text-lg font-bold text-white group-hover:text-emerald-200 transition-colors">MongoDB</h4>
                   <p className="text-xs text-slate-500 mt-1">Database</p>
                </div>
             </motion.div>

             {/* Category 3: Testing */}
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col gap-4">
                <div className="text-sm font-bold text-white/50 tracking-widest uppercase mb-2">Testing & Automation</div>
                
                <div className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:-translate-y-1 hover:border-green-500/50 hover:bg-white/[0.04] transition-all duration-300">
                   <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                   <SiSelenium className="w-10 h-10 text-slate-400 group-hover:text-green-400 group-hover:scale-110 transition-all duration-300 mb-4" />
                   <h4 className="text-lg font-bold text-white group-hover:text-green-200 transition-colors">Selenium</h4>
                   <p className="text-xs text-slate-500 mt-1">Automation Framework</p>
                </div>

                <div className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-white/[0.04] transition-all duration-300">
                   <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                   <TestTube className="w-10 h-10 text-slate-400 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300 mb-4" />
                   <h4 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">Automation Testing</h4>
                   <p className="text-xs text-slate-500 mt-1">End-to-End</p>
                </div>
             </motion.div>

             {/* Category 4: Data */}
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex flex-col gap-4">
                <div className="text-sm font-bold text-white/50 tracking-widest uppercase mb-2">Data & Analytics</div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="group relative p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:-translate-y-1 hover:border-yellow-500/50 hover:bg-white/[0.04] transition-all duration-300">
                    <BarChart className="w-8 h-8 text-slate-400 group-hover:text-yellow-400 transition-all duration-300 mb-2" />
                    <h4 className="text-sm font-bold text-white">Power BI</h4>
                  </div>
                  <div className="group relative p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white/[0.04] transition-all duration-300">
                    <LayoutDashboard className="w-8 h-8 text-slate-400 group-hover:text-blue-500 transition-all duration-300 mb-2" />
                    <h4 className="text-sm font-bold text-white">Tableau</h4>
                  </div>
                  <div className="group relative p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:-translate-y-1 hover:border-green-600/50 hover:bg-white/[0.04] transition-all duration-300">
                    <Sheet className="w-8 h-8 text-slate-400 group-hover:text-green-600 transition-all duration-300 mb-2" />
                    <h4 className="text-sm font-bold text-white">Excel</h4>
                  </div>
                  <div className="group relative p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:-translate-y-1 hover:border-pink-500/50 hover:bg-white/[0.04] transition-all duration-300">
                    <Brain className="w-8 h-8 text-slate-400 group-hover:text-pink-400 transition-all duration-300 mb-2" />
                    <h4 className="text-sm font-bold text-white">AI / DL</h4>
                  </div>
                </div>
             </motion.div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="pt-32 pb-20 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">Certifications & Training.</h2>
            <p className="text-slate-400 text-lg mb-16 max-w-2xl">
              Continuous learning across software development, testing, automation and data science.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="absolute -top-8 left-0 right-0 h-px bg-gradient-to-r from-cyan-500/50 to-transparent origin-left" />

            {certificates.map((cert, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                
                {/* Subtle Light Sweep */}
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:animate-sweep z-20 pointer-events-none" />

                {/* Details */}
                <div className="relative z-30 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-8">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{cert.title}</h3>
                  <div className="text-cyan-400 font-medium mb-4">{cert.institution}</div>
                  <div className="text-sm text-slate-400 mb-8">{cert.skills}</div>
                  
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <button 
                      onClick={() => setSelectedCert(cert)}
                      className="text-white text-sm font-bold flex items-center gap-2 group/btn hover:text-cyan-400 transition-colors"
                    >
                      VIEW CERTIFICATE <ExternalLinkIcon className="w-4 h-4 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER / CONTACT CLIMAX */}
        <section id="contact" className="relative pt-32 pb-16 overflow-hidden border-t border-white/5 mt-20">
          
          {/* Atmospheric Footer Background */}
          <div className="absolute inset-0 pointer-events-none -z-10">
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-gradient-to-t from-cyan-900/10 via-indigo-900/5 to-transparent blur-[100px] rounded-full" />
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_top,#000_10%,transparent_100%)]" />
             <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-6">
            
            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24"
            >
              <div className="text-cyan-400 font-semibold tracking-[0.2em] text-xs uppercase mb-6">Let's Connect</div>
              <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
                BUILD SOMETHING<br />RELIABLE.
              </h2>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl">
                Ready to solve complex problems with robust backend architectures and automated testing pipelines.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                 <a 
                   href={MAILTO_LINK} 
                   className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-shadow flex items-center justify-center gap-2"
                 >
                   <span className="relative z-10">CONTACT ME</span>
                   <ChevronRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   <div className="absolute inset-0 bg-slate-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                 </a>
                 <a 
                   href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                   className="group px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
                 >
                   VIEW RESUME
                   <ExternalLinkIcon className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </a>
              </div>
            </motion.div>

            {/* Animated Divider */}
            <motion.div 
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16 origin-center"
            />

            {/* Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
               
               {/* Brand Col */}
               <div className="lg:col-span-2">
                 <div className="flex items-center gap-3 mb-6">
                   <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-heading font-bold text-white">
                     SR
                   </div>
                   <div>
                     <div className="font-heading font-bold tracking-widest text-lg text-white">SHANMUGA R</div>
                     <div className="text-cyan-400 text-sm font-medium">Software Developer</div>
                   </div>
                 </div>
                 <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-6">
                   Backend Development • Testing • Data Science
                 </p>
               </div>

               {/* Explore Col */}
               <div>
                 <h4 className="text-white font-bold tracking-wider text-sm mb-6 uppercase">Explore</h4>
                 <div className="flex flex-col gap-4 text-sm text-slate-400">
                   {['About', 'Experience', 'Work', 'Skills', 'Certifications'].map(link => (
                     <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-cyan-400 hover:translate-x-1 transition-all w-fit">{link}</a>
                   ))}
                 </div>
               </div>

               {/* Contact Col */}
               <div>
                 <h4 className="text-white font-bold tracking-wider text-sm mb-6 uppercase">Contact</h4>
                 <div className="flex flex-col gap-6 text-sm">
                   <a href={MAILTO_LINK} className="group flex flex-col gap-1 w-fit">
                     <span className="text-slate-500 uppercase tracking-widest text-xs font-bold">Email</span>
                     <span className="text-slate-300 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                       shanmugaramesh28@gmail.com <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                     </span>
                   </a>
                   <a href="tel:+917695816411" className="group flex flex-col gap-1 w-fit">
                     <span className="text-slate-500 uppercase tracking-widest text-xs font-bold">Phone</span>
                     <span className="text-slate-300 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                       +91 7695816411 <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                     </span>
                   </a>
                   <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-1 w-fit">
                     <span className="text-slate-500 uppercase tracking-widest text-xs font-bold">LinkedIn</span>
                     <span className="text-slate-300 group-hover:text-[#0077b5] transition-colors flex items-center gap-2">
                       Connect <ExternalLinkIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                     </span>
                   </a>
                 </div>
               </div>

            </div>

            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-slate-500">
               <p>© {new Date().getFullYear()} Shanmuga R. All rights reserved.</p>
               <p className="mt-2 md:mt-0">Designed & developed with modern web technologies.</p>
            </div>
            
          </div>
        </section>
      </div>

      {/* CERTIFICATE LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-12 cursor-pointer"
            onClick={() => setSelectedCert(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50"
              onClick={(e) => { e.stopPropagation(); setSelectedCert(null); }}
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-full max-h-[80vh] rounded-lg overflow-hidden cursor-default shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedCert.src}
                alt={selectedCert.title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center text-slate-500 bg-slate-900 border border-white/10 rounded-xl"><svg class="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg><h3 class="text-xl text-white font-bold">Image Pending</h3><p class="mt-2 text-sm">Please place <code>${selectedCert.src}</code> in the public directory.</p></div>`;
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

function ExternalLinkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
