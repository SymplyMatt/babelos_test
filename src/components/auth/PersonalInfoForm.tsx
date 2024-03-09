import TextInput from "../common/TextInput"
import FlowLine from "./FlowLine"
import FormTitle from "./FormTitle"
import InputSections from "./InputSections"

const PersonalInfoForm = () => {
  return (
    <div className="form-container">
        <FormTitle />
        <InputSections />
    </div>
  )
}

export default PersonalInfoForm