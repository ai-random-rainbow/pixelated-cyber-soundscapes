import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div className="min-h-screen bg-cyber-black text-crt-white">
      <Navbar />
      <div className="pt-24 pb-16 px-4 container mx-auto">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-pixel text-center text-neon-blue mb-12">
            CONNECT.EXE
          </h1>

          {/* Display Email and Contact Info */}
          <div className="space-y-8 text-center">
            <div>
              <h2 className="font-pixel text-neon-green text-xl mb-4">
                NEURAL_LINK (EMAIL)
              </h2>
              <a
                href="mailto:your.email@example.com"
                className="text-crt-white hover:text-neon-blue transition-colors duration-300"
              >
                your.email@example.com
              </a>
            </div>

            {/* Social Media Links */}
            <div className="mt-16 space-y-6">
              <h2 className="font-pixel text-neon-pink text-xl">
                OTHER FREQUENCIES
              </h2>
              <div className="flex justify-center gap-8">
                {[
                  { name: 'TWITTER', link: '#' },
                  { name: 'SOUNDCLOUD', link: '#' },
                  { name: 'INSTAGRAM', link: '#' },
                ].map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.link}
                    className="text-crt-white hover:text-neon-green transition-colors duration-300"
                  >
                    {platform.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;