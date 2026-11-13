import {useState} from "react";
import {Link,useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";
import { registerUser } from "../../services/authService";

function Register() {
const [formData,setFormData] = useState({
  name:"",
  email:"",
  password:"",
  role:"candidate",
});

  const [error, setError] = useState("");


const navigate = useNavigate();
const { login } = useAuth();

const handleChange =(e) => {
  setFormData({...formData,[e.target.name]:e.target.value});
};

const handleSubmit = async (e) => {
  e.preventDefault();
 setError("");

try{
  const userData = await registerUser(formData);
  login(userData);
  navigate(`/${userData.role}/dashboard`);
} catch (err) {
  setError(err.response?.data?.message || "Registration failed. Please try again ");
}
};
return(
  <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
  <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
  <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>

<form onSubmit={handleSubmit} className="flex flex-col gap-4">
<div>
<label className="block text-sm font-medium mb-1">Full Name</label>
<input
type="text"
name="name"
value={formData.name}
onChange={handleChange}
required
className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
placeholder="john doe"
/>
</div>

<div>
<label className="block text-sm font-medium mb-1">Email</label>
<input
type="email"
name="email"
value={formData.email}
onChange={handleChange}
required
className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
placeholder="you@example.com"
/>
</div>

<div>
<label className="block text-sm font-medium mb-1">Password</label>
<input
type="password"
name="password"
value={formData.password}
onChange={handleChange}
required
className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
placeholder="you@example.com"
/>
</div>



<div>
<label className="block text-sm font-medium mb-1">I am a</label>
<select
name="role"
value={formData.role}
onChange={handleChange}
className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
>
<option value="candidate">Candidate</option>
<option value="recruiter">Recruiter</option>
</select>
</div>

<button
type="submit"
className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
  Register
</button>
</form>

<p className="text-center text-sm mt-6">
  Already have an account{" "}
<Link to ="/login" className="text-blue-600 hover:underline">
login
</Link>
</p>
</div>
</div>
);
}

export default Register;