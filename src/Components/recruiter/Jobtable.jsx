function Jobtable({ jobs }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-100 text-sm text-gray-600">
          <tr>
            <th className="px-6 py-3">Job Title</th>
            <th className="px-6 py-3">Company</th>
            <th className="px-6 py-3">Location</th>
            <th className="px-6 py-3">Salary</th>
            <th className="px-6 py-3">Posted</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job._id} className="border-t hover:bg-gray-50">
              <td className="px-6 py-4 font-medium">{job.title}</td>
              <td className="px-6 py-4">{job.company}</td>
              <td className="px-6 py-4 text-gray-500">{job.location}</td>
              <td className="px-6 py-4">
              {job.salary != null
              ? `$${job.salary.toLocaleString()}`
              : "Not specified"}
            </td> 
              <td className="px-6 py-4 text-gray-500">
                {new Date(job.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Jobtable;