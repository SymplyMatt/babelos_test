import FlowLine from './FlowLine'

const FormTitle = () => {
  return (
    <div className="form-section w-80">
        <FlowLine isActive={true}/>
        <div className="">
          <div className="">Create Account</div>
          <div className="">Personal Information</div>
        </div>
</div>
  )
}

export default FormTitle