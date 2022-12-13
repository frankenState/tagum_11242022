<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Login Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Login Page</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="container">
        <ion-grid>
          <ion-row>
            <ion-col offset="3" size="6">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>Use your email and password to login.</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  <ion-list>
                    <ion-item>
                      <ion-label position="stacked">Email</ion-label>
                      <ion-input v-model="email" type="email"></ion-input>
                    </ion-item>
                    <ion-item>
                      <ion-label position="stacked">Password</ion-label>
                      <ion-input v-model="password" type="password"></ion-input>
                    </ion-item>
                    <ion-button @click="login" mode="ios" expand="block">Login</ion-button>
                    <ion-button color="medium" @click="navigateTo('/register')" mode="ios" expand="block">Registration</ion-button>
                  </ion-list>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>
  
<script>
import { IonList, IonCard, IonLabel, IonGrid, IonRow, IonCol,
  IonButton, IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonList, IonCard, IonLabel, IonGrid, IonRow, IonCol, IonInput
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login(){
      console.log(this.email, this.password);
    },
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
  