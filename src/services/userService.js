import api from "./api";

// Get candidate profile by ID
export const getCandidateById = async (id) => {
  const response = await api.get(`/users/candidate/${id}`);
  return response.data;
};