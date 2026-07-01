function Updates() {
  const updates = [
    {
      title: "Odd Semester Examination",
      date: "Coming Soon",
      status: "Upcoming",
    },
    {
      title: "Result Declaration",
      date: "Coming Soon",
      status: "Pending",
    },
    {
      title: "University Circulars",
      date: "Regular Updates",
      status: "Live",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-black text-slate-800 mb-3">
          📢 AKTU Updates
        </h1>

        <p className="text-slate-600 mb-10 text-lg">
          Stay informed with the latest AKTU announcements.
        </p>

        <div className="grid gap-6">

          {updates.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center"
            >
              <div>
                <h2 className="text-2xl font-bold">
                  {item.title}
                </h2>

                <p className="text-slate-500 mt-2">
                  {item.date}
                </p>
              </div>

              <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
                {item.status}
              </span>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Updates;