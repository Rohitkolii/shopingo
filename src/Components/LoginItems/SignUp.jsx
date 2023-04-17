import './SignUp.css'

const SignUp = (props) => {
    return(
        <div className='SignUp'>
                                <h1>SignUp</h1>
                <p>SignUp and Enjoy Amazing Deals on Shoping.</p>
            <section className='google-login'>
                 
            </section>

            <form action="POST">
                <label>
                    @Username
                    <input type="text" placeholder='yourmail@gmail.com or contact'/>
                </label>

                <label>
                    Password
                    <input type="password" placeholder='min. 8 characters'/>
                </label>
                <label>
                    Confirm Password
                    <input type="password" placeholder='min. 8 characters'/>
                </label>

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