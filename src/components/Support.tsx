
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Support = () => {
  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Support the Project
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            We're a small indie team building something truly unique. Help us bring this vision to life!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-green-900/50 to-green-800/50 border-green-600 hover:from-green-900/70 hover:to-green-800/70 transition-all duration-300 hover-scale">
            <CardHeader className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <CardTitle className="text-2xl text-white">Kickstarter Campaign</CardTitle>
              <CardDescription className="text-green-200 text-lg">
                Back our main funding campaign
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-300 mb-6">
                Help us reach our funding goal and unlock exciting stretch goals including additional characters, 
                expanded storylines, and enhanced gameplay features.
              </p>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 w-full"
                onClick={() => window.open('https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial', '_blank')}
              >
                Back on Kickstarter
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-900/50 to-red-800/50 border-orange-600 hover:from-orange-900/70 hover:to-red-800/70 transition-all duration-300 hover-scale">
            <CardHeader className="text-center">
              <div className="text-5xl mb-4">☕</div>
              <CardTitle className="text-2xl text-white">Ko-fi Support</CardTitle>
              <CardDescription className="text-orange-200 text-lg">
                Ongoing development support
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-300 mb-6">
                Support our daily development with coffee and encouragement. Follow our dev blog for behind-the-scenes 
                updates, concept art, and development insights.
              </p>
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 w-full"
                onClick={() => window.open('https://ko-fi.com/phoenixgoldzstudios', '_blank')}
              >
                Support on Ko-fi
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-700/50 rounded-lg p-8 max-w-2xl mx-auto border border-slate-600">
            <h3 className="text-xl font-semibold text-white mb-4">Every Contribution Helps Us:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-300">
              <div>
                <div className="text-2xl mb-2">📝</div>
                <p>Write more stories</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🗺️</div>
                <p>Build more maps</p>
              </div>
              <div>
                <div className="text-2xl mb-2">✨</div>
                <p>Polish the magic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
