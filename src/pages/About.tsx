import { useState } from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-cyber-black text-crt-white">
      <Navbar />
      <div className="pt-24 pb-16 px-4 container mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Avatar Section */}
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-8">
              <div className="absolute inset-0 bg-neon-blue/20 animate-pulse rounded-full" />
              <div className="relative w-full h-full rounded-full border-2 border-neon-blue overflow-hidden">
                {/* Use a local image from the public folder */}
                <img
                  src="/cute-things-online.jpeg" // Path to your image in the public folder
                  alt="CyberSynth Avatar"
                  className="w-full h-full object-cover"
                  onLoad={() => setIsLoaded(true)}
                />
              </div>
            </div>
            <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="font-pixel text-neon-green mb-4">
                GREETINGS, HUMAN
              </div>
              <h1 className="text-2xl md:text-4xl font-pixel text-crt-white mb-6">
                I AM <span className="text-neon-pink">NADI NICOCÓ</span>
              </h1>
              <p className="text-crt-white/80 max-w-2xl mx-auto">
                A sound architect from the digital void, crafting sonic landscapes where noise, poetry, and experimental beats collide.
              </p>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-neon-blue/20">
            {[
              {
                year: "2022",
                title: "Esquizo Ciborgue",
                desc: "An experimental journey blending noise, ambient, and poetry. A sonic exploration of the cyborg psyche.",
                link: "https://soundcloud.com/nadinicoco/sets/esquizo-ciborgue",
              },
              {
                year: "2023",
                title: "CYBER PLANTA",
                desc: "A fusion of experimental noise and cybernetic rhythms. Inspired by the intersection of nature and technology.",
                link: "https://soundcloud.com/nadinicoco/sets/cyber-planta-nadi-nicoco",
              },
              {
                year: "2023",
                title: "Made in a Blender",
                desc: "A chaotic mix of noise and trash aesthetics. Raw, unpolished, and unapologetically experimental.",
                link: "https://soundcloud.com/nadinicoco/sets/made-in-a-blender",
              },
              {
                year: "NOW",
                title: "Future Loading...",
                desc: "Exploring new sonic dimensions and pushing the boundaries of experimental music.",
              },
            ].map((event, index) => (
              <div key={index} className="relative pl-8 ml-6">
                <span className="absolute left-0 flex items-center justify-center w-6 h-6 bg-cyber-black border border-neon-blue rounded-full -translate-x-1/2">
                  <span className="w-2 h-2 bg-neon-blue rounded-full" />
                </span>
                <div className="p-4 border border-neon-blue/20 bg-cyber-dark/50 backdrop-blur-sm">
                  <span className="font-pixel text-neon-green text-sm">{event.year}</span>
                  <h3 className="font-pixel text-neon-blue mt-2">{event.title}</h3>
                  <p className="text-crt-white/70 mt-1">{event.desc}</p>
                  {event.link && (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block px-4 py-2 border border-neon-blue/30 text-neon-blue text-sm hover:bg-neon-blue hover:text-cyber-black transition-all duration-300"
                    >
                      LISTEN ON SOUNDCLOUD
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;