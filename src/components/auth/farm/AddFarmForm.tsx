import FormTitle from "../common/FormTitle"
import AddFarmInputSections from "./AddFarmInputSection"

const AddFarmForm = () => {
  return (
    <div className="form-container">
        <FormTitle title="Create Account" description="Farm Registration" step="four" />
        <AddFarmInputSections />
    </div>
  )
}

export default AddFarmForm