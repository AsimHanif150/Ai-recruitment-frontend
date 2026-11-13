import { Link } from "react-router-dom";

function UserTable({users}) {
      return (
        <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-sm text-gray-600">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Role</th>
              <th className="px-6 py-3">Status</th>
            </tr>

            </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    {user.role === "candidate" ? (
                      <Link to={`/admin/candidate/${user._id}`} className="text-blue-600 hover:underline">
                        {user.name}
                      </Link>
                    ) : (
                      user.name
                    )}
                  </td>
                  <td className="px-6 py-4 text-gray-500">{user.email}</td>
                  <td className="px-6 py-4 capitalize">{user.role}</td>
                  <td className="px-6 py-4">

                    <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === "Active"
                    ? "bg-green-100 text-green-700"
                    :  "bg-gray-100 text-gray-600" 
                    }`}
                >

                  {user.status}
                  </span>
                </td>
              </tr>
                ))}
              </tbody>
            </table>  
            </div>
          );
}

export default UserTable;