
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    // Simulate API call - in real implementation, this would call your backend
    setTimeout(() => {
      setStatus('success');
      setMessage('Thanks for joining our adventure! Check your email for updates.');
      setEmail("");
    }, 1000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-ancient-stone via-mystic-blue to-ancient-stone relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-40 h-40 bg-ethereal-gold/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-verdant-glyph/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-2xl mx-auto bg-gradient-to-br from-mystic-blue/90 to-ancient-stone/70 border-2 border-ethereal-gold/30 hover:border-ethereal-gold/60 transition-all duration-500 glass-effect backdrop-blur-sm p-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-ethereal-gold/20 to-luminous-azure/20 mb-6 border border-ethereal-gold/30 backdrop-blur-sm">
              <Mail className="w-8 h-8 text-ethereal-gold animate-pulse" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Join the <span className="gradient-text">Adventure</span>
            </h3>
            
            <p className="text-slate-300 mb-8 leading-relaxed text-center">
              Be the first to know about development updates, character reveals, and exclusive behind-the-scenes content. No spam, just mystical updates!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-ancient-stone/50 border border-ancient-stone/60 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-ethereal-gold/60 focus:ring-2 focus:ring-ethereal-gold/20 transition-all duration-300 backdrop-blur-sm"
                  disabled={status === 'loading'}
                />
                
                <Button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="bg-gradient-to-r from-verdant-glyph to-luminous-azure hover:from-verdant-glyph/90 hover:to-luminous-azure/90 text-white font-semibold px-8 py-3 rounded-lg button-shine hover-scale shadow-lg hover:shadow-verdant-glyph/30 border border-verdant-glyph/30 hover:border-verdant-glyph/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Joining...
                    </div>
                  ) : status === 'success' ? (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Joined!
                    </div>
                  ) : (
                    'Join Newsletter'
                  )}
                </Button>
              </div>

              {message && (
                <div className={`flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 text-center ${
                  status === 'success' ? 'text-verdant-glyph' : 'text-ember-flame'
                }`}>
                  {status === 'success' ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <AlertCircle className="w-4 h-4" />
                  )}
                  {message}
                </div>
              )}
            </form>

            <div className="mt-6 text-xs text-slate-400 text-center">
              We respect your privacy. Unsubscribe at any time.
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
