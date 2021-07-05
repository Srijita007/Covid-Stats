globalApiCall()
countryApiCall()

function globalApiCall(){
    var url = "https://api.covid19api.com/summary"

    $.get(url,function(data){

        $("#total_cases").html(`${data.Global.TotalConfirmed}`);
        $("#total_deaths").html(`${data.Global.TotalDeaths}`);
        $("#total_recovered").html(`${data.Global.TotalRecovered}`);

    });
}

function countryApiCall(){
    var url = "https://api.covid19api.com/summary"

    var country_data = ''

    let country_table = document.getElementById("country-wise-data")

    $.get(url,function(data){

        data.Countries.forEach(country => {
            country_data=`
            <tr>
            <td>${country.Country}</td>
            <td>${country.TotalConfirmed}</td>
            <td>${country.TotalDeaths}</td>
            <td>${country.TotalRecovered}</td>
            </tr>
            `
            country_table.innerHTML += country_data;
        })
    })
}

function refreshData(){
    $("#total_cases").empty();
    $("#total_deaths").empty();
    $("#total_recovered").empty();
    $("#country-wise-data").empty();
    globalApiCall();
    countryApiCall()

}


// $('#search_input').on('keyup', function(){
//     let country_table = document.getElementById("country-wise-data")
//     var input = $(this).val();
//     var searchedData = searchTable(input, country_table)

// })

// function searchTable(input, country_table){
//     var filterData = [];
//     for(let i=0;i<country_table.length;i++){
//         input = input.toLowerCase();
//         var name = country_table[i].toLowerCase();

//         if(name.includes(input)){
//             filterData.push(data[i])
//         }
//     }
// }






