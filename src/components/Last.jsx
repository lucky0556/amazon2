import './last.css'
import styles from "./last2.module.css";
import image1 from '../assets/amazon-logo-white.png'
function Last()
{
    return(
        <div className='page'>
        <div className={styles.bottom}>
            <div className='div1'>
                <p className='head'>Get to Know Us</p>
                <p className='under'>About Amazon</p>
                <p className='under'>Careers</p>
                <p className='under'>Press Releases</p>
            </div>

            <div className='div1'>
            <p className='head'>Connect with Us</p>
                <p className='under'>Facebook</p>
                <p className='under'>Twitter</p>
                <p className='under'>Instagram</p>
            </div>

            <div className='div1'>
            <p className='head'>Make Money with Us</p>
                <p className='under'>Sell on Amazon</p>
                <p className='under'>Sell under Amazon</p>
                <p className='under'>Accelerator</p>
                <p className='under'>Protect and Build Your Brand</p>
                <p className='under'>Amazon Global Selling</p>
                <p className='under'>Supply to Amazon</p>
                <p className='under'>Become an Affiliate</p>
            </div>

            <div className='div1'>
            <p className='head'>Let Us Help You</p>
                <p className='under'>Your Account</p>
                <p className='under'>Returns Centre</p>
                <p className='under'>Recalls and Product Safety Alerts</p>
                <p className='under'>Amazon App Download</p>
                <p className='under'>Help</p>
            </div>

        </div>
        <div className='end'>
            <img className='ph' src={image1}/>
            <button className='co'>
                <img className='icon' src='data:image/jpeg;base64,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' />
                <p>India</p>
                </button>
        </div>

        <div className='down'>
            <div className='las'>
            <p className='under1'>Condition of Use & Sale </p>
            <p className='under1'>Privacy Notice</p>
            <p className='under1'>Interest-Based Ads</p>
            </div>
            <div className='las'>
            <p>1996-2025, Amazon.com,Inc. or its affliliates</p>
        </div>
        </div>
        
        </div>
    )
}
export default Last;