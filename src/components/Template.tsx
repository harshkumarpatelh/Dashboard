import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import './Template.css'
import backImage from '../assets/juanjo-jaramillo-mZnx9429i94-unsplash.jpg'

export default function Template(props: any) {
    const { desc1, desc2, title, image, isSignup } = props
    return (
        <div>
            <div>
                <h2>{title}</h2>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {isSignup ? (<SignupForm />) : (<LoginForm />)}
            </div>

            <div>
                <img src={image} />
                <img src={backImage} />
            </div>
        </div>
    )
}
