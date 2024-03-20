import ImageHero from "../../components/auth/common/ImageHero"
import MobileNav from "../../components/auth/common/MobileNav"
import AuthPage from "../../components/common/AuthPage"
import AuthMain from "../../components/common/Main"
import pending from '../../assets/pending.svg'
import AnimatedPage from "./AnimatedPage"
const ApprovalPending = () => {
  return (
    <AnimatedPage>
        <AuthPage>
            <ImageHero page="login"/>
            <MobileNav />
            <AuthMain>
                <div className="flex column gap-20 overflow-scroll-y">
                    <div className="flex column align-center  gap-20">
                        <div className="w-60 flex center column gap-10">
                            <div className="">
                                <img src={pending} alt="" />
                            </div>
                            <div className="flex center column gap-10 title-section">
                                <div className="flex column text-center title">Approval pending</div>
                                <div className="flex column text-center desc">You will gain full access to dashboard upon successful approval. </div>
                            </div>
                        </div>
                        <div className="w-60 flex column gap-10  center">
                            <div className={`w-full form-buttons`}>
                                <div className={`w-full flex align-center justify-center btn active green`}>Go to Marketplace</div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthMain>
        </AuthPage>
    </AnimatedPage>
  )
}

export default ApprovalPending