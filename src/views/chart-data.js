const planetChartData = {
    type: 'bar',
    data: {
      labels: ['Mercury', 'Venus', 'Earth'],
      datasets: [
        { // one line graph
          label: 'Number of Moons',
          data: [10, 20, 30],
          backgroundColor: [
            '#E8074B', // Blue
            'rgba(54,73,53)',
            'rgba(54,73,120)',
            'rgba(54,73,93)',
            'rgba(54,73,93)',
            'rgba(54,73,93)',
            'rgba(54,73,93)',
            'rgba(54,73,93)'
          ],
          borderColor: [
            '#E8074B',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
          ],
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            padding: 25,
          }
        }]
      },
      legend: {
        labels: {
            fontColor: 'white'
        }
    }
    }
  }
  
  export default planetChartData;