<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Landing</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <ion-img :src="bgImage"></ion-img>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col offset="2" size="2">
            <ion-button color="dark" size="small" fill="outline"  router-link="/about">Sign In</ion-button>
          </ion-col>
          <ion-col offset="3" size="2">
            <ion-button color="medium" size="small" fill="outline" @click="$router.push({ name: 'SignUp' })">Sign Up</ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col offset="2" size="8">
            <ion-datetime></ion-datetime>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonImg, IonButton, IonContent, IonPage, IonDatetime } from '@ionic/vue';
import { defineComponent } from 'vue';
import bg from '../assets/imgs/bg-img.png';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonDatetime,
    IonImg
  },
  data() {
    return {
      bgImage: bg
    }
  }
});
</script>


