<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Reports Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Reports Page</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-grid>
        <ion-row>
          <ion-col size="6">
            <ion-card style="margin:0; height: 100%">
              <ion-card-content>

                <ion-card-header>
                  <ion-card-title>Product Demand Report</ion-card-title>
                </ion-card-header>
                <Bar ref="barChart" id="my-chart-id" :data="chartData" />
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="6">
            <ion-card style="margin:0; height: 100%">
              <ion-card-content>
                <ion-card-title>Monthly Report</ion-card-title>
                <Line ref="lineChart" :options="lineOptions" :data="lineChartData" />
              </ion-card-content>

            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
  
<script>
/* eslint-disable */
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

import { Bar, Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, LineElement, PointElement)


export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,

    Bar, Line
  },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20, 12]
          },
          {
            label: 'Data Two',
            backgroundColor: '#fc3030',
            data: [99, 73, 5]
          }
        ]
      },
      lineChartData: {
        labels: ['January', 'February', 'March'],
        datasets: [
          {
            label: 'One',
            backgroundColor: '#f87979',
            borderColor: '#f87979',
            data: [40, 20, 12]
          },
          {
            label: 'Two',
            backgroundColor: '#fc3030',
            borderColor: '#fc3030',
            data: [99, 73, 5]
          }
        ],
      },
      lineOptions: {
        responsive: true,
        showAllTooltips: true,
        plugins: {
          filler: {
            propagate: false,
          },
          title: {
            display: true,
            text: (ctx) => {
              return 'Data of ' + ctx.chart.data.datasets[0].label + ' and ' + ctx.chart.data.datasets[1].label
            }
          },
          tooltip: {
            enabled: true,
          },
        },
        interaction: {
          intersect: false,
        },
      }
    }
  },
  methods: {
    showTooltips(chart){
      const tooltip = chart.tooltip;
      const chartArea = chart.chartArea;
      tooltip.setActiveElements([
        {
          datasetIndex: 0,
          index: 0,
        }, {
          datasetIndex: 1,
          index: 1,
        },{
          datasetIndex: 1,
          index: 0,
        }, {
          datasetIndex: 1,
          index: 0,
        },
      ],
        {
          x: (chartArea.left + chartArea.right) / 2,
          y: (chartArea.top + chartArea.bottom) / 2,
        });

      chart.update();
    }
  },
  created() {

  },
  mounted() {
    setTimeout(() => {
      let chartLine = this.$refs.lineChart.chart;
      let chartBar = this.$refs.barChart.chart;

      this.showTooltips(chartLine);
      this.showTooltips(chartBar);
      
    }, 2000);
  }
});
</script>
  
<style scoped>

</style>
  