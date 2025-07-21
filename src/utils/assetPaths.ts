// Asset path utility for proper GitHub Pages deployment
export const getAssetPath = (path: string): string => {
  // Use absolute paths for custom domain deployment
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `/${cleanPath}`;
};

// Game asset paths
export const GAME_ASSETS = {
  characters: {
    solari: getAssetPath('lovable-uploads/Solari.png'),
    tarrin: getAssetPath('lovable-uploads/Tarrin.png'),
    wisp: getAssetPath('lovable-uploads/Wisp.png'),
    kael: getAssetPath('lovable-uploads/Kael.png'),
  },
  images: {
    titlePoster: getAssetPath('lovable-uploads/TitlePosterImage.png'),
    kickstarterBanner: getAssetPath('lovable-uploads/KickstarterBannerImage.png'),
    companyLogo: getAssetPath('lovable-uploads/CompanyLogo.png'),
    titleBanner: getAssetPath('lovable-uploads/TitleBannerImage.png'),
  }
} as const;