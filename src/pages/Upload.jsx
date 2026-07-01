function Upload() {
  return (
    <div className="min-h-screen bg-slate-100 p-10">

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-lg">

        <h1 className="text-5xl font-black text-slate-800 mb-4">
          Contribute Resources
        </h1>

        <p className="text-slate-500 mb-10 text-lg">
          Help AKTU students by uploading papers, notes, and important updates.
        </p>

        <div className="grid gap-6">

          {/* Resource Type */}
          <select className="p-4 rounded-2xl border border-slate-200">
            <option>Select Resource Type</option>
            <option>PYQ</option>
            <option>Notes</option>
            <option>Event</option>
            <option>News</option>
            <option>Syllabus</option>
          </select>

          {/* Course */}
          <select className="p-4 rounded-2xl border border-slate-200">
            <option>Select Course</option>
            <option>B.Tech</option>
            <option>BCA</option>
            <option>MCA</option>
          </select>

          {/* Branch */}
          <select className="p-4 rounded-2xl border border-slate-200">
            <option>Select Branch</option>
            <option>CSE</option>
            <option>IT</option>
            <option>ECE</option>
          </select>

          {/* Semester */}
          <select className="p-4 rounded-2xl border border-slate-200">
            <option>Select Semester</option>
            <option>1st Semester</option>
            <option>2nd Semester</option>
            <option>3rd Semester</option>
            <option>4th Semester</option>
          </select>

          {/* Subject */}
          <input
            type="text"
            placeholder="Enter Subject Name"
            className="p-4 rounded-2xl border border-slate-200"
          />

          {/* File Upload */}
          <input
            type="file"
            className="p-4 rounded-2xl border border-slate-200 bg-white"
          />

          {/* Contributor */}
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-2xl border border-slate-200"
          />

          {/* Submit Button */}
          <button className="bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition">
            Upload Resource
          </button>

        </div>

      </div>

    </div>
  );
}

export default Upload;