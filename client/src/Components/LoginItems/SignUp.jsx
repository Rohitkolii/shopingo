import { useState } from 'react'
import './SignUp.css'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {

    // const navigate = useNavigate()
    
    const [isLoading, setisLoading] = useState(false);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");

    const signupHandler = async (e) => {
        e.preventDefault()
        setisLoading(true)

        try {
            const data = {
                username: name,
                email: email,
                password: pass
            }

            const response = await fetch(`${process.env.REACT_APP_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
                });


            if(response.ok){
                toast.success('User Created Succefully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            props.setloginclicked(false)
            }

            if(!response.ok){
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
            

            setisLoading(false)
        } catch (error) {
            console.log(error);
            setisLoading(false)
        }
        // alert('Sign Up Functinality is not Active!')
    }

    return( 
        <div className='SignUp'>
                                <h1>SignUp</h1>
                <p>SignUp and Enjoy Amazing Deals on Shoping.</p>
            <section className='google-login'>
                 {/* space for social login */}
            </section>

            <form onSubmit={signupHandler}>
                <label>
                    @Username
                    <input onChange={(e)=> setname(e.target.value)} value={name} type="text" placeholder='Enter your name'/>
                </label>

                <label>
                    Email
                    <input onChange={(e)=> setemail(e.target.value)} value={email} type="text" placeholder='yourmail@gmail.com or contact'/>
                </label>

                <label>
                    Password
                    <input onChange={(e)=> setpass(e.target.value)} value={pass} type="password" placeholder='min. 8 characters'/>
                </label>
                {/* <label>
                    Confirm Password
                    <input type="password" placeholder='min. 8 characters'/>
                </label> */}

                <div className='checkbox' >
                    <p><input type="checkbox"/> Remember me</p>
                    <a href="/">Forget Password?</a>
                </div>

                    <input type="submit" value="Sign Up" />
            </form>

            <div className='Registration-para'>
                <p>Have an Account? <button onClick={()=> {props.setloginclicked(false)}}>Login</button></p>
            </div>
        </div>
    )
}

export default SignUp;