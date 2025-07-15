import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const breadcrumbNames: Record<string, string> = {
    '': 'Home',
    'about': 'About',
    'features': 'Features', 
    'characters': 'Characters',
    'support': 'Support',
    'demo': 'Demo'
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-ethereal-gold/70 mb-6 px-6" aria-label="Breadcrumb">
      <Link 
        to="/" 
        className="flex items-center hover:text-ethereal-gold transition-colors"
        aria-label="Go to home page"
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        const displayName = breadcrumbNames[name] || name;

        return (
          <div key={name} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4 text-ethereal-gold/50" />
            {isLast ? (
              <span className="text-ethereal-gold font-medium" aria-current="page">
                {displayName}
              </span>
            ) : (
              <Link 
                to={routeTo} 
                className="hover:text-ethereal-gold transition-colors"
              >
                {displayName}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;