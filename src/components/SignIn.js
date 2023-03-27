import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './SignIn.css';

function SignIn() {
    const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        if(password !== confirmPassword)
        {
          alert("password Not Match");
        }
        else
        {
          alert('A form was submitted with Name :"' + name +
          '" ,Age :"' + age +'" and Email :"' + email + '"');
        }
        e.preventDefault();
      }

    return ( 
        <div className="App">
            <header className="App-header">
                <form onSubmit={(e) => {handleSubmit(e)}}>
                    <h2>Create an account with us today :)</h2>
                    <div>
                        <label >Name:</label><br/>
                        <input type="text" value={name} required onChange={(e) => {handleNameChange(e)}} /><br/>
                    </div>
                    <div>
                        <label >Age:</label><br/>
                        <input type="text" value={age} required onChange={(e) => {handleAgeChange(e)}} /><br/>
                    </div>
                    <div>
                        <label >Email:</label><br/>
                        <input type="text" value={email} required onChange={(e) => {handleEmailChange(e)}} /><br/>
                    </div>
                    <div>
                        <label >Password:</label><br/>
                        <input type="password" value={password} required onChange={(e) => {handlePasswordChange(e)}} /><br/>
                    </div>
                    <div>
                        <label >Confirm Password:</label><br/>
                        <input type="password" value={confirmPassword} required onChange={(e) => {handleConfirmPasswordChange(e)}} /><br/>
                    </div>
                    <div>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </header>
        </div>
     );
}

export default SignIn;
