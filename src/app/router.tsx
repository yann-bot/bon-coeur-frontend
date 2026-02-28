import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "@/shared/components/ProtectedRoute";

const Auth = lazy(() => import("@/features/auth/pages/auth"));
const SignUp = lazy(() => import("@/features/auth/pages/signUp"));
const Dashboard = lazy(() => import("@/features/dashboard/pages/Dashboard"));

export default function AppRouter() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-600">Chargement...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Suspense>
  );
}
