import { useNavigate } from 'react-router-dom';
import FlowLine from './FlowLine'
interface ComponentProps {
    step?: string;
    active?: boolean;
  }
const FormButtons: React.FC<ComponentProps> =  ({step = "one", active= true}) => {
  const navigate = useNavigate();
  return (
    <div className="section w-80">
        <div className="visibility-hidden">
            <FlowLine type="three" />
        </div>
        <div className={`w-full form-buttons`}>
            <div className={`w-full flex align-center justify-center btn  ${step == 'one' ? 'inactive' : 'active'}`}>Back</div>
            <div className={`w-full flex align-center justify-center btn  ${active ? 'active' : 'inactive'} green`} onClick={()=>{
              if(step == 'one' && active){
                navigate('/auth/bank-registration')
              }
              if(step == 'two' && active){
                navigate('/auth/fingerprint')
              }
            }}>Continue</div>
        </div>
    </div>
  )
}

export default FormButtons