import FormTitle from "../common/FormTitle"
import FarmInputSections from "./FarmInputSections"

const FarmForm = () => {
  return (
    <div className="form-container">
        <FormTitle title="Create Account" description="Farm Registration" step="four" />
        <FarmInputSections />
    </div>
  )
}

export default FarmForm