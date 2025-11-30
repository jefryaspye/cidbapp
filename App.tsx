
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Dashboard from './pages/Dashboard';
import ComplianceChat from './pages/ComplianceChat';
import ArchitectureGenerator from './pages/ArchitectureGenerator';
import ITSMWorkflow from './pages/ITSMWorkflow';
import VisualInspection from './pages/VisualInspection';
import FacilityPlanning from './pages/FacilityPlanning';
import AssetManagement from './pages/AssetManagement';
import Settings from './pages/Settings';
import Login from './pages/Login';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-slate-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  if (!user) {
    return <Login />;
  }

  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/assets" element={<AssetManagement />} />
        <Route path="/compliance" element={<ComplianceChat />} />
        <Route path="/architecture" element={<ArchitectureGenerator />} />
        <Route path="/itsm" element={<ITSMWorkflow />} />
        <Route path="/inspection" element={<VisualInspection />} />
        <Route path="/planning" element={<FacilityPlanning />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <HashRouter>
          <ProtectedRoute>
            <AppRoutes />
          </ProtectedRoute>
        </HashRouter>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
