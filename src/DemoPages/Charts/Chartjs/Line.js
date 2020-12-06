import {Line} from 'vue-chartjs'

export default {
  props: {
    data: Array,
    color: String
  },
  extends: Line,
  watch: {
    data(newValue) {
      if(newValue)
        this.render()
    }
  },
  methods: {
    render() {
      this.renderChart({
        labels: ['2016', '2017', '2018', '2019', '2020'],
        datasets: [
          {
            label: 'Tashkent',
            fill: false,
            lineTension: 0.1,
            backgroundColor: this.color,
            borderColor: this.color,
            borderCapStyle: 'round',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: this.color,
            pointBackgroundColor: '#ffffff',
            pointBorderWidth: 2,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: this.color,
            pointHoverBorderColor: this.color,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.data
          },
        ]
      }, {responsive: true, maintainAspectRatio: false})
  
    }
  },
  mounted() {
    this.render()
  }
}
