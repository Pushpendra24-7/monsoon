const cityName = document.getElementById("city-name");
const cityTemp = document.getElementById("city-temp");
const realFeel = document.getElementById("real-feel");
const cityTime = document.getElementById("city-time");
const button = document.getElementById("searchbtn");
const input = document.getElementById("usercityname");


async function getdata (citynam){
    const promis = await fetch(
       `http://api.weatherapi.com/v1/current.json?key=70085dc2cc8e4330bbd50047242905&q=${citynam}&aqi=yes `
    );

    return await promis.json();
}

button.addEventListener("click" , async () => {
    const value = input.value;
    const result =  await getdata(value);
    cityName.innerText = `${result.location.name} , ${result.location.region} - ${result.location.country}`
    cityTemp.innerText = result.current.temp_c + "\u00B0C";
    cityTime.innerText = result.location.localtime;
    realFeel.innerText = result.current.condition.text;
   
});