const submitBtn = document.getElementById("submitBtn")
const cityName = document.getElementById("cityName")
const city_name = document.getElementById("city_name")
const temp_real = document.getElementById("temp_real")
const temp_status = document.getElementById("temp_status")

const data_hide = document.querySelector(".data_hide")

const getInfo = async (e) => {
  e.preventDefault()
  let cityVal = cityName.value
  if (cityVal === "") {
    city_name.innerText = `Plz write the name of city`
    data_hide.classList.add("data_hide")
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a6c66318190d6c4eb54ce419ee7d3211`
      const response = await fetch(url)
      const data = await response.json()
      const arrData = [data]

      city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`
      temp_real.innerHTML = arrData[0].main.temp
      //temp_status.innerHTML = arrData[0].weather[0].main

      const tempStatus = arrData[0].weather[0].main
      if (tempStatus == "Clear") {
        temp_status.innerHTML = "<i class='fa fa-sun' style='color: #eccc68'></i>"
      } else if (tempStatus == "Clouds") {
        temp_status.innerHTML = "<i class='fa fa-cloud' style='color: #f1f2f6'></i>"
      } else if (tempStatus == "Rain") {
        temp_status.innerHTML = "<i class='fa fa-cloud-rain' style='color: #a4b0be'></i>"
      } else {
        temp_status.innerHTML = "<i class='fa fa-sun' style='color: #eccc68'></i>"
      }
      console.log(data)
      data_hide.classList.remove("data_hide")
    } catch {
      city_name.innerHTML = `Plz enter the city name properly`
      data_hide.classList.add("data_hide")
    }
  }
}
submitBtn.addEventListener("click", getInfo)
