
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-mystic-blue via-ancient-stone to-mystic-blue flex items-center justify-center p-4">
          <div className="bg-black/60 rounded-2xl p-8 border border-ember-flame/40 glass-effect backdrop-blur-sm max-w-md w-full text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-ember-flame/30 to-ethereal-gold/30 mb-6 border border-ember-flame/40 backdrop-blur-sm mx-auto">
              <AlertTriangle className="w-8 h-8 text-ember-flame" />
            </div>
            
            <h2 className="font-cinzel text-2xl font-bold text-white mb-4">
              Something went wrong
            </h2>
            
            <p className="text-gray-100 mb-6 leading-relaxed">
              The mystical energies seem to have caused an unexpected error. Don't worry, this happens even to the best adventurers.
            </p>
            
            <Button
              onClick={this.handleReset}
              className="bg-gradient-to-r from-ember-flame to-ethereal-gold hover:from-ember-flame/90 hover:to-ethereal-gold/90 text-white font-semibold px-6 py-3 rounded-lg button-shine hover-scale shadow-lg hover:shadow-ember-flame/30 border border-ember-flame/30 hover:border-ember-flame/50 transition-all duration-300"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            
            <p className="text-xs text-gray-300 mt-4">
              If this problem persists, please refresh the page.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
