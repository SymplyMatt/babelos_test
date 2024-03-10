import React from 'react'

interface ComponentProps {
  type?: string;
  isActive?: boolean;
}
const FlowLine: React.FC<ComponentProps> =  ({type = "two", isActive=false}) => {
  return (
    <div className="flow-line">
      {type != 'two' && <div className=""></div>}
      <i className={`fa-regular fa-circle-dot ${isActive ? 'active' : 'inactive'}`}></i>
      <div className={`${type == 'one' ? 'visibility-hidden' : ''}`}></div>
    </div>
  )
}

export default FlowLine