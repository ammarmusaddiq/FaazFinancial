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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Helper component for menu items
const MenuItem = ({
  href,
  children,
  truncate = false,
}: {
  href: string;
  children: string;
  truncate?: boolean;
}) => (
  <li>
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={`text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md px-2 py-1 block transition-all duration-200 ${
            truncate ? "truncate max-w-[180px]" : ""
          }`}
        >
          {children}
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>{children}</p>
      </TooltipContent>
    </Tooltip>
  </li>
);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="sticky top-0 z-50 w-full h-20 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4">
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
              <span>Services & Pricing</span>
              {activeDropdown === "products" ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>

            {activeDropdown === "products" && (
              <div className="absolute top-full left-0 mt-2 w-[800px] max-h-[80vh] bg-white border rounded-lg shadow-lg p-6 grid grid-cols-4 gap-6 overflow-y-auto">
                {/* Column 1: FORMATION SERVICES */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-13 text-sm uppercase tracking-wide">
                    FORMATION SERVICES
                  </h3>
                  <ul className="space-y-1">
                    <MenuItem href="/services/llc-formation-2">
                      LLC Formation
                    </MenuItem>
                    <MenuItem href="/services/corporation-formation">
                      Corp. Formation
                    </MenuItem>
                    <MenuItem href="/services/corporation-formation">
                      Compare Formation Plans
                    </MenuItem>
                    <MenuItem href="/pricing">
                      DBA/Trademark Registration
                    </MenuItem>
                  </ul>
                </div>

                {/* Column 2: COMPLIANCE SERVICES */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-8 text-sm uppercase tracking-wide">
                    COMPLIANCE SERVICES
                  </h3>
                  <ul className="space-y-1">
                    <MenuItem href="/services/registered-agent">
                      EIN Services
                    </MenuItem>
                    <MenuItem href="/services/compliance">
                      BOI Filing Services
                    </MenuItem>
                    <MenuItem href="/services/boi-filing">
                      ITIN Services
                    </MenuItem>
                    <MenuItem href="/services/ein">
                      Sales & Use Tax Registration
                    </MenuItem>
                    <MenuItem href="/services/business-license">
                      Annual Company State Filing
                    </MenuItem>
                    <MenuItem href="/services/templates">
                      EIN Closing Services
                    </MenuItem>
                    <MenuItem href="/services/registered-agent">
                      Registered Agent Services
                    </MenuItem>
                    <MenuItem href="/services/templates">
                      Company Dissolution(State Fee Vary)
                    </MenuItem>
                    <MenuItem href="/services/templates">
                      Company Revival (State Fee vary)
                    </MenuItem>
                    <MenuItem href="/services/templates">
                      Address Change Services
                    </MenuItem>
                    <MenuItem href="/services/templates" truncate>
                      Filing Articles Of Amendments(State fee excluded)
                    </MenuItem>
                    <MenuItem href="/services/templates">
                      Payroll Related Services
                    </MenuItem>
                    <MenuItem href="/services/templates" truncate>
                      Payroll Withholding Account Registration (Some states may
                      have a small fee that is excluded)
                    </MenuItem>
                    <MenuItem href="/services/templates">
                      UI(Unemployment Insurance)
                    </MenuItem>
                    <MenuItem href="/services/templates" truncate>
                      Payroll Management (Gusto, Adp, QBO, Paychecks, Paycom,
                      Rippling) monthly
                    </MenuItem>
                    <MenuItem href="/services/templates" truncate>
                      Payroll Account Setup (Reach out for pricing)
                    </MenuItem>
                  </ul>
                </div>

                {/* Column 3: ACCOUNTING & BOOKKEEPING TAXES */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-8 text-sm uppercase tracking-wide">
                    Accounting & Bookkeeping Taxes
                  </h3>
                  <ul className="space-y-1">
                    <MenuItem href="/services/bookkeeping" truncate>
                      Pro-BookKeeping Services (Small Business)
                    </MenuItem>
                    <MenuItem href="/services/business-banking" truncate>
                      Pro-BookKeeping Services (Medium Business)
                    </MenuItem>
                    <MenuItem href="/services/tax-filing" truncate>
                      Pro-Bookkeeping Services (Large Business)
                    </MenuItem>
                    <MenuItem href="/services/tax-filing">
                      Full-Year Reconciliation Services
                    </MenuItem>
                    <MenuItem href="/services/tax-filing" truncate>
                      Setting Up New Books In QBO/Xero Or Any ERP (charges
                      varies based on nature of work)
                    </MenuItem>
                    <MenuItem href="/services/tax-filing" truncate>
                      Financial Reporting - Reach Out For Pricing
                    </MenuItem>
                    <MenuItem href="/services/tax-filing" truncate>
                      Virtual CFO Services-Reach Out For Pricing
                    </MenuItem>
                    <MenuItem href="/services/tax-filing">
                      Payroll Taxes
                    </MenuItem>
                    <MenuItem href="/services/tax-filing">
                      Payroll Withholding Tax Filing
                    </MenuItem>
                    <MenuItem href="/services/tax-filing">
                      W2 & 1099 Filing
                    </MenuItem>
                    <MenuItem href="/services/tax-filing">
                      Tax Filing Services
                    </MenuItem>
                    <MenuItem href="/services/tax-filing" truncate>
                      Tax Filing Individual ( Non Resident) With ITIN
                    </MenuItem>
                    <MenuItem href="/services/tax-filing" truncate>
                      Company Tax Filing Vary Based On The Volume Of Business
                    </MenuItem>
                  </ul>
                </div>

                {/* Column 4: UK FORMATION & COMPLIANCE SERVICES */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">
                    UK FORMATION & COMPLIANCE SERVICES
                  </h3>
                  <ul className="space-y-1">
                    <MenuItem href="/services/website-builder">
                      UK LTD Formation
                    </MenuItem>
                    <MenuItem href="/services/domain-registration" truncate>
                      Simple Corporation Tax Return Filing (CT600)
                    </MenuItem>
                    <MenuItem href="/services/business-email" truncate>
                      Advance Corporation Tax Return Filing (CT600)
                    </MenuItem>
                    <MenuItem href="/services/logo-kit">
                      Registering Client For Selfassessment
                    </MenuItem>
                    <MenuItem href="/services/logo-kit" truncate>
                      Simple Self Assessment (SA100) Filing
                    </MenuItem>
                    <MenuItem href="/services/logo-kit" truncate>
                      Advance Self Assessment (SA100) Filing
                    </MenuItem>
                    <MenuItem href="/services/logo-kit" truncate>
                      Simple Annual Corporation Accounts Preparation
                    </MenuItem>
                    <MenuItem href="/services/logo-kit" truncate>
                      Complex Annual Corporation Tax Accounts Prepartion
                    </MenuItem>
                    <MenuItem href="/services/logo-kit">
                      Dormant Accounts Filing
                    </MenuItem>
                    <MenuItem href="/services/logo-kit">
                      Micro-Entity Accounts Filiing
                    </MenuItem>
                    <MenuItem href="/services/logo-kit">
                      Abridged Accounts Filing
                    </MenuItem>
                    <MenuItem href="/services/logo-kit">
                      Full Statutory Accounts Filing
                    </MenuItem>
                    <MenuItem href="/services/logo-kit">
                      Confirmation Statement Filing
                    </MenuItem>
                    <MenuItem href="/services/logo-kit">
                      VAT Registeration
                    </MenuItem>
                    <MenuItem href="/services/logo-kit">
                      VAT Return Filing
                    </MenuItem>
                    <MenuItem href="/services/logo-kit">
                      Tax Planning & Consulation On Zoom
                    </MenuItem>
                    <MenuItem href="/services/logo-kit" truncate>
                      Tax Budgeting & Taxation In Investment Appraisal
                    </MenuItem>
                    <MenuItem href="/services/logo-kit">
                      Company Registration
                    </MenuItem>
                    <MenuItem href="/services/logo-kit">
                      Initial Compliance After Formation
                    </MenuItem>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Guides & Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => router.push("/blog")}
              className={`flex items-center space-x-1 text-foreground hover:text-green-600 transition-colors ${
                activeDropdown === "guides"
                  ? "text-green-600 border-b-2 border-green-600"
                  : ""
              }`}
            >
              <span>Learning Center</span>
            </button>

            {false && (
              <div className="absolute top-full left-0 mt-2 w-[800px] max-h-[80vh] bg-white border rounded-lg shadow-lg p-6 grid grid-cols-4 gap-6 overflow-y-auto">
                {/* Column 1: PLAN YOUR BUSINESS */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">
                    PLAN YOUR BUSINESS
                  </h3>
                  <ul className="space-y-1">
                    <MenuItem href="/guides/llc-formation">
                      How to Start an LLC
                    </MenuItem>
                    <MenuItem href="/guides/incorporation">
                      How to Incorporate
                    </MenuItem>
                    <MenuItem href="/guides/s-corp">
                      How to File an S Corp
                    </MenuItem>
                    <MenuItem href="/guides/start-business">
                      How to Start a Business
                    </MenuItem>
                    <MenuItem href="/guides/compare-entities">
                      Compare Business Entities
                    </MenuItem>
                    <MenuItem href="/guides/business-ideas">
                      Business Ideas
                    </MenuItem>
                  </ul>
                </div>

                {/* Column 2: GROW YOUR BUSINESS */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">
                    GROW YOUR BUSINESS
                  </h3>
                  <ul className="space-y-1">
                    <MenuItem href="/guides/marketing-tips">
                      Marketing Tips
                    </MenuItem>
                    <MenuItem href="/guides/after-llc">
                      Steps After Forming an LLC
                    </MenuItem>
                    <MenuItem href="/guides/business-cards">
                      Business Card Design
                    </MenuItem>
                    <MenuItem href="/guides/small-business-grants">
                      Small Business Grants
                    </MenuItem>
                    <MenuItem href="/guides/small-business-loans">
                      Small Business Loans
                    </MenuItem>
                    <MenuItem href="/guides/funding-llc">
                      Funding Your LLC
                    </MenuItem>
                  </ul>
                </div>

                {/* Column 3: RUN YOUR BUSINESS */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">
                    RUN YOUR BUSINESS
                  </h3>
                  <ul className="space-y-1">
                    <MenuItem href="/guides/hiring">Guide to Hiring</MenuItem>
                    <MenuItem href="/guides/insurance">
                      Guide to SMB Insurance
                    </MenuItem>
                    <MenuItem href="/guides/webinars">Webinars</MenuItem>
                    <MenuItem href="/guides/llc-tax-writeoffs">
                      LLC Tax Write-Offs
                    </MenuItem>
                    <MenuItem href="/guides/llc-tax-classification">
                      LLC Tax Classification
                    </MenuItem>
                  </ul>
                </div>

                {/* Column 4: FREE BUSINESS TOOLS */}
                <div>
                  <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">
                    FREE BUSINESS TOOLS
                  </h3>
                  <ul className="space-y-1">
                    <MenuItem href="/tools/s-corp-calculator">
                      S Corp Savings Calculator
                    </MenuItem>
                    <MenuItem href="/tools/entity-quiz">
                      Entity Type Quiz
                    </MenuItem>
                    <MenuItem href="/tools/break-even-calculator">
                      Break Even Calculator
                    </MenuItem>
                    <MenuItem href="/tools/business-name-generator">
                      Business Name Generator
                    </MenuItem>
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
              <span>Get To Know Us</span>
              {activeDropdown === "about" ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>

            {activeDropdown === "about" && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg p-4">
                <ul className="space-y-1">
                  <MenuItem href="/about">About Us</MenuItem>
                  <MenuItem href="/contact">Contact Us</MenuItem>
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

          <Button
            variant="ghost"
            className="text-gray-600 hover:text-green-600"
            onClick={() => router.push("/auth/login2")}
          >
            Log In
          </Button>

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
                Learning Center
              </h3>
              <div className="pl-4 space-y-2">
                <Link
                  href="/blog"
                  className="block text-sm text-gray-600 hover:text-green-600"
                >
                  Visit our Blog
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
