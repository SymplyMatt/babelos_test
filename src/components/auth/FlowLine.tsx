import React from 'react'

interface ComponentProps {
  type?: string;
  isActive?: boolean;
}
const FlowLine: React.FC<ComponentProps> =  ({type = "two", isActive=false}) => {
  return (
    <div className="flow-line">
      {type == 'three' && <div className=""></div>}
      <i className={`fa-regular fa-circle-dot ${isActive ? 'active' : 'inactive'}`}></i>
      <div className=""></div>
    </div>
  )
}

export default FlowLine