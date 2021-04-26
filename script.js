$.getJSON("https://corona.lmao.ninja/v3/covid-19/countries/cambodia", function (
    data
) {

    console.log(data)
    $("#total-case").append(data.cases);
    $("#active-case").append(data.active);
    $("#deaths").append(data.deaths);
    $("#recovered").append(data.recovered);
    $("#today-case").append("+" + data.todayCases);
    $("#today-recover").append("+" + data.todayRecovered);
    $("#population").append(Intl.NumberFormat().format(data.population));
    $("#continent").append(data.continent);
    $("#lat").append(data.countryInfo.lat);
    $("#long").append(" " + data.countryInfo.long);

    //mobile
    $("#total-case-1").append(data.cases);
    $("#active-case-1").append(data.active);
    $("#deaths-1").append(data.deaths);
    $("#recovered-1").append(data.recovered);
    $("#today-case-1").append("+" + data.todayCases);
    $("#today-recover-1").append("+" + data.todayRecovered);
    $("#population-1").append(Intl.NumberFormat().format(data.population));
    $("#continent-1").append(data.continent);
    $("#lat-1").append(data.countryInfo.lat);
    $("#long-1").append(" " + data.countryInfo.long);
});