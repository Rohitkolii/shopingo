import './Login.css'
import LoginItems from "../LoginItems/LoginItems";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SignUp from '../LoginItems/SignUp';

const Login = () => {

    const [loginclicked, setloginclicked] = useState(false)
    

    return(
        <div className="login">
            {
                !loginclicked ?

            <section className='Login-header'>
                    <Link className='back-btn' to='/'>&#10094;</Link>
                <div className='Login-intro'>
                    <img src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37355.jpg?w=996&t=st=1664011712~exp=1664012312~hmac=16c222f5cc93bf901b6fff50c055ab75398705e6617d30ae8e47b0f36de24642" alt="" />
                    <h1>Welcome To Shopingo</h1>
                    <p>Login using id : 'eve.holt@reqres.in' and password is 'eve.holt@reqres.in' Thank You.</p>
                    <button onClick={() => setloginclicked(!loginclicked)}>Sign Up</button>
                </div>

                <div className='Login-container'>
                    <LoginItems  setloginclicked={setloginclicked} />
                </div>
            </section>

            :

            <section className='Login-header'>
                    <Link className='back-btn' to='/'>&#10094;</Link>
                <div className='Login-intro'>
                    <img src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37355.jpg?w=996&t=st=1664011712~exp=1664012312~hmac=16c222f5cc93bf901b6fff50c055ab75398705e6617d30ae8e47b0f36de24642" alt="" />
                    <h1>Welcome To Shopingo</h1>
                    <p>Lorem ipsum adipisicing elit. Laborum culpa, tempora maxime vitae incidunt expedita.</p>
                    <button onClick={() => setloginclicked(!loginclicked)}>Login</button>
                </div>

                <div className='Login-container'>
                    <SignUp setloginclicked={setloginclicked} />
                </div>
            </section>

}

        </div>
    )
}

export default Login;