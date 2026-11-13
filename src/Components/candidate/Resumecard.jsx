
function Resumecard({ appliedJob }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
      <div>
        <p className="font-semibold">{appliedJob.title}</p>

        <p className="text-sm text-gray-500">
          {appliedJob.company}
        </p>

        <p className="text-xs text-gray-400 mt-1">
          Applied {appliedJob.appliedOn}
        </p>
      </div>

      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${
          appliedJob.status === "Shortlisted"
            ? "bg-blue-100 text-blue-700"
            : appliedJob.status === "Rejected"
            ? "bg-red-100 text-red-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {appliedJob.status}
      </span>
    </div>
  );
}

export default Resumecard;

