
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ImprovedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  handleGoHome = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    // Navigate to home page
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-mystic-blue via-ancient-stone to-mystic-blue flex items-center justify-center p-4">
          <Card className="max-w-2xl w-full bg-gradient-to-br from-ancient-stone/90 to-mystic-blue/80 border-2 border-ethereal-gold/30 backdrop-blur-md">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-ember-flame to-ethereal-gold rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-cinzel text-ethereal-gold mb-2">
                A Mystical Error Has Occurred
              </CardTitle>
              <p className="text-gray-300 font-citizen">
                It seems our magical realm has encountered an unexpected disturbance. 
                Fear not, brave adventurer - we can restore the balance.
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="bg-black/40 rounded-lg p-4 border border-ancient-stone/30">
                <h3 className="text-sm font-semibold text-ethereal-gold mb-2 font-citizen">Error Details:</h3>
                <p className="text-xs text-gray-400 font-mono break-all">
                  {this.state.error?.message || 'Unknown error occurred'}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={this.handleRetry}
                  className="bg-gradient-to-r from-verdant-glyph to-luminous-azure hover:from-verdant-glyph/80 hover:to-luminous-azure/80 text-white border-0 font-citizen"
                  aria-label="Try to reload the current page"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
                
                <Button
                  onClick={this.handleGoHome}
                  variant="outline"
                  className="border-ethereal-gold/50 text-ethereal-gold hover:bg-ethereal-gold/10 font-citizen"
                  aria-label="Return to the home page"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Return Home
                </Button>
              </div>
              
              <div className="text-center">
                <p className="text-xs text-gray-400 font-citizen">
                  If this issue persists, the realm's guardians have been notified and are working to restore order.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ImprovedErrorBoundary;
