// Select all elements

const country_name_element = document.querySelector(".country .name");
const total_cases_element = document.querySelector(".total-cases .value");
const new_cases_element = document.querySelector(".total-cases .new-value");
const recovered_element = document.querySelector(".recovered .value");
const new_recovered_element = document.querySelector(".recovered .new-value");
const deaths_element = document.querySelector(".deaths .value");
const new_deaths_element = document.querySelector(".deaths .new-value");

const ctx = document.getElementById('axes-line-chart').getContext("2d");   //Chart


//App vaiables

let app_data = [],
cases_list = [],
recovered_list = [],
deaths_list = [],
dates = [];


//get users country code
let country_code = geoplugin_countryCode();
let user_country;
country_list.forEach(country => {
    if(country.code == country_code)
    {
        user_country = country.name;
    }
});


function fetchData(user_country){
    fetch(`https://covid19-monitor-pro.p.rapidapi.com/coronavirus/cases_by_days_by_country.php?country=${user_country}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid19-monitor-pro.p.rapidapi.com",
                "x-rapidapi-key": "7e269ec140msh8a5df9cfc21b4b4p1c1e3ejsn9aba26afc6e0"
            }
        }).then( response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
}

fetchData(user_country);

