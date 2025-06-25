
const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-700">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">The Forgotten Trial</h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            A mysterious fantasy RPG crafted with love by Phoenix Goldz Studios. 
            Follow our journey as we bring this unique adventure to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="https://ko-fi.com/phoenixgoldzstudios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors story-link"
            >
              Ko-fi Dev Blog
            </a>
            <span className="hidden sm:inline text-slate-600">•</span>
            <a 
              href="https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors story-link"
            >
              Kickstarter Campaign
            </a>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 max-w-4xl mx-auto border border-slate-700">
            <h4 className="text-lg font-semibold text-white mb-3">Designed For:</h4>
            <div className="flex flex-wrap justify-center gap-4 text-slate-300">
              <span className="bg-slate-700 px-3 py-1 rounded-full text-sm">PC (Unreal Engine 5.5)</span>
              <span className="bg-slate-700 px-3 py-1 rounded-full text-sm">Gamepad Support</span>
              <span className="bg-slate-700 px-3 py-1 rounded-full text-sm">Accessibility Options</span>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-700">
            <p className="text-slate-500 text-sm">
              © 2024 Phoenix Goldz Studios. All rights reserved. 
              Built with ❤️ for RPG lovers everywhere.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
