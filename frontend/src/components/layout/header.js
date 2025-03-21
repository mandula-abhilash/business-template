"use client";

import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigationLinks, siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] bg-background/80 backdrop-blur-sm border-b border-border">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className="-m-1.5 p-1.5 inline-flex items-center hover:opacity-80 transition-opacity"
              aria-label={`${siteConfig.name} home page`}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary p-2 text-primary-foreground">
                  <Globe className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  {siteConfig.name}
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open main menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigationLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 transition-colors ${
                  pathname === item.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop right section */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* Mobile menu dialog */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        className={`fixed inset-0 z-[110] transform transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`fixed inset-y-0 right-0 w-full bg-background sm:max-w-sm sm:ring-1 sm:ring-border/10 flex flex-col transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile menu header */}
          <div className="px-6 py-6 border-b border-border">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="-m-1.5 p-1.5 inline-flex items-center"
                onClick={() => setMobileMenuOpen(false)}
                aria-label={`${siteConfig.name} home page`}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary p-2 text-primary-foreground">
                    <Globe className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="text-xl font-bold tracking-tight">
                    {siteConfig.name}
                  </span>
                </div>
              </Link>
              <Button
                variant="ghost"
                className="-m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Mobile menu content */}
          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <ul className="flex flex-col gap-4">
              {navigationLinks.map((item, index) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`rounded-lg px-3 py-2 text-base font-semibold leading-7 transform transition-all duration-300 ease-in-out ${
                      mobileMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    } delay-[${index * 100}ms] ${
                      pathname === item.href
                        ? "bg-accent text-accent-foreground"
                        : "hover:bg-accent hover:text-accent-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu footer */}
          <div
            className={`border-t border-border px-6 py-6 transform transition-all duration-300 ease-in-out ${
              mobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            } delay-300`}
          >
            <Button asChild className="w-full mb-4">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
            <div className="flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
