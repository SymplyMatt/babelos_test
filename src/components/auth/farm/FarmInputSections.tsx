import FlowLine from '../FlowLine'
import FormButtons from '../FormButtons';
import TextInput from '../../common/TextInput';
import SelectInput from '../../common/SelectInput';
import plus from '../../../assets/plus.svg'
import upload_icon from '../../../assets/upload_img.svg'
import { useState } from 'react';

interface FarmDetail {
    name: string;
    address: string;
    long: string;
    lat: string;
    cropId: string;
    farmSeasonStart: string;
    farmSeasonEnd: string;
}
const FarmInputSections = () => {
    const crops = ["Select crop","Maize"];
    const months = ["Select month","January"];
    const [inputs,setInputs] = useState<FarmDetail>({
    name: "",
    address: "",
    long: "",
    lat: "",
    cropId: "",
    farmSeasonStart: "",
    farmSeasonEnd: ""
    });
    const [cropsArray, setCropsArray] = useState<any[]>([]);

    const updateFarmDetails = <K extends keyof FarmDetail>(key: K, value: FarmDetail[K]) => {
        const updatedInputs: FarmDetail = { ...inputs };
        updatedInputs[key] = value;
        setInputs(updatedInputs);
    };
    const removeCrop = (id : number) => {
        const newArray = cropsArray.filter((i)=>{
            return i.id !== id
        });
        setCropsArray(newArray);
    }
  return (
    <div className="form-area">
        <div className="section w-80">
            <FlowLine type="three" firstLineActive={true} secondLineActive={true} icon='completed'/>
            <div className="p-20 w-full">
                <TextInput  label="Farm Name" placeholder="Enter farm name" span="*" spanClass='font-8' updateFunction={updateFarmDetails} name='name'/>
            </div>
        </div>
        <div className="section w-80">
            <FlowLine type="three" step='three' firstLineActive={true} secondLineActive={true} icon='completed'/>
            <div className="p-20 w-full flex column gap-10">
                <div className="label">Farm Coordinates <span className='font-14 italic'>(Optional)</span></div>
                <div className="flex gap-10">
                    <TextInput  label="" placeholder="Longitude" updateFunction={updateFarmDetails} name='long'/>
                    <TextInput  label="" placeholder="Latitude" updateFunction={updateFarmDetails} name='lat'/>
                </div>
                <div className="label"><span className='font-14 light'>Ex: Longitude: 8.6753° E. Latitude: 9.0820° N</span></div>
            </div>
        </div>
        <div className="section w-80">
            <FlowLine type="one" icon='active' />
            <div className="p-20 w-full flex column gap-10">
                <div className="label">Crops cultivated and planting season</div>
                {cropsArray.map((i : any, index:number) => (
                    <div className="flex column gap-10 crop-container" key={index}>
                        <div className="w-full flex flex-justify-between p-20">
                            <div className="">CROP {index + 1 }</div>
                            <div className="cursor-pointer" onClick={()=> removeCrop(i.id)}>X</div>
                        </div>
                        <div className="w-full">
                            <SelectInput options={[i.cropId]} label='What crop do you cultivate on this farm?' updateFunction={updateFarmDetails} name='cropId'/>
                        </div>
                        <div className="flex gap-10 w-full">
                            <div className="p-20 w-full">
                                <SelectInput options={[i.farmSeasonStart]} label='Start month' updateFunction={updateFarmDetails} name='farmSeasonStart'/>
                            </div>
                            <div className="p-20 w-full">
                                <SelectInput options={[i.farmSeasonEnd]} label='End month' updateFunction={updateFarmDetails} name='farmSeasonEnd'/>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="flex column gap-10 crop-container p-20">
                    {cropsArray.length > 0 && <div className="w-full flex flex-justify-between p-20">
                        <div className="">CROP {cropsArray.length + 1}</div>
                        <div className="cursor-pointer"></div>
                    </div>}
                    <div className="w-full">
                        <SelectInput options={crops} label='What crop do you cultivate on this farm?' updateFunction={updateFarmDetails} name='cropId'/>
                    </div>
                    <div className="flex gap-10 w-full">
                        <div className="p-20 w-full">
                            <SelectInput options={months} label='Start month' updateFunction={updateFarmDetails} name='farmSeasonStart'/>
                        </div>
                        <div className="p-20 w-full">
                            <SelectInput options={months} label='End month' updateFunction={updateFarmDetails} name='farmSeasonEnd'/>
                        </div>
                    </div>
                </div>
                <div className="add-crop" onClick={()=>{
                    if(inputs.cropId && inputs.farmSeasonEnd && inputs.farmSeasonStart){
                        const existingCrops= [...cropsArray];
                        const newCrop= {
                            cropId : inputs.cropId,
                            farmSeasonStart : inputs.farmSeasonStart,
                            farmSeasonEnd : inputs.farmSeasonEnd,
                            id : crops.length + 1
                        }
                        setCropsArray([...existingCrops,newCrop]);
                        updateFarmDetails('cropId', '');
                        updateFarmDetails('farmSeasonStart', '');
                        updateFarmDetails('farmSeasonEnd', '');
                    }
                }}><span><img src={plus} alt="" /></span> Add another crop</div>
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