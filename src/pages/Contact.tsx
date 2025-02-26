
import { useState } from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formState);
  };

  return (
    <div className="min-h-screen bg-cyber-black text-crt-white">
      <Navbar />
      <div className="pt-24 pb-16 px-4 container mx-auto">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-pixel text-center text-neon-blue mb-12">
            CONNECT.EXE
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-pixel text-neon-green text-sm mb-2">
                  IDENTITY
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-cyber-dark border border-neon-blue/30 text-crt-white p-3 focus:border-neon-blue focus:outline-none transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-pixel text-neon-green text-sm mb-2">
                  NEURAL_LINK
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-cyber-dark border border-neon-blue/30 text-crt-white p-3 focus:border-neon-blue focus:outline-none transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-pixel text-neon-green text-sm mb-2">
                  TRANSMISSION
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                  rows={5}
                  className="w-full bg-cyber-dark border border-neon-blue/30 text-crt-white p-3 focus:border-neon-blue focus:outline-none transition-colors duration-300"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-neon-blue/20 border border-neon-blue text-neon-blue font-pixel py-4 hover:bg-neon-blue hover:text-cyber-black transition-all duration-300"
            >
              TRANSMIT MESSAGE
            </button>
          </form>

          <div className="mt-16 text-center space-y-6">
            <h2 className="font-pixel text-neon-pink text-xl">OTHER FREQUENCIES</h2>
            <div className="flex justify-center gap-8">
              {['TWITTER', 'SOUNDCLOUD', 'INSTAGRAM'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-crt-white hover:text-neon-green transition-colors duration-300"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
