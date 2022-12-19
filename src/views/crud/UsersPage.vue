<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Users Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Users Page</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-grid>
        <ion-row>
          <ion-col offset="1" size="10">
            <h1>Welcome to Users</h1>
          </ion-col>
          <ion-col offset="1" size="10">
            <ion-accordion-group>
              <ion-accordion v-for="user in users" :key="user.id" :value="user.id">
                <ion-item slot="header" color="light">
                  <ion-label>{{ `${user.first_name} ${user.last_name}` }}</ion-label>
                  <ion-badge fill="outline" color="primary">{{ user.grades.length }}</ion-badge>
                </ion-item>
                <div class="ion-padding" slot="content">
                  <ion-button size="small" @click="$router.push({
                    name: 'NewGradePage',
                    params: { 'user_id': user.id }
                  })">New Grade</ion-button>
                  <table width="100%" v-if="user.grades.length > 0">
                    <thead style="background-color:#f4f5f8">
                      <tr>
                        <th style="padding: 10px 0 10px 0">Subject</th>
                        <th style="padding: 10px 0 10px 0">Grade</th>
                        <th style="padding: 10px 0 10px 0">Remarks</th>
                        <th style="padding: 10px 0 10px 0">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="grade in user.grades" :key="grade.id">
                        <td style="padding: 5px 0 5px 0">{{ grade.subject }}</td>
                        <td style="text-align:center;padding: 5px 0 5px 0">{{ grade.grade }}</td>
                        <td style="text-align:center;padding: 5px 0 5px 0">{{ grade.remarks }}</td>
                        <td style="text-align:center;padding: 5px 0 5px 0">
                          <ion-button size="small" color="light">
                            <ion-icon slot="icon-only" :icon="createOutline"></ion-icon>
                          </ion-button>
                          <ion-button size="small" color="warning">
                            <ion-icon slot="icon-only" :icon="trashBinOutline"></ion-icon>
                          </ion-button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <small v-else>No grades found.</small>
                </div>
              </ion-accordion>
            </ion-accordion-group>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
  
<script>
import {
  // accordion
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonBadge,
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import { createOutline, trashBinOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'UsersPage',
  data() {
    return {
      createOutline,
      trashBinOutline
    }
  },
  components: {
    IonButton,
    IonIcon,
    IonBadge,
    IonAccordion,
    IonAccordionGroup,
    IonItem,
    IonLabel,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    //   IonButton
  },
  computed: {
    ...mapGetters('users', {
      users: 'getUsers',
    }),
  },
  methods: {
    ...mapActions('users', [
      'fetchUsers'
    ]),
    navigateTo(path) {
      this.$router.push({ 'path': path });
    }
  },
  created() {
    //   console.log("Parameter=> ", this.$route.params);
    this.fetchUsers();
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
  