import Link from "next/link"
import { Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-700 to-purple-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-2">Vibeyoursaas</h3>
            <p className="text-purple-200 text-sm">Helping Saas founders launch smarter and scales faster</p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <Link href="#" className="hover:text-purple-300 transition">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="hover:text-purple-300 transition">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-purple-300 transition">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* About Column */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-purple-200 hover:text-white transition">
                  Company
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-200 hover:text-white transition">
                  Founder
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-purple-200 hover:text-white transition">
                  Growth Plans
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-200 hover:text-white transition">
                  Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-purple-200 hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-200 hover:text-white transition">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-purple-200 hover:text-white transition">
                  Book a Call
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-200 hover:text-white transition">
                  Email Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-purple-600 pt-12 mb-12">
          <h4 className="font-semibold mb-4">Subscribe to our Newsletter</h4>
          <div className="flex gap-3 max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-purple-600 text-white placeholder-purple-300 outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button className="px-6 py-2 bg-purple-400 text-purple-900 font-semibold rounded-lg hover:bg-purple-300 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-purple-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-purple-200 text-sm">© 2025 VibeYourSaas. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-purple-200 hover:text-white text-sm transition">
              Privacy Policy
            </Link>
            <Link href="#" className="text-purple-200 hover:text-white text-sm transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
