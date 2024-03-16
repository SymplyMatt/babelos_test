import React from 'react'
import Completed from '../../../assets/completed.svg'
import Active from '../../../assets/active_step.svg'
import InActive from '../../../assets/inactive.svg'
interface ComponentProps {
  type?: string;
  step?: string;
  icon?: string;
  isActive?: boolean;
  firstLineActive?: boolean;
  secondLineActive?: boolean;
  hide?: boolean;
}
const FlowLine: React.FC<ComponentProps> =  ({type = "two,", firstLineActive= false, secondLineActive= false, icon = 'inactive', hide=false}) => {
  return (
    <>
      <div className={`flow-line ${hide && 'visibility-hidden'}`}>
        {type == 'three' && <div className={`${firstLineActive ? 'active' : 'inactive'}`}></div>}
        { <img src={icon == 'active' ? Active : icon == 'completed' ? Completed : InActive} alt="" className='flow-icon'/>}
        {type != 'one' && <div className={`${secondLineActive ? 'active' : 'inactive'}`}></div>}
      </div>
    </>
  )
}

export default FlowLine