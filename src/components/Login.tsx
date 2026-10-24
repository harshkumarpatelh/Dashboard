import './Login.css'
import loginImage from '../../src/assets/girl_study.jpeg'
import Template from './Template'
function Login({ setisLoggedIn }: any) {
    const login = {
        desc1: "Welcome back! Sign in to pick up right where you left off.",
        desc2: "Access your dashboard, saved items and personalized recommendations.",
        title: "Log in to your account",
        image: loginImage,
        isSignup: false,
        setisLoggedIn,
    }


    return <div>
        <Template {...login} />
    </div>
}

export default Login