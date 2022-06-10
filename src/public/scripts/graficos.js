//Gráfico bar
let barGrafico = document.getElementById("barGrafico");
const config = {
  type: "line",
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
  data: {
    labels: [
      "Janeiro",
      "Feverreiro",
      "Marco",
      "Abril",
      "Maio",
      "Junho",
      "Julho ",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    datasets: [
      {
        label: "humanResources",
        data: [
          5400, 6900, 7200, 7100, 5600, 6010, 5000, 6000, 5600, 5000, 5750,
          5590,
        ],
        backgroundColor: [" #247BA0"],
        borderColor: " #0A2463",
        fill: true,
        order: 2,
      },
      {
        label: "Workload Needed",
        data: [
          6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500,
          6500,
        ],
        type: "line",
        borderColor: "#CCCC00",
        order: 1,
      },
      {
        label: "IT Limitation Internal and third parties",
        data: [
          5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500,
          5500,
        ],
        type: "line",
        borderColor: "#FB3640",
        order: 1,
      },
      {
        label: "IT Limitation only with internal resources",
        data: [
          2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500,
          2500,
        ],
        type: "line",
        borderColor: "#FB3640",
        order: 1,
      },
    ],
  },
};

let myGraph = new Chart(barGrafico, config);
//Gráfico bar

//Gráfico pie
let pieGrafico = document.getElementById("pieGrafico");
const dataPie = {
  labels: ["Projeto 1", "Projeto 2", "Projeto 3", "Projeto 4", "Projeto 5"],
  datasets: [
    {
      label: "Quantidade funcionários por projeto",
      data: [250, 50, 100, 100, 100],
      backgroundColor: [" #247BA0", " #605F5E", " #e53420", " #0A2463"],
      hoverOffset: 4,
    },
  ],
};

const configPie = {
  type: "pie",
  data: dataPie,
};

let myPieGrafico = new Chart(pieGrafico, configPie);
// Gráfico pie

let mixedGrafico = document.getElementById("mixedGrafico");
const confige = {
  type: "bar",
  data: {
    labels: [
      "Janeiro",
      "Feverreiro",
      "Marco",
      "Abril",
      "Maio",
      "Junho",
      "Julho ",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    datasets: [
      {
        label: "Horas/Projetos",
        data: [
          5400, 6900, 7200, 7100, 5500, 6000, 5000, 6000, 4500, 5000, 7000,
          6000,
        ],
        backgroundColor: [" #247BA0"],
      },
    ],
  },
};

let myGrapho = new Chart(mixedGrafico, confige);

let january = 0;
let february = 0;
let march = 0;
let april = 0;
let may = 0;
let june = 0;
let july = 0;
let august = 0;
let september = 0;
let october = 0;
let november = 0;
let december = 0;

let lineGrafico = document.getElementById("lineGrafico");

const labels = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

let dataProjects = [];
function generateDataProjects() {
  dataProjects = {
    labels: labels,
    datasets: [
      {
        label: "Quantidade de projetos",
        fill: true,
        backgroundColor: " #247BA0",
        borderColor: " #0A2463",
        data: [
          january,
          february,
          march,
          april,
          may,
          june,
          july,
          august,
          september,
          october,
          november,
          december,
        ],
      },
    ],
  };
  generateChart();
}

let myGraphy;
function generateChart() {
  myGraph = new Chart(lineGrafico, {
    type: "line",
    data: dataProjects,
    options: {},
  });
}

let ajax2 = new XMLHttpRequest();
ajax2.open("GET", "/projects", true);

ajax2.onreadystatechange = () => {
  if (ajax2.status === 200 && ajax2.readyState === 4) {
    let response = JSON.parse(ajax2.responseText);
    for (let i = 0; i < response.length; i++) {
      //let months = dataProjects.datasets[0].data;
      let month = parseInt(response[i].DataInicial.slice(5, 7));
      if (month === 1) {
        january++;
      }
      if (month === 2) {
        february++
      }

      if(month === 3){
        march++
      }

      if(month === 4){
        april++
      }

      if(month === 5){
        may++
      }

      if(month === 6){
        june++
      }

      if(month === 7){
        july++
      }

      if(month === 8){
        august++
      }

      if(month === 9){
        september++
      }

      if(month === 10){
        october++
      }

      if(month === 11){
        november++
      }

      if(month === 12){
        december++
      }
    }
    generateDataProjects();
  }
};

ajax2.send();
