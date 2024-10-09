const sidebar = document.getElementById("sidebar");
const toggler = document.getElementById("sidebar-toggle");
const userValue = document.querySelector(".userValue");
const ordersValue = document.querySelector(".ordersValue");
const ordersValueIcon = document.querySelector(".top-icon2");


toggler.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

const valueIcon = document.querySelector(".top-icon");
let currentUserValue = parseInt(userValue.textContent);
let currentOrdersValue = parseInt(ordersValue.textContent);
function updateUsers() {
  const randomInterval = Math.floor(Math.random() * 2500) + 500;
  const isIncreasing = Math.random() > 0.5;
  const change = Math.floor(Math.random() * 20) + 1;
  if (isIncreasing) {
    currentUserValue += change;
    userValue.textContent = currentUserValue;
    userValue.classList.add("up");
    userValue.classList.remove("down");
    valueIcon.classList.add("up");
    valueIcon.classList.remove("down");
  } else {
    currentUserValue -= change;
    userValue.textContent = currentUserValue;
    userValue.classList.add("down");
    userValue.classList.remove("up");
    valueIcon.classList.add("down");
    valueIcon.classList.remove("up");
  }
  setTimeout(updateUsers, randomInterval);
}
updateUsers();

function updateOrders() {
  const change = Math.floor(Math.random() * 20) + 1;
  const randomInterval = Math.floor(Math.random() * 2500) + 500;
  currentOrdersValue += change;
  ordersValue.textContent = currentOrdersValue;
  ordersValue.classList.add("up");
  ordersValueIcon.classList.add("up");
  setTimeout(() => {
    ordersValue.classList.remove("up");
    ordersValueIcon.classList.remove("up");
  }, 1000);

  setTimeout(updateOrders, randomInterval);
}
updateOrders();

// charts

var options1 = {
  series: [44, 55, 13, 33],
  chart: {
    width: 380,
    type: 'donut',
    toolbar: {
      show: false
    },
    align: 'center',
    verticalAlign: 'middle',
  },
  labels: ['Breakfast', 'Lunch', 'Dinner', 'Snacks'],
  dataLabels: {
    enabled: true, 
    formatter: function (val, opts) {
      return opts.w.config.series[opts.seriesIndex] + '%'; 
    },
    style: {
      fontSize: '14px',
      fontWeight: 'regular',
      colors: ['#000']
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        show: false 
      }
    }
  }],
  legend: {
    show: false 
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true, 
          total: {
            show: true,
            label: 'Recipe Variation',
            fontSize: '16px',
            fontWeight: 'regular'
          }
        }
      }
    }
  }
};


var options2 = {
  series: [
    {
      name: "Users",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Recipes",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 350,
    type: "area",
    zoom: {
      enabled: false,
    },
    toolbar: { show:false },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  legend:{
    show:false,
  },
  xaxis: {
    axisBorder: {
      show: false // Hides the axis border (line)
    },
    axisTicks: {
      show: false 
    },
    labels: {
      show: false
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false
    }
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  grid: {
    show: false 
  }
,

  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var options3 = {
  series: [{
  name: 'PRODUCT A',
  data: [44, 55, 41, 67]
}, {
  name: 'PRODUCT B',
  data: [13, 23, 20, 8, 13]
}, {
  name: 'PRODUCT C',
  data: [11, 17, 15, 15, 21]
}, ],
  chart: {
  type: 'bar',
  height: 300,
  stacked: true,
  toolbar: {
    show: false
  },
  zoom: {
    enabled: false
  }
},
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
      position: 'bottom',
      offsetX: -10,
      offsetY: 0
    }
  }
}],
plotOptions: {
  bar: {
    horizontal: false,
    borderRadius: 10,
    borderRadiusApplication: 'end', 
    borderRadiusWhenStacked: 'last',
    dataLabels: {
      total: {
        enabled: true,
        style: {
          fontSize: '13px',
          fontWeight: 900
        }
      }
    }
  },
},
xaxis: {
  type: 'datetime',
  categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
    '01/05/2011 GMT'
  ],
},
legend: {
  position: 'right',
  offsetY: 40,
  show:false,

},
fill: {
  opacity: 1
},
grid: {
  show: false 
}

};

var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
chart3.render();


var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
chart1.render();

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();


const alvin = {...chart1, Alvin: 12}

