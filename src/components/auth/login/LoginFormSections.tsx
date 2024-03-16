import FlowLine from '../common/FlowLine'
import fingerprint from '../../../assets/fingerprint_login.svg'
const LoginInputSections = () => {

  return (
    <div className="form-area">
        <div className="section w-80">
            <div className="visibility-hidden">
                <FlowLine type="one" />
            </div>
            <div className="p-20 w-full flex column gap-10">
                <div className="w-full password-input-container">
                    <div className="label">Email address/ Phone number <span className='font-8'>*</span></div>
                    <div className="input-div w-full password">
                        <input type='password' placeholder='Enter email or phone number' className=''/>
                        {/* <div className=""><i className="fa-regular fa-eye"></i></div> */}
                    </div>
                </div>
                <div className="password-checks">
                    <div className="">Phone number must have country code. E.g. +234.</div>
                </div>
            </div>
        </div>
        <div className="section w-80">
            <div className="visibility-hidden">
                <FlowLine type="three" />
            </div>
            <div className="p-20 w-full flex column gap-10">
                <div className="w-full password-fingerprint-container">
                    <div className="w-full password-input-container">
                        <div className="label">Password <span className='font-8'>*</span></div>
                        <div className="input-div w-full password">
                            <input type='password' placeholder='Enter Password' className=''/>
                            <div className=""><i className="fa-regular fa-eye"></i></div>
                        </div>
                    </div>
                    <div className="flex align-center">
                        <img src={fingerprint} alt="" />
                    </div>
                </div>
                <div className="password-checks">
                    <div className="">Phone number must have country code. E.g. +234.</div>
                </div>
            </div>
        </div>
        <div className="section w-80 m-s">
            <div className="visibility-hidden">
                <FlowLine type="three" />
            </div>
            <div className="w-full flex between align-center">
                <div className="font-14 flex align-center">
                    <input type="checkbox" name="" id="" />
                    Remember for 30 days
                </div>
                <div className="font-14 green flex align-center pointer">
                    Forgot Password?
                </div>
            </div>
        </div>
        <div className="section w-80">
            <div className="visibility-hidden">
                <FlowLine type="three" />
            </div>
            <div className="flex column gap-10 w-full center">
                <div className={`w-full form-buttons`}>
                    <div className={`w-full flex align-center justify-center btn active green`}
                    >Login</div>
                </div>
                <div className="font-14">Don't Have an account? <span className='green pointer'>Sign Up</span></div>
            </div>
        </div>

        
    </div>
  )
}

export default LoginInputSections