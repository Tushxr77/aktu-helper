import { useParams } from "react-router-dom";
import papersData from "../data/papersData";

function PaperList() {
  const { name } = useParams();

  const papers = papersData[name] || [];

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-black mb-10">
          {name} Previous Year Papers
        </h1>

        {papers.length > 0 ? (

          <div className="space-y-5">

            {papers.map((paper, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl shadow p-6 flex justify-between items-center"
              >

                <div>

                  <h2 className="font-bold text-xl">
                    {paper}
                  </h2>

                </div>

                <a
                  href={`/pdfs/${paper}`}
                  download
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl"
                >
                  Download
                </a>

              </div>

            ))}

          </div>

        ) : (

          <div className="bg-white rounded-2xl shadow p-10 text-center">

            <h2 className="text-2xl font-bold">
              No Papers Available
            </h2>

          </div>

        )}

      </div>

    </div>
  );
}

export default PaperList;