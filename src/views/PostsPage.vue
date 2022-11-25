<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Posts</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <ion-grid>
        <ion-row>
          <ion-col size="10" offset="1">
            <ion-card>
              <ion-card-header>
                <ion-card-title>Card Title</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              </ion-card-header>

              <ion-card-content>
                Here's a small text description for the card content. Nothing more, nothing less.
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

    </ion-content>
  </ion-page>
</template>
    
<script>
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar
  },
  data() {
    return {
      api_endpoint: 'https://jsonplaceholder.typicode.com/posts?_limit=10'
    }
  }
});
</script>
    
<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
    