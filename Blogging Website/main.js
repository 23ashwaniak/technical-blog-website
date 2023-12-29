const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCE5mkfu4av9sLmezXrsJMNs7Lw42DsyA0",
  authDomain: "tech-login-f469a.firebaseapp.com",
  projectId: "tech-login-f469a",
  storageBucket: "tech-login-f469a.appspot.com",
  messagingSenderId: "28265477123",
  appId: "1:28265477123:web:03aa4e19db700d3ebf0a36",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

//sign up
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      alert("Your account has been Successfully Created.");
      console.log(result);
      // ...
    })
    .catch((error) => {
      alert("Your entered data is Incorrect");
      console.log(error.code);
      console.log(error.message);
      // ..
    });
};
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      alert("Your account has been verified.");
      console.log(result);
      // ...
    })
    .catch((error) => {
      alert("Your entered data is Incorrect");
      console.log(error.code);
      console.log(error.message);
    });
};
