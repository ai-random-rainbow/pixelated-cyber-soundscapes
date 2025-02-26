
const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cyber-dark">
      {/* CRT screen effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 animate-scanline bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent" style={{ height: '2px' }} />
      
      <div className="relative z-10 text-center px-4">
        <div className="inline-block">
          <span className="text-xs font-pixel text-neon-green mb-4 block animate-pulse">
            WELCOME TO THE NOISE
          </span>
          <h1 className="text-4xl md:text-6xl font-pixel text-crt-white mb-8 animate-float">
            <span className="block text-neon-blue">NADI</span>
            <span className="block text-neon-pink">NICOCO</span>
            <span className="block text-neon-green">EXPERIMENTAL MUSIC</span>
          </h1>
          <p className="text-crt-white/80 font-sans max-w-xl mx-auto mb-12 leading-relaxed">
            Digital sound architecture from the void. Welcome to the synthesis.
          </p>
          <div className="space-x-4">
            <a
              href="#tracks"
              className="inline-block px-8 py-3 bg-neon-blue/20 border border-neon-blue text-neon-blue font-pixel text-sm hover:bg-neon-blue hover:text-cyber-black transition-all duration-300"
            >
              EXPLORE TRACKS
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-neon-pink/20 border border-neon-pink text-neon-pink font-pixel text-sm hover:bg-neon-pink hover:text-cyber-black transition-all duration-300"
            >
              CONNECT
            </a>
          </div>
        </div>
      </div>

      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,243,255,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(0,243,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]" />
    </div>
  );
};

export default Hero;
