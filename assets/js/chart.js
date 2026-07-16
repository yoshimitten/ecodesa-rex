let jenisChart;
let caraChart;

function updateCharts(data){

    createJenisChart(data);

    createCaraChart(data);

}

function createJenisChart(data){

    const jenisCount = {};

    data.forEach(item => {

        jenisCount[item.jenis] =
            (jenisCount[item.jenis] || 0) + 1;

    });

    const labels = Object.keys(jenisCount);

    const values = Object.values(jenisCount);

    if(jenisChart){

        jenisChart.destroy();

    }

    const ctx = document
        .getElementById("jenisChart")
        .getContext("2d");

    jenisChart = new Chart(ctx, {

        type: "pie",

        data: {

            labels: labels,

            datasets: [{

                data: values

            }]

        }

    });

}

function createCaraChart(data){

    const caraCount = {};

    data.forEach(item => {

        caraCount[item.cara] =
            (caraCount[item.cara] || 0) + 1;

    });

    const labels = Object.keys(caraCount);

    const values = Object.values(caraCount);

    if(caraChart){

        caraChart.destroy();

    }

    const ctx = document
        .getElementById("caraChart")
        .getContext("2d");

    caraChart = new Chart(ctx, {

        type: "bar",

        data: {

            labels: labels,

            datasets: [{

                label: "Jumlah",

                data: values

            }]

        },

        options: {

            responsive: true,

            scales: {

                y: {

                    beginAtZero: true

                }

            }

        }

    });

}

