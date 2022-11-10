
// function out1(){
// var results= [
//     mo=document.getElementById("in1").value, 
//     tu=document.getElementById("in2").value, 

//     we=document.getElementById("in3").value, 

//     th=document.getElementById("in4").value, 

//     fr=document.getElementById("in5").value, 
// ];
// myChart.data.datasets[0].data.push(results);
// myChart.update();
// }
function out1(){

   var mo=document.getElementById("in1").value;
   var tu=document.getElementById("in2").value; 
   var we=document.getElementById("in3").value;
   var th=document.getElementById("in4").value;
   var fr=document.getElementById("in5").value;

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [{
            label: '# of Votes',
            data: [mo,tu,we,th,fr],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}

function out2(){

    var mo=document.getElementById("in1").value;
    var tu=document.getElementById("in2").value; 
    var we=document.getElementById("in3").value;
    var th=document.getElementById("in4").value;
    var fr=document.getElementById("in5").value;
 
 const ctx = document.getElementById('myChart2').getContext('2d');
 const myChart2 = new Chart(ctx, {
     type: 'line',
     data: {
         labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
         datasets: [{
             label: '# of Votes',
             data: [mo,tu,we,th,fr],
             backgroundColor: [
                 'rgba(255, 99, 132, 0.2)',
                 'rgba(54, 162, 235, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(75, 192, 192, 0.2)',
                 'rgba(153, 102, 255, 0.2)',
                 'rgba(255, 159, 64, 0.2)'
             ],
             borderColor: [
                 'rgba(255, 99, 132, 1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
                 'rgba(153, 102, 255, 1)',
                 'rgba(255, 159, 64, 1)'
             ],
             borderWidth: 1
         }]
     },
     options: {
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
 });
 }

 function out3(){

    var mo=document.getElementById("in1").value;
    var tu=document.getElementById("in2").value; 
    var we=document.getElementById("in3").value;
    var th=document.getElementById("in4").value;
    var fr=document.getElementById("in5").value;
 
 const ctx = document.getElementById('myChart3').getContext('2d');
 const myChart3 = new Chart(ctx, {
     type: 'radar',
     data: {
         labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
         datasets: [{
             label: '# of Votes',
             data: [mo,tu,we,th,fr],
             backgroundColor: [
                 'rgba(255, 99, 132, 0.2)',
                 'rgba(54, 162, 235, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(75, 192, 192, 0.2)',
                 'rgba(153, 102, 255, 0.2)',
                 'rgba(255, 159, 64, 0.2)'
             ],
             borderColor: [
                 'rgba(255, 99, 132, 1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
                 'rgba(153, 102, 255, 1)',
                 'rgba(255, 159, 64, 1)'
             ],
             borderWidth: 1
         }]
     },
     options: {
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
 });
 }

 function out4(){

    var mo=document.getElementById("in1").value;
    var tu=document.getElementById("in2").value; 
    var we=document.getElementById("in3").value;
    var th=document.getElementById("in4").value;
    var fr=document.getElementById("in5").value;
 
 const ctx = document.getElementById('myChart4').getContext('2d');
 const myChart4 = new Chart(ctx, {
     type: 'doughnut',
     data: {
         labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
         datasets: [{
             label: '# of Votes',
             data: [mo,tu,we,th,fr],
             backgroundColor: [
                 'rgba(255, 99, 132, 0.2)',
                 'rgba(54, 162, 235, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(75, 192, 192, 0.2)',
                 'rgba(153, 102, 255, 0.2)',
                 'rgba(255, 159, 64, 0.2)'
             ],
             borderColor: [
                 'rgba(255, 99, 132, 1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
                 'rgba(153, 102, 255, 1)',
                 'rgba(255, 159, 64, 1)'
             ],
             borderWidth: 1
         }]
     },
     options: {
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
 });
 }

 function out5(){

    var mo=document.getElementById("in1").value;
    var tu=document.getElementById("in2").value; 
    var we=document.getElementById("in3").value;
    var th=document.getElementById("in4").value;
    var fr=document.getElementById("in5").value;
 
 const ctx = document.getElementById('myChart5').getContext('2d');
 const myChart5 = new Chart(ctx, {
     type: 'polarArea',
     data: {
         labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
         datasets: [{
             label: '# of Votes',
             data: [mo,tu,we,th,fr],
             backgroundColor: [
                 'rgba(255, 99, 132, 0.2)',
                 'rgba(54, 162, 235, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(75, 192, 192, 0.2)',
                 'rgba(153, 102, 255, 0.2)',
                 'rgba(255, 159, 64, 0.2)'
             ],
             borderColor: [
                 'rgba(255, 99, 132, 1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
                 'rgba(153, 102, 255, 1)',
                 'rgba(255, 159, 64, 1)'
             ],
             borderWidth: 1
         }]
     },
     options: {
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
 });
 }