
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, BookOpen, Sparkles, ArrowRight } from "lucide-react";

const About = () => {
  const handleKickstarterClick = () => {
    console.log('Redirecting to Kickstarter from About section');
    window.open('https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial', '_blank', 'noopener,noreferrer');
  };

  const craftedFeatures = [
    {
      icon: BookOpen,
      title: "Hand-Written Narrative",
      description: "Every word, character, and dialogue crafted by our passionate writing team—no AI-generated content.",
      colorClasses: {
        icon: "text-ethereal-gold",
        iconBg: "bg-ethereal-gold/20 border-ethereal-gold/30"
      }
    },
    {
      icon: Users,
      title: "Character-Driven Stories",
      description: "Each companion has deep secrets, unique personalities, and meaningful reactions to your choices.",
      colorClasses: {
        icon: "text-luminous-azure",
        iconBg: "bg-luminous-azure/20 border-luminous-azure/30"
      }
    },
    {
      icon: Sparkles,
      title: "Meaningful Experience",
      description: "A heartfelt adventure that respects your time and intelligence with rich, thoughtful storytelling.",
      colorClasses: {
        icon: "text-verdant-glyph",
        iconBg: "bg-verdant-glyph/20 border-verdant-glyph/30"
      }
    },
    {
      icon: Heart,
      title: "Passion Project",
      description: "Made with love by a dedicated indie team who believe games should tell meaningful stories.",
      colorClasses: {
        icon: "text-ember-flame",
        iconBg: "bg-ember-flame/20 border-ember-flame/30"
      }
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-mystic-blue/50 via-ancient-stone/30 to-mystic-blue/50"></div>
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={`about-particle-${i}`}
            className="absolute w-1 h-1 bg-ethereal-gold/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-ethereal-gold/20 to-ember-flame/20 border border-ethereal-gold/40 backdrop-blur-sm mb-8">
            <Sparkles className="w-5 h-5 text-ethereal-gold mr-2" />
            <span className="font-citizen text-ethereal-gold font-semibold">Crafted with Passion</span>
          </div>
          
          <h2 className="font-cinzel text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            What is <span className="text-transparent bg-gradient-to-r from-ethereal-gold to-ember-flame bg-clip-text">The Forgotten Trial?</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-2xl md:text-3xl text-gray-100 leading-relaxed font-citizen">
              Step into a <span className="text-ethereal-gold font-semibold">cursed dungeon</span> where you awaken with no memory—and only the echoing whispers of the past to guide you.
            </p>
            
            <p className="text-xl text-gray-200 leading-relaxed font-citizen max-w-3xl mx-auto">
              Lead a party of mysterious heroes through tactical battles and narrative choices. Each dungeon run is unique, 
              shaped by handcrafted story fragments and a procedurally rebuilt world.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Story Image */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-ethereal-gold/20 to-verdant-glyph/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-ancient-stone/20 to-mystic-blue/20 rounded-2xl p-1 backdrop-blur-sm border border-ethereal-gold/30">
                <img
                  src="/lovable-uploads/fd08db9a-ea75-4280-b9ad-6117a0d836f6.png"
                  alt="Mystical dungeon scene with glowing ethereal atmosphere"
                  className="w-full h-auto rounded-xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right side - Enhanced Description */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-black/40 to-black/20 rounded-2xl p-8 backdrop-blur-sm border border-ethereal-gold/20">
                <h3 className="font-cinzel text-3xl font-bold text-ethereal-gold mb-4">
                  No AI-Generated Content Here
                </h3>
                <p className="text-lg text-gray-100 leading-relaxed font-citizen">
                  Every word, character, and line of dialogue is lovingly crafted by our dedicated writing team. 
                  We believe in delivering a heartfelt, meaningful experience that honors your investment in our story.
                </p>
              </div>

              <div className="bg-gradient-to-r from-verdant-glyph/10 to-luminous-azure/10 rounded-2xl p-8 backdrop-blur-sm border border-verdant-glyph/20">
                <h3 className="font-cinzel text-3xl font-bold text-verdant-glyph mb-4">
                  Your Story, Your Choices
                </h3>
                <p className="text-lg text-gray-100 leading-relaxed font-citizen">
                  Shape your party's trust through meaningful decisions. Will you lead with kindness, neutrality, 
                  or ruthlessness? Every choice echoes through your adventure, creating a truly personal experience.
                </p>
              </div>
            </div>

            <Button 
              onClick={handleKickstarterClick}
              className="w-full sm:w-auto font-citizen text-lg py-6 px-8 bg-gradient-to-r from-ethereal-gold to-ember-flame text-mystic-blue hover:from-ethereal-gold/90 hover:to-ember-flame/90 shadow-xl shadow-ethereal-gold/30 hover:shadow-ethereal-gold/50 transform hover:scale-105 transition-all duration-300"
            >
              <Heart className="w-6 h-6 mr-3" />
              Support Our Vision
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>

        {/* Crafted Features Grid */}
        <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <div className="text-center mb-16">
            <h3 className="font-cinzel text-4xl font-bold text-white mb-4">
              Crafted with <span className="text-ethereal-gold">Love & Dedication</span>
            </h3>
            <p className="text-xl text-gray-200 font-citizen max-w-3xl mx-auto">
              Every aspect of The Forgotten Trial is designed to deliver an unforgettable experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {craftedFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.title}
                  className="group bg-gradient-to-b from-ancient-stone/20 to-mystic-blue/20 border border-ethereal-gold/20 hover:border-ethereal-gold/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in"
                  style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-full ${feature.colorClasses.iconBg} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${feature.colorClasses.icon}`} />
                    </div>
                    <h4 className="font-cinzel text-xl font-bold text-white group-hover:text-ethereal-gold transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-200 font-citizen leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
