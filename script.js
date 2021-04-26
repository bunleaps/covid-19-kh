$.getJSON("https://corona.lmao.ninja/v3/covid-19/countries/cambodia", function (
    data
) {

    console.log(data)
    $("#total-case").append(data.cases);
    $("#active-case").append(data.active);
    $("#deaths").append(data.deaths);
    $("#recovered").append(data.recovered);
    $("#today-case").append(data.todayCases);
    $("#today-recover").append(data.todayRecovered);
});