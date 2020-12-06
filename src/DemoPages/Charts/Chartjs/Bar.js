import {Bar} from 'vue-chartjs'

export default {
  extends: Bar,
  mounted() {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'root',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          borderCapStyle: 'round',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Khasanboev',
          backgroundColor: 'rgb(108, 195, 213)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgb(159, 213, 224)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          borderCapStyle: 'round',
          data: [10, 20, 20, 30, 40, 50, 1]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})

  }
}
