var xValues = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        new Chart("myChart", {
            type: "line",
            data: {
                labels: xValues,
                datasets: [{
                    data: [500, 300, 400, 600, 800, 400, 200, 500, 900, 1000, 600, 500],
                    borderColor: "red",
                    fill: false
                }, {
                    data: [300, 500, 400, 600, 350, 260, 200, 700, 800, 720, 730, 200],
                    borderColor: "blue",
                    fill: false
                }, {
                    data: [200, 250, 700, 600, 250, 460, 600, 500, 800, 320, 430, 200],
                    borderColor: "pink",
                    fill: false
                }]
            },
            options: {
                legend: { display: false }
            }
        });