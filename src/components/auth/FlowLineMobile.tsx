import React from 'react';
import Active from '../../assets/active_step.svg';
import Inactive from '../../assets/inactive.svg';
import Completed from '../../assets/completed.svg';

interface FlowLineMobileProps {
  page?: string;
}

const FlowLineMobile: React.FC<FlowLineMobileProps> = ({ page= 'personal' }) => {
  return (
    <div className="mobile-flow-line">
      <img src={page === 'personal'? Active : page === 'bank' ? Completed : Inactive} alt="" />
      <div className=""></div>
      <img src={page === 'personal'? Inactive : page === 'bank' ? Active : Completed} alt="" />
      <div className=""></div>
      <img src={page == 'personal' || 'bank' ? Inactive : Active} alt="" />
      <div className=""></div>
      <img src={page == 'personal' || 'bank' ? Inactive : Active} alt="" />
    </div>
  );
}

export default FlowLineMobile;
