
import { Shield, Scroll, Users, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-ancient-stone/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`about-particle-${i}`}
            className="absolute w-1 h-1 bg-ethereal-gold/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinzel text-ethereal-gold mb-6 animate-fade-in">
            What is <span className="gradient-text">The Forgotten Trial</span>?
          </h2>
          <div className="w-24 h-1 bg-ethereal-gold mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-effect rounded-2xl p-8 md:p-12 text-center">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-citizen">
              Step into a cursed dungeon where you awaken with no memory—and only the echoing whispers of the past to guide you. 
              In <span className="text-ethereal-gold font-semibold">The Forgotten Trial</span>, you lead a party of mysterious heroes 
              through tactical battles and narrative choices. Each dungeon run is unique, shaped by handcrafted story fragments 
              and a procedurally rebuilt world.
            </p>
            <div className="mt-8 p-6 bg-ember-flame/10 rounded-xl border border-ember-flame/30">
              <p className="text-ember-flame font-semibold text-lg">
                <strong>No AI-generated content here.</strong> Every word, character, and line of dialogue is crafted by our 
                writing team to deliver a heartfelt, meaningful experience.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-effect rounded-xl p-6 text-center hover-scale interactive-card">
            <div className="w-16 h-16 mx-auto mb-4 bg-ethereal-gold rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-cinzel text-ethereal-gold mb-3">Tactical Combat</h3>
            <p className="text-gray-300 font-citizen">
              Command your party on a grid in rich, strategic battles with unique abilities.
            </p>
          </div>

          <div className="glass-effect rounded-xl p-6 text-center hover-scale interactive-card">
            <div className="w-16 h-16 mx-auto mb-4 bg-luminous-azure rounded-full flex items-center justify-center">
              <Scroll className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-cinzel text-ethereal-gold mb-3">Hand-Written Stories</h3>
            <p className="text-gray-300 font-citizen">
              Letters, journal entries, and ghostly whispers reveal who you were—and who you might become.
            </p>
          </div>

          <div className="glass-effect rounded-xl p-6 text-center hover-scale interactive-card">
            <div className="w-16 h-16 mx-auto mb-4 bg-ember-flame rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-cinzel text-ethereal-gold mb-3">Dynamic Trust</h3>
            <p className="text-gray-300 font-citizen">
              Your actions shape party trust. Lead with kindness, neutrality, or ruthlessness.
            </p>
          </div>

          <div className="glass-effect rounded-xl p-6 text-center hover-scale interactive-card">
            <div className="w-16 h-16 mx-auto mb-4 bg-verdant-glyph rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-cinzel text-ethereal-gold mb-3">Procedural Dungeons</h3>
            <p className="text-gray-300 font-citizen">
              Every playthrough offers new maps, encounters, and memories to discover.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
