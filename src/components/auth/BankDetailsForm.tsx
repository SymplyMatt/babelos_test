import BankRegistrationInputSections from "./BankRegistrationInputSections"
import FormTitle from "./FormTitle"

const BankDetailsForm = () => {
  return (
    <div className="form-container">
        <FormTitle title="Create Account" description="Bank Details"/>
        <BankRegistrationInputSections />
    </div>
  )
}

export default BankDetailsForm