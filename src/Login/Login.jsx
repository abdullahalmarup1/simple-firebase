import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init ";
import { useState } from "react";
const Login = () => {

    const [user, setUser] = useState(null)

    const auth = getAuth(app)
    // console.log(app)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)

            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);

            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser (loggedUser);
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            {/* jodi user thake tahole log Out btn dekhabo r jodi user na thake tahole log in  btn dekhabo ekhane log out btn upore dite hobe */}



            {
                user ?
                    <button
                        onClick={handleGoogleSignOut}>
                        Sign Out</button> :
                    <>
                        <button
                            onClick={handleGoogleSignIn}>
                            Google Login</button>
                        <button
                            onClick={handleGithubLogin}>
                            Github Login</button>
                    </>
            }





            {user &&
                <>
                    <h2>Users:{user.displayName}</h2>
                    <p>Email:{user.email}</p>
                    <img src={user.photoURL} alt="photo" />
                </>
            }
        </>

    );
};

export default Login;

