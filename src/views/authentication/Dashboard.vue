<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title>Dashboard Page</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Dashboard Page</ion-title>
          </ion-toolbar>
        </ion-header>
        <div id="container">
            <h1>Welcome to Dashboard!</h1>
        </div>
      </ion-content>
    </ion-page>
  </template>
    
  <script>
  import { 
    // IonList, IonCard, IonLabel, IonGrid, IonRow, IonCol,IonInput, IonButton,
     IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'LoginPage',
    components: {
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
    //   IonButton,
    //   IonList, IonCard, IonLabel, IonGrid, IonRow, IonCol, IonInput
    },
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      navigateTo(path) {
        this.$router.push({ 'path': path });
      }
    },
    created() {
      //   console.log("Parameter=> ", this.$route.params);
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
    