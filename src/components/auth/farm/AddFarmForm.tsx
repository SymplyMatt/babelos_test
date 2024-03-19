import FormTitle from "../common/FormTitle"
import AddFarmInputSections from "./AddFarmInputSection"

interface ComponentProps {
  showOverlay? : boolean; 
  setShowOverlay : Function;
}

const AddFarmForm: React.FC<ComponentProps>  = ({showOverlay = false,setShowOverlay}) => {
  return (
    <div className="form-container">
        <FormTitle title="Create Account" description="Farm Registration" step="four" />
        <AddFarmInputSections showOverlay={showOverlay} setShowOverlay={setShowOverlay}/>
    </div>
  )
}

export default AddFarmForm