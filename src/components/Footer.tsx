import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-16 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/how-it-works" className="hover:text-secondary transition-colors">How It Works</Link></li>
              <li><Link to="/faq" className="hover:text-secondary transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <p className="text-sm">
              Have questions? Reach out to us at<br />
              <a href="mailto:support@earniverse.com" className="hover:text-secondary transition-colors">
                support@earniverse.com
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
          <p>© {currentYear} Earniverse. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};