import FormTitle from "../FormTitle"
import FingerprintInputSections from "./FingerPrintInputSections"

const FingerprintForm = () => {
  return (
    <div className="form-container">
        <FormTitle title="Create Account" description="Security - Setup Fingerprint"span="(Optional)"/>
        <FingerprintInputSections />
    </div>
  )
}

export default FingerprintForm