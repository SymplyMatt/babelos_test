import FlowLine from '../common/FlowLine'
import TextInput from '../../common/TextInput'
import SelectInput from '../../common/SelectInput';
import Radio from '../../common/Radio';
import FormButtons from '../common/FormButtons';
import { Context } from '../../../context/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const BankRegistrationInputSections = () => {
    const navigate = useNavigate();
    const { formInputs, setFormInputs } = useContext(Context);
    const banks = ["Access bank"];
    const smartphone = ["Yes","No"];
    const hasBankAccount = ["Yes","No"];
    const [hasSmartphone, setHasSmartPhone] = useState<string>(smartphone[0]);
    const [bankAccount, setHasBankAccount] = useState<string>(hasBankAccount[0]);
    const [bank, setBank] = useState<string>('');
    const [accountNumber, setAccountNumber] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);
    const validateForm=(showErrors : boolean = false)=>{
        if(!hasSmartphone || !bankAccount ){
            showErrors && toast.error("Enter required fields!")
            return false
        }
        if(bankAccount.toLowerCase() == 'yes' && (accountNumber == '' || bank == '')){
            showErrors && toast.error("Enter account number and bank!")
            return false
        }
        return true
    }
    useEffect(()=>{
        setIsValid(validateForm());
    }, [hasSmartphone, bankAccount, bank, accountNumber]);

    const clickFunction = () =>{
        if(validateForm(true)){
            setFormInputs({
                ...formInputs,
                hasBankAccount: bankAccount,
                hasSmartphone: hasSmartphone,
                accountNumber: accountNumber,
                bankName: bank,
            });
            navigate('/auth/fingerprint', {state : {auth : true}});
        }
    }
  return (
    <div className="form-area">
        <div className="section w-80">
            <FlowLine type="three" icon='active' firstLineActive={true}/>
            <div className="p-20 w-full gender">
                <div className="label">Do you have a smartphone <span className="font-8">*</span></div>
                <div className="">
                    <Radio options={smartphone} name='hasSmartphone' updateFunction={setHasSmartPhone}/>
                </div>
            </div>
        </div>
        <div className="section w-80">
            <FlowLine type="three" hideThirdLine= {bankAccount.toLowerCase() as string != 'yes'} />
            <div className="p-20 w-full gender">
                <div className="label">Do you have a bank account <span className="font-8">*</span></div>
                <div className="">
                    <Radio options={hasBankAccount} name='hasBankAccount' updateFunction={setHasBankAccount}/>
                </div>
            </div>
        </div>
        {bankAccount.toLowerCase() as string == 'yes' && <>
            <div className="section w-80">
                <FlowLine type="one" />
                <div className="p-20 w-full">
                    <SelectInput options={banks} label='Bank Name' span='*' name='bankName' updateFunction={setBank}/>
                </div>
            </div>
            <div className="section w-80">
                <div className="visibility-hidden">
                    <FlowLine type="three" />
                </div>
                <div className="p-20 w-full">
                    <TextInput  label="Personal Bank Account Number" placeholder="Enter your account Number" span="*" spanClass='font-8' name='accountNumber'  updateFunction={setAccountNumber} regex={/^\d+$/}/>
                </div>
            </div>
        </>}
        <FormButtons step='two' active={isValid} onClickFunction={clickFunction}/>
        <ToastContainer />
    </div>
  )
}

export default BankRegistrationInputSections