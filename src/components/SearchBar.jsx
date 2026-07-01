import { useState } from "react";
import { Link } from "react-router-dom";
import { subjectsData } from "../data/subjectsData";

function SearchBar() {
  const [search, setSearch] = useState("");

  // Collect all subjects into one array
  const allSubjects = Object.values(subjectsData).flat();

  // Remove duplicates
  const uniqueSubjects = [...new Set(allSubjects)];

  const filteredSubjects = uniqueSubjects.filter((subject) =>
    subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-xl mx-auto">

      <input
        type="text"
        placeholder="Search any subject..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-2xl border border-slate-300 px-5 py-4 text-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
      />

      {search && (
        <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border z-50 max-h-80 overflow-y-auto">

          {filteredSubjects.length > 0 ? (
            filteredSubjects.map((subject) => (
              <Link
                key={subject}
                to={`/subject/${subject}`}
                onClick={() => setSearch("")}
                className="block px-5 py-4 hover:bg-blue-50 transition"
              >
                {subject}
              </Link>
            ))
          ) : (
            <p className="p-5 text-slate-500">
              No subject found.
            </p>
          )}

        </div>
      )}
    </div>
  );
}

export default SearchBar;