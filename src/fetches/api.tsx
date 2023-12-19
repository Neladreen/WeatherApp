export const KeyOpenWeatherMap = process.env.KEY_OPENWEATHERAPP;

export async function getWeatherWithLatAndLng(lat:string,lng:string) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${KeyOpenWeatherMap}&units=metric`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function getLatAndLng(cityName:string) {
    const res = await fetch(`
    http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${KeyOpenWeatherMap}`)
    
    
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()

  }

export async function getWeather(cityName :string){
    const cityInformations = await getLatAndLng(cityName)
    const weatherInformations= await getWeatherWithLatAndLng(cityInformations[0].lat,cityInformations[0].lon);
    
    return {cityInformations,weatherInformations}
}
