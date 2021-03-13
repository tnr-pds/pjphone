<template>
  <div>
    <v-card class="mt-5">
      <v-card
        v-for="(item, key) in textList"
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
      textList: [],
      namee: null,
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
        .collection("IPhone")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textList = data;
        });
    },
    cls() {
      firebase
        .firestore()
        .collection("IPhone")
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