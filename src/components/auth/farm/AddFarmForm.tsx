import FormTitle from "../common/FormTitle"
import AddFarmInputSections from "./AddFarmInputSection"

interface ComponentProps {
  setShowOverlay : Function;
}

const AddFarmForm: React.FC<ComponentProps>  = ({setShowOverlay}) => {
  return (
    <div className="form-container">
        <FormTitle title="Create Account" description="Farm Registration" step="four" />
        <AddFarmInputSections setShowOverlay={setShowOverlay}/>
    </div>
  )
}

export default AddFarmForm