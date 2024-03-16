import FormTitle from "../common/FormTitle"
import InputSections from "./PersonalInfoInputSections"

const PersonalInfoForm = () => {
  return (
    <div className="form-container">
        <FormTitle title="Create Account" description="Personal Information" step="one"/>
        <InputSections />
    </div>
  )
}

export default PersonalInfoForm