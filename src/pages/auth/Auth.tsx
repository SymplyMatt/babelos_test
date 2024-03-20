import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import AnimatedPage from './AnimatedPage';

const Auth: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPage, setShowPage] = useState<boolean>(false);
  React.useEffect(() => {
    if (location.pathname !== '/auth/personal' && location.pathname !== '/auth/'  && location.pathname !== '/auth/login') {
      const { state } = location;
      if (state && state.auth) {
        setShowPage(true);
      } else {
        navigate('/auth/');
      }
    }else{
      setShowPage(true);
    }
  }, [location]);

  return <>
    {showPage &&     <AnimatedPage>
      <Outlet />
      </AnimatedPage>}
  </>
};

export default Auth;
