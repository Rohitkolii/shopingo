import { useState } from 'react'
import './LoginItems.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginItems = (props) => {

    const navigate = useNavigate()

    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [check, setcheck] = useState(false)

    const LoginHandler = async (e) => {
        e.preventDefault()
        if(check){

            try {
                const res = await axios.post('https://reqres.in/api/login',{
                email: email,
                password: password
            })
            localStorage.setItem('shopingotoken', res.data.token)
            
            toast.success('Login Successfull!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate('/shop')
            

            } catch (error) {
                toast.error('Something went wrong!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        } else{
            toast.info('Please fill Checkbox!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }


    return(
        <div className="LoginItems">
                <h1>Login</h1>
                <p>Login and Enjoy Amazing Deals on Shoping.</p>
            <section className='google-login'>
                 
            </section>

            <form onSubmit={LoginHandler}>
                <label>
                    @Username
                    <input onChange={(e) => setemail(e.target.value)} type="text" placeholder='@yourusername'/>
                </label>

                <label>
                    Password
                    <input onChange={(e) => setpassword(e.target.value)} type="password" placeholder='min. 8 characters'/>
                </label>

                <div className='checkbox' >
                    <p><input id='check' onChange={()=> setcheck(!check)} type="checkbox"/> <label htmlFor="check"> Remember me</label></p>
                    <a href="/">Forget Password?</a>
                </div>
                    <button>Login</button>
            </form>

            <div className='Registration-para'>
                <p>Not registered yet? <button onClick={() => props.setloginclicked(true)}>Create an Account</button></p>
            </div>
        </div>
    )
}

export default LoginItems;