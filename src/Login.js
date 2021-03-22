import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import { auth, provider } from './firebase';
import { actionTypes } from "./reducer";
import { useStateValue} from "./StateProvider";
function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        }).catch((error) => (alert(error.message)));
    };
    return (
        <div className="login">
           
                <div className="login__container">
                    <img
                     src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/12/WhatsApp-hed-796x419.jpg"
                     alt=" "
                     />
                     <div className= "login__text">
                         <h1>Sign in to Naveen's whatsapp</h1>
                     </div>

                     <Button onClick={signIn}>
                         Sign In with Google 
                     </Button>
                </div>
            
        </div>
    )
}

export default Login;
