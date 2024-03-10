import { useState } from 'react'
import FlowLine from './FlowLine'
import TextInput from '../common/TextInput'
import ReactFlagsSelect from 'react-flags-select';
import SelectInput from '../common/SelectInput';
import Radio from '../common/Radio';

const InputSections = () => {
    const [selectedCountry, setSelectedCountry] = useState<string>('NG');
    const ages = ["Select age","1"];
    const genders = ["Male","Female"];
    const sites = ["Ajegunle","Ikotun"];
    const idTypes = ["Select ID Type","National ID card (NIN)","Voter's Card", "International Passport"];
    const handleSelect = (countryCode: string) => {
        setSelectedCountry(countryCode);
        console.log('Selected country code:', countryCode);
    };
  return (
    <div className="form-area">
        <div className="section w-80">
            <FlowLine type="three" />
            <div className="w-full name-flex">
                <div className="p-20 w-full">
                    <TextInput  label="First Name" placeholder="Enter First Name" span="*"/>
                </div>
                <div className="p-20 w-full">
                    <TextInput  label="Last Name" placeholder="Enter Last Name" span="*"/>
                </div>
            </div>
        </div>
        <div className="section w-80">
            <FlowLine type="three" />
            <div className="p-20 phone-input w-full">
                <div className="label">Phone number <span>*</span></div>
                <div className="w-full">
                    <div className="phone-flag">
                        <ReactFlagsSelect 
                            countries={['NG']}
                            onSelect={handleSelect}
                            selected={selectedCountry}
                            searchable={false}
                            customLabels={{}}
                            className='flag-select-container flex items-center'
                        />
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                    <div className="w-full">
                        <TextInput   placeholder="+234 000 0000 000" span="*" withLabel={false}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="section w-80">
            <FlowLine type="one" />
            <div className="p-20 w-full">
                <TextInput  label="Email address" placeholder="Enter email Address" span="(Optional)" spanClass='font-14'/>
            </div>
        </div>
        <div className="section w-80">
            <div className="visibility-hidden">
                <FlowLine type="three" />
            </div>
            <div className="w-full name-flex">
                <div className="p-20 w-full">
                    <SelectInput options={ages} label='Age' span='*'/>
                </div>
                <div className="p-20 w-full gender">
                    <div className="label">Choose Gender <span className="font-8">*</span></div>
                    <div className="">
                        <Radio options={genders}/>
                    </div>
                </div>
            </div>
        </div>
        <div className="section w-80">
            <div className="visibility-hidden">
                <FlowLine type="three" />
            </div>
            <div className="p-20 w-full">
                <TextInput  label="Residential Address" placeholder="Ex: No 21 Agaro road, Abeokuta." span="*" spanClass='font-8'/>
            </div>
        </div>
        <div className="section w-80">
            <div className="visibility-hidden">
                <FlowLine type="three" />
            </div>
            <div className="p-20 w-full">
                <SelectInput options={sites} label='Site' span='*'/>
            </div>
        </div>
        <div className="section w-80">
            <div className="visibility-hidden">
                <FlowLine type="three" />
            </div>
            <div className="p-20 w-full">
                <SelectInput options={idTypes} label='ID Type' span='*'/>
            </div>
        </div>
        <div className="section w-80">
            <div className="visibility-hidden">
                <FlowLine type="three" />
            </div>
            <div className="p-20 w-full">
                <TextInput  label="ID Number" placeholder="Enter your ID Number" span="*" spanClass='font-14'/>
            </div>
        </div>
        <div className="section w-80">
            <div className="visibility-hidden">
                <FlowLine type="three" />
            </div>
            <div className="p-20 w-full">
                <TextInput  label="Upload ID document" placeholder="Enter your ID Number" span="*" spanClass='font-8' type='file'/>
            </div>
        </div>
        <div className="section w-80">
            <div className="visibility-hidden">
                <FlowLine type="three" />
            </div>
            <div className="p-20 w-full">
                <div className="w-full password-input-container">
                    <div className="label">Create password <span className='font-8'>*</span></div>
                    <div className="input-div w-full password">
                        <input type='password' placeholder='Create Password' className=''/>
                        <div className=""><i className="fa-regular fa-eye"></i></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section w-80">
            <div className="visibility-hidden">
                <FlowLine type="three" />
            </div>
            <div className="p-20 w-full">
                <div className="w-full password-input-container">
                    <div className="label">Confirm password <span className='font-8'>*</span></div>
                    <div className="input-div w-full password">
                        <input type='password' placeholder='Confirm password' className=''/>
                        <div className=""><i className="fa-regular fa-eye"></i></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section w-80">
            <div className="visibility-hidden">
                <FlowLine type="three" />
            </div>
            <div className="password-checks">
                <div className="font-14"><i className="fa-solid fa-circle-check"></i> Must be at least 8 characters</div>
                <div className=""><i className="fa-solid fa-circle-check"></i> Must contain one special character</div>
            </div>
        </div>
        <div className="profile-picture-upload section w-80 p-20">
            <div className="visibility-hidden">
                <FlowLine type="three" />
            </div>
            <div className="flex column gap-10 ">
                <div className="label">Upload profile picture <span className='font-14 optional'>(Optional)</span></div>
                <div className="flex gap-10 align-center">
                    <div className="picture-avatar">
                        <i className="fa-regular fa-user"></i>
                        <div className=""></div>
                    </div>
                    <div className="flex gap-10 justify-center upload-btn"><i className="fa-solid fa-arrow-up-from-bracket"></i> Upload picture</div>
                </div>
                <div className="password-checks">
                    <div className="font-14"> PNG or JPG (max. 5mb)</div>
                </div>
            </div>
        </div>
        <div className="section w-80 p-20">
            <div className="visibility-hidden">
                <FlowLine type="three" />
            </div>
            <div className="w-full form-buttons">
                <div className="w-full flex align-center justify-center btn">Back</div>
                <div className="w-full flex align-center justify-center btn green">Continue</div>
            </div>
        </div>
    </div>
  )
}

export default InputSections