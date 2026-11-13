import api from "./api";

export const getCandidateProfile = async (id) => {
  const response = await api.get(`/auth/user/${id}`);
  return response.data;
};
