import FlowLine from '../common/FlowLine'
import FormButtons from '../common/FormButtons';
import TextInput from '../../common/TextInput';
import SelectInput from '../../common/SelectInput';
import plus from '../../../assets/plus.svg'
import upload_icon from '../../../assets/upload_img.svg'
import edit from '../../../assets/delete_icon.svg'
import delete_icon from '../../../assets/edit_icon.svg'
import farmname_icon from '../../../assets/farmname_icon.svg'
import location_icon from '../../../assets/location_icon.svg'
import document_icon from '../../../assets/document_icon.svg'
import next from '../../../assets/prev.svg'
import prev from '../../../assets/next.svg'
import dot_active from '../../../assets/dot_active.svg'
import dot_inactive from '../../../assets/dot_inactive.svg'
import { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context, FarmDetail } from '../../../context/AuthContext';

const AddFarmInputSections = () => {
    const { formInputs,setFormInputs } = useContext(Context);
    const crops = ["Maize","Cassava"];
    const months = ["January","February"];
    const [cropsArray, setCropsArray] = useState<any[]>([]);
    const [showAddNewCrop, setShowAddNewCrop] = useState<boolean>(true);
    const [name, setName] = useState<string>('');
    const [longitude, setLongitude] = useState<string>('');
    const [latitude, setLatitude] = useState<string>('');
    const [cropId, setCropId] = useState<string>(crops[0]);
    const [farmSeasonStart, setFarmSeasonStart] = useState<string>(months[0]);
    const [farmSeasonEnd, setFarmSeasonEnd] = useState<string>(months[0]);
    const [isValid, setIsValid] = useState<boolean>(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [activeFarm, setActiveFarm] = useState<FarmDetail>(formInputs.farmDetails[activeIndex]);

    useEffect(()=>{
        setActiveFarm(formInputs.farmDetails[activeIndex]);
    }, [activeIndex]);
    useEffect(()=> {
        setIsValid(validateInputs());
    },[name, cropsArray]);
    const removeCrop = (id : number) => {
        const newArray = cropsArray.filter((i)=>{
            return i.id !== id
        });
        if(cropsArray.length < 2){
            setShowAddNewCrop(true);
        }
        setCropsArray(newArray);
    };
    const addNewCrop = () =>{
        if(showAddNewCrop){
            if(cropId && farmSeasonEnd && farmSeasonStart){
                const existingCrops= [...cropsArray];
                const newCrop= {
                    cropId : cropId,
                    farmSeasonStart : farmSeasonStart,
                    farmSeasonEnd : farmSeasonEnd,
                    id : cropsArray.length + 1
                }
                setCropsArray([...existingCrops,newCrop]);
                setCropId(crops[0]);
                setFarmSeasonStart(months[0]);
                setFarmSeasonEnd(months[0]);
            }
        }else{
            setShowAddNewCrop(true);
        }
    };
    const validateInputs = (showErrors : boolean = false) =>{
        if(!name){
            showErrors && toast.error('FARM NAME is required!');
            return false
        }
        if(cropsArray.length < 1){
            showErrors && toast.error('Atleast one crop is required!');
            return false
        }
        return true
    };
    const clickFunction = () =>{
        const farmDetails = formInputs.farmDetails;
        const newFarmDetail = {
            name,
            address: '',
            long: longitude,
            lat: latitude,
            docUploads: [
                ''
            ],
            crops: cropsArray
        }
        const newFarmDetails = [...farmDetails, newFarmDetail];
        if(validateInputs(true)){
            setFormInputs({
                ...formInputs,
                farmDetails : newFarmDetails
            });
        }
    };
  return (
    <div className="form-area">
        <div className="section w-80">
            <FlowLine type="three" firstLineActive={true} secondLineActive={true} icon='completed'/>
            <div className="w-full farm-list-container">
                <div className="w-full flex">
                    <div className="">Farm {activeIndex + 1}</div>
                    <div className="">
                        <img src={edit} alt="" className='pointer'/>
                        <img src={delete_icon} alt="" className='pointer'/>
                    </div>
                </div>
                <div className="full-line"></div>
                <div className="w-full flex gap-10 spread">
                    <div className="flex gap-5 m-20-r">
                        <div className=""><img src={farmname_icon} alt="" /></div>
                        <div className="flex column gap-5">
                            <div className="title">
                                FARM NAME
                            </div>
                            <div className="farm-name">{activeFarm.name}</div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className=""><img src={location_icon} alt="" /></div>
                        <div className="flex column gap-5">
                            <div className="title">
                                LONGITUDE
                            </div>
                            <div className="longi btn">{activeFarm.long}</div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex column gap-5">
                            <div className="title">
                                LATITUDE
                            </div>
                            <div className="lati btn">{activeFarm.lat}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section w-80">
            <FlowLine type="three" firstLineActive={true} secondLineActive={true} icon='completed'/>
            <div className="w-full farm-list-container">
                <div className="w-full flex gap-10">
                    <div className="flex column">
                        <div className="flex gap-5 m-20-r">
                            <div className=""><img src={farmname_icon} alt="" /></div>
                            <div className="flex column gap-5">
                                <div className="title">
                                    CROPS PRODUCED
                                </div>
                                <div className="grid-3 gap-5">
                                    {activeFarm.crops.map((item : any, index : number)=>(
                                        <div className="btn brown" key={index}>{item.cropId}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex column">
                        <div className="flex gap-5">
                            <div className="flex column gap-5">
                                <div className="title">
                                    DOCUMENTS
                                </div>
                                <div className="title">
                                    <img src={document_icon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section w-80">
            <FlowLine type="three" firstLineActive={true} hideThirdLine={true} icon='active'/>
            <div className="w-full flex column">
                <div className="p-10 w-full flex gap-20">
                    <img src={prev} alt=""  className='pointer' onClick={()=> {
                        if(activeIndex !== 0){
                            setActiveIndex(activeIndex - 1);
                        }
                    }}/>
                    <div className="circle-dots flex gap-5">
                        {formInputs.farmDetails.map((item : any, index : number)=>(
                            <img src={activeIndex == index ? dot_active : dot_inactive } alt={item.name} className='pointer'key={index} onClick={()=> setActiveIndex(index)}/>
                        ))}
                    </div>
                    <img src={next} alt="" className='pointer'  onClick={()=> {
                        if(activeIndex + 1 < formInputs.farmDetails.length){
                            setActiveIndex(activeIndex + 1);
                        }
                    }}/>
                </div>
                <div className="">
                    <FlowLine type="three" firstLineActive={true} secondLineActive={true} icon='completed' hide={true}/>
                    <div className="w-full text-center gap-10 line">
                    <hr className='w-full h-1' />  FARM 2 <hr className='w-full h-1'/>
                    </div>
                </div>
            </div>
        </div>
        <div className="section w-80">
            <FlowLine type="three" firstLineActive={true} secondLineActive={true} icon='completed' hide={true}/>
            <div className="p-20 w-full">
                <TextInput  label="FARM NAME" placeholder="Enter farm name" span="*" spanClass='font-8' updateFunction={setName} name='name'/>
            </div>
        </div>
        <div className="section w-80">
            <FlowLine type="three" step='three' firstLineActive={true} secondLineActive={true} icon='completed' hide={true}/>
            <div className="p-20 w-full flex column gap-10">
                <div className="label">Farm Coordinates <span className='font-14 italic'>(Optional)</span></div>
                <div className="flex gap-10">
                    <TextInput  label="" placeholder="Longitude" updateFunction={setLongitude} name='long'/>
                    <TextInput  label="" placeholder="Latitude" updateFunction={setLatitude} name='lat'/>
                </div>
                <div className="label"><span className='font-14 light'>Ex: Longitude: 8.6753° E. Latitude: 9.0820° N</span></div>
            </div>
        </div>
        <div className="section w-80">
            <FlowLine type="one" icon='active'  hide={true}/>
            <div className="p-20 w-full flex column gap-10">
                <div className="label">Crops cultivated and planting season</div>
                {cropsArray.map((i : any, index:number) => (
                    <div className="flex column gap-10 crop-container" key={index}>
                        <div className="w-full flex flex-justify-between p-20">
                            <div className="">CROP {index + 1 }</div>
                            <div className="pointer" onClick={()=> removeCrop(i.id)}>X</div>
                        </div>
                        <div className="w-full">
                            <SelectInput options={[i.cropId]} label='What crop do you cultivate on this farm?' updateFunction={setCropId} name='cropId'/>
                        </div>
                        <div className="flex gap-10 w-full">
                            <div className="p-20 w-full">
                                <SelectInput options={[i.farmSeasonStart]} label='Start month' updateFunction={setFarmSeasonStart} name='farmSeasonStart'/>
                            </div>
                            <div className="p-20 w-full">
                                <SelectInput options={[i.farmSeasonEnd]} label='End month' updateFunction={setFarmSeasonEnd} name='farmSeasonEnd'/>
                            </div>
                        </div>
                    </div>
                ))}

                {showAddNewCrop && <div className="flex column gap-10 crop-container p-20">
                    {cropsArray.length > 0  && <div className="w-full flex flex-justify-between p-20">
                        <div className="">CROP {cropsArray.length + 1} (unsaved)</div>
                        <div className="cursor-pointer"></div>
                    </div>}
                    <>
                        <div className="w-full">
                            <SelectInput options={crops} label='What crop do you cultivate on this farm?' updateFunction={setCropId} name='cropId'/>
                        </div>
                        <div className="flex gap-10 w-full">
                            <div className="p-20 w-full">
                                <SelectInput options={months} label='Start month' updateFunction={setFarmSeasonStart} name='farmSeasonStart'/>
                            </div>
                            <div className="p-20 w-full">
                                <SelectInput options={months} label='End month' updateFunction={setFarmSeasonEnd} name='farmSeasonEnd'/>
                            </div>
                        </div>
                    </>
                </div>}
                <div className="add-crop">
                    <div onClick={()=> {
                            addNewCrop();
                            setShowAddNewCrop(true);
                }} className='pointer'><span><img src={plus} alt="" /></span> {showAddNewCrop ? 'Save and add another crop' : 'Add another crop'}</div>
                    {showAddNewCrop && <div onClick={()=>{
                            addNewCrop();
                            setShowAddNewCrop(false);
                    }}className='pointer'>Save</div>}
                </div>
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
        <FormButtons step='one' active={isValid} onClickFunction={clickFunction }/>
        <ToastContainer />
    </div>
  )
}

export default AddFarmInputSections