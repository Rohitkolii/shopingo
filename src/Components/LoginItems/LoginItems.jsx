import { useState } from 'react'
import './LoginItems.css'
const LoginItems = (props) => {

    const [email, setemail] = useState()
    const [password, setpassword] = useState()


    return(
        <div className="LoginItems">
                <h1>Login</h1>
                <p>Login and Enjoy Amazing Deals on Shoping.</p>
            <section className='google-login'>
                 
            </section>

            <form>
                <label>
                    @Username
                    <input onChange={(e) => setemail(e.target.value)} type="text" placeholder='@yourusername'/>
                </label>

                <label>
                    Password
                    <input onChange={(e) => setpassword(e.target.value)} type="password" placeholder='min. 8 characters'/>
                </label>

                <div className='checkbox' >
                    <p><input type="checkbox"/> Remember me</p>
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