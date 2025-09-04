"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Menu, X, Search, Phone } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="sticky top-0 z-50 w-full h-30   border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-30  items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">FFG</span>
          </div>
          <span className="font-bold text-xl text-black">
            FAAZ Financial Group LLC
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Products & Pricing Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle("products")}
              className={`flex items-center space-x-1 text-foreground hover:text-green-600 transition-colors ${
                activeDropdown === "products"
                  ? "text-green-600 border-b-2 border-green-600"
                  : ""
              }`}
            >
              <span>Products & Pricing</span>
              {activeDropdown === "products" ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>

            {activeDropdown === "products" && (
              <div className="absolute top-full left-0 mt-2 w-[800px] bg-white border rounded-lg shadow-lg p-6 grid grid-cols-4 gap-6">
                {/* Column 1: MAKE IT OFFICIAL */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">
                    MAKE IT OFFICIAL
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/services/llc-formation"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Form an LLC
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/corporation-formation"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        File an S Corp
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/corporation-formation"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Start a C Corp
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pricing"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Compare Formation Plans
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pricing"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Products & Pricing
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 2: STAY COMPLIANT */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">
                    STAY COMPLIANT
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/services/registered-agent"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Registered Agent Service
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/compliance"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Worry-Free Compliance
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/boi-filing"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        BOI Filing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/ein"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Employer ID Number (EIN)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/business-license"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Business License Report
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/templates"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Business Document Templates
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 3: MANAGE FINANCES */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">
                    MANAGE FINANCES
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/services/bookkeeping"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Money Pro Bookkeeping
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/business-banking"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Business Bank Account
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/tax-filing"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Tax Filing & Advice
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 4: GET CUSTOMERS */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">
                    GET CUSTOMERS
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/services/website-builder"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Business Website Builder
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/domain-registration"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Domain Name Registration
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/business-email"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Business Email Address
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/logo-kit"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Logo Kit
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Guides & Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle("guides")}
              className={`flex items-center space-x-1 text-foreground hover:text-green-600 transition-colors ${
                activeDropdown === "guides"
                  ? "text-green-600 border-b-2 border-green-600"
                  : ""
              }`}
            >
              <span>Guides & Resources</span>
              {activeDropdown === "guides" ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>

            {activeDropdown === "guides" && (
              <div className="absolute top-full left-0 mt-2 w-[800px] bg-white border rounded-lg shadow-lg p-6 grid grid-cols-4 gap-6">
                {/* Column 1: PLAN YOUR BUSINESS */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">
                    PLAN YOUR BUSINESS
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/guides/llc-formation"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        How to Start an LLC
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/guides/incorporation"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        How to Incorporate
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/guides/s-corp"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        How to File an S Corp
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/guides/start-business"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        How to Start a Business
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/guides/compare-entities"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Compare Business Entities
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/guides/business-ideas"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Business Ideas
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 2: GROW YOUR BUSINESS */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">
                    GROW YOUR BUSINESS
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/guides/marketing-tips"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Marketing Tips
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/guides/after-llc"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Steps After Forming an LLC
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/guides/business-cards"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Business Card Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/guides/small-business-grants"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Small Business Grants
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/guides/small-business-loans"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Small Business Loans
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/guides/funding-llc"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Funding Your LLC
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 3: RUN YOUR BUSINESS */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">
                    RUN YOUR BUSINESS
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/guides/hiring"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Guide to Hiring
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/guides/insurance"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Guide to SMB Insurance
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/guides/webinars"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Webinars
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/guides/llc-tax-writeoffs"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        LLC Tax Write-Offs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/guides/llc-tax-classification"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        LLC Tax Classification
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 4: FREE BUSINESS TOOLS */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">
                    FREE BUSINESS TOOLS
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/tools/s-corp-calculator"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        S Corp Savings Calculator
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tools/entity-quiz"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Entity Type Quiz
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tools/break-even-calculator"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Break Even Calculator
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tools/business-name-generator"
                        className="text-sm text-gray-600 hover:text-green-600"
                      >
                        Business Name Generator
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* About Us Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle("about")}
              className={`flex items-center space-x-1 text-foreground hover:text-green-600 transition-colors ${
                activeDropdown === "about"
                  ? "text-green-600 border-b-2 border-green-600"
                  : ""
              }`}
            >
              <span>About Us</span>
              {activeDropdown === "about" ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>

            {activeDropdown === "about" && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg p-4">
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="text-sm text-gray-600 hover:text-green-600"
                    >
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/team"
                      className="text-sm text-gray-600 hover:text-green-600"
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/mission"
                      className="text-sm text-gray-600 hover:text-green-600"
                    >
                      Mission & Values
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm text-gray-600 hover:text-green-600"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <span className="text-sm text-gray-600 flex items-center space-x-1">
            <Phone className="h-4 w-4" />
            <span>+1 307-400-1963</span>
          </span>
          <Link href="/auth/login">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-green-600"
            >
              Log In
            </Button>
          </Link>
          <Link href="/start-business">
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white"
            >
              Start an LLC
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container px-4 py-4 space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
                Products & Pricing
              </h3>
              <div className="pl-4 space-y-2">
                <Link
                  href="/services/llc-formation"
                  className="block text-sm text-gray-600 hover:text-green-600"
                >
                  Form an LLC
                </Link>
                <Link
                  href="/services/corporation-formation"
                  className="block text-sm text-gray-600 hover:text-green-600"
                >
                  File an S Corp
                </Link>
                <Link
                  href="/services/registered-agent"
                  className="block text-sm text-gray-600 hover:text-green-600"
                >
                  Registered Agent
                </Link>
                <Link
                  href="/pricing"
                  className="block text-sm text-gray-600 hover:text-green-600"
                >
                  Pricing
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
                Guides & Resources
              </h3>
              <div className="pl-4 space-y-2">
                <Link
                  href="/guides/llc-formation"
                  className="block text-sm text-gray-600 hover:text-green-600"
                >
                  How to Start an LLC
                </Link>
                <Link
                  href="/guides/business-formation"
                  className="block text-sm text-gray-600 hover:text-green-600"
                >
                  Business Formation Guide
                </Link>
                <Link
                  href="/tools/business-name-generator"
                  className="block text-sm text-gray-600 hover:text-green-600"
                >
                  Business Name Generator
                </Link>
              </div>
            </div>

            <Link
              href="/about"
              className="block text-foreground hover:text-green-600"
            >
              About Us
            </Link>

            <div className="pt-4 border-t space-y-2">
              <Link href="/auth/login">
                <Button variant="ghost" className="w-full justify-start">
                  Log In
                </Button>
              </Link>
              <Link href="/start-business">
                <Button
                  variant="outline"
                  className="w-full border-black text-black hover:bg-black hover:text-white"
                >
                  Start an LLC
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close dropdowns */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </header>
  );
}
