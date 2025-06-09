
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/beyond', label: 'Beyond' },
    { path: '/historia', label: 'Historia' },
    { path: '/fans', label: 'Último partido en vivo' }
  ];

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-amber-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
              Denis Vela
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  className={location.pathname === item.path 
                    ? "bg-gradient-to-r from-amber-600 to-red-600 text-white" 
                    : "text-gray-300 hover:text-white hover:bg-gray-700"
                  }
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
