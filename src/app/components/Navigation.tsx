import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 shadow-sm" style={{ borderBottom: '2px solid #E5E7EB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="PlaceMax Logo"
                className="h-14 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium transition-colors hover:opacity-80"
                style={{ color: '#1F4E79' }}
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="shadow-lg font-semibold"
              style={{ backgroundColor: '#F28C38', color: 'white' }}
            >
              <a href="mailto:contact@placemax.in?subject=Get Started with PlaceMax">
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            style={{ color: '#1F4E79' }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4" style={{ borderTop: '1px solid #E5E7EB' }}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 font-medium transition-colors"
                style={{ color: '#1F4E79' }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="w-full shadow-lg font-semibold"
              style={{ backgroundColor: '#F28C38', color: 'white' }}
            >
              <a href="mailto:contact@placemax.in?subject=Get Started with PlaceMax">
                Get Started
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
