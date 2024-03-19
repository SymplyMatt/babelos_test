import { useNavigate } from 'react-router-dom';
import FlowLine from './FlowLine'
import { Context } from '../../../context/AuthContext';
import { useContext } from 'react';
interface ComponentProps {
    step?: string;
    active?: boolean;
    onClickFunction?:Function;
    buttonText?:string;
  }
const FormButtons: React.FC<ComponentProps> =  ({step = "one", active= true, onClickFunction, buttonText = 'Continue'}) => {
  const navigate = useNavigate();
  const { loading } = useContext(Context);
  return (
    <div className="section w-80">
        <div className="visibility-hidden">
            <FlowLine type="three" />
        </div>
        <div className={`w-full form-buttons`}>
            <div className={`w-full flex align-center justify-center btn  ${step == 'one' ? 'inactive' : 'active'}`} onClick={()=>{
              if(step !=='one'){
                navigate(-1);
              }
            }}>Back</div>
            <div className={`w-full flex align-center justify-center btn  ${active && !loading ? 'active' : 'inactive'} green`} onClick={()=> {
              if(onClickFunction && !loading){
                onClickFunction();
              }
            }}>{!loading && buttonText} {loading && <i className="fa-solid fa-spinner spinner"></i>}</div>
        </div>
    </div>
  )
}

export default FormButtons