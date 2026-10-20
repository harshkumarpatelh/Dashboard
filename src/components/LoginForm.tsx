import { useState, type ChangeEvent } from 'react'
import './LoginForm.css'



function LoginForm() {
    const [formData, setFormData] = useState({});

    console.log("formData", formData)
    function changeHandler(e: ChangeEvent<HTMLInputElement>) {
        const { value, name } = e.currentTarget

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }
    return <div>
        <form>
            <label>
                <p>Email Address</p>
                <input required type='email' onChange={changeHandler} name='email' placeholder='Enter email id' />
            </label>

            <label>
                <p>Password</p>
                <input required type='password' onChange={changeHandler} name="password" placeholder='Enter password' />
            </label>

        </form>
    </div>
}

export default LoginForm