import FlowLine from '../FlowLine'
import FormButtons from '../FormButtons';
import fingerprints from '../../../assets/fingerprints.svg'
import fingerprintdesc from '../../../assets/fingerprint_description.svg'
const FingerprintInputSections = () => {
  return (
    <div className="form-area">
        <div className="section w-80">
            <FlowLine type="three" step='three' isActive={true}/>
            <div className="p-20 w-full finger-print-image-container">
                <div className="label">Capture Fingerprint (Your L-R Index fingers)</div>
                <img src={fingerprints} alt="" />
            </div>
        </div>
        <div className="section w-80">
            <FlowLine type="three" step='three'/>
            <div className="p-20 w-full finger-print-image-container">
                <img src={fingerprintdesc} alt="" />
            </div>
        </div>
        <div className="section w-80">
            <FlowLine type="one" step='one' isActive={false}/>
            <div className="p-20 w-full justify-between">
                <div className=""></div>
                <div className="skip-btn"><input type="checkbox" /> Skip for now</div>
            </div>
        </div>
        <FormButtons step='two'/>
    </div>
  )
}

export default FingerprintInputSections