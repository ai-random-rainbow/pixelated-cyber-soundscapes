import { useState } from 'react';
import Navbar from '../components/Navbar';

const Tracks = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>('all');

  const tracks = [
    {
      id: 1,
      title: "Esquizo Ciborgue",
      genre: "experimental, noise, ambient, poetry",
      link: "https://soundcloud.com/nadinicoco/sets/esquizo-ciborgue",
    },
    {
      id: 2,
      title: "CYBER PLANTA",
      genre: "experimental, noise",
      link: "https://soundcloud.com/nadinicoco/sets/cyber-planta-nadi-nicoco",
    },
    {
      id: 3,
      title: "Made in a Blender",
      genre: "noise, trash",
      link: "https://soundcloud.com/nadinicoco/sets/made-in-a-blender",
    },
  ];

  const filteredTracks = selectedGenre === 'all' 
    ? tracks 
    : tracks.filter(track => track.genre.includes(selectedGenre));

  return (
    <div className="min-h-screen bg-cyber-black text-crt-white">
      <Navbar />
      <div className="pt-24 pb-16 px-4 container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-pixel text-center text-neon-blue mb-12">
            SONIC ARCHIVES
          </h1>

          {/* Genre Filter */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['all', 'experimental', 'noise', 'ambient', 'poetry', 'trash'].map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-6 py-2 font-pixel text-sm border ${
                  selectedGenre === genre
                    ? 'bg-neon-blue text-cyber-black border-neon-blue'
                    : 'border-neon-blue/30 text-neon-blue hover:border-neon-blue'
                } transition-all duration-300`}
              >
                {genre.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Tracks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTracks.map((track) => (
              <a
                key={track.id}
                href={track.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block border border-neon-blue/20 bg-cyber-dark/50 p-6 hover:border-neon-blue transition-all duration-300"
              >
                <div className="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="font-pixel text-neon-pink mb-2">{track.title}</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-neon-green/70">{track.genre}</span>
                </div>
                <div className="mt-4 px-4 py-2 border border-neon-blue/30 text-neon-blue text-sm hover:bg-neon-blue hover:text-cyber-black transition-all duration-300">
                  LISTEN ON SOUNDCLOUD
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;