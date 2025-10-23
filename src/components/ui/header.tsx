"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Info,
  Users,
  Building2,
  Sparkles,
  Mail,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Travelers", href: "/travelers", icon: Users },
  { name: "Hostels", href: "/hostels", icon: Building2 },
  { name: "Experience Partners", href: "/experience-partners", icon: Sparkles },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu when clicking outside or scrolling
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex h-16 items-center gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo - Left section with flex-1 to create equal spacing */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <Image
              src="/ceezaa-logo.svg"
              alt="Ceezaa"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation - Centered between logo and button */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-6">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors whitespace-nowrap rounded-3xl px-3 py-2",
                  isActive
                    ? "bg-primary text-white"
                    : "text-foreground hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side Actions - Right section with flex-1 to create equal spacing */}
        <div className="flex-1 flex justify-end items-center gap-2">
          <Button variant="join" className="whitespace-nowrap">Join Now</Button>

          {/* Mobile Menu Button */}
          <Button
            ref={buttonRef}
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden border-b bg-background overflow-hidden fixed top-16 left-0 right-0 z-40"
          >
            <nav className="px-4 sm:px-6 lg:px-8 py-4">
              <div className="grid gap-2">
                {navigationLinks.map((link, index) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors",
                          isActive
                            ? "bg-primary/90 text-primary-foreground"
                            : "hover:bg-primary/50 hover:text-accent-foreground"
                        )}
                      >
                        <Icon className="h-5 w-5 shrink-0" />
                        <span>{link.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
