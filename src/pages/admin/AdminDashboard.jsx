import Chartcard from "../../Components/admin/Chartcard";
import UserTable from "../../Components/admin/UserTable";

function AdminDashboard() {
  const stats = [
    { id: 1, title: "Total Users", value: 248, icon: "👥" },
    { id: 2, title: "Total Recruiters", value: 32, icon: "🧑‍💼" },
    { id: 3, title: "Total Jobs Posted", value: 96, icon: "📋" },
    { id: 4, title: "Active Applications", value: 512, icon: "📊" },
  ];

  const users = [
    { id: 1, name: "Ayesha Khan", email: "ayesha@example.com", role: "candidate", status: "Active" },
    { id: 2, name: "Bilal Ahmed", email: "bilal@example.com", role: "recruiter", status: "Active" },
    { id: 3, name: "Sara Malik", email: "sara@example.com", role: "candidate", status: "Suspended" },
    { id: 4, name: "Hamza Tariq", email: "hamza@example.com", role: "recruiter", status: "Active" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Chartcard key={stat.id} title={stat.title} value={stat.value} icon={stat.icon} />
        ))}
      </div>

      <h2 className="text-lg font-semibold mb-4">Recent Users</h2>
      <UserTable users={users} />
    </div>
  );
}

export default AdminDashboard;