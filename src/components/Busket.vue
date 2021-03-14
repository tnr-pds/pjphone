<template>
  <div>
    <v-card class="mt-5">
      <v-card
        v-for="(item, key) in textListiphonepad"
        :key="key"
        class="pa-2"
        outlined
        tile
      >
        Email:{{ item.Email }}, ยี่ห้อ:{{ item.name }}, ราคา:{{ item.price * item.countped}},
        รุ่น:{{ item.version }}, จำนวน:{{ item.countped }}
        <img :src="item.img" alt="" />
      </v-card>
      <v-card
        v-for="(item, key) in textListiphone12"
        :key="key"
        class="pa-2"
        outlined
        tile
      >
        Email:{{ item.Email }}, ยี่ห้อ:{{ item.name }}, ราคา:{{ item.price * item.countped}},
        รุ่น:{{ item.version }}, จำนวน:{{ item.countped }}
        <img :src="item.img" alt="" />
      </v-card>
    </v-card>
    <input type="button" value="คิดเงิน" @click="cls()" />
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  data: function () {
    return {
      textListiphonepad: [],
      namee: null,
      textListiphone12:[],
    };
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        // User is signed in.
        //ให้แสดง ชื่อ รูป e-mail
        this.namee = user.displayName;
        // this.email = user.email
        // this.photoUrl = user.photoURL
      } else {
        // No user is signed in.
        //กลับไปหน้า login
        this.$router.replace("/login");
      }
    });
  },
  methods: {
    getData() {
      firebase
        .firestore()
        .collection("IPhonepad")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListiphonepad = data;
        });

        firebase
        .firestore()
        .collection("IPhone12")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListiphone12 = data;
        });
    },
    cls() {
      firebase
        .firestore()
        .collection("IPhonepad")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });

        firebase
        .firestore()
        .collection("IPhone12")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });

        
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style>
</style>