
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-ancient-stone via-mystic-blue to-ancient-stone/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 181, 106, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 blur-xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${60 + Math.random() * 120}px`,
              height: `${60 + Math.random() * 120}px`,
              background: `radial-gradient(circle, ${i % 2 === 0 ? 'var(--ethereal-gold)' : 'var(--verdant-glyph)'}, transparent)`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-ethereal-gold/20 to-ember-flame/20 rounded-full text-ethereal-gold text-sm font-medium border border-ethereal-gold/30">
              About The Game
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 gradient-text drop-shadow-lg">
            What is The Forgotten Trial?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-white leading-relaxed drop-shadow-md">
              Step into a cursed dungeon where you awaken with no memory—and only the echoing whispers of the past to guide you. In <span className="text-ethereal-gold font-semibold">The Forgotten Trial</span>, you lead a party of mysterious heroes through tactical battles and narrative choices.
            </p>
            <p className="text-lg md:text-xl text-slate-100 leading-relaxed drop-shadow-md">
              Each dungeon run is unique, shaped by handcrafted story fragments and a procedurally rebuilt world. Every memory you uncover brings you closer to the truth—but also deeper into the mystery.
            </p>
            <div className="bg-gradient-to-r from-verdant-glyph/20 to-luminous-azure/20 rounded-2xl p-6 border border-verdant-glyph/30 backdrop-blur-sm">
              <p className="text-white font-semibold text-lg flex items-center">
                <Heart className="w-5 h-5 mr-2 text-ember-flame" />
                <strong>No AI-generated content here.</strong>
              </p>
              <p className="text-slate-100 mt-2">
                Every word, character, and line of dialogue is crafted by our writing team to deliver a heartfelt, meaningful experience.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-ancient-stone/50 to-mystic-blue/50 rounded-2xl overflow-hidden border border-ancient-stone/30 glass-effect backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <BookOpen className="w-16 h-16 text-ethereal-gold mx-auto mb-4 animate-pulse" />
                  <p className="text-white text-lg font-medium">
                    Hand-crafted Stories
                  </p>
                  <p className="text-slate-200 text-sm mt-2">
                    Every narrative fragment tells a piece of your forgotten past
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-ancient-stone/80 to-mystic-blue/80 border-ethereal-gold/30 hover:border-ethereal-gold/50 transition-all duration-300 hover-scale group glass-effect backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-ethereal-gold to-ember-flame mb-3 mx-auto">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white group-hover:text-ethereal-gold transition-colors">
                Family Friendly
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-200 text-center">
                No horror, no gore. Just mystery, magic, and meaningful decisions for all ages.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-ancient-stone/80 to-mystic-blue/80 border-verdant-glyph/30 hover:border-verdant-glyph/50 transition-all duration-300 hover-scale group glass-effect backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-verdant-glyph to-luminous-azure mb-3 mx-auto">
                <Users className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white group-hover:text-verdant-glyph transition-colors">
                Rich Characters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-200 text-center">
                Each companion has secrets, personalities, and reactions that evolve with your choices.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-ancient-stone/80 to-mystic-blue/80 border-luminous-azure/30 hover:border-luminous-azure/50 transition-all duration-300 hover-scale group glass-effect backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-luminous-azure to-ethereal-gold mb-3 mx-auto">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white group-hover:text-luminous-azure transition-colors">
                Endless Stories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-200 text-center">
                Procedural storytelling ensures every playthrough reveals new mysteries and outcomes.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-ethereal-gold to-ember-flame hover:from-ethereal-gold/90 hover:to-ember-flame/90 text-mystic-blue font-semibold px-10 py-4 text-lg rounded-full button-shine hover-scale shadow-xl hover:shadow-ethereal-gold/25 transition-all duration-300"
            onClick={() => document.getElementById('characters')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Meet Your Companions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
