<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title>Vuex Posts</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Vuex Posts</ion-title>
          </ion-toolbar>
        </ion-header>
        <div id="container">
          <h1>Welcome!</h1>
          <h2 
            v-for="post in posts" 
            :key="post.id"
          >{{ post.title }}</h2>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { mapActions, mapGetters } from "vuex";
  
  export default defineComponent({
    name: 'HomePage',
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
    //   IonButton
    },
    methods: {
        ...mapActions('posts', [
          'fetchPosts',
        ]),
        navigateTo(path){
            this.$router.push({'path': path});
        }
    },
    computed: {
      ...mapGetters('posts', {
        posts: 'getPosts'
      }),
    },
    created() {
     //   console.log("Parameter=> ", this.$route.params);
     this.fetchPosts()
      .then(() => console.log("Line 56=>", this.posts))

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
  