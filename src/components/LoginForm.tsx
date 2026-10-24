import { useState, type ChangeEvent, type SubmitEvent } from 'react'
import './LoginForm.css'
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import CONSTANT from '../common/constant';


function LoginForm({ setisLoggedIn }: any) {
    const [formData, setFormData] = useState({});

    const navigate = useNavigate()

    console.log("formData", formData)

    const [isEyeOpen, setIsEyeOpen] = useState(false)
    const [type, setType] = useState('password');
    function changeHandler(e: ChangeEvent<HTMLInputElement>) {
        const { value, name } = e.currentTarget

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }


    function showPasswordHandler(toShow: 'text' | "password") {
        if (toShow === 'text') {
            setType('text')
            setIsEyeOpen(true)
        }
        else {
            setType('password')
            setIsEyeOpen(false)
        }
    }


    function submitHandler(e: SubmitEvent) {
        e.preventDefault()
        setisLoggedIn(true)
        toast.success("Loggedin Done")
        navigate(CONSTANT.ROUTES.DASHABORD)

    }




    return <div>
        <form onSubmit={submitHandler}>
            <label>
                <p>Email Address</p>
                <input required type='email' onChange={changeHandler} name='email' placeholder='Enter email id' />
            </label>

            <label>
                <p>Password</p>
                <input required type={type} onChange={changeHandler} name="password" placeholder='Enter password' />
                {isEyeOpen ? <ImEyeBlocked onClick={() => showPasswordHandler('password')} /> :
                    <ImEye onClick={() => showPasswordHandler('text')} />
                }


                <Link to='#'>
                    <p>Forgot Password</p>
                </Link>
            </label>

            <button>Sign in</button>

        </form>
    </div>
}

export default LoginForm