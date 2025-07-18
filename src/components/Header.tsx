
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  onLoginClick: () => void;
}

const Header = ({ onLoginClick }: HeaderProps) => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-medical-dark">HealthBook</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${
                location.pathname === '/' 
                  ? 'text-medical-primary font-semibold' 
                  : 'text-gray-700 hover:text-medical-primary'
              }`}
            >
              Find Doctors
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${
                location.pathname === '/about' 
                  ? 'text-medical-primary font-semibold' 
                  : 'text-gray-700 hover:text-medical-primary'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${
                location.pathname === '/contact' 
                  ? 'text-medical-primary font-semibold' 
                  : 'text-gray-700 hover:text-medical-primary'
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="hidden md:block border-medical-primary text-medical-primary hover:bg-medical-light"
              onClick={onLoginClick}
            >
              Sign In
            </Button>
            <Button 
              className="bg-medical-primary hover:bg-medical-secondary text-white"
              onClick={onLoginClick}
            >
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
