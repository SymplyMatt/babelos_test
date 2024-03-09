import { ReactNode } from 'react';

const AuthPage = ({ children }: { children: ReactNode }) => {
  return (
    <div className="page">
      {children}
    </div>
  );
};

export default AuthPage;
