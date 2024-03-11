import FlowLine from './FlowLine'
interface ComponentProps {
    step?: string;
  }
const FormButtons: React.FC<ComponentProps> =  ({step = "one"}) => {
  return (
    <div className="section w-80">
        <div className="visibility-hidden">
            <FlowLine type="three" />
        </div>
        <div className={`w-full form-buttons`}>
            <div className={`w-full flex align-center justify-center btn  ${step == 'one' ? 'inactive' : 'active'}`}>Back</div>
            <div className={`w-full flex align-center justify-center btn  ${step == 'one' ? 'inactive' : 'active'} green`}>Continue</div>
        </div>
    </div>
  )
}

export default FormButtons