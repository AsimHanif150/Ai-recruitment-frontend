import { useNavigate } from "react-router-dom";

function Applicantcard({ applicant }) {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/recruiter/candidate/${applicant.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
      <div>
        <p className="font-semibold">{applicant.name}</p>
        <p className="text-sm text-gray-500">{applicant.appliedFor}</p>
        <p className="text-sm text-gray-400 mt-1">Applied {applicant.appliedOn}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={handleViewProfile}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
        >
          View Profile
        </button>
      </div>
    </div>
  );
}

export default Applicantcard;