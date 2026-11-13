import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/Authcontext";
import ProtectedRoute from "./Components/common/ProtectedRoute";
import { ROLES } from "./constants/Roles";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import RecruiterLayout from "./layouts/RecruiterLayout";
import CandidateLayout from "./layouts/CandidateLayout";

// Public pages
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Contacts from "./pages/public/Contacts";
import Jobs from "./pages/candidate/Jobs";

// Auth pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageJobs from "./pages/admin/ManageJobs";
import ManageUsers from "./pages/admin/ManageUsers";

// Recruiter pages
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";
import PostJob from "./pages/recruiter/PostJob";
import Applicants from "./pages/recruiter/Applicants";
import CandidateProfile from "./pages/recruiter/CandidateProfile";

// Candidate pages
import CandidateDashboard from "./pages/candidate/CandidateDashboard";
import Appliedjobs from "./pages/candidate/Appliedjobs";
import Profile from "./pages/candidate/Profile";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* ================= PUBLIC ROUTES ================= */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacts />} />
             <Route path="/jobs" element={<Jobs />} />
          </Route>

          {/* ================= AUTH ROUTES ================= */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<Forgot />} />

          {/* ================= ADMIN ROUTES ================= */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRole={ROLES.ADMIN}>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="jobs" element={<ManageJobs />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="candidate/:id" element={<CandidateProfile />} />

          </Route>

          {/* ================= RECRUITER ROUTES ================= */}
          <Route
            path="/recruiter"
            element={
              <ProtectedRoute allowedRole={ROLES.RECRUITER}>
                <RecruiterLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<RecruiterDashboard />} />
            <Route path="post-job" element={<PostJob />} />
            <Route path="applicants" element={<Applicants />} />

            {/* Candidate Profile */}
            <Route
              path="candidate/:id"
              element={<CandidateProfile />}
            />
          </Route>

          {/* ================= CANDIDATE ROUTES ================= */}
          <Route
            path="/candidate"
            element={
              <ProtectedRoute allowedRole={ROLES.CANDIDATE}>
                <CandidateLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<CandidateDashboard />} />
            <Route path="applied-jobs" element={<Appliedjobs />} />
            <Route path="profile" element={<Profile />} />
            <Route path="jobs" element={<Jobs />} />

          </Route>

          {/* ================= 404 PAGE ================= */}
          <Route
            path="*"
            element={
              <h1 className="p-10 text-xl">
                404 — Page Not Found
              </h1>
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;