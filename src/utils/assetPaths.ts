// Asset path utility for proper deployment
export const getAssetPath = (path: string): string => {
  // Always use absolute path from root for both custom domain and GitHub Pages
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