const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-orange mb-4">Source Thread</h2>
          <p className="text-sm">
            Sharing insights, tutorials, and stories about web development and technology.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-orange-500">Home</a></li>
            <li><a href="/categories" className="hover:text-orange-500">Categories</a></li>
            <li><a href="/about" className="hover:text-orange-500">About</a></li>
            <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500">Twitter</a></li>
            <li><a href="#" className="hover:text-orange-500">LinkedIn</a></li>
            <li><a href="#" className="hover:text-orange-500">GitHub</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-3">Get the latest posts delivered to your inbox.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-orange-500 text-white rounded-r-md hover:bg-orange-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Source Thread. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
