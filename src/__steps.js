//                                                                           *Initial installation
 
 // step 1: visit - console.firebase.google.com
// step 2: create project (skip google analytics)   
// step 3: register config
// install firebase
// add config file to your project
// Danger: Do not publish or make firebase config to public by pushing those to github  
                  
                   // *Integration
                   
// Go to docs > build > authentication > web > get started
// export app from the firebase .config.js file : export default app
// Login.jsx : import getAuth from firebase/auth
// create const auth = getAut(app)                                                                                                                                    *Provider Setup             

// import googleAuthProvider and create a new provider
// use signInwithPopUp and pass auth and Provider
// activate sign in method such as google,facebook,github etc
// [vite] : change 127.0.0.1 to localhost
// 
//                     *More auth Provider 
// 
// activate the auth provider  (create app, provide redirect url,client id ,client secret)