import React from 'react';
import LoginPage from './components/LoginPage';
import MainLayout from './components/MainLayout';
import SplashScreen from './components/SplashScreen';
import { useData, DataProvider } from './contexts/DataContext';
import { User } from './types';

const AppContent: React.FC = () => {
  const { isDataLoading, users, currentUser, companyProfile, login } = useData();

  if (isDataLoading) {
    return <SplashScreen companyProfile={companyProfile} />;
  }

  return (
    <div className="h-screen w-screen">
      {currentUser ? (
        <MainLayout />
      ) : (
        <LoginPage onLoginSuccess={login} users={users} />
      )}
    </div>
  );
};


const App: React.FC = () => {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
};

export default App;