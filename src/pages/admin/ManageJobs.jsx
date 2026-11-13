import { useState, useEffect } from "react";
import { getAllJobs, deleteJob } from "../../services/jobService";

function ManageJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const data = await getAllJobs();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteJob(id);
      setJobs(jobs.filter((job) => job._id !== id));
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  if (loading) {
    return <p>Loading jobs...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Jobs</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-sm text-gray-600">
            <tr>
              <th className="px-6 py-3">Job Title</th>
              <th className="px-6 py-3">Company</th>
              <th className="px-6 py-3">Posted By</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{job.title}</td>
                <td className="px-6 py-4 text-gray-500">{job.company}</td>
                <td className="px-6 py-4 text-gray-500">{job.recruiter?.name}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageJobs;