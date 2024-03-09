import React, { useState } from 'react'
import FlowLine from './FlowLine'
import TextInput from '../common/TextInput'
import ReactFlagsSelect from 'react-flags-select';

const InputSections = () => {
    const [selectedCountry, setSelectedCountry] = useState<string>('NG');

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
                    <TextInput  label="First Name" placeholder="Enter First Name" span="*"/>
                </div>
            </div>
        </div>
        <div className="section w-80">
            <FlowLine type="three" />
            <div className="w-full p-20 phone-input">
                <div className="label">Phone number <span>*</span></div>
                <div className="">
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
                    <div className="input-div">
                        <span>+234</span>
                        <input type="text" placeholder="000 0000 000" />
                    </div>
                </div>
            </div>
        </div>
        <div className="section w-80">
            <FlowLine type="three" />
            <div className="p-20 w-full">
                <TextInput  label="Email address" placeholder="Email Address" span="(Optional)" spanClass='font-14'/>
            </div>
        </div>
        <div className="section w-80">
            <div className="visibility-hidden">
                <FlowLine type="three" />
            </div>
            <div className="w-full name-flex">
                <div className="p-20 w-full">
                    <div className="input-area w-full">
                        <div className="label">Age <span className="span-8">*</span></div>
                        <select>
                            <option value="">20</option>
                        </select>
                    </div>
                </div>
                <div className="p-20 w-full gender">
                    <div className="label">Choose Gender <span className="font-8">*</span></div>
                    <div className="">
                        <div className="">
                            <input type="radio"  />Male
                        </div>
                        <div className="">
                            <input type="radio"  />Female
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InputSections