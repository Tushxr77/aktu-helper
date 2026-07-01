import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            

            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 Built by Tushar Sharma
            </span>

            <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold leading-tight">
              Everything an{" "}
              <span className="text-blue-600">
                AKTU Student
              </span>{" "}
              Needs in One Place.
            </h1>

            <p className="mt-8 text-lg text-slate-600 leading-8">
              Previous Year Papers, Notes, Syllabus, Practical Files,
              Lab Manuals, University Updates and much more.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/papers"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Explore Papers
              </Link>

              <Link
                to="/upload"
                className="border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition"
              >
                Upload Resources
              </Link>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-700 rounded-3xl p-10 shadow-xl">
              <img
                src="https://illustrations.popsy.co/blue/studying.svg"
                alt="Student"
                className="w-full"
              />
            </div>
          </div>

        </div>
      </header>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow p-8 text-center">
            <h2 className="text-4xl font-bold text-blue-600">5000+</h2>
            <p className="mt-2 text-slate-600">
              Students Helped
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-8 text-center">
            <h2 className="text-4xl font-bold text-indigo-600">1000+</h2>
            <p className="mt-2 text-slate-600">
              Previous Papers
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-8 text-center">
            <h2 className="text-4xl font-bold text-pink-600">150+</h2>
            <p className="mt-2 text-slate-600">
              Subjects
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-8 text-center">
            <h2 className="text-4xl font-bold text-green-600">100%</h2>
            <p className="mt-2 text-slate-600">
              Free Resources
            </p>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">
            Why Choose AKTU Helper?
          </h2>

          <p className="mt-5 text-slate-600 text-lg max-w-3xl mx-auto">
            Everything an AKTU student needs from first semester to final year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <Link
            to="/papers"
            className="bg-white rounded-3xl shadow hover:shadow-xl p-8 transition hover:-translate-y-2"
          >
            <div className="text-5xl mb-5">📄</div>

            <h3 className="text-2xl font-bold mb-3">
              Previous Papers
            </h3>

            <p className="text-slate-600">
              Download semester-wise previous year papers.
            </p>
          </Link>

          <Link
            to="/notes"
            className="bg-white rounded-3xl shadow hover:shadow-xl p-8 transition hover:-translate-y-2"
          >
            <div className="text-5xl mb-5">📚</div>

            <h3 className="text-2xl font-bold mb-3">
              Study Notes
            </h3>

            <p className="text-slate-600">
              Access notes and complete study material.
            </p>
          </Link>

          <Link
            to="/updates"
            className="bg-white rounded-3xl shadow hover:shadow-xl p-8 transition hover:-translate-y-2"
          >
            <div className="text-5xl mb-5">📢</div>

            <h3 className="text-2xl font-bold mb-3">
              AKTU Updates
            </h3>

            <p className="text-slate-600">
              Latest notices, exam dates and university circulars.
            </p>
          </Link>

          <Link
            to="/upload"
            className="bg-white rounded-3xl shadow hover:shadow-xl p-8 transition hover:-translate-y-2"
          >
            <div className="text-5xl mb-5">🤝</div>

            <h3 className="text-2xl font-bold mb-3">
              Community
            </h3>

            <p className="text-slate-600">
              Upload papers and notes to help other students.
            </p>
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-10 text-center">
        <h3 className="text-2xl font-bold">
          AKTU Helper
        </h3>

        <p className="mt-3 text-slate-600">
          Crafted with ❤️ by <strong>Tushar Sharma</strong>
        </p>

        <p className="mt-4 text-sm text-slate-500">
          © 2026 All Rights Reserved
        </p>
      </footer>

    </div>
  );
}

export default Home;