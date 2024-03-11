import React, { ReactNode } from 'react';
import TopLinks from '../auth/TopLinks';

interface BankDetailsMainProps {
  children: ReactNode;
}

const AuthMain: React.FC<BankDetailsMainProps> = ({ children }) => {
  return (
    <div className='personal-info-form'>
      <TopLinks />
      {children}
    </div>
  );
};

export default AuthMain;
