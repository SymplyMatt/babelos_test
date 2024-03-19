import React, { useContext } from 'react'
import farm_icon from '../../../assets/farm_icon.svg'
import { Context } from '../../../context/AuthContext';

interface ComponentProps {
    showOverlay : boolean;
  }
  
const OverlayAddFarm: React.FC<ComponentProps>  = ({showOverlay})  => {
    const { formInputs } = useContext(Context);
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
                    <div className="flex column text-center title">You have added {formInputs.farmDetails.length} {formInputs.farmDetails.length > 1 ? 'farms' : 'farm'}!</div>
                    <div className="flex column text-center desc">Would you like to add another farm? </div>
                </div>
            </div>
            <div className="w-full flex column gap-10  center">
                <div className={`w-full form-buttons column`}>
                    <div className={`w-full flex align-center justify-center btn active green m-40`}>No, create my account</div>
                    <div className={`w-full flex align-center justify-center btn active m-40`}>Yes, I have another farm</div>
                </div>
            </div>
        </div>
        </div>
    </div>}
    </>
)
}

export default OverlayAddFarm