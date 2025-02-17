const Footer = () => {
  return (
    <div className="bottom-0 bg-gray-900 min-h-16 w-full">
      <div className="container mx-auto px-4">
        <footer className="text-white py-8">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company Info */}
              <div>
                <h2 className="text-lg font-semibold">About Us</h2>
                <p className="text-sm text-gray-400 mt-2">
                  Your one-stop shop for quality products at unbeatable prices.
                  Shop with confidence!
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h2 className="text-lg font-semibold">Quick Links</h2>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-gray-200">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-200">
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-200">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-200">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-lg font-semibold">Contact Us</h2>
                <p className="text-sm text-gray-400 mt-2">
                  📍 123 Ecom Street, NY, USA
                </p>
                <p className="text-sm text-gray-400">
                  📧 support@ecomstore.com
                </p>
                <p className="text-sm text-gray-400">📞 +1 234 567 890</p>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
              &copy; {new Date().getFullYear()} EcomStore. All Rights Reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
