import React from 'react'

interface ComponentProps {
  type?: string;
  step?: string;
  isActive?: boolean;
}
const FlowLine: React.FC<ComponentProps> =  ({type = "two,", isActive=false, step = "one"}) => {
  return (
    <div className="flow-line">
      {type != 'two' && <div className=""></div>}
      <i className={`fa-regular fa-circle-dot ${isActive ? 'active' : 'inactive'}`}></i>
      <div className={`${type == 'one' ? 'visibility-hidden' : ''} ${step == 'two' ? 'active' : 'inactive'}`}></div>
    </div>
  )
}

export default FlowLine