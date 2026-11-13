import Statscard from "../../Components/recruiter/Statscard";
import Jobtable from "../../Components/recruiter/Jobtable";
import { useState, useEffect} from "react";
import { getAllJobs } from "../../services/jobService";
function RecruiterDashboard() {
  const [jobs, setJobs ] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getAllJobs();
            console.log("Jobs data:", data);  // add this line

        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:",error);
      } finally {
        setLoading(false);
      }
      };
    fetchJobs();
  },[]);

  

  const stats = [
    {id : 1, title :  "Total Jobs Posted", value : jobs.length, icon : "📄"},
  ];
  if (loading) {
    return <p> Loading dashboard...</p>;
  }



  return (
    <div>
  <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
  {/*Stat cards grid*/}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
  {stats.map((stat)=>(
    <Statscard
    key={stat.title}
    title={stat.title}
    value={stat.value}
    icon={stat.icon}
    />
  ))}
  </div>
  
      <h2 className="text-lg font-semibold mb-4">Recent Job Postings</h2>
      <Jobtable jobs={jobs} />
    </div>

  
  );
}

export default RecruiterDashboard;