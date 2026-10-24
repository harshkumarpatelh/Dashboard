import './Singup.css'
import signupImage from '../../src/assets/cute-happy-girl-studying.jpg'
import Template from './Template'
function Singup({ setisLoggedIn }: any) {
    const signup = {
        desc1: "Join us today and create your free account in under a minute.",
        desc2: "Get started with exclusive features, easy tracking and updates made for you.",
        title: "Create your account",
        image: signupImage,
        isSignup: true,
        setisLoggedIn
    }



    return <div>
        <Template {...signup} />
    </div>
}

export default Singup