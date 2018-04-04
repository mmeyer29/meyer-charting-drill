const data = [{
    x: new Date("2014-01-01"),
    y: 73
},{
    x: new Date("2015-01-01"),
    y: 199
},{
    x: new Date("2016-01-02"),
    y: 395
}];

new Chart(document.querySelector("#fiber-chart > canvas").getContext("2d"), {
    type: "line",
    data: {
        datasets: [{
            label: "My Fiber Intake",
            data,
            borderColor: [
                "rgba(255, 159, 64, 1)"
            ],
            pointBackgroundColor: [
                "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Annual Number of Salads Eaten"
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Year"
                },
                type: "time",
                time: {
                    unit: "year",
                }
            }]
        }
    }
});
