import BankRegistrationInputSections from "./BankRegistrationInputSections"
import FormTitle from "../common/FormTitle"

const BankDetailsForm = () => {
  return (
    <div className="form-container">
        <FormTitle title="Create Account" description="Bank Details" step="two"/>
        <BankRegistrationInputSections />
    </div>
  )
}

export default BankDetailsForm