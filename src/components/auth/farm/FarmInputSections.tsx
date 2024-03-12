import FlowLine from '../FlowLine'
import FormButtons from '../FormButtons';
import TextInput from '../../common/TextInput';
import SelectInput from '../../common/SelectInput';
import plus from '../../../assets/plus.svg'
import upload_icon from '../../../assets/upload_img.svg'
const FarmInputSections = () => {
    const crops = ["Select crop","Maize"];
    const months = ["Select month","January"];
  return (
    <div className="form-area">
        <div className="section w-80">
            <FlowLine type="three" firstLineActive={true} secondLineActive={true} icon='completed'/>
            <div className="p-20 w-full">
                <TextInput  label="Email address" placeholder="Enter email Address" span="(Optional)" spanClass='font-14'/>
            </div>
        </div>
        <div className="section w-80">
            <FlowLine type="three" step='three' firstLineActive={true} secondLineActive={true} icon='completed'/>
            <div className="p-20 w-full flex column gap-10">
                <div className="label">Farm Coordinates <span className='font-14 italic'>(Optional)</span></div>
                <div className="flex gap-10">
                    <TextInput  label="" placeholder="Longitude"/>
                    <TextInput  label="" placeholder="Latitude"/>
                </div>
                <div className="label"><span className='font-14 light'>Ex: Longitude: 8.6753° E. Latitude: 9.0820° N</span></div>
            </div>
        </div>
        <div className="section w-80">
            <FlowLine type="one" icon='active' />
            <div className="p-20 w-full flex column gap-10">
                <div className="label">Crops cultivated and planting season</div>
                <div className="flex column gap-10 crop-container">
                    <div className="w-full">
                        <SelectInput options={crops} label='What crop do you cultivate on this farm?'/>
                    </div>
                    <div className="flex gap-10 w-full">
                        <div className="p-20 w-full">
                            <SelectInput options={months} label='Start month'/>
                        </div>
                        <div className="p-20 w-full">
                            <SelectInput options={months} label='End month'/>
                        </div>
                    </div>
                </div>
                <div className="add-crop"><span><img src={plus} alt="" /></span> Add another crop</div>
            </div>
        </div>
        <div className="section w-80">
            <div className="visibility-hidden">
                <FlowLine type="one" step='three' />
            </div>
            <div className="p-20 w-full flex column gap-10">
                <div className="label">Upload farm documents</div>
                <div className="flex column center  gap-10 upload-file">
                    <img src={upload_icon} alt="" />
                    <div className="label"><span className='font-14 green'>Click to upload &nbsp;</span> or drag and drop</div>
                    <div className="label">PNG, JPG or PDF (max. 10MB)</div>
                </div>
            </div>
        </div>
        <FormButtons step='one'/>
    </div>
  )
}

export default FarmInputSections