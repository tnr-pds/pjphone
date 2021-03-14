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
      namee: null,
      textListiphonepad: [],
      textListiphone12:[],
      textListIPhoneSE64GB: [],

      textListsamsungGalaxyA30s: [],
      textListsamsungGalaxyA01: [],
      textListsamsungGalaxyA50S: [],

      textListoppoReno5Pro5G: [],
      textListoppoReno4: [],
      textListoppoA93: [],

      textListXiaomiMi10TPro5G: [],
      textListXiaomiMiA3: [],
      textListXiaomiRedminote8: [],
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

    //-----------------------------IPHONE
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
        
        firebase
        .firestore()
        .collection("IPhoneSE64GB")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListIPhoneSE64GB = data;
        });

        //-----------------------------SAMSUNG
      firebase
        .firestore()
        .collection("samsungGalaxyA30s")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListsamsungGalaxyA30s = data;
        });
        firebase
        .firestore()
        .collection("samsungGalaxyA01")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListsamsungGalaxyA01 = data;
        });
        firebase
        .firestore()
        .collection("samsungGalaxyA50S")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListsamsungGalaxyA50S = data;
        });

          //-----------------------------OPPO
      firebase
        .firestore()
        .collection("oppoReno5Pro5G")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListoppoReno5Pro5G = data;
        });
        firebase
        .firestore()
        .collection("oppoReno4")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListoppoReno4 = data;
        });
        firebase
        .firestore()
        .collection("oppoA93")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListoppoA93 = data;
        });

          //-----------------------------XIAOMI
      firebase
        .firestore()
        .collection("XiaomiMi10TPro5G")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListXiaomiMi10TPro5G = data;
        });
        firebase
        .firestore()
        .collection("XiaomiMiA3")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListXiaomiMiA3 = data;
        });
        firebase
        .firestore()
        .collection("XiaomiRedminote8")
        .orderBy("idname")
        .onSnapshot((querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          this.textListXiaomiRedminote8 = data;
        });
    },
    cls() {

      //-----------------------------IPHONE---CLS
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

        firebase
        .firestore()
        .collection("IPhoneSE64GB")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });

        //-----------------------------SAMSUNG---CLS
      firebase
        .firestore()
        .collection("samsungGalaxyA30s")
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
        .collection("samsungGalaxyA01")
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
        .collection("samsungGalaxyA50S")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });

        //-----------------------------OPPO---CLS
      firebase
        .firestore()
        .collection("oppoReno5Pro5G")
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
        .collection("oppoReno4")
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
        .collection("oppoA93")
        .doc(this.namee)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });

        //-----------------------------XIAOMI---CLS
      firebase
        .firestore()
        .collection("XiaomiMi10TPro5G")
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
        .collection("XiaomiMiA3")
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
        .collection("XiaomiRedminote8")
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