import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Travelers", href: "/travelers" },
    { name: "Hostels", href: "/hostels" },
    { name: "Experience Partners", href: "/experience-partners" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ],
  resources: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms and Conditions", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "EULA", href: "/eula" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Acceptable Use Policy", href: "/use-policy" },
  ],
};

// const socialLinks = [
//   { name: "Instagram", href: "#", icon: "/social-icons/instagram-dark.svg" },
//   { name: "LinkedIn", href: "#", icon: "/social-icons/linkedin-dark.svg" },
//   { name: "X", href: "#", icon: "/social-icons/x-dark.svg" },
//   { name: "TikTok", href: "#", icon: "/social-icons/tiktok-dark.svg" },
//   { name: "YouTube", href: "#", icon: "/social-icons/youtube-dark.svg" },
// ];

export function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <div className="px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-8 md:grid-cols-4 lg:grid-cols-6">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-3 sm:mb-4">
              <Image
                src="/ceezaa-logo.svg"
                alt="Ceezaa"
                width={140}
                height={45}
                className="h-8 sm:h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-xs sm:text-sm text-secondary-foreground/80 max-w-sm mb-4 sm:mb-6">
              Connecting travelers with authentic hostel experiences worldwide.
              Discover your next adventure with Ceezaa.
            </p>

            {/* Contact Info */}
            <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-secondary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <a
                  href="mailto:hello@ceezaa.com"
                  className="hover:text-primary transition-colors"
                >
                  hello@ceezaa.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mt-0.5 shrink-0" />
                <span>Building connections around the globe</span>
              </div>
            </div>
          </div>

          {/* Quick Links - 2 columns wide on large screens */}
          <div className="col-span-2 lg:col-span-2">
            <h3 className="font-semibold text-secondary-foreground mb-3 sm:mb-4 text-sm sm:text-base">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-2 sm:gap-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-2 lg:col-span-2">
            <h3 className="font-semibold text-secondary-foreground mb-3 sm:mb-4 text-sm sm:text-base">
              Resources
            </h3>
            <ul className="grid grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-2 sm:gap-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            {/* Copyright */}
            <p className="text-xs sm:text-sm text-secondary-foreground/80 text-center sm:text-left">
              © {new Date().getFullYear()} Ceezaa. All rights reserved.
            </p>

            {/* Social Links */}
            {/* <div className="flex items-center gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="h-4 w-4 sm:h-5 sm:w-5"
                  />
                </a>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
