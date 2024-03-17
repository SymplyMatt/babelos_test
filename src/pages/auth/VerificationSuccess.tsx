import ImageHero from "../../components/auth/common/ImageHero"
import MobileNav from "../../components/auth/common/MobileNav"
import AuthPage from "../../components/common/AuthPage"
import AuthMain from "../../components/common/Main"
import success from '../../assets/success.svg'
const VerificationSuccess = () => {
  return (
    <AuthPage>
        <ImageHero page="login"/>
        <MobileNav />
        <AuthMain>
            <div className="flex column gap-20 overflow-scroll-y">
                <div className="flex column align-center  gap-20">
                    <div className="w-60 flex center column gap-10">
                        <div className="">
                            <img src={success} alt="" />
                        </div>
                        <div className="flex center column gap-10 title-section">
                            <div className="flex column text-center title">Verification successful</div>
                            <div className="flex column text-center desc">Your account has been verified, you can now proceed to your dashboard. </div>
                        </div>
                    </div>
                    <div className="w-60 flex column gap-10  center">
                        <div className={`w-full form-buttons`}>
                            <div className={`w-full flex align-center justify-center btn active green`}>Go to Dashboard</div>
                        </div>
                    </div>
                </div>
                <div className="flex column align-center  gap-10">
                    <div className="w-60 flex center column gap-10">
                        <div className="flex center column gap-10 title-section">
                            <div className="flex column text-center desc">Your account has been verified, you can now proceed to your dashboard. </div>
                        </div>
                    </div>
                    <div className="w-60 flex column gap-10  center">
                        <div className={`w-full form-buttons`}>
                            <div className={`w-full flex align-center justify-center btn active `}>Go to Marketplace</div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthMain>
    </AuthPage>
  )
}

export default VerificationSuccess