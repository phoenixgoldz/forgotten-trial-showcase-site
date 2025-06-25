
import { Heart, ExternalLink, Coffee, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-indigo-900 py-16 border-t border-slate-700/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 gradient-text">
              The Forgotten Trial
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              A mysterious fantasy RPG crafted with passion by Phoenix Goldz Studios. 
              Follow our journey as we bring this unique adventure to life, one memory at a time.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a 
              href="https://ko-fi.com/phoenixgoldzstudios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-orange-400 hover:text-orange-300 transition-colors story-link text-lg group"
            >
              <Coffee className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Ko-fi Dev Blog
              <ExternalLink className="w-4 h-4 ml-1 opacity-60" />
            </a>
            <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full"></div>
            <a 
              href="https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors story-link text-lg group"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Kickstarter Campaign
              <ExternalLink className="w-4 h-4 ml-1 opacity-60" />
            </a>
          </div>

          <div className="bg-gradient-to-r from-slate-800/50 to-indigo-800/50 rounded-2xl p-8 border border-slate-600/30 glass-effect backdrop-blur-sm mb-8">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center justify-center">
              <span className="mr-2">🎮</span>
              Designed For Everyone
            </h4>
            <div className="flex flex-wrap justify-center gap-4 text-slate-300">
              <span className="bg-slate-700/50 px-4 py-2 rounded-full text-sm border border-slate-600/50 hover:border-slate-500/50 transition-colors">
                PC (Unreal Engine 5.5)
              </span>
              <span className="bg-slate-700/50 px-4 py-2 rounded-full text-sm border border-slate-600/50 hover:border-slate-500/50 transition-colors">
                Full Gamepad Support
              </span>
              <span className="bg-slate-700/50 px-4 py-2 rounded-full text-sm border border-slate-600/50 hover:border-slate-500/50 transition-colors">
                Accessibility Options
              </span>
              <span className="bg-slate-700/50 px-4 py-2 rounded-full text-sm border border-slate-600/50 hover:border-slate-500/50 transition-colors">
                Kid-Friendly Content
              </span>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-700/50">
            <p className="text-slate-500 text-sm flex items-center justify-center">
              © 2024 Phoenix Goldz Studios. All rights reserved. 
              <span className="mx-2">•</span>
              Built with 
              <Heart className="w-4 h-4 mx-1 text-pink-400 animate-pulse" />
              for RPG lovers everywhere.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
