import React, { useContext } from 'react'
import farm_icon from '../../../assets/farm_icon.svg'
import { Context } from '../../../context/AuthContext';

interface ComponentProps {
    showOverlay : boolean;
    onClickFunction : Function;
    title : string;
  }
  
const OverlayFarm: React.FC<ComponentProps>  = ({showOverlay, onClickFunction, title})  => {
    const { loading, setLoading } = useContext(Context);
    const createAccount = () => {
        setLoading(true);
    }
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
    </>
)
}

export default OverlayFarm