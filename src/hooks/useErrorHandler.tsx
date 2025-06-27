
import { useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

export const useErrorHandler = () => {
  const { toast } = useToast();

  const handleError = useCallback((error: Error, context?: string) => {
    console.error(`Error ${context ? `in ${context}` : ''}:`, error);
    
    // Show user-friendly error message
    toast({
      title: "Something went wrong",
      description: context 
        ? `There was an issue with ${context}. Please try again.`
        : "An unexpected error occurred. Please try again.",
      variant: "destructive",
    });
  }, [toast]);

  const handleAsyncError = useCallback(async (
    asyncFn: () => Promise<any>,
    context?: string
  ) => {
    try {
      return await asyncFn();
    } catch (error) {
      handleError(error as Error, context);
      throw error;
    }
  }, [handleError]);

  return { handleError, handleAsyncError };
};
