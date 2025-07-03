
import { Heart, Coffee, Users, Star, ExternalLink } from "lucide-react";

const Support = () => {
  return (
    <section id="support" className="py-20 bg-gradient-to-br from-ember-flame/20 to-ethereal-gold/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`support-particle-${i}`}
            className="absolute w-1 h-1 bg-ethereal-gold/25 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinzel text-ethereal-gold mb-6 animate-fade-in">
            💖 Support the <span className="gradient-text">Project</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ethereal-gold to-ember-flame mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-citizen">
            Love what we're building? Help us bring this magical world to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="glass-effect rounded-2xl p-8 text-center hover-scale interactive-card group">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-cinzel text-ethereal-gold mb-4 group-hover:text-ember-flame transition-colors">
              Back on Kickstarter
            </h3>
            <p className="text-gray-300 font-citizen mb-6 leading-relaxed">
              Join our campaign and help us reach our funding goals. Every backer gets exclusive 
              rewards and early access to the game.
            </p>
            <a
              href="https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 button-shine mystical-glow"
            >
              🎮 Back on Kickstarter
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="glass-effect rounded-2xl p-8 text-center hover-scale interactive-card group">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Coffee className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-cinzel text-ethereal-gold mb-4 group-hover:text-ember-flame transition-colors">
              Support on Ko-fi
            </h3>
            <p className="text-gray-300 font-citizen mb-6 leading-relaxed">
              Buy us a coffee and support ongoing development. Get behind-the-scenes content 
              and exclusive developer updates.
            </p>
            <a
              href="https://ko-fi.com/phoenixgoldzstudios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 button-shine mystical-glow"
            >
              ☕ Support on Ko-fi
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass-effect rounded-xl p-6 text-center">
            <Heart className="w-12 h-12 mx-auto mb-4 text-ember-flame" />
            <h4 className="text-lg font-cinzel text-ethereal-gold mb-2">Every Donation Counts</h4>
            <p className="text-gray-300 font-citizen text-sm">
              Every contribution, no matter the size, helps us create something magical.
            </p>
          </div>

          <div className="glass-effect rounded-xl p-6 text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-luminous-azure" />
            <h4 className="text-lg font-cinzel text-ethereal-gold mb-2">Join Our Community</h4>
            <p className="text-gray-300 font-citizen text-sm">
              Follow development updates and connect with fellow adventurers.
            </p>
          </div>

          <div className="glass-effect rounded-xl p-6 text-center">
            <Star className="w-12 h-12 mx-auto mb-4 text-verdant-glyph" />
            <h4 className="text-lg font-cinzel text-ethereal-gold mb-2">Share the Adventure</h4>
            <p className="text-gray-300 font-citizen text-sm">
              Tell your friends about The Forgotten Trial and help us grow.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-cinzel text-ethereal-gold mb-4">
              Help This Dream Come True
            </h3>
            <p className="text-lg text-gray-200 font-citizen leading-relaxed mb-6">
              Every donation, follow, and share helps this dream dungeon adventure come true! 
              Together, we can create something truly special that will captivate players 
              for years to come.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-ethereal-gold/20 rounded-full text-ethereal-gold font-citizen text-sm">
                🎮 Tactical RPG
              </span>
              <span className="px-4 py-2 bg-ember-flame/20 rounded-full text-ember-flame font-citizen text-sm">
                📖 Hand-Crafted Story
              </span>
              <span className="px-4 py-2 bg-luminous-azure/20 rounded-full text-luminous-azure font-citizen text-sm">
                🎭 Character-Driven
              </span>
              <span className="px-4 py-2 bg-verdant-glyph/20 rounded-full text-verdant-glyph font-citizen text-sm">
                🧩 Procedural Adventures
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
