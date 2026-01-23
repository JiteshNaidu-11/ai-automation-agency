import { useEffect, useState } from "react";

export default function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    const res = await fetch("http://localhost:5000/submissions");
    const json = await res.json();
    setData(json.submissions || []);
  };

  const deleteSubmission = async (_id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this submission?"
    );
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:5000/submissions/${_id}`, {
        method: "DELETE",
      });

      // ✅ delete ONLY that row
      setData((prev) => prev.filter((item) => item._id !== _id));
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Contact Submissions</h1>

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Message</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, i) => (
            <tr key={item._id} className="text-center">
              <td className="border p-2">{i + 1}</td>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.email}</td>
              <td className="border p-2">{item.message}</td>
              <td className="border p-2">{item.submittedAt}</td>
              <td className="border p-2">
                <button
                  onClick={() => deleteSubmission(item._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {data.length === 0 && (
            <tr>
              <td colSpan="6" className="p-4 text-gray-500 text-center">
                No submissions found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
