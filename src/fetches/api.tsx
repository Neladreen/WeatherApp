export const KeyOpenCageData = process.env.KEY_OPENCAGEDATA;
export const KeyOpenWeatherMap = process.env.KEY_OPENWEATHERAPP;

export async function getWeatherWithLatAndLng(lat:string,lng:string) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${KeyOpenWeatherMap}&units=metric`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function getLatAndLng(cityName:string) {
    const res = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${cityName}&key=${KeyOpenCageData}&language=en`)
    
    
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()

  }

export async function getWeather(cityName :string){
    return await getLatAndLng(cityName)
    .then(res => getWeatherWithLatAndLng(res?.results[0].geometry?.lat,res?.results[0]?.geometry?.lng));
}
