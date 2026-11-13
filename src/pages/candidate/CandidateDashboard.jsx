import { useEffect, useState } from "react";
import Resumecard from "../../Components/candidate/Resumecard";
import { getMyApplications } from "../../services/applicationService";

function CandidateDashboard() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const data = await getMyApplications();
      setApplications(data);
    } catch (error) {
      console.error("Failed to fetch applications:", error);
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    {
      id: 1,
      title: "Applications Sent",
      value: applications.length,
      icon: "📤",
    },
    {
      id: 2,
      title: "Shortlisted",
      value: applications.filter(
        (app) => app.status === "Shortlisted"
      ).length,
      icon: "📅",
    },
    {
      id: 3,
      title: "Rejected",
      value: applications.filter(
        (app) => app.status === "Rejected"
      ).length,
      icon: "❌",
    },
  ];

  if (loading) {
    return <p>Loading Dashboard...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Welcome Back</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white rounded-lg shadow p-6 flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </div>

            <div className="text-3xl">{stat.icon}</div>
          </div>
        ))}
      </div>

      <h2 className="text-lg font-semibold mb-4">
        Recent Applications
      </h2>

      {applications.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <p className="text-gray-500">
            You haven't applied for any jobs yet.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {applications.slice(0, 3).map((application) => (
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

export default CandidateDashboard;