import logo2 from "../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo2} alt="" className="w-8 h-8" />
              <span className="font-bold text-gray-900">
                Dev <span className="text-pink-600">Stack</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex gap-4 text-sm text-gray-600">
              <a href="https://github.com/AoyonChowdhury" target="_blank" rel="noreferrer" className="hover:text-gray-900">
                GitHub
              </a>
              <a href="./Banner.tsx" className="hover:text-gray-900">
                Twitter
              </a>
              <a href="https://www.linkedin.com/in/aoyon-chowdhury-8a336b335/ " target="_blank" rel="noreferrer" className="hover:text-gray-900">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-4">
              Product
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <a href="./Navbar.tsx" className="hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="./TechnologyCards.tsx" className="hover:text-gray-900">
                  Technologies
                </a>
              </li>
              <li>
                <a href="./Banner.tsx" className="hover:text-gray-900">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-4">
              Legal
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex justify-between items-center text-sm text-gray-500">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
