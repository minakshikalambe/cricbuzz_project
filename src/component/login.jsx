import { Navbar } from "./Navbar"
import { Footer } from "./footer";
import "./login.css"
import mail from "./images/mail.png"
export const Login=()=>{
    
    return(
        <>
        <Navbar/>
        <div className="login_container">
          <div className="login_container1">
          </div>
          <div className="login_container2">
            <div className="login_title">
            <h2>Login / Sign Up</h2>
            </div>
            <div className="login_p">
                <p>We will send OTP to your email id</p>
            </div>
            <div className="login_input">
                <span><img src={mail} /></span>
                <span><input/></span>
            </div>
            <div className="plolicy_privacy">
            <input type="checkbox" />
            <span>I agree with the Terms of Use and Privacy Policy of Cricbuzz</span>
            </div>
            <div className="button_div">
                <button>Contiue</button>
            </div>
          </div>
        </div>
        <Footer/>
        </>
    )
}