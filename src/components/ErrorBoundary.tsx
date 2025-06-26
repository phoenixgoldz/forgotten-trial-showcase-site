
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
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

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-mystic-blue via-ancient-stone to-mystic-blue flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-ancient-stone/90 rounded-2xl p-8 text-center border border-ethereal-gold/30 backdrop-blur-md">
            <div className="text-6xl mb-4">🏰</div>
            <h2 className="text-2xl font-bold text-white mb-4 font-cinzel">
              The Trial Has Encountered an Error
            </h2>
            <p className="text-slate-300 mb-6 font-citizen">
              Something went wrong in the forgotten depths. Please refresh the page to continue your journey.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-ethereal-gold to-ember-flame hover:from-ethereal-gold/90 hover:to-ember-flame/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 font-citizen"
            >
              Restart Trial
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
