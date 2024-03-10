import FormTitle from "./FormTitle"
import InputSections from "./PersonalInfoInputSections"

const PersonalInfoForm = () => {
  return (
    <div className="form-container">
        <FormTitle title="Create Account" description="Personal Information"/>
        <InputSections />
    </div>
  )
}

export default PersonalInfoForm