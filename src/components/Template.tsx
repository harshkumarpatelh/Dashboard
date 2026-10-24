import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import './Template.css'
import backImage from '../assets/juanjo-jaramillo-mZnx9429i94-unsplash.jpg'

export default function Template(props: any) {
    const { desc1, desc2, title, image, isSignup, setisLoggedIn } = props
    return (
        <div className='template-container'>
            <div className='form-container'>
                <h2>{title}</h2>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {isSignup ? (<SignupForm setisLoggedIn={setisLoggedIn} />) : (<LoginForm setisLoggedIn={setisLoggedIn} />)}


                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>

                <button>Signin with Google</button>
            </div>

            <div className='image-container'>
                <img src={image} className='foreground' />
                <img src={backImage} className='background' />
            </div>


        </div>
    )
}
