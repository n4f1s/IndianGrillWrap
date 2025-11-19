import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle, Heart } from "lucide-react"

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50 text-slate-700">
            <div className="wrapper grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 text-center sm:text-left gap-4 sm:gap-10 py-6 sm:py-10">
                {/* Brand & About */}
                <section aria-labelledby="footer-brand">
                    <div className="flex justify-center items-center sm:-mt-8">
                        <Image
                            src="/logo.png"
                            alt="Indian Grill Wrap & Go logo"
                            width={210}
                            height={40}
                        />
                    </div>
                    <p className="text-sm text-slate-600 text-center">
                        Experience the authentic taste of India – fresh, flavorful, and
                        crafted with passion.
                    </p>
                </section>

                {/* Quick links */}
                <nav aria-labelledby="footer-quick-links">
                    <h3
                        id="footer-quick-links"
                        className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-900"
                    >
                        Quick Links
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/menu" className="transition hover:text-primary">
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="transition hover:text-primary">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="transition hover:text-primary">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/careers" className="transition hover:text-primary">
                                Careers
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Information */}
                <nav aria-labelledby="footer-info">
                    <h3
                        id="footer-info"
                        className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-900"
                    >
                        Information
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/terms" className="transition hover:text-primary">
                                Terms &amp; Conditions
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy" className="transition hover:text-primary">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/cookies" className="transition hover:text-primary">
                                Cookies Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/accessibility"
                                className="transition hover:text-primary"
                            >
                                Accessibility
                            </Link>
                        </li>
                    </ul>
                </nav>


                {/* Contact & social */}
                <section
                    aria-labelledby="footer-contact"
                    className="text-center sm:text-left"
                >
                    <h3
                        id="footer-contact"
                        className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-900"
                    >
                        Contact Us
                    </h3>

                    <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex flex-col items-center gap-1 sm:flex-row sm:items-start sm:gap-2">
                            <MapPin className="mt-0.5 size-4 text-primary" />
                            <span>595 Washington Ave, Brooklyn, NY 11238</span>
                        </li>
                        <li className="flex flex-col items-center gap-1 sm:flex-row sm:items-center sm:gap-2">
                            <Phone className="size-4 text-primary" />
                            <a href="tel:+17188578100" className="hover:text-primary">
                                (718) 857-8100
                            </a>
                        </li>
                        <li className="flex flex-col items-center gap-1 sm:flex-row sm:items-center sm:gap-2">
                            <Mail className="size-4 text-primary" />
                            <a
                                href="mailto:info@indiangrillwrap.com"
                                className="hover:text-primary"
                            >
                                info@indiangrillwrap.com
                            </a>
                        </li>
                    </ul>

                    <div className="mt-4 flex justify-center gap-3 sm:justify-start">
                        <a
                            href="https://www.facebook.com/yourpage"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit us on Facebook"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-primary hover:text-white"
                        >
                            <Facebook className="size-4" aria-hidden="true" />
                        </a>
                        <a
                            href="https://www.instagram.com/yourhandle"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit us on Instagram"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-primary hover:text-white"
                        >
                            <Instagram className="size-4" aria-hidden="true" />
                        </a>
                        <a
                            href="https://wa.me/17188578100"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Chat with us on WhatsApp"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-primary hover:text-white"
                        >
                            <MessageCircle className="size-4" aria-hidden="true" />
                        </a>
                    </div>
                </section>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-200 mt-6">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2025 Indian Grill Wrap & Go. All rights reserved.</p>
                    <p>Made with ❤️ in Brooklyn</p>
                </div>
            </div>

        </footer>
    )
}
