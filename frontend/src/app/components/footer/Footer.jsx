// components/layout/Footer.jsx
import Link from "next/link";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineArrowRight,
} from "react-icons/hi";
import { RiLeafLine, RiSparklingLine } from "react-icons/ri";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */
const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "Combos", href: "/combos" },
  { label: "Build Your Combo", href: "/combo-builder" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const POPULAR_CATEGORIES = [
  { label: "চাল", href: "/categories/rice" },
  { label: "ডাল", href: "/categories/lentils" },
  { label: "তেল", href: "/categories/oil" },
  { label: "মসলা", href: "/categories/spices" },
  { label: "চিনি", href: "/categories/sugar" },
  { label: "লবণ", href: "/categories/salt" },
  { label: "আটা ও ময়দা", href: "/categories/flour" },
  { label: "অন্যান্য", href: "/categories/others" },
];

const SUPPORT_LINKS = [
  { label: "Contact Us", href: "/contact" },
  { label: "Order Tracking", href: "/order-tracking" },
  { label: "Delivery Information", href: "/delivery-info" },
  { label: "Return & Refund Policy", href: "/return-refund" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "YouTube", href: "https://youtube.com", icon: FaYoutube },
  { label: "WhatsApp", href: "https://wa.me/8801000000000", icon: FaWhatsapp },
];

/* ──────────────────────────────────────────────
   Sub-components
   ────────────────────────────────────────────── */

/** Brand column: logo, name, description, social */
function FooterBrand() {
  return (
    <div className="max-w-sm">
      <Link
        href="/"
        className="group inline-flex items-center gap-2.5 transition-opacity hover:opacity-90"
        aria-label="Ghorer Bazar – Home"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange text-white shadow-sm transition-transform group-hover:scale-105">
          <RiLeafLine className="h-5 w-5" />
        </span>
        <span className="flex flex-col leading-none">
          <span className="font-poppins text-lg font-bold tracking-tight text-dark-blue">
            Ghorer Bazar
          </span>
          <span className="font-inter text-[10px] font-medium uppercase tracking-widest text-orange">
            নিত্যপ্রয়োজনীয়
          </span>
        </span>
      </Link>

      <p className="mt-5 font-inter text-sm leading-relaxed text-dark-blue/70">
        আপনার দৈনন্দিন প্রয়োজনীয় পণ্যের বিশ্বস্ত অনলাইন ঠিকানা।
      </p>
      <p className="mt-3 font-inter text-sm leading-relaxed text-dark-blue/70">
        নিজের মতো করে তৈরি করুন আপনার{" "}
        <span className="font-semibold text-orange">Grocery Combo</span>।
      </p>

      <div className="mt-6 flex items-center gap-2.5">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-dark-blue/70 shadow-sm transition hover:bg-orange hover:text-white"
          >
            <social.icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  );
}

/** Reusable link column */
function FooterLinkColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-poppins text-sm font-semibold uppercase tracking-wider text-dark-blue">
        {title}
      </h3>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex items-center font-inter text-sm text-dark-blue/70 transition hover:text-orange"
            >
              <span className="transition-transform group-hover:translate-x-0.5">
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Contact information */
function FooterContact() {
  return (
    <div>
      <h3 className="font-poppins text-sm font-semibold uppercase tracking-wider text-dark-blue">
        Contact
      </h3>
      <ul className="mt-4 flex flex-col gap-4">
        <li>
          <a
            href="tel:+8801000000000"
            className="group flex items-start gap-3 transition"
          >
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-orange shadow-sm transition group-hover:bg-orange group-hover:text-white">
              <HiOutlinePhone className="h-4 w-4" />
            </span>
            <div>
              <p className="font-inter text-[11px] uppercase tracking-wider text-dark-blue/50">
                Phone
              </p>
              <p className="font-inter text-sm text-dark-blue/80 transition group-hover:text-orange">
                +880 1XXXXXXXXX
              </p>
            </div>
          </a>
        </li>

        <li>
          <a
            href="mailto:support@example.com"
            className="group flex items-start gap-3 transition"
          >
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-orange shadow-sm transition group-hover:bg-orange group-hover:text-white">
              <HiOutlineMail className="h-4 w-4" />
            </span>
            <div>
              <p className="font-inter text-[11px] uppercase tracking-wider text-dark-blue/50">
                Email
              </p>
              <p className="font-inter text-sm text-dark-blue/80 transition group-hover:text-orange">
                support@example.com
              </p>
            </div>
          </a>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-orange shadow-sm">
            <HiOutlineLocationMarker className="h-4 w-4" />
          </span>
          <div>
            <p className="font-inter text-[11px] uppercase tracking-wider text-dark-blue/50">
              Address
            </p>
            <p className="font-inter text-sm leading-relaxed text-dark-blue/80">
              Your Business Address, Bangladesh
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

/** Highlighted Combo CTA */
function FooterCTA() {
  return (
    <div className="mt-12 border-t border-light-cream pt-10 lg:mt-14">
      <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
        <div>
          <h3 className="flex items-center gap-2 font-poppins text-xl font-bold text-dark-blue sm:text-2xl">
            <RiSparklingLine className="h-5 w-5 text-orange" />
            নিজের Combo তৈরি করুন
          </h3>
          <p className="mt-2 max-w-md font-inter text-sm leading-relaxed text-dark-blue/70">
            আপনার প্রয়োজন অনুযায়ী পণ্য বেছে নিয়ে নিজের Grocery Combo তৈরি করুন।
          </p>
        </div>
        <Link
          href="/combo-builder"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3.5 font-poppins text-sm font-semibold text-white shadow-sm transition hover:bg-orange/90 hover:shadow-md active:scale-[0.98] sm:w-auto sm:shrink-0"
        >
          Build Your Combo
          <HiOutlineArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}

/** Bottom copyright bar */
function FooterBottom() {
  return (
    <div className="mt-10 border-t border-light-cream py-6">
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-inter text-xs text-dark-blue/60 sm:text-sm">
          © 2026 Your Brand. All rights reserved.
        </p>
        <p className="font-inter text-xs text-dark-blue/60 sm:text-sm">
          Made with <span className="text-orange">❤️</span> in Bangladesh
        </p>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Main Footer
   ────────────────────────────────────────────── */
export default function Footer() {
  return (
    <footer className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 sm:pt-16 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <FooterBrand />
          </div>

          {/* Quick Links */}
          <FooterLinkColumn title="Quick Links" links={QUICK_LINKS} />

          {/* Popular Categories */}
          <FooterLinkColumn
            title="জনপ্রিয় ক্যাটাগরি"
            links={POPULAR_CATEGORIES}
          />

          {/* Customer Support */}
          <FooterLinkColumn title="Customer Support" links={SUPPORT_LINKS} />

          {/* Contact */}
          <FooterContact />
        </div>

        {/* CTA */}
        <FooterCTA />

        {/* Bottom bar */}
        <FooterBottom />
      </div>
    </footer>
  );
}
