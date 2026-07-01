import { useState } from "react";
import { Link } from "react-router-dom";

import branchesData from "../data/branchesData";
import subjectsData from "../data/subjectsData";
import papersData from "../data/papersData";

function Papers() {
  const [course, setCourse] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-slate-800">
            Previous Year Papers
          </h1>

          <p className="text-slate-500 mt-3 text-lg">
            Select your Course, Branch, Semester and Subject
          </p>
        </div>

        {/* Filters */}
        <div className="grid md:grid-cols-4 gap-6">

          {/* Course */}
          <select
            className="p-4 rounded-xl border bg-white"
            value={course}
            onChange={(e) => {
              setCourse(e.target.value);
              setBranch("");
              setSemester("");
              setSubject("");
            }}
          >
            <option value="">Select Course</option>

            {Object.keys(branchesData).map((courseName) => (
              <option key={courseName} value={courseName}>
                {courseName}
              </option>
            ))}
          </select>

          {/* Branch */}
          <select
            className="p-4 rounded-xl border bg-white"
            value={branch}
            onChange={(e) => {
              setBranch(e.target.value);
              setSemester("");
              setSubject("");
            }}
            disabled={!course}
          >
            <option value="">Select Branch</option>

            {course &&
              branchesData[course].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
          </select>

          {/* Semester */}
          <select
            className="p-4 rounded-xl border bg-white"
            value={semester}
            onChange={(e) => {
              setSemester(e.target.value);
              setSubject("");
            }}
            disabled={!branch}
          >
            <option value="">Select Semester</option>

            {Object.keys(subjectsData).map((sem) => (
              <option key={sem} value={sem}>
                {sem}
              </option>
            ))}
          </select>

          {/* Subject */}
          <select
            className="p-4 rounded-xl border bg-white"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            disabled={!semester}
          >
            <option value="">Select Subject</option>

            {semester &&
              subjectsData[semester]?.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
          </select>

        </div>

        {/* Papers */}
        {subject && (
          <div className="mt-14">

            <h2 className="text-3xl font-bold mb-8">
              {subject} Previous Year Papers
            </h2>

            {papersData[subject] ? (
              <div className="grid md:grid-cols-2 gap-6">

                {papersData[subject].map((paper, index) => (

                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center hover:shadow-xl transition"
                  >
                    <div>
                      <h3 className="font-bold text-xl text-slate-800">
                        {subject}
                      </h3>

                      <p className="text-slate-500 mt-1">
                        {paper}
                      </p>
                    </div>

                    <a
                      href={`/pdfs/${paper}`}
                      download
                      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition"
                    >
                      Download
                    </a>

                  </div>

                ))}

              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-md p-10 text-center mt-6">

                <h3 className="text-2xl font-bold">
                  No Papers Found
                </h3>

                <p className="text-slate-500 mt-3">
                  Papers for this subject will be uploaded soon.
                </p>

              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}

export default Papers;