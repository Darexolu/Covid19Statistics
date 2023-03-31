$(document).ready(function () {
    $('#example').DataTable();
});

let newConfirmedStats= document.querySelector(".ncStats");
let totalConfirmedStats= document.querySelector(".tcStats");
let newDeathStats = document.querySelector(".NDStats");
let totalDeathStats = document.querySelector(".TDStats");
let newRecoveredStats = document.querySelector(".NRStats");
let totalRecoveredStats = document.querySelector(".TRStats");
let tableBody = document.querySelector("#tableBody");




document.addEventListener("DOMContentLoaded", displayCovidStats)
function displayCovidStats(){
    fetch("https://api.covid19api.com/summary")
    .then((response) => response.json())
    .then((data) =>{
        newConfirmedStats.innerHTML = data.Global.NewConfirmed.toLocaleString();
        totalConfirmedStats.innerHTML = data.Global.TotalConfirmed.toLocaleString();
        newDeathStats.innerHTML = data.Global.NewDeaths.toLocaleString();
        totalDeathStats.innerHTML = data.Global.TotalDeaths.toLocaleString();
        newRecoveredStats.innerHTML = data.Global.NewRecovered.toLocaleString();
        totalRecoveredStats.innerHTML = data.Global.TotalRecovered.toLocaleString();  

 for (let i = 0; i < data.Countries.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${data.Countries[i].Country}</td>
    <td>${data.Countries[i].CountryCode}</td>
    <td>${data.Countries[i].Slug}</td>
    <td>${data.Countries[i].NewConfirmed}</td>
    <td>${data.Countries[i].TotalConfirmed}</td>
    <td>${data.Countries[i].NewDeaths}</td>
    <td>${data.Countries[i].TotalDeaths}</td>
    <td>${data.Countries[i].TotalRecovered}</td>
    <td>${data.Countries[i].Date}</td>`
    tableBody.appendChild(tr); 
 }
})
 

.catch((error) => console.log(`error ${error}`));

}