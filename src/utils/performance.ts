
export const performanceMonitor = {
  // Monitor page load times
  measurePageLoad: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
        
        // Log Core Web Vitals if available
        if ('getEntriesByType' in performance) {
          const paintEntries = performance.getEntriesByType('paint');
          paintEntries.forEach((entry) => {
            console.log(`${entry.name}: ${entry.startTime.toFixed(2)}ms`);
          });
        }
      });
    }
  },

  // Monitor component render times
  measureRender: (componentName: string, renderFn: () => void) => {
    const startTime = performance.now();
    renderFn();
    const endTime = performance.now();
    console.log(`${componentName} rendered in ${(endTime - startTime).toFixed(2)}ms`);
  },

  // Monitor image loading
  measureImageLoad: (imageSrc: string) => {
    const startTime = performance.now();
    const img = new Image();
    
    img.onload = () => {
      const loadTime = performance.now() - startTime;
      console.log(`Image ${imageSrc} loaded in ${loadTime.toFixed(2)}ms`);
    };
    
    img.onerror = () => {
      console.warn(`Failed to load image: ${imageSrc}`);
    };
    
    img.src = imageSrc;
  }
};

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  performanceMonitor.measurePageLoad();
}
