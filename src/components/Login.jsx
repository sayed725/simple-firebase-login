import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase.init";
import { useState } from "react";

const Login = () => {
    const [user , setUser] = useState(null)

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()


const handleGithubSignIn=()=>{
signInWithPopup(auth,githubProvider)
.then(result=>{
    console.log(result.user)
    setUser(result.user)
})
.catch(error=>console.log(error))
}



    const handleGoogleSignIn = ()=>{
       signInWithPopup(auth,googleProvider)
       .then(result=>{
        console.log(result.user)
        setUser(result.user)
       })
       .catch(error=>console.log(error))
    }

    const handleSignOut =()=>{
      signOut(auth)
      .then(result=>{
        console.log(result)
        setUser(null)
      })
      .catch((error) => {
       console.log(error)
      });
    }







    return (
        <div className="mx-auto text-center pt-10 flex gap-5 justify-center">

            {
                user?  <button onClick={handleSignOut} 
                className="btn"> SignOut</button> :
               <div className="flex gap-5">
                 <button onClick={handleGoogleSignIn} 
                className="btn"> Login with Google</button>
                 <button onClick={handleGithubSignIn} 
                className="btn"> Login with GitHub</button>
               </div>
            }

            {
                user && <div className="pt-10 flex flex-col gap-5">
                    <h4 className="text-2xl font-bold text-blue-700">{user.displayName}</h4>
                    <p className="text-xl font-semibold">Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;