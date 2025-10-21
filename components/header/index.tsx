"use client";

import { navLinks, socialLinks } from "@/constants";
import "./style.css";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import CartIcon from "../cart-icon";
import CustomLink from "../custom-link";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="py-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={`/`} className="font-serif">
          Shebi~Beauty
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks?.slice(0, -1).map((link) => (
            <Link
              href={link.link}
              key={link.title}
              className="font-medium transition-colors hover:underline hover:underline-offset-4"
            >
              {link.title}
            </Link>
          ))}

          <CustomLink
            href="#contact"
            firstText="Contact Us"
            secondText="Let's Talk"
          />

          <CartIcon className="ml-8" />
        </nav>

        <div className="flex justify-center items-center gap-7 lg:hidden">
          <CartIcon className="mt-2" />

          <Button
            variant={`navmenu`}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? "Close" : "Menu"}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div
          className={`h-[85dvh] my-6 flex lg:hidden flex-col py-10 px-6 items-start justify-between overflow-hidden rounded-b-3xl bg-red-500 text-white ${
            isOpen ? "menu-open" : "menu-closed"
          }`}
        >
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <Link
                href={link.link}
                key={link.title}
                className="overflow-hidden text-6xl font-bold uppercase tracking-tight"
                style={{
                  animation: isOpen
                    ? `slideUpWord 0.7s ease-out forwards`
                    : `slideDownWord 0.5s ease-out forwards`,
                  animationDelay: isOpen
                    ? `${index * 0.1}s`
                    : `${index * 0.1}s`,
                }}
              >
                <span className="block">{link.title}</span>
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-4">
            {socialLinks.map((link, index) => (
              <Link
                href={link.link}
                key={link.name}
                className="overflow-hidden"
                style={{
                  animation: isOpen
                    ? `slideUpWord 0.7s ease-out forwards`
                    : `slideDownWord 0.5s ease-out forwards`,
                  animationDelay: isOpen
                    ? `${index * 0.1}s`
                    : `${index * 0.1}s`,
                }}
              >
                <span className="flex justify-between gap-8">
                  <span>{link.name}:</span>
                  <span className="text-gray-300">{link.tag}</span>
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
