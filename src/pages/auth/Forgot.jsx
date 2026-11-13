import {useState} from "react";
import  {Link} from "react-router-dom";


function Forgot() {
    const [email , setEmail] = useState("");
    const [submitted, setSubmitted] =useState(false);

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log("Password reset requested for: ",email);
        setSubmitted(true);
        //authService.ForgotPassword() call goes here in phase 8
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
         <h1 className="text-2xl font-bold text-center mb-2">Reset Password</h1>
         <p className="text-sm text-gray-500 text-center mb-6">
            Enter your email and we'll send you a reset link.
         </p>
    
   
   {submitted?(
    <p className="text-center text-green-600">
        If an account exists for {email}, a reset link has been sent.
        </p>

   ):(
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    <div>
    <label className="block text-sm font-medium mb-1">Email</label>
    <input
    type="email"
    name="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="you@example.com"
    />
    </div>

    <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Send Reset Link
     </button> 
     </form>
     )}

     <p className="text-center text-sm mt-6">
    <Link to="/login" className="text-blue-600 hover:underline">
    Back to Login 
    </Link>
    </p>
    </div>
    </div>
    );
}
export default Forgot;