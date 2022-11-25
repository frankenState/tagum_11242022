<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Posts</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">

      <ion-grid>
        <ion-row 
          v-for="post in posts"
          :key="post.id"
        >
          <ion-col size="10" offset="1">
            <ion-card>
              <ion-card-header>
                <ion-card-title>{{ post.title }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                {{ post.body }}
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

    </ion-content>
  </ion-page>
</template>
    
<script>
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from "axios";

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  },
  data() {
    return {
      api_endpoint: 'https://jsonplaceholder.typicode.com/posts?_limit=10',
      posts: [],
    }
  },
  methods: {
    async getPosts() {
      let resp = await axios.get(this.api_endpoint);
      console.log("Response=> ", resp);
      this.posts = resp.data;
    }
  },
  created() {
    this.getPosts();
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
    