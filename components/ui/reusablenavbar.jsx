"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { Button } from "./button";
import Link from 'next/link'
import { useState } from "react";
 
export function MainNavbar() {
  const navItems = [
    {
      name: "About",
      link: "/about_page",
    },
    {
      name: "How it Works",
      link: "#pricing",
    },
    {
      name: "Partners",
      link: "#contact",
    },
    {
      name: "Stories",
      link: "#stories"
    }
  ];
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <Link className="z-10" href="/contact"><Button variant="">Contact Us</Button></Link>
        </NavBody>
 
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
 
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <Button
                onClick={() => setIsMobileMenuOpen(false)}
                variant="outline"
                className="w-full"
              >
                Contact Us
              </Button>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

 
      {/* Navbar */}
    </div>
  );
}