import ImageHero from "../../components/auth/common/ImageHero"
import MobileNav from "../../components/auth/common/MobileNav"
import AuthPage from "../../components/common/AuthPage"
import AuthMain from "../../components/common/Main"
import warning from '../../assets/warning.svg'
const Verify = () => {
  return (
    <AuthPage>
        <ImageHero page="login"/>
        <MobileNav />
        <AuthMain>
            <div className="flex column align-center  gap-20">
                <div className="w-60 flex center column gap-10">
                    <div className="">
                        <img src={warning} alt="" />
                    </div>
                    <div className="flex center column gap-10 title-section">
                        <div className="flex column text-center title">Verification required</div>
                        <div className="flex column text-center desc">A 5 digit verification code has been sent to <br /> <span>+2348136801222</span> </div>
                    </div>
                </div>
                <div className="w-60 flex gap-10 column">
                    <div className="thick text-center">Enter verification code</div>
                    <div className="w-full gap-10 verify-inputs">
                        <div className=""><input type="text" className="text-center"/></div>
                        <div className=""><input type="text" className="text-center"/></div>
                        <div className=""><input type="text" className="text-center"/></div>
                        <div className=""><input type="text" className="text-center"/></div>
                        <div className=""><input type="text" className="text-center"/></div>
                    </div>
                </div>
                <div className="w-60 flex column gap-10  center">
                    <div className={`w-full form-buttons`}>
                        <div className={`w-full flex align-center justify-center btn inactive green`}>Continue</div>
                    </div>
                    <div className="font-14">Didn't resend the code? <span className='thick'>Resend in </span> <span className='thick red pointer'>01:29</span></div>
                </div>
            </div>
        </AuthMain>
    </AuthPage>
  )
}

export default Verify