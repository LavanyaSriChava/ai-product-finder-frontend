import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer
      className="
      border-t border-slate-800
      bg-slate-950
      mt-24
    "
    >
      <div
  className="
  max-w-7xl
  mx-auto
  px-6 md:px-10
  py-16
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-4
  gap-10
"
>
        {/* Brand */}

        <div>
          <h2
            className="
            text-2xl
            font-bold
            bg-gradient-to-r
            from-blue-400
            to-purple-500
            bg-clip-text
            text-transparent
          "
          >
            AI Product Finder
          </h2>

          <p className="text-slate-400 mt-4">
            Discover products using natural language
            powered by AI recommendations.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">

    <li>
      <Link
        to="/"
        className="
        text-slate-400
        hover:text-cyan-400
        transition-all
        duration-300
        "
      >
        Home
      </Link>
    </li>

    <li>
      <a
        href="#features"
        className="
        text-slate-400
        hover:text-cyan-400
        transition-all
        duration-300
        "
      >
        Features
      </a>
    </li>

    <li>
      <Link
        to="/login"
        className="
        text-slate-400
        hover:text-cyan-400
        transition-all
        duration-300
        "
      >
        Login
      </Link>
    </li>

    <li>
      <Link
        to="/register"
        className="
        text-slate-400
        hover:text-cyan-400
        transition-all
        duration-300
        "
      >
        Register
      </Link>
    </li>

  </ul>
        </div>

        {/* Platform */}

        <div>
          <h3 className="font-semibold mb-4">
            Platform
          </h3>

          <ul className="space-y-2 text-slate-400">
            <li>AI Recommendations</li>

            <li>Wishlist</li>

            <li>Search History</li>

            <li>Product Comparison</li>
          </ul>
        </div>

        {/* Contact */}

        <div>
  <h3 className="font-semibold mb-4">
    Contact
  </h3>

  <ul className="space-y-2">

    <li>
      <a
        href="https://github.com/lavanyasrichava"
        target="_blank"
        rel="noreferrer"
        className="
        text-slate-400
        hover:text-cyan-400
        transition-all
        duration-300
        "
      >
        GitHub
      </a>
    </li>

    <li>
      <a
        href="https://linkedin.com/in/lavanya-sri-chava-6b57a02a9"
        target="_blank"
        rel="noreferrer"
        className="
        text-slate-400
        hover:text-cyan-400
        transition-all
        duration-300
        "
      >
        LinkedIn
      </a>
    </li>

    <li>
      <a
        href="mailto:lavanya.chava728@gmail.com"
        className="
        text-slate-400
        hover:text-cyan-400
        transition-all
        duration-300
        "
      >
        Email
      </a>
    </li>

  </ul>
</div>
      </div>

      {/* Bottom Footer */}

      <div
        className="
        border-t border-slate-800
        text-center
        py-6
        text-slate-500
      "
      >
        © 2026 AI Product Finder • Built with React, Spring Boot & AI by Lavanya Chava
      </div>
    </footer>
  );
}

export default Footer;