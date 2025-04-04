import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Users, Calendar, Mailbox as Toolbox, Map, Home } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-purple-600">AspirHer</h1>
          </Link>
          
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                currentPath === '/'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:bg-purple-50'
              }`}
            >
              <Home className="w-5 h-5 mr-2" />
              Home
            </Link>

            <Link
              to="/discussions"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                currentPath === '/discussions'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:bg-purple-50'
              }`}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Discussions
            </Link>
            
            <Link
              to="/mentorship"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                currentPath === '/mentorship'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:bg-purple-50'
              }`}
            >
              <Users className="w-5 h-5 mr-2" />
              Mentorship
            </Link>
            
            <Link
              to="/events"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                currentPath === '/events'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:bg-purple-50'
              }`}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Events
            </Link>

            <Link
              to="/toolkits"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                currentPath === '/toolkits'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:bg-purple-50'
              }`}
            >
              <Toolbox className="w-5 h-5 mr-2" />
              Toolkits
            </Link>

            <Link
              to="/sitemap"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                currentPath === '/sitemap'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:bg-purple-50'
              }`}
            >
              <Map className="w-5 h-5 mr-2" />
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;