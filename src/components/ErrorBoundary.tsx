
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    console.error('ErrorBoundary: Caught error in getDerivedStateFromError:', error);
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary: Caught error in componentDidCatch:', error);
    console.error('ErrorBoundary: Error info:', errorInfo);
    
    this.setState({
      error,
      errorInfo
    });

    // Log to external service in production
    if (process.env.NODE_ENV === 'production') {
      // You could send error reports to services like Sentry here
      console.log('Production error logged:', { error, errorInfo });
    }
  }

  private handleRestart = () => {
    console.log('Restarting application...');
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
    window.location.reload();
  };

  private handleRetry = () => {
    console.log('Retrying after error...');
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  public render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-mystic-blue via-ancient-stone to-mystic-blue flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-ancient-stone/90 rounded-2xl p-8 text-center border border-ethereal-gold/30 backdrop-blur-md shadow-xl">
            <div className="text-6xl mb-6 animate-pulse">🏰</div>
            <h1 className="text-3xl font-bold text-white mb-4 font-cinzel">
              The Trial Has Encountered an Error
            </h1>
            <p className="text-slate-300 mb-6 font-citizen leading-relaxed">
              Something went wrong in the forgotten depths. The ancient magic seems to have been disrupted.
            </p>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left bg-red-900/20 p-4 rounded-lg border border-red-500/30">
                <summary className="text-red-400 font-semibold cursor-pointer mb-2">
                  Error Details (Development Mode)
                </summary>
                <pre className="text-xs text-red-300 overflow-auto max-h-32 whitespace-pre-wrap">
                  {this.state.error.toString()}
                  {this.state.errorInfo && (
                    <>
                      {'\n\nComponent Stack:'}
                      {this.state.errorInfo.componentStack}
                    </>
                  )}
                </pre>
              </details>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleRetry}
                className="bg-gradient-to-r from-verdant-glyph to-luminous-azure hover:from-verdant-glyph/90 hover:to-luminous-azure/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 font-citizen shadow-lg hover:shadow-verdant-glyph/30 focus:outline-none focus:ring-2 focus:ring-verdant-glyph/50"
                aria-label="Try to recover from error"
              >
                Try Again
              </button>
              <button
                onClick={this.handleRestart}
                className="bg-gradient-to-r from-ethereal-gold to-ember-flame hover:from-ethereal-gold/90 hover:to-ember-flame/90 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 font-citizen shadow-lg hover:shadow-ethereal-gold/30 focus:outline-none focus:ring-2 focus:ring-ethereal-gold/50"
                aria-label="Restart the application"
              >
                Restart Trial
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
