import FlowLine from '../FlowLine'
import TextInput from '../../common/TextInput'
import SelectInput from '../../common/SelectInput';
import Radio from '../../common/Radio';
import FormButtons from '../FormButtons';

const BankRegistrationInputSections = () => {
    const banks = ["Select bank","Access bank"];
    const smartphone = ["Yes","No"];
    const hasBankAccount = ["Yes","No"];
  return (
    <div className="form-area">
        <div className="section w-80">
            <FlowLine type="three" step='two'/>
            <div className="p-20 w-full gender">
                <div className="label">Do you have a smartphone <span className="font-8">*</span></div>
                <div className="">
                    <Radio options={smartphone} name='smartphone'/>
                </div>
            </div>
        </div>
        <div className="section w-80">
            <FlowLine type="three" />
            <div className="p-20 w-full gender">
                <div className="label">Do you have a bank account <span className="font-8">*</span></div>
                <div className="">
                    <Radio options={hasBankAccount} name='hasBankAccount'/>
                </div>
            </div>
        </div>
        <div className="section w-80">
            <FlowLine type="one" />
            <div className="p-20 w-full">
                <SelectInput options={banks} label='Bank Name' span='*'/>
            </div>
        </div>
        <div className="section w-80">
            <div className="visibility-hidden">
                <FlowLine type="three" />
            </div>
            <div className="p-20 w-full">
                <TextInput  label="Personal Bank Account Number" placeholder="Enter your account Number" span="*" spanClass='font-8'/>
            </div>
        </div>
        <FormButtons step='two'/>
    </div>
  )
}

export default BankRegistrationInputSections