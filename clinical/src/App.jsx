
var dataAll = []


  

async function lineChart(){
   await getData()

let ctx = document.getElementById("myChart").getContext('2d');

let chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: dataAll,
    datasets: [{
      label: 'Blood Pressure',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

}

lineChart()

// fetch data


async function getData(){

    let username = 'coalition';
    let password = 'skills-test';
    let auth = btoa(`${username}:${password}`);
    

const apiUrl = 'https://fedskillstest.coalitiontechnologies.workers.dev'

const response = await fetch(apiUrl,{
headers:{

    'Authorization': `Basic ${auth}`

}



})
const lineChart = await response.json()
 
console.log(lineChart[3]);



 dataAll = lineChart[3].diagnosis_history[0].month


 console.log(dataAll);



}

