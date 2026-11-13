import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCandidateProfile } from "../../services/profileService";

function CandidateProfile() {
  const { id } = useParams();

  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCandidateProfile();
  }, [id]);

  const fetchCandidateProfile = async () => {
    try {
      setLoading(true);

      const data = await getCandidateProfile(id);

      setCandidate(data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to load candidate profile.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <p className="text-slate-400 text-lg">
          Loading Candidate Profile...
        </p>
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

  if (!candidate) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <p className="text-slate-400 text-lg">
          Candidate not found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
      {/* Header */}
      <div className="mb-10">
        <span className="inline-flex items-center rounded-full border border-slate-700 px-4 py-1 text-sm text-slate-400">
          Candidate Profile
        </span>

        <h1 className="text-4xl font-bold mt-4">
          Candidate Details
        </h1>

        <p className="text-slate-400 mt-2">
          Review the applicant's professional information before making a
          hiring decision.
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 border-b border-slate-800 pb-8">

          <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center text-5xl">
            👤
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              {candidate.name}
            </h2>

            <p className="text-slate-400 mt-2">
              {candidate.email}
            </p>
          </div>

        </div>

        {/* Information Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">

          <div className="bg-slate-800 rounded-xl p-5">
            <p className="text-slate-500 text-sm mb-2">
              Phone Number
            </p>

            <h3 className="text-xl font-semibold">
              {candidate.phone || "Not Available"}
            </h3>
          </div>

          <div className="bg-slate-800 rounded-xl p-5">
            <p className="text-slate-500 text-sm mb-2">
              Skills
            </p>

            <h3 className="text-xl font-semibold">
              {candidate.skills || "Not Available"}
            </h3>
          </div>

          <div className="md:col-span-2 bg-slate-800 rounded-xl p-5">
            <p className="text-slate-500 text-sm mb-2">
              Experience
            </p>

            <p className="text-lg">
              {candidate.experience || "No experience added yet."}
            </p>
          </div>

        </div>

        {/* Resume */}
        <div className="mt-8">

          <p className="text-slate-500 text-sm mb-2">
            Resume
          </p>

          <div className="bg-slate-800 rounded-xl p-5 flex items-center justify-between">

            <span className="text-slate-400">
              Resume upload will be integrated in a later phase.
            </span>

            <button
              disabled
              className="bg-slate-700 text-slate-400 px-5 py-2 rounded-lg cursor-not-allowed"
            >
              View Resume
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default CandidateProfile;