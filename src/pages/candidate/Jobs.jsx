import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllJobs } from "../../services/jobService";
import { useAuth } from "../../hooks/useAuth";
import { applyForJob } from "../../services/applicationService";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getAllJobs();
        setJobs(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load jobs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleApply = async (jobId) => {
  if (!user) {
    navigate("/login");
    return;
  }

  try {
    await applyForJob(jobId);

    alert("Application submitted successfully!");
  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.message ||
      "Failed to apply for this job."
    );
  }
};

  if (loading) {
    return (
      <div className="bg-slate-950 min-h-screen flex items-center justify-center">
        <p className="text-slate-400 text-lg">Loading jobs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-slate-950 min-h-screen flex items-center justify-center">
        <p className="text-red-400 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <span className="inline-block px-4 py-1.5 rounded-full border border-slate-700 text-slate-400 text-sm mb-6">
          {jobs.length} {jobs.length === 1 ? "Opening" : "Openings"}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
          Available Jobs
        </h1>
        <p className="text-slate-400 text-lg">
          Explore roles from companies actively hiring right now.
        </p>
      </section>

      {/* Job grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        {jobs.length === 0 ? (
          <div className="border border-dashed border-slate-800 rounded-xl py-20 text-center">
            <p className="text-slate-500">No jobs posted yet. Check back soon.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {jobs.map((job) => (
              <div
                key={job._id}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition flex flex-col"
              >
                <h2 className="text-xl font-semibold mb-1">{job.title}</h2>
                <p className="text-blue-500 text-sm font-medium mb-4">
                  {job.company}
                </p>

                <div className="flex flex-col gap-2 text-sm text-slate-400 mb-4">
                  <span className="flex items-center gap-2">
                    <span>📍</span> {job.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <span>💰</span> PKR {job.salary.toLocaleString()}
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {job.description}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    {job.recruiter?.name || "Unknown"}
                  </span>
                  <button
                    onClick={() => handleApply(job._id)}
                    className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-5 py-2 rounded-lg font-medium transition"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Jobs;