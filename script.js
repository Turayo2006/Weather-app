
      const apiKey = "e0578e20dd2819a04e29fbc8dfb5499c";
      const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      const weatherIcon = document.querySelector(".weather-icon");
      
      
      async function checkWeather(city){
      
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        if(response.status == 404){
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
          
        }else{
        
          var data = await response.json();
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
      
      
      
      if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "https://i.postimg.cc/q7DG9DYW/clouds.png";
      } 
      else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "https://i.postimg.cc/qvLwGvGJ/clear.png";
      } 
      else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "https://i.postimg.cc/FRgHYw4B/rain.png";
      }
      else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "https://i.postimg.cc/BQfgNjsR/drizzle.png";
      }
      else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "https://i.postimg.cc/bwqp4Z0K/mist.png";
      }
        
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
      }
      
          
        }
        
        
      
      
      searchBtn.addEventListener("click", ()=>{
       checkWeather(searchBox.value);                  
                               
      })
      
