import Papa from 'papaparse';
import { useEffect, useState } from 'react';

export default function CSVTable({ uploadedFile, resetUpload }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (uploadedFile) {
      setLoading(true);
      Papa.parse(uploadedFile, {
        header: true,
        complete: (results) => {
          setData(results.data);
          setLoading(false);
        },
      });
    }
  }, [uploadedFile]);

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value?.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div>
      {loading && <div className="text-center text-primary">Loading...</div>}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Search CSV Data:</h2>
        <input
          type="text"
          placeholder="Search with any keyword..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-md p-2 w-2/3 text-black"
        />
        <button
          onClick={resetUpload}
          className="bg-primary text-accent p-2 rounded-md px-6 py-3"
        >
          Clear & Upload Another
        </button>
      </div>
      <div className="overflow-auto max-w-full">
        <table className="table-auto w-full border-collapse border border-primary">
          <thead>
            <tr>
              {data[0] &&
                Object.keys(data[0]).map((key) => (
                  <th key={key} className="border border-primary p-2">
                    {key}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => (
              <tr key={idx}>
                {Object.values(row).map((val, i) => (
                  <td key={i} className="border border-primary p-2">
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
