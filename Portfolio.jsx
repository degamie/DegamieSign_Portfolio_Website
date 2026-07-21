//WID(21/7/2026(Sarthak Mittal(DegamieSign(Portfolio )GameDev#portfolio#Impl#1  .
import React, { act, useState } from 'react';
import { Gamepad2, Shield, Zap, Terminal, ExternalLink, Cpu, Layers } from 'lucide-react';


const PROJECTS = [
  {
    title: "Faurier(2026)",
    engine: "Rogue Engine(JS)",
    desc: "A 3Dimenesional game built with JavaScript in Rogue Engine, where players navigate between two interconnected mirror worlds. The player's position scales dynamically based on elapsed time as they traverse these parallel dimensions. In the climax, warriors from both worlds unite to defend their realms against a formidable threat, ultimately creating a safer world together. The game runs locally using Three.js and WebGL technology.",
    color: "cyan",
    tags: ["JS,Blender,ThreeJs"]
  },
  {
    title: "Distrinctrel",
  
    engine: "LibGDX(Java)",
    desc: "s a free, open-source game where players control a squirrel gathering nuts in a sunlit forest. The more nuts collected, the higher the score, with progression to increasingly challenging levels. Built entirely with Java's LibGDX library, the project leverages Spring Boot architecture to ensure clean, maintainable, and scalable code. The game has been successfully released on itch.io and is available to players worldwide.",
    color: "magenta",
    tags: ["Java,2D Sprites,LiBGDX"]
  },
  {
    title: "PROJECT RELAY",

    engine: "Unreal Engine 4.27 & Unity",
    desc: "An FPS shooter set in a desolate landscape where players combat alien bug enemies to achieve the highest score. The game was developed and released during the GreenLight Global Game Jam event from July 16-24, 2023.",
    color: "yellow",
    tags: ["C++", "BluePrints", "C#","Blender"]
  }
];

 setprojects=(projects)=>{this.projects=projects;}//Instantiating Projects In App

export default function Portfolio() {
  const[projects,setprojects]=useState(PROJECTS);
    const [activeTab, setActiveTab] = useState('all');

  // setActiveTab=(activeTab)=>{this.activeTab=activeTab;}//Instantiating activeTab
  // setCount(count + 1);

  return (
    <div className="min-h-screen bg-cyber-bg text-gray-200 font-mono selection:bg-cyber-cyan selection:text-black overflow-x-hidden">
      
      {/* Scanline Overlay Grid */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50"></div>

      {/* Header / HUD Navigation */}
      <header className="sticky top-0 z-40 bg-cyber-bg/80 backdrop-blur-md border-b border-cyber-cyan/30 shadow-neon-cyan">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Gamepad2 className="text-cyber-cyan animate-pulse drop-shadow-txt-cyan" size={28} />
            <span className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-white">
              DegamieSign(Portfolio)
            </span>
          </div>
          <nav className="flex gap-8 text-sm uppercase tracking-wider">
            <a href="#projects" className="hover:text-cyber-cyan transition-colors drop-shadow-txt-cyan">Projects</a>
            <a href="#stack" className="hover:text-cyber-magenta transition-colors">Tech Stack</a>
            <a href="#contact" className="hover:text-cyber-yellow transition-colors">Terminal</a>
          </nav>
        </div>
      </header>

      {/* Hero / Terminal Intro Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs text-cyber-cyan border border-cyber-cyan/40 bg-cyber-cyan/5 rounded-full">
            <Terminal size={12} /> SYSTEM READY // STATUS: ACTIVE
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white">
            I BUILD GAMES THAT <br />
            <span className="text-cyber-magenta drop-shadow-txt-magenta">DEFY SIMULATION.</span>
          </h1>
          <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
            Gameplay Programmer and Engine Engineer specialized in graphics pipelines, deterministic physics loops, and building immersive virtual worlds.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#projects" className="px-6 py-3 bg-cyber-cyan text-black font-bold uppercase tracking-wider rounded border border-transparent hover:bg-transparent hover:text-cyber-cyan hover:border-cyber-cyan shadow-neon-cyan transition-all duration-300">
              Launch Showcase
            </a>
            <a href="#contact" className="px-6 py-3 border border-cyber-magenta/40 text-cyber-magenta font-bold uppercase tracking-wider rounded hover:bg-cyber-magenta/10 transition-all duration-300">
              Establish Uplink
            </a>
          </div>
        </div>

        {/* Visual Matrix / Placeholder Side Panel */}
        <div className="flex-1 w-full max-w-md aspect-square bg-cyber-panel border-2 border-cyber-cyan/30 shadow-neon-cyan rounded-lg relative overflow-hidden flex flex-col justify-between p-6">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyber-cyan/20 to-transparent pointer-events-none" />
          <div className="text-xs text-cyber-cyan/50 space-y-1">
            <p>// INITIALIZING CORE GRAPHICS WRAPPER...</p>
            <p>// VULKAN INSTANCE CREATED SUCCESSFUL</p>
            <p>// RENDER CAPABILITIES: STABLE [144 FPS]</p>
          </div>
          <div className="self-center my-auto text-center space-y-4">
            <Cpu className="mx-auto text-cyber-cyan animate-spin [animation-duration:8s]" size={64} />
            <span className="block text-sm tracking-widest text-cyber-cyan">SYSTEM MONITOR PROMPT</span>
          </div>
          <div className="border-t border-cyber-cyan/20 pt-4 flex justify-between text-[10px] text-gray-500">
            <span>LOC: [0x7FFF5FBFF688]</span>
            <span>CORE_TEMP: 42°C</span>
          </div>
        </div>
      </section>

      {/* Grid Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-900">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-xs text-cyber-cyan uppercase tracking-widest mb-2">// CAPTURED ARCHIVES</h2>
            <h3 className="text-3xl font-black text-white">DEPLOYED SHIPPED TITLES</h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        setisCyan=(isCyan)=>{this.isCyan=this.isCyan;}
          {PROJECTS.map((proj, idx) => {
            const isCyan = proj.color === 'cyan';
            const isMagenta = proj.color === 'magenta';
            
            return (
              <div 
                key={idx} 
                className={`bg-cyber-panel border-2 rounded-lg p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2
                  ${isCyan ? 'border-cyber-cyan/30 hover:border-cyber-cyan hover:shadow-neon-cyan' : ''}
                  ${isMagenta ? 'border-cyber-magenta/30 hover:border-cyber-magenta hover:shadow-neon-magenta' : ''}
                  ${proj.color === 'yellow' ? 'border-cyber-yellow/30 hover:border-cyber-yellow' : ''}
                `}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] uppercase px-2 py-0.5 bg-white/5 border border-white/10 text-gray-400 rounded">
                      {proj.engine}
                    </span>
                    <Layers className={isCyan ? 'text-cyber-cyan' : isMagenta ? 'text-cyber-magenta' : 'text-cyber-yellow'} size={18} />
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-wide mb-1">{proj.title}</h4>
                  <p className={`text-xs font-semibold mb-4 ${isCyan ? 'text-cyber-cyan' : isMagenta ? 'text-cyber-magenta' : 'text-cyber-yellow'}`}>
                    {proj.type}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {proj.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] bg-cyber-bg px-2 py-1 rounded border border-gray-800 text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className={`w-full py-2.5 bg-cyber-bg border font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-all duration-300
                    ${isCyan ? 'border-cyber-cyan/40 text-cyber-cyan hover:bg-cyber-cyan hover:text-black shadow-inner' : ''}
                    ${isMagenta ? 'border-cyber-magenta/40 text-cyber-magenta hover:bg-cyber-magenta hover:text-black' : ''}
                    ${proj.color === 'yellow' ? 'border-cyber-yellow/40 text-cyber-yellow hover:bg-cyber-yellow hover:text-black' : ''}
                  `}>
                    Inspect Source <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technical Matrix Footer */}
      <footer id="contact" className="bg-cyber-panel border-t border-cyber-magenta/30 px-6 py-12 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-xs text-cyber-magenta tracking-widest">// DECRYPTED CHANNELS</p>
            <p className="text-lg font-bold text-white mt-1">HAVE An ARCHITECTURE CHALLENGE?</p>
          </div>
          <div className="flex gap-4">
            <span className="px-4 py-2 bg-cyber-bg border border-gray-800 rounded text-xs">
              SECURE_COMMS: <span className="text-cyber-cyan">DEV@NEXUS.IO</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}