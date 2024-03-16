import React, { ReactNode } from 'react';
import TopLinks from '../auth/common/TopLinks';

interface BankDetailsMainProps {
  children: ReactNode;
  page?: string;
}

const AuthMain: React.FC<BankDetailsMainProps> = ({ children, page='signup' }) => {
  return (
    <div className='personal-info-form'>
      <TopLinks page={page}/>
      {children}
    </div>
  );
};

export default AuthMain;
