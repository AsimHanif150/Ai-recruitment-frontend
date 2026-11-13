import { useEffect, useState } from "react";
import Resumecard from "../../Components/candidate/Resumecard";
import { getMyApplications } from "../../services/applicationService";

function Appliedjobs() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const data = await getMyApplications();
      setApplications(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load applications.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">Applied Jobs</h1>
        <p className="text-gray-500">Loading applications...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">Applied Jobs</h1>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Applied Jobs</h1>

      {applications.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h2 className="text-xl font-semibold mb-2">
            No Applications Yet
          </h2>
          <p className="text-gray-500">
            You haven't applied for any jobs yet.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {applications.map((application) => (
            <Resumecard
              key={application._id}
              appliedJob={{
                id: application._id,
                title: application.job?.title,
                company: application.job?.company,
                location: application.job?.location,
                salary: application.job?.salary,
                appliedOn: new Date(
                  application.createdAt
                ).toLocaleDateString(),
                status: application.status,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Appliedjobs;