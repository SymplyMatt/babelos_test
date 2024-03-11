import FormTitle from "../FormTitle"
import FarmInputSections from "./FarmInputSections"

const FarmForm = () => {
  return (
    <div className="form-container">
        <FormTitle title="Create Account" description="Farm Registration" />
        <FarmInputSections />
    </div>
  )
}

export default FarmForm