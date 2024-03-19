import FormTitle from "../common/FormTitle"
import FarmInputSections from "./FarmInputSections"

interface ComponentProps {
  setShowOverlay : Function;
}

const FarmForm: React.FC<ComponentProps>  = ({setShowOverlay}) => {
  return (
    <div className="form-container">
        <FormTitle title="Create Account" description="Farm Registration" step="four" />
        <FarmInputSections setShowOverlay={setShowOverlay} />
    </div>
  )
}

export default FarmForm