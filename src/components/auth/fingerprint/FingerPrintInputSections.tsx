import FlowLine from '../common/FlowLine';
import FormButtons from '../common/FormButtons';
import fingerprints from '../../../assets/fingerprints.svg';
import fingerprintdesc from '../../../assets/fingerprint_description.svg';
import { useState } from 'react';

const FingerprintInputSections = () => {
    const [validateForm, setValidateForm] = useState<boolean>(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValidateForm(event.target.checked);
    };

    return (
        <div className="form-area">
            <div className="section w-80">
                <FlowLine type="three" step='three' firstLineActive={true} secondLineActive={true} icon='completed' />
                <div className="p-20 w-full finger-print-image-container">
                    <div className="label">Capture Fingerprint (Your L-R Index fingers)</div>
                    <img src={fingerprints} alt="" />
                </div>
            </div>
            <div className="section w-80">
                <FlowLine type="three" firstLineActive={true} icon='active' />
                <div className="p-20 w-full finger-print-image-container">
                    <img src={fingerprintdesc} alt="" />
                </div>
            </div>
            <div className="section w-80">
                <FlowLine type="one" step='one' isActive={false} />
                <div className="p-20 w-full justify-between">
                    <div className=""></div>
                    <div className="skip-btn"><input type="checkbox" onChange={handleCheckboxChange} /> Skip for now</div>
                </div>
            </div>
            <FormButtons step='three' active={validateForm}/>
        </div>
    );
};

export default FingerprintInputSections;
