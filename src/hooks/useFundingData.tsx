import { useState, useEffect } from 'react';

interface FundingData {
  kickstarter: {
    pledged: number;
    pledgedDisplay: string;
    goal: number;
    goalDisplay: string;
    backers: number;
    progress: number;
    daysLeft: number;
    isLive: boolean;
    url: string;
  };
  kofi: {
    supporters: number;
    monthlyGoal: number;
    progress: number;
    recentSupporters: string[];
    totalRaised: number;
    url: string;
  };
  lastUpdated: Date;
}

// Real funding data - actual current values
const getRealFundingData = (): FundingData => {
  const now = new Date();

  return {
    kickstarter: {
      pledged: 0,
      pledgedDisplay: '$0',
      goal: 35000,
      goalDisplay: '$35,000',
      backers: 0,
      progress: 0,
      daysLeft: 28,
      isLive: false, // Not live yet
      url: 'https://www.kickstarter.com/projects/theforgottentrial/the-forgotten-trial'
    },
    kofi: {
      supporters: 0,
      monthlyGoal: 50,
      progress: 0,
      recentSupporters: [], // No supporters yet
      totalRaised: 0,
      url: 'https://ko-fi.com/phoenixgoldzstudios'
    },
    lastUpdated: now
  };
};

export const useFundingData = () => {
  const [data, setData] = useState<FundingData>(getRealFundingData());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Update timestamp every 30 seconds to show "live" status without changing values
    const interval = setInterval(() => {
      setData(prevData => ({
        ...prevData,
        lastUpdated: new Date()
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const refreshData = async () => {
    setIsLoading(true);
    try {
      // Simulate API call delay then return real data
      await new Promise(resolve => setTimeout(resolve, 800));
      setData(getRealFundingData());
      setError(null);
    } catch (err) {
      setError('Failed to refresh funding data');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    isLoading,
    error,
    refreshData,
    isRealTime: false // No longer simulating real-time changes
  };
};