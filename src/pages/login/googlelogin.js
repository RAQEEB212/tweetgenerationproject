import { GoogleLogin } from 'react-google-login'

const clientId = "573694337447-kfqhh53vknfg2n7apfugcatb1sc43g0c.apps.googleusercontent.com";

function LoginGoogle() {

  const onSuccess =(res) => {
    console.log("LOGIN SUCCESS! Current user: ",res.profileObj);
  }

  const onFailure = (res) =>{
    console.log("LOGIN FAILED res: ",res);
  }

  return(
    <div id="signInButton">
      <GoogleLogin
        clientId ={clientId}
        buttonText  = "Login"
        onSucess ={onSuccess}
        onFailure ={onFailure}
        cookiePolicy ={'single_host_origin'}
        isSignedIn = {true}
      />

    </div>

  )
}

export default LoginGoogle;
