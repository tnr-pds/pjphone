<template>
  <div>
    <h1>Login</h1>
    <input type="button" value="Login" @click="login()" />
    <input type="button" value="Logout" @click="logout()" />
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          const credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          const token = credential.accessToken;
          console.log(token);
          // The signed-in user info.
          const user = result.user;
          console.log(user);
          // ...
          this.$router.replace('/')
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          console.log(errorCode);
        });
    },
    logout() {
      firebase.auth().signOut().then(() => {
          // Sign-out successful.
          console.log('Sign-out successful.')
          this.$router.replace('/index') //ทำไป index ไม่ได้ 
        })
        .catch((error) => {
          // An error happened.
          console.log(error)
        })
    },
  },
};
</script>