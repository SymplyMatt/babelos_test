import React from 'react'
import farm_icon from '../../../assets/farm_icon.svg'

interface ComponentProps {
    showOverlay : boolean;
    onClickFunction : Function;
    title : string;
  }
  
const OverlayFarm: React.FC<ComponentProps>  = ({showOverlay, onClickFunction, title})  => {
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
                    <div className={`w-full flex align-center justify-center btn active green m-40`}>No, create my account</div>
                    <div className={`w-full flex align-center justify-center btn active m-40`} onClick={()=>{
                        onClickFunction && onClickFunction();
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