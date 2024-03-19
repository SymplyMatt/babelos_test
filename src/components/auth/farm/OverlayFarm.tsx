import React, { useContext } from 'react'
import farm_icon from '../../../assets/farm_icon.svg'
import { Context } from '../../../context/AuthContext';
import sendRequest from '../../../config/fetchData';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface ComponentProps {
    showOverlay : boolean;
    onClickFunction : Function;
    title : string;
  }
  
const OverlayFarm: React.FC<ComponentProps>  = ({showOverlay, onClickFunction, title})  => {
    const { loading, setLoading, formInputs } = useContext(Context);
    const navigate = useNavigate();
    const createAccount = async () => {
        try {
            setLoading(true);
            const farmDetails = [...formInputs.farmDetails];
            farmDetails.forEach(item => {
                delete item.id
                item.crops.forEach((crop : any) => {
                    delete crop.cropname;
                    delete crop.id;
                });
            }); 
            const reqData = {
                "userDetails": {
                    "firstName": formInputs.firstName,
                    "lastName": formInputs.lastName,
                    "credential": formInputs.credential,
                    "email": formInputs.email,
                    "password": formInputs.password,
                    "roleName": formInputs.roleName,
                    "gender": formInputs.gender,
                    "resAddress": formInputs.resAddress,
                    "ageGroup": formInputs.ageGroup,
                    "hasBankAccount": formInputs.hasBankAccount == 'Yes' ? 'true' : 'false',
                    "hasSmartphone": formInputs.hasSmartphone == 'Yes' ? true : false,
                    "profilePic": {
                        "url": formInputs.profilePic
                    }
                },
                "idUpload": {
                    "idType": formInputs.idType,
                    "url": formInputs.idurl
                },
                "siteId": formInputs.siteId,
                "bankDetails": {
                    "accountNumber": formInputs.accountNumber,
                    "bankName": formInputs.bankName
                },
                "farmDetails":farmDetails
            }
            const response: any = await sendRequest('post', `/signup`,reqData);
            setLoading(false);
            if (response.status === 200) {
                navigate('/auth/verify', { state: { auth : true }});
                
            } else {
                setLoading(false);
                toast.error(response.message);
            }
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
    };
    return (
    <>
        {showOverlay && <div className="overlay-farm">
        <div className="flex column gap-20 overflow-scroll-y">
        <div className="flex column align-center  gap-20 m-50">
            <div className="w-full flex center column gap-10">
                <div className="">
                    <img src={farm_icon} alt="" />
                </div>
                <div className="flex center column gap-10 title-section">
                    <div className="flex column text-center title">{title}</div>
                    <div className="flex column text-center desc">Would you like to add another farm? </div>
                </div>
            </div>
            <div className="w-full flex column gap-10  center">
                <div className={`w-full form-buttons column`}>
                    <div className={`w-full flex align-center justify-center btn ${!loading ? 'active' : 'inactive'} green m-40`} onClick={()=>{
                        !loading && createAccount();
                    }}>{!loading && 'No, create my account'} {loading && <i className="fa-solid fa-spinner spinner"></i>}</div>
                    <div className={`w-full flex align-center justify-center btn active m-40  ${loading && 'not-allowed'}`} onClick={()=>{
                        !loading && onClickFunction && onClickFunction();
                    }}>Yes, I have another farm</div>
                </div>
            </div>
        </div>
        </div>
    </div>}
        <ToastContainer />
    </>
)
}

export default OverlayFarm