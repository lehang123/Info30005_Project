import React from 'react';

function Login() {
  return(
      <body className="body">
      <div>Sign In</div>
      <div className="input-container">
        <input type="text" placeholder="Username or Email" required=""/>
      </div>
      <div className="input-container">
        <input type="text" placeholder="Password" required=""/>
      </div>
      <button>Next</button>
      <div id="login-link">Forgot Password / Sign Up</div>
      </body>
  )
}

export default Login;