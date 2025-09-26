'use client';
import { useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

function TurfOwnerDashboard() {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome {user?.name}!</h1>
      <p>Owner Dashboard - Role: {user?.role}</p>
    </div>
  );
}

export default function TurfOwnerDashboardPage() {
  return (
    <ProtectedRoute requireRole="owner">
      <TurfOwnerDashboard />
    </ProtectedRoute>
  );
}
