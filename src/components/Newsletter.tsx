
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setMessage('');
    
    // Simulate API call with better error handling
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate 95% success rate
          if (Math.random() > 0.05) {
            resolve(true);
          } else {
            reject(new Error('Network error'));
          }
        }, 1000);
      });
      
      setStatus('success');
      setMessage('Welcome aboard! Check your email for exclusive updates about The Forgotten Trial.');
      setEmail("");
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again later.');
      
      // Reset error state after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-ancient-stone via-mystic-blue to-ancient-stone relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-40 h-40 bg-ethereal-gold/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-verdant-glyph/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-2xl mx-auto bg-black/60 border-2 border-ethereal-gold/40 hover:border-ethereal-gold/70 transition-all duration-500 glass-effect backdrop-blur-sm p-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-ethereal-gold/30 to-luminous-azure/30 mb-6 border border-ethereal-gold/40 backdrop-blur-sm">
              <Mail className="w-8 h-8 text-ethereal-gold animate-pulse" />
            </div>

            <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-white mb-4 text-center" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Join the <span className="gradient-text">Adventure</span>
            </h3>
            
            <p className="text-gray-100 mb-8 leading-relaxed text-center" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              Be the first to know about development updates, character reveals, and exclusive behind-the-scenes content. No spam, just mystical updates!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="bg-black/60 border-ancient-stone/80 text-white placeholder-gray-300 focus:border-ethereal-gold/80 focus:ring-ethereal-gold/30 h-12"
                    disabled={status === 'loading'}
                    aria-label="Email address"
                    autoComplete="email"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-gradient-to-r from-verdant-glyph to-luminous-azure hover:from-verdant-glyph/90 hover:to-luminous-azure/90 text-white font-semibold px-8 h-12 rounded-lg button-shine hover-scale shadow-lg hover:shadow-verdant-glyph/30 border border-verdant-glyph/30 hover:border-verdant-glyph/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === 'loading' ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
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
                <div className={`flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300 text-center animate-fade-in ${
                  status === 'success' ? 'text-verdant-glyph' : 'text-ember-flame'
                }`} style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                  {status === 'success' ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : status === 'error' ? (
                    <AlertCircle className="w-4 h-4" />
                  ) : null}
                  {message}
                </div>
              )}
            </form>

            <div className="mt-6 text-xs text-gray-300 text-center" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              We respect your privacy. Unsubscribe at any time. No spam, ever.
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
