import React from 'react'

const Login = ({username, setUsername, password, setPassword, authLogin}) => {
  return (
    //need a form consisting of 2 labels and 2 input fields
    //username, and password. 
    //also need a submit button at the botton
    //make the two input fields required so user must fill out both 
    //to submit
    <div>
        <form onSubmit={authLogin}>
            <label htmlFor='usernameInput'>Username: </label>
            <input 
                required
                type='text'
                placeholder='Enter Username'
                id='usernameInput'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor='passwordInput'>Password: </label>
            <input 
                required
                type='password'
                placeholder='Enter Password'
                id='passwordInput'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login