import { FaUser, FaLock, FaImage } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import PropTypes from 'prop-types';
import '../Login/LoginStyle.css'

const Registration = ({setIsClicked}) => {

    return (
        <div>
            {/* Registration page */}
            <div className="form-box register">
                <h2 className="animation" style={{ '--i': 17, '--j': 0 }}>Sign Up</h2>
                <form action="#">
                    <div className="input-box animation" style={{ '--i': 18, '--j': 1 }}>
                        <input type="text" required />
                        <label>Username</label>
                        <FaUser className="icon" />
                    </div>
                    <div className="input-box animation" style={{ '--i': 19, '--j': 2 }}>
                        <input type="Email" required />
                        <label>Email</label>
                        <MdEmail className="icon" />
                    </div>
                    <div className="animation upload" style={{ '--i': 20, '--j': 3 }}>
                        <span className="flex items-center hover:text-blue-500">
                            <input type="file" className="relative z-10 h-10 opacity-0" required />
                            <label className="absolute  border-2 border-t-0 border-x-0 top-0 h-10 border-b-blue-500 w-full text-black">Upload Your Photo</label>
                            <FaImage className="text-xl" />
                        </span>
                    </div>
                    <div className="input-box animation" style={{ '--i': 21, '--j': 4 }}>
                        <input type="password" required />
                        <label>Password</label>
                        <FaLock className="icon" />
                    </div>
                    <button type="submit" className="btn1 animation" style={{ '--i': 21, '--j': 4 }}>Sign Up</button>

                    <div className="logreg-link animation" style={{ '--i': 22, '--j': 5 }}>
                        <p>Already have an account? <a href="#" onClick={() => setIsClicked(false)} className="login-link">Login</a></p>
                    </div>
                </form>
            </div>
            {/* Left side Register Text */}
            <div className="info-text register">
                <h2 className="animation" style={{ '--i': 17, '--j': 0 }}>Welcome Back !</h2>
                <p className="animation" style={{ '--i': 18, '--j': 1 }}>Sign Up for getting full support of LifeCare.</p>
            </div>
        </div>
    );
};

Registration.propTypes={
    setIsClicked : PropTypes.func,
}

export default Registration;