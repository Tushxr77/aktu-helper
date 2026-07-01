import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold">
              AKTU <span className="text-blue-500">Helper</span>
            </h2>

            <p className="text-slate-400 mt-4 leading-7">
              A student-driven platform providing Previous Year Papers,
              Notes, Syllabus, and important AKTU updates — all in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>

              <Link to="/papers" className="hover:text-blue-400">
                Papers
              </Link>

              <Link to="/upload" className="hover:text-blue-400">
                Upload
              </Link>

              <Link to="/about" className="hover:text-blue-400">
                About
              </Link>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Connect With Me
            </h3>

            <div className="flex flex-col gap-3">

              <a
                href="https://github.com/Tushxr77"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/tushar-sharma-022673302/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400"
              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/tushxr.77/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400"
              >
                Instagram
              </a>

            </div>
          </div>

        </div>

        <hr className="my-10 border-slate-700" />

        <div className="text-center text-slate-400">
          © 2026 AKTU Helper • Designed & Developed by
          <span className="text-white font-semibold"> Tushar Sharma</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;