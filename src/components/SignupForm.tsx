import { useState, type ChangeEvent, type SubmitEvent } from 'react'
import './SignupForm.css'
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import CONSTANT from '../common/constant';

interface userData {
    firstName: string | undefined,
    lastName: string | undefined,
    email: string | undefined,
    password: string | undefined,
    comfirmPassword: string | undefined
}

function SignupForm({ setisLoggedIn }: any) {
    const [userData, setUserData] = useState<userData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        comfirmPassword: ''
    })

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function submitHandler(e: SubmitEvent) {
        e.preventDefault()
        setisLoggedIn(true)

        if (userData.password !== userData.comfirmPassword) {
            toast.error("Password and confirm password do not match")
            return
        }
        toast.success("Account created")
        navigate(CONSTANT.ROUTES.DASHABORD)

        console.log("User data", userData)

    }


    function changeHandler(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.currentTarget

        setUserData(() => ({
            ...userData,
            [name]: value
        }))
    }

    function showPasswordHandler() {
        setShowPassword((prev) => !prev)
    }


    function showConfirmPasswordHandler() {
        setShowConfirmPassword((prev) => !prev)

    }



    return <div>
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>

        <form onSubmit={submitHandler}>
            <div>
                <label>
                    <p>First Name<sup>*</sup></p>
                    <input
                        required
                        type="text"
                        placeholder='Enter your first name'
                        name="firstName"
                        onChange={changeHandler}
                    >

                    </input>
                </label>

                <label>
                    <p>Last Name<sup>*</sup></p>
                    <input
                        required
                        type="text"
                        placeholder='Enter your last name'
                        name="lastName"
                        onChange={changeHandler}
                    >

                    </input>
                </label>
            </div>

            <label>
                <p>Email<sup>*</sup></p>
                <input
                    required
                    type="email"
                    placeholder='Enter your email address'
                    name="email"
                    onChange={changeHandler}
                >

                </input>
            </label>


            <label>
                <p>Password<sup>*</sup></p>
                <input
                    required
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    name="password"
                    onChange={changeHandler}
                >
                </input>
                {showPassword ? (<ImEyeBlocked onClick={showPasswordHandler}></ImEyeBlocked>) : (<ImEye onClick={showPasswordHandler}></ImEye>)}
            </label>

            <label>
                <p>Confirm Password<sup>*</sup></p>
                <input
                    required
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='Confirm Password'
                    name="comfirmPassword"
                    onChange={changeHandler}
                >

                </input>
                {showConfirmPassword ? (<ImEyeBlocked onClick={showConfirmPasswordHandler}></ImEyeBlocked>) : (<ImEye onClick={showConfirmPasswordHandler}></ImEye>)}
            </label>

            <button>Create account</button>
        </form>
    </div>
}

export default SignupForm