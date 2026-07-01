import founderImage from "../assets/tushar.jpg";

function About() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-black text-slate-800 mb-4">
            About AKTU Helper
          </h1>

          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-8">
            AKTU Helper is a student-focused platform designed to help students
            access Previous Year Papers, Notes, Resources, and important
            university updates in one place.
          </p>
        </div>

        {/* Founder Card */}
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">

            <img
              src={founderImage}
              alt="Tushar Sharma"
              className="w-52 h-52 object-cover rounded-3xl shadow-lg"
            />

            <div>
              <h2 className="text-3xl font-bold mb-2">
                Tushar Sharma
              </h2>

              <p className="text-slate-600 leading-7 mb-5">
                Passionate developer and AKTU student building digital
                platforms to genuinely help students access quality
                resources, PYQs, notes, and university updates in one place.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 flex-wrap">

                <a
                  href="https://www.linkedin.com/in/tushar-sharma-022673302/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:scale-105 transition"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/Tushxr77"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slate-900 text-white px-5 py-3 rounded-xl font-semibold hover:scale-105 transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.instagram.com/tushxr.77/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-pink-600 text-white px-5 py-3 rounded-xl font-semibold hover:scale-105 transition"
                >
                  Instagram
                </a>

              </div>
            </div>

          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-blue-600">
              PYQs
            </h3>

            <p className="text-slate-600 leading-7">
              Access organized previous year papers semester-wise
              and subject-wise for better exam preparation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-indigo-600">
              Notes
            </h3>

            <p className="text-slate-600 leading-7">
              Quality handwritten and digital notes shared by
              students to help the community learn faster.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-pink-600">
              Community
            </h3>

            <p className="text-slate-600 leading-7">
              Students can contribute resources, updates,
              and important materials to help others grow.
            </p>
          </div>

        </div>

        {/* Vision Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-10 rounded-3xl mt-14 shadow-xl">

          <h2 className="text-4xl font-black mb-5">
            Vision
          </h2>

          <p className="text-slate-300 text-lg leading-8">
            The vision of AKTU Helper is to create a centralized
            platform where AKTU students can easily access study
            materials, previous year papers, notes, and university
            updates without wasting time searching across multiple platforms.
          </p>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h2 className="text-5xl font-black text-blue-600">
              100+
            </h2>

            <p className="text-slate-600 mt-3 font-medium">
              Study Resources
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h2 className="text-5xl font-black text-indigo-600">
              500+
            </h2>

            <p className="text-slate-600 mt-3 font-medium">
              Students Reached
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h2 className="text-5xl font-black text-pink-600">
              24/7
            </h2>

            <p className="text-slate-600 mt-3 font-medium">
              Student Support
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;