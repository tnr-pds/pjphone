<template>
  <div class="hello">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.0-9/157431671_2900951636807190_7979814492035256168_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeFRBHK63qgP00uBax3vJkTvhnv46BXJKSqGe_joFckpKiC987-8Ia6aXWdomBXMW0-f6FmFNAznIDTcXWW_-fFu&_nc_ohc=-vNg4u2tofAAX_V4d8u&_nc_oc=AQnNrQCo6DoQUEBillkoy1Prp6UbEu2raL8RRDSKzgQAgL-Zro2kZmYry3GO2hQ7uns&_nc_ht=scontent.fbkk13-2.fna&oh=ee24f9db08d68c86a42af56d957542bf&oe=606E1911"
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/157742524_2900994010136286_8551377207479900448_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeF3W8fKidh4pdAIvdWRECR2YQhuBGRbO5ZhCG4EZFs7lipKna7YuO_eKJu6XpKb2FzlEdUd5jvw-jxCOMb-gorD&_nc_ohc=VaW_lEftH3UAX_jFDLu&_nc_ht=scontent.fbkk12-1.fna&oh=c397823d3af607fcc343023e4b79c0d2&oe=606F8D71"
            alt="Second slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/157222503_2900994203469600_2501216965730954207_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeEvwhf6QanV3LcHyqqA5X7_insvnTfzCMmKey-dN_MIyYV7U0-xKlT1V2vJy9AH7nsLZp_ijV18O7YuwYwAXjNm&_nc_ohc=Vqci8rqGq-EAX9UYMY7&_nc_ht=scontent.fbkk12-1.fna&oh=3efdfdd3a29857458ae2458c81031928&oe=606CFB64"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <!-- start product -->
    <!-- <div class="version-product">
      <span>SUMSUNG</span>
      <hr class="line" />
    </div>
    <div class="container">
      <div class="product" v-for="(items, index) in samSung" :key="index">
        <div class="product-card">
          <h2 class="name">{{ items.name }}</h2>
          <h3 class="version">{{ items.version }}</h3>
          <span class="price">฿ {{ items.price }}</span>
          <a class="popup-btn">Quick View</a>
          <img class="product-img" :src="items.img" alt="" />
        </div>
        <div class="popup-view">
          <div class="popup-card">
            <a><i class="fa fa-times close-btn"></i></a>
            <div class="product-img">
              <img :src="items.img" alt="" />
            </div>
            <div class="info">
              <h2>
                {{ items.name }}<br /><span>{{ items.version }}</span>
              </h2>
              <p>{{ items.about1 }}</p>
              <p>{{ items.about2 }}</p>
              <p>{{ items.about3 }}</p>
              <p>{{ items.about4 }}</p>
              <p>{{ items.about5 }}</p>
              <div class="select-con">
                <h5 class="text">Color :</h5>
                <select name="" id="" class="select">
                  <option value="" class="red">Red</option>
                  <option value="" class="blue">Blue</option>
                  <option value="" class="black">Black</option>
                </select>
              </div>
              <span class="price">฿ {{ items.price }}</span>
              <a></a>
              <input class="add-cart-btn" type="button" value="Add to Cart" @click="addcarts()">
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- IPHONE product start -->
    <div class="version-product">
      <span>IPHONE</span>
      <hr class="line" />
    </div>
    <div class="container">
      <div class="product">
        <div class="product-card">
          <h2 class="name">iphone</h2>
          <h3 class="version">iPad ใหม่ รุ่น Wifi</h3>
          <span class="price">฿ 8,990</span>
          <a class="popup-btn">Quick View</a>
          <img class="product-img" src="https://media-dtaconline.dtac.co.th/catalog/product/cache/e96373d1c57081d0b326a3dfa1f55e67/i/p/ipad_wi-fi_10.2_in_gold.png" alt="" />
        </div>
        <div class="popup-view">
          <div class="popup-card">
            <a><i class="fa fa-times close-btn"></i></a>
            <div class="product-img">
              <img src="https://media-dtaconline.dtac.co.th/catalog/product/cache/e96373d1c57081d0b326a3dfa1f55e67/i/p/ipad_wi-fi_10.2_in_gold.png" alt="" />
            </div>
            <div class="info">
              <h2>
                iphone<br /><span>iPad ใหม่ รุ่น Wifi</span>
              </h2>
              <p> จอภาพ Retina 10.2</p>
              <p>ชิพ A12 Bionic พร้อมสถาปัตยกรรม 64 บิต พร้อม โปรเซสเซอร์ร่วม M12 ในตัว</p>
              <p>Wi Fi (802.11a/b/g/n/ac), สองย่านความถี่ (2.4GHz และ 5GHz), HT80</p>
              <p>แบตเตอรี่ลิเธียมพอลิเมอร์ชนิดชาร์จซ้ำได้ภายในตัวเครื่อง 32.4 วัตต์ต่อชั่วโมง ท่องเว็บผ่าน Wi Fi หรือดูวิดีโอได้นานสูงสุด 10 ชั่วโมง</p>
              <p>หน่วยความจำ 	32GB </p>
              <div class="select-con">
                <h5 class="text">Color :</h5>
                <select name="" id="" class="select">
                  <option value="" class="red">Red</option>
                  <option value="" class="blue">Blue</option>
                  <option value="" class="black">Black</option>
                </select>
              </div>
              <span class="price">฿ 8,990</span>
              <input class="price" type="number" name="" v-model="updateipad">
              <input type='button' class="add-cart-btn" value="Add to Cart" @click="ip1m()">
              <!-- <span class="price">จำนวน {{ip1}} เครื่อง</span> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- OPPO product start -->
    <!-- <div class="version-product">
      <span>OPPO</span>
      <hr class="line" />
    </div>
    <div class="container">
      <div class="product" v-for="(items1, index1) in opPo" :key="index1">
        <div class="product-card">
          <h2 class="name">{{ items1.name }}</h2>
          <h3 class="version">{{ items1.version }}</h3>
          <span class="price">฿ {{ items1.price }}</span>
          <a class="popup-btn">Quick View</a>
          <img class="product-img" :src="items1.img" alt="" />
        </div>
        <div class="popup-view">
          <div class="popup-card">
            <a><i class="fa fa-times close-btn"></i></a>
            <div class="product-img">
              <img :src="items1.img" alt="" />
            </div>
            <div class="info">
              <h2>
                {{ items1.name }}<br /><span>{{ items1.version }}</span>
              </h2>
              <p>{{ items1.about1 }}</p>
              <p>{{ items1.about2 }}</p>
              <p>{{ items1.about3 }}</p>
              <p>{{ items1.about4 }}</p>
              <p>{{ items1.about5 }}</p>
              <div class="select-con">
                <h5 class="text">Color :</h5>
                <select name="" id="" class="select">
                  <option value="" class="red">Red</option>
                  <option value="" class="blue">Blue</option>
                  <option value="" class="black">Black</option>
                </select>
              </div>
              <span class="price">฿ {{ items1.price }}</span>
              <a href="" class="add-cart-btn">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- XIAOMI product start -->
    <!-- <div class="version-product">
      <span>XIAOMI</span>
      <hr class="line" />
    </div>
    <div class="container">
      <div class="product" v-for="(items, index2) in xiaoMi" :key="index2">
        <div class="product-card">
          <h2 class="name">{{ items.name }}</h2>
          <h3 class="version">{{ items.version }}</h3>
          <span class="price">฿ {{ items.price }}</span>
          <a class="popup-btn">Quick View</a>
          <img class="product-img" :src="items.img" alt="" />
        </div>
        <div class="popup-view">
          <div class="popup-card">
            <a><i class="fa fa-times close-btn"></i></a>
            <div class="product-img">
              <img :src="items.img" alt="" />
            </div>
            <div class="info">
              <h2>
                {{ items.name }}<br /><span>{{ items.version }}</span>
              </h2>
              <p>{{ items.about1 }}</p>
              <p>{{ items.about2 }}</p>
              <p>{{ items.about3 }}</p>
              <p>{{ items.about4 }}</p>
              <p>{{ items.about5 }}</p>
              <div class="select-con">
                <h5 class="text">Color :</h5>
                <select name="" id="" class="select">
                  <option value="" class="red">Red</option>
                  <option value="" class="blue">Blue</option>
                  <option value="" class="black">Black</option>
                </select>
              </div>
              <span class="price">฿ {{ items.price }}</span>
              <a href="" class="add-cart-btn">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import firebase from 'firebase/app'

import { mapGetters } from "vuex";
export default {
  data() {
    return {
      namee:null,
      updateipad:null,
      email:null,

    };
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },

  computed: {
    ...mapGetters(["ip1"]),
  },

    beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        // User is signed in.
        //ให้แสดง ชื่อ รูป e-mail
        this.namee = user.displayName
        this.email = user.email
        // this.photoUrl = user.photoURL
      } else {
        // No user is signed in.
        //กลับไปหน้า login
        this.$router.replace('/login')
      }
    })
  },

  methods: {
    ip1m(){
      this.$store.commit("ip1"); //vuex

      //cloud firebase
      const dataText = {
        idname:this.namee,
        name:'iphone',
        version: 'iPad ใหม่ รุ่น Wifi',
        countped: this.updateipad,
        Email: this.email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        price: 8990,
        img:'https://media-dtaconline.dtac.co.th/catalog/product/cache/e96373d1c57081d0b326a3dfa1f55e67/i/p/ipad_wi-fi_10.2_in_gold.png',
      };
      
      firebase.firestore().collection("IPhone").doc(this.namee).set(dataText)
      
      .then(() => {
          console.log("Document successfully written! -> MyText");
          location.reload();
          
        })
        .catch((error) =>  {
          console.error("Error writing document: ", error);
        });

    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide {
  overflow: hidden;
}
.version-product {
  margin-top: 5%;
}
.version-product span {
  padding: 0 100px;
  font-weight: 500;
  font-size: 20px;
  line-height: 10px;
}
.line {
  border: 1px solid black;
  width: 90%;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-content: center;
  justify-content: center;
  max-width: 80%;
  margin-top: 0%;
  font-family: "Poppins", sans-serif;
}
.product .product-card {
  z-index: 1;
  background: #1d212b;
  position: relative;
  width: 300px;
  height: 450px;
  margin: 40px;
  border-radius: 10px;
}
.product .product-card:before {
  content: "";
  background: rgba(255, 255, 255, 0.1);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.product .product-card .product-img {
  z-index: 2;
  position: absolute;
  max-width: 250px;
  height: 250px;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
}
.product .product-card .name {
  z-index: 3;
  color: white;
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 110px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.product .product-card .version {
  z-index: 3;
  color: white;
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 85px;
  letter-spacing: 1px;
  font-family: "Kanit", sans-serif;
  font-size: 20px;
}
.product .product-card .price {
  z-index: 3;
  color: white;
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 60px;
  font-size: 15px;
  font-weight: 600;
}
.product .product-card .popup-btn {
  z-index: 3;
  color: white;
  background: #555;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%);
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  padding: 10px 15px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
}
.product .popup-view {
  z-index: 3;
  background: rgba(255, 255, 255, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
}
.product .popup-view.active {
  opacity: 1;
  visibility: visible;
}
.product .popup-card {
  position: relative;
  display: flex;
  width: 800px;
  height: 500px;
  margin: 20px;
}
.product .popup-card .product-img {
  z-index: 3;
  background: #1d212b;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 90%;
  transform: translateY(25px);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.product .popup-card .product-img img {
  z-index: 3;
  position: relative;
  width: 270px;
  left: 0px;
  border-radius: 5px;
}
.product .popup-card .info {
  z-index: 3;
  background: rgb(255, 167, 4);
  display: flex;
  flex-direction: column;
  width: 55%;
  height: 100%;
  box-sizing: border-box;
  padding: 40px;
  border-radius: 10px;
}
.product .popup-card .close-btn {
  color: #555;
  z-index: 4;
  position: absolute;
  right: 0;
  font-size: 20px;
  margin: 20px;
  cursor: pointer;
}
.product .popup-card .info h2 {
  font-size: 30px;
  line-height: 20px;
  margin: 10px;
  font-family: "Kanit", sans-serif;
}
.product .popup-card .info h2 span {
  font-size: 15px;
  text-transform: none;
  letter-spacing: 2px;
}
.product .popup-card .info p {
  font-size: 12px;
  margin: 3px;
  color: black;
  font-weight: bold;
  font-family: "Kanit", sans-serif;
}
.select-con {
  display: flex;
}
.select {
  margin: 0 10px;
  width: 100px;
  height: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  border-radius: 5px;
  font-weight: bold;
}
.text {
  font-size: 15px;
  font-weight: 900;
}
.red {
  background-color: red;
  color: white;
}
.blue {
  background-color: blue;
  color: white;
}
.black {
  background-color: black;
  color: white;
}
.product .popup-card .info .price {
  font-size: 45px;
  font-weight: bold;
  margin: 10px;
}
.product .popup-card .info .add-cart-btn {
  color: #fff;
  background: #009dd2;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  margin: 10px;
  padding: 10px 50px;
  border-radius: 20px;
}
@media screen and (max-width: 1200px) {
  .product .product-card {
    width: 200px;
    height: 350px;
    margin: 40px;
  }
  .product .product-card .product-img {
    max-width: 200px;
    height: 150px;
    top: 27%;
  }
  .product .product-card .name {
    font-size: 25px;
  }
  .product .product-card .version {
    font-size: 20px;
  }
  .product .product-card .popup-btn {
    font-size: 9px;
    font-weight: 400;
  }
}
@media screen and (max-width: 992px) {
  .product .popup-card {
    flex-direction: column;
    width: 500px;
    height: auto;
  }
  .product .popup-card .product-img {
    z-index: 4;
    width: 100%;
    height: 200px;
    transform: translateY(0);
    border-bottom-left-radius: 0px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .product .popup-card .product-img img {
    left: inherit;
    width: 35%;
  }
  .product .popup-card .info {
    width: 100%;
    height: auto;
    padding: 20px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
  .product .popup-card .info h2 {
    margin: 20px 5px 5px 5px;
    font-size: 25px;
  }
  .product .popup-card .info h2 span {
    font-size: 10px;
  }
  .product .popup-card .info p {
    margin: 5px;
    font-size: 13px;
  }
  .product .popup-card .info .price {
    margin: 5px;
    font-size: 25px;
  }
  .product .popup-card .info .add-cart-btn {
    margin: 5px auto;
    padding: 5px 40px;
    font-size: 14px;
  }
  .product .popup-card .close-btn {
    z-index: 5;
    color: white;
  }
}
@media screen and (max-width: 768px) {
  .container {
    grid-template-columns: 1fr 1fr;
    align-content: center;
    justify-content: center;
    max-width: 80%;
    margin-top: 0%;
    font-family: "Poppins", sans-serif;
  }
}
@media screen and (max-width: 576px) {
  .product .product-card {
    width: 100px;
    height: 200px;
    margin: 40px;
  }
  .product .product-card .product-img {
    max-width: 70px;
    height: 70px;
    top: 23%;
  }
  .product .product-card .name {
    font-size: 15px;
    bottom: 80px;
  }
  .product .product-card .version {
    font-size: 10px;
    bottom: 50px;
  }
  .product .product-card .price {
    font-size: 10px;
    bottom: 37px;
  }
  .product .product-card .popup-btn {
    font-size: 4px;
    font-weight: 300;
    height: 20px;
    width: 65px;
  }
  .version-product span {
    padding: 0 15px;
    font-weight: 500;
    font-size: 15px;
    line-height: 0px;
  }
}
</style>
