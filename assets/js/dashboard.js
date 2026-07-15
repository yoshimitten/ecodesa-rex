async function loadData() {

    const response = await fetch("assets/data/sample.json");

    const data = await response.json();

    updateCards(data);

    updateTable(data);

}

function updateCards(data){

    // Total responden
    document.getElementById("totalResponden").textContent = data.length;

    // Persentase memilah
    const pilah = data.filter(item => item.pilah === "Ya");

    const persen = ((pilah.length / data.length) * 100).toFixed(0);

    document.getElementById("pilah").textContent = persen + "%";

    // Jenis sampah terbanyak
    const jumlahJenis = {};

    data.forEach(item => {

        jumlahJenis[item.jenis] = (jumlahJenis[item.jenis] || 0) + 1;

    });

    const terbesar = Object.keys(jumlahJenis).reduce((a,b)=>

        jumlahJenis[a] > jumlahJenis[b] ? a : b

    );

    document.getElementById("jenis").textContent = terbesar;

    // Update terakhir
    document.getElementById("update").textContent =
        new Date().toLocaleDateString("id-ID");

}

function updateTable(data){

    const table = document.getElementById("tableData");

    table.innerHTML = "";

    data.forEach(item => {

        table.innerHTML += `

        <tr>

            <td>${item.rt}</td>

            <td>${item.jenis}</td>

            <td>${item.pilah}</td>

            <td>${item.cara}</td>

        </tr>

        `;

    });

}

loadData();