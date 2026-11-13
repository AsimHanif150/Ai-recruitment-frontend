import api from "./api";
 
// Candidate applies for a job
export const applyForJob = async (jobId) => {
  const response = await api.post("/applications", {
    jobId,
  });
 
  return response.data;
};
 
// Candidate views their applications
export const getMyApplications = async () => {
  const response = await api.get("/applications/my");
  return response.data;
};
 
// Recruiter views applicants for a specific job
export const getApplicants = async (jobId) => {
  const response = await api.get(`/applications/${jobId}`);
  return response.data;
};
 
// Recruiter views applicants across all their jobs
export const getRecruiterApplicants = async () => {
  const response = await api.get("/applications/recruiter");
  return response.data;
};
 
// Recruiter updates application status
export const updateApplicationStatus = async (applicationId, status) => {
  const response = await api.patch(
    `/applications/${applicationId}/status`,
    { status }
  );
 
  return response.data;
};
 





