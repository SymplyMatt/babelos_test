import React from 'react'
import Completed from '../../assets/completed.svg'
import Active from '../../assets/active_step.svg'
import InActive from '../../assets/inactive.svg'
interface ComponentProps {
  type?: string;
  step?: string;
  isActive?: boolean;
}
const FlowLine: React.FC<ComponentProps> =  ({type = "two,", isActive=false, step = "one"}) => {
  return (
    <div className="flow-line">
      {type != 'two' && <div className={`${step !== 'one' ? 'active' : 'inactive'}`}></div>}
      { step == 'one' &&  isActive && <img src={Active} alt="" className='flow-icon'/>}
      { step == 'one' &&  !isActive && <img src={InActive} alt="" className='flow-icon'/>}
      { step !== 'one' && isActive &&  <img src={Completed} alt="" className='flow-icon'/> }
      { step !== 'one' && !isActive &&  <img src={Active} alt="" className='flow-icon' /> }
      <div className={`${type == 'one' ? 'visibility-hidden' : ''} ${step == 'two' || step == 'three' && isActive ? 'active' : 'inactive'}`}></div>
    </div>
  )
}

export default FlowLine