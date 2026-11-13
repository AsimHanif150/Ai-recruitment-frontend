import { useState, useEffect } from "react";
import Applicantcard from "../../Components/recruiter/Applicantcard";
import { getRecruiterApplicants } from "../../services/applicationService";

function Applicants() {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchApplicants();
  }, []);

  const fetchApplicants = async () => {
    try {
      setLoading(true);
      const data = await getRecruiterApplicants();
      setApplicants(data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to load applicants.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <p className="text-slate-400 text-lg">Loading Applicants...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="mb-10">
        <span className="inline-flex items-center rounded-full border border-slate-700 px-4 py-1 text-sm text-slate-400">
          Applicants
        </span>
        <h1 className="text-4xl font-bold mt-4">All Applicants</h1>
        <p className="text-slate-400 mt-2">
          Review candidates who have applied to any of your job postings.
        </p>
      </div>

      {applicants.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-2">No Applicants Yet</h2>
          <p className="text-slate-400">
            No candidates have applied to your jobs yet.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {applicants.map((application) => (
            <Applicantcard
              key={application._id}
              applicant={{
                id: application.candidate?._id,
                name: application.candidate?.name,
                email: application.candidate?.email,
                phone: application.candidate?.phone,
                skills: application.candidate?.skills,
                experience: application.candidate?.experience,
                appliedFor: application.job?.title,
                appliedOn: new Date(application.createdAt).toLocaleDateString(),
                status: application.status,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Applicants;