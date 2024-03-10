import Active from '../../assets/active_step.svg'
import Inactive from '../../assets/inactive.svg'
const FlowLineMobile = () => {
  return (
    <div className="mobile-flow-line">
        <img src={Active} alt="" />
        <div className=""></div>
        <img src={Inactive} alt="" />
        <div className=""></div>
        <img src={Inactive} alt="" />
        <div className=""></div>
        <img src={Inactive} alt="" />
    </div>
  )
}

export default FlowLineMobile