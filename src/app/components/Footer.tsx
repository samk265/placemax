import { Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pricing', href: '#' },
      { label: 'Case Studies', href: '#' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: 'mailto:contact@placemax.in' },
    ],
    resources: [
      { label: 'Documentation', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Partners', href: '#' },
      { label: 'Community', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  };

  return (
    <footer className="text-white pt-20 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#1F4E79' }}>
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#2CA6A4' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#F28C38' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="PlaceMax Logo"
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/80 leading-relaxed">
              The intelligence layer behind campus hiring. Transforming tier-2/3 colleges into
              placement powerhouses through AI-powered training and recruitment infrastructure.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:contact@placemax.in" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@placemax.in</span>
              </a>
              <a href="tel:+919207671797" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 9207671797</span>
              </a>
              <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Kochi, Kerala</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/placemax/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#2CA6A4' }}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#F28C38' }}
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@placemax.in"
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: '#4CAF50' }}
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold text-white mb-5 text-lg">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-white mb-5 text-lg">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold text-white mb-5 text-lg">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-white mb-5 text-lg">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © 2026 PlaceMax. All rights reserved.
            </p>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#F28C38' }}></span>
              <p className="text-sm font-medium text-white/80">
                PlaceMax is in beta now but progressing fast
              </p>
            </div>
            <p className="text-sm text-white/60">
              Made with <span style={{ color: '#F28C38' }}>♥</span> for the future of T&P
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
