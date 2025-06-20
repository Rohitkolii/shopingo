import { useState } from 'react'
import './LoginItems.css'
import { useNavigate } from 'react-router-dom'

import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginItems = (props) => {

    const navigate = useNavigate()

    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [check, setcheck] = useState(false)
    const [showpass, setShowpass] = useState(false)

    const LoginHandler = async (e) => {
        e.preventDefault()
        if(check){

            try {
                const res = await fetch(`${process.env.REACT_APP_URL}/api/auth/Login`,{
                method: "POST",
                headers: {
                     "Content-Type": "application/json"
                },
                body: JSON.stringify({email,password})
            })
            console.log(res);
            const data = await res.json()
            console.log(data);
            
            if(res.ok){
                localStorage.setItem('shopingotoken', data.token)
                localStorage.setItem('userid', data.userID)
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
            }else{
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
                    <input onChange={(e) => setemail(e.target.value)} type="text" name='loginusername' placeholder='@yourusername'/>
                </label>

                <label>
                    Password
                    <input onChange={(e) => setpassword(e.target.value)} type={showpass ? 'text' : 'password'} name='loginpassword' placeholder='min. 8 characters'/>
                    {
                        showpass ? 
                        <span onClick={()=> setShowpass(!showpass)} className='showpass'><AiOutlineEyeInvisible /></span>
                        :
                        <span onClick={()=> setShowpass(!showpass)} className='showpass'><AiOutlineEye /></span>
                    }
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