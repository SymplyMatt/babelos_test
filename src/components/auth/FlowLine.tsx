import React from 'react'
import Completed from '../../assets/completed.svg'
import Active from '../../assets/active_step.svg'
import InActive from '../../assets/inactive.svg'
interface ComponentProps {
  type?: string;
  step?: string;
  icon?: string;
  isActive?: boolean;
  firstLineActive?: boolean;
  secondLineActive?: boolean;
}
const FlowLine: React.FC<ComponentProps> =  ({type = "two,", isActive=false, step = "one", firstLineActive= false, secondLineActive= false, icon = 'inactive'}) => {
  return (
    <>
      <div className="flow-line">
        {type == 'three' && <div className={`${firstLineActive ? 'active' : 'inactive'}`}></div>}
        { <img src={icon == 'active' ? Active : icon == 'completed' ? Completed : InActive} alt="" className='flow-icon'/>}
        {type != 'one' && <div className={`${secondLineActive ? 'active' : 'inactive'}`}></div>}
      </div>
    </>
  )
}

export default FlowLine