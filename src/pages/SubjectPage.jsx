import { useParams, Link } from "react-router-dom";

function SubjectPage() {
  const { name } = useParams();

  const resources = [
    {
      title: "Previous Year Papers",
      icon: "📄",
      color: "bg-blue-500",
      path: `/subject/${name}/papers`,
    },
    {
      title: "Notes",
      icon: "📚",
      color: "bg-green-500",
      path: "#",
    },
    {
      title: "Syllabus",
      icon: "📖",
      color: "bg-purple-500",
      path: "#",
    },
    {
      title: "Practical Files",
      icon: "🧪",
      color: "bg-orange-500",
      path: "#",
    },
    {
      title: "Assignments",
      icon: "📝",
      color: "bg-pink-500",
      path: "#",
    },
    {
      title: "Lab Manuals",
      icon: "💻",
      color: "bg-cyan-500",
      path: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-white shadow-xl mb-12">
          <h1 className="text-5xl font-black">{name}</h1>

          <p className="mt-3 text-lg text-blue-100">
            Select the resource you want to access.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {resources.map((resource, index) => (
            <Link
              key={index}
              to={resource.path}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`w-16 h-16 ${resource.color} rounded-2xl flex items-center justify-center text-3xl text-white mb-6`}
              >
                {resource.icon}
              </div>

              <h2 className="text-2xl font-bold text-slate-800">
                {resource.title}
              </h2>

              <p className="text-slate-500 mt-3">
                Open {resource.title.toLowerCase()} for {name}.
              </p>

              <div className="mt-6 text-blue-600 font-semibold">
                Open →
              </div>
            </Link>
          ))}

        </div>

      </div>
    </div>
  );
}

export default SubjectPage;