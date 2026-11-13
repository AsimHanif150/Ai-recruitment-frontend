import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { updateProfile } from "../../services/authService";

function Profile() {
  const { user, login } = useAuth();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    skills: user?.skills || "",
    experience: user?.experience || "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const updatedUser = await updateProfile(formData);
      login(updatedUser);
      setMessage("Profile updated successfully!");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update profile.");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      {message && (
        <p className="bg-green-100 text-green-700 text-sm px-4 py-2 rounded mb-4 max-w-2xl">
          {message}
        </p>
      )}
      {error && (
        <p className="bg-red-100 text-red-700 text-sm px-4 py-2 rounded mb-4 max-w-2xl">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 flex flex-col gap-4 max-w-2xl">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            disabled
            className="w-full px-4 py-2 border rounded bg-gray-100 text-gray-500"
          />
          <p className="text-xs text-gray-400 mt-1">Email cannot be changed</p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+92 3XX XXXXXXX"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Skills</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="React, Node.js, MongoDB..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Experience</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Briefly describe your work experience..."
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 self-start"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Profile;